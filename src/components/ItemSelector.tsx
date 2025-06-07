
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useMenu } from '@/context/MenuContext';
import { useOrder } from '@/context/OrderContext';
import { toast } from 'sonner';

interface OrderItem {
  name: string;
  qty: number;
  note?: string;
  price: number;
}

const ItemSelector = () => {
  const { todaysMenu } = useMenu();
  const { placeOrder } = useOrder();
  const navigate = useNavigate();
  
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});

  if (!todaysMenu || todaysMenu.items.length === 0) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-medium text-gray-700">No menu available today</h3>
        <p className="text-gray-500 mt-2">Please check back later.</p>
        <Button onClick={() => navigate('/dashboard')} className="mt-4">
          Return to Dashboard
        </Button>
      </div>
    );
  }

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));
    
    // Initialize quantity to 1 when selecting an item
    if (checked && !quantities[itemId]) {
      setQuantities(prev => ({
        ...prev,
        [itemId]: 1
      }));
    }
  };

  const handleQuantityChange = (itemId: string, value: number) => {
    // Ensure quantity is between 1 and 10
    const validValue = Math.max(1, Math.min(10, value));
    
    setQuantities(prev => ({
      ...prev,
      [itemId]: validValue
    }));
  };

  const handleNoteChange = (itemId: string, note: string) => {
    setNotes(prev => ({
      ...prev,
      [itemId]: note
    }));
  };

  const handleSubmit = () => {
    const selectedItemIds = Object.keys(selectedItems).filter(id => selectedItems[id]);
    
    if (selectedItemIds.length === 0) {
      toast.error("Please select at least one item");
      return;
    }
    
    const orderItems: OrderItem[] = selectedItemIds.map(id => {
      const menuItem = todaysMenu.items.find(item => item.id === id);
      if (!menuItem) return null;
      
      return {
        name: menuItem.name,
        qty: quantities[id] || 1,
        note: notes[id] || "",
        price: menuItem.price
      };
    }).filter(Boolean) as OrderItem[];
    
    placeOrder(orderItems);
    toast.success("Order placed successfully!");
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Select Your Items</h2>
        <p className="text-gray-600">Choose the items you want for today's meal</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-6">
        {todaysMenu.items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="bg-gray-50 p-4 flex flex-row items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id={`item-${item.id}`}
                  checked={!!selectedItems[item.id]}
                  onCheckedChange={(checked) => handleCheckboxChange(item.id, !!checked)}
                />
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </div>
              <div className="text-brand-orange font-medium">₹{item.price}</div>
            </CardHeader>
            {selectedItems[item.id] && (
              <CardContent className="p-4 space-y-4">
                <div>
                  <Label htmlFor={`qty-${item.id}`}>Quantity</Label>
                  <Input 
                    id={`qty-${item.id}`}
                    type="number" 
                    min={1}
                    max={10}
                    value={quantities[item.id] || 1}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                    className="w-full max-w-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor={`note-${item.id}`}>Special Instructions (optional)</Label>
                  <Textarea 
                    id={`note-${item.id}`}
                    placeholder="E.g., Less spicy, no onions, etc."
                    value={notes[item.id] || ""}
                    onChange={(e) => handleNoteChange(item.id, e.target.value)}
                    className="w-full"
                  />
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-8">
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="bg-brand-orange hover:bg-brand-brown">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default ItemSelector;
