
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Json } from '@/integrations/supabase/types';

interface OrderItem {
  name: string;
  qty: number;
  note?: string;
  price: number;
}

interface Order {
  id: string;
  userId: string;
  date: string;
  items: OrderItem[];
}

interface OrderContextType {
  todaysOrder: Order | null;
  allOrders: Order[];
  loading: boolean;
  placeOrder: (items: OrderItem[]) => void;
  fetchAllOrders: () => Promise<Order[]>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [todaysOrder, setTodaysOrder] = useState<Order | null>(null);
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load today's order when user changes
  useEffect(() => {
    if (user) {
      loadTodaysOrder();
      loadAllOrders();
    } else {
      setTodaysOrder(null);
      setAllOrders([]);
    }
    setLoading(false);
  }, [user]);

  // Parse OrderItems from Supabase JSON format
  const parseOrderItems = (items: Json[]): OrderItem[] => {
    return items.map((item) => {
      if (typeof item === 'object' && item !== null) {
        return {
          name: (item as any).name || 'Unknown Item',
          qty: Number((item as any).qty) || 1,
          note: (item as any).note,
          price: Number((item as any).price) || 0
        };
      }
      return {
        name: 'Unknown Item',
        qty: 1,
        price: 0
      };
    });
  };

  // Load today's order from Supabase
  const loadTodaysOrder = async () => {
    if (!user) return;
    
    try {
      // Get today's date in YYYY-MM-DD format
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      
      // Check if user has already placed an order today
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .eq('date', formattedDate)
        .single();
        
      if (error && error.code !== 'PGRST116') {
        // PGRST116 is "no rows returned" error, which is expected if no order for today
        console.error('Error loading today\'s order:', error);
      }
      
      // If order found, set it
      if (data) {
        setTodaysOrder({
          id: data.id,
          userId: data.user_id,
          date: data.date,
          items: Array.isArray(data.selected_items) ? parseOrderItems(data.selected_items as Json[]) : []
        });
      } else {
        setTodaysOrder(null);
      }
    } catch (error) {
      console.error('Error loading today\'s order:', error);
    }
  };
  
  // Load all orders for the user
  const loadAllOrders = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false });
        
      if (error) {
        console.error('Error loading all orders:', error);
        return;
      }
      
      if (data) {
        const orders = data.map(order => ({
          id: order.id,
          userId: order.user_id,
          date: order.date,
          items: Array.isArray(order.selected_items) ? parseOrderItems(order.selected_items as Json[]) : []
        }));
        
        setAllOrders(orders);
      }
    } catch (error) {
      console.error('Error loading all orders:', error);
    }
  };

  // Place a new order
  const placeOrder = async (items: OrderItem[]) => {
    if (!user) return;
    
    try {
      // Get today's date in YYYY-MM-DD format
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      
      // Create new order
      const { data, error } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          date: formattedDate,
          selected_items: items as unknown as Json
        })
        .select()
        .single();
        
      if (error) {
        console.error('Error placing order:', error);
        toast.error('Failed to place order');
        return;
      }
      
      // Create order object from returned data
      const newOrder: Order = {
        id: data.id,
        userId: data.user_id,
        date: data.date,
        items: Array.isArray(data.selected_items) ? parseOrderItems(data.selected_items as Json[]) : []
      };
      
      // Update state
      setTodaysOrder(newOrder);
      setAllOrders(prev => [newOrder, ...prev]);
      
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order');
    }
  };

  // Fetch all orders (for admin)
  const fetchAllOrders = async (): Promise<Order[]> => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          profiles:user_id (
            name,
            email
          )
        `)
        .order('date', { ascending: false });
        
      if (error) {
        console.error('Error fetching all orders:', error);
        return [];
      }
      
      if (data) {
        return data.map(order => ({
          id: order.id,
          userId: order.user_id,
          date: order.date,
          items: Array.isArray(order.selected_items) ? parseOrderItems(order.selected_items as Json[]) : []
        }));
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching all orders:', error);
      return [];
    }
  };

  return (
    <OrderContext.Provider 
      value={{ 
        todaysOrder, 
        allOrders, 
        loading, 
        placeOrder, 
        fetchAllOrders 
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
