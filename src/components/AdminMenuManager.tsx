
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useMenu } from '@/context/MenuContext';
import { toast } from 'sonner';

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

interface NewMenuItem {
  name: string;
  price: number;
}

const AdminMenuManager = () => {
  const { todaysMenu, setTodaysMenu } = useMenu();
  
  const [items, setItems] = useState<MenuItem[]>(todaysMenu?.items || []);
  const [newItem, setNewItem] = useState<NewMenuItem>({ name: '', price: 0 });

  const handleAddItem = () => {
    if (!newItem.name || newItem.price <= 0) {
      toast.error("Please enter a name and valid price");
      return;
    }

    const item: MenuItem = {
      id: `item-${Date.now()}`,
      name: newItem.name,
      price: newItem.price
    };

    setItems([...items, item]);
    setNewItem({ name: '', price: 0 });
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSaveMenu = () => {
    const menu = {
      id: todaysMenu?.id || `menu-${Date.now()}`,
      date: new Date().toISOString(),
      items
    };

    setTodaysMenu(menu);
    toast.success("Menu updated successfully!");
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Today's Menu Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Add new item form */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Add New Menu Item</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Item Name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Price"
                  min="0"
                  value={newItem.price || ''}
                  onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                />
              </div>
            </div>
            <Button onClick={handleAddItem} className="w-full md:w-auto">
              Add Item
            </Button>
          </div>

          {/* Current items list */}
          <div>
            <h3 className="text-lg font-medium mb-4">Current Menu Items</h3>
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No items in the menu yet</p>
            ) : (
              <div className="space-y-2">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                  >
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-2 text-brand-orange">₹{item.price}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Save menu button */}
          <Button 
            onClick={handleSaveMenu}
            className="w-full bg-brand-green hover:bg-green-700"
            disabled={items.length === 0}
          >
            Save Today's Menu
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminMenuManager;
