
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminMenuManager from '@/components/AdminMenuManager';
import AdminOrdersList from '@/components/AdminOrdersList';
import AdminCustomerList from '@/components/AdminCustomerList';
import AdminDeliveryList from '@/components/AdminDeliveryList';
import ProtectedRoute from '@/components/ProtectedRoute';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-10 pb-6 bg-gradient-to-r from-brand-brown to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p>Manage your tiffin service operations</p>
          </div>
        </section>

        <section className="py-8 container mx-auto px-4">
          <ProtectedRoute adminOnly>
            <Tabs 
              defaultValue={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="border-b mb-8">
                <TabsList className="w-full justify-start bg-transparent">
                  <TabsTrigger 
                    value="orders"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
                  >
                    Orders Today
                  </TabsTrigger>
                  <TabsTrigger 
                    value="menu"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
                  >
                    Post Menu
                  </TabsTrigger>
                  <TabsTrigger 
                    value="customers"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
                  >
                    Customers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="delivery"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
                  >
                    Delivery
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="orders" className="mt-0">
                <AdminOrdersList />
              </TabsContent>
              
              <TabsContent value="menu" className="mt-0">
                <AdminMenuManager />
              </TabsContent>
              
              <TabsContent value="customers" className="mt-0">
                <AdminCustomerList />
              </TabsContent>
              
              <TabsContent value="delivery" className="mt-0">
                <AdminDeliveryList />
              </TabsContent>
            </Tabs>
          </ProtectedRoute>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
