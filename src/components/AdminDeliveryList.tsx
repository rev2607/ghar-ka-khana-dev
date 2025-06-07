
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useOrder } from '@/context/OrderContext';

// Mock delivery data - in a real app, this would be generated from orders
const mockDeliveries = [
  {
    id: "del-12345",
    customerName: "Rohit Sharma",
    address: "Flat 304, Shanti Apartments, Andheri East, Mumbai 400069",
    items: ["Dal Tadka", "Jeera Rice", "Chapati (2 pcs)"],
    status: "pending"
  },
  {
    id: "del-23456",
    customerName: "Priya Patel",
    address: "B-12, Sunrise Heights, Malad West, Mumbai 400064",
    items: ["Aloo Gobi", "Chapati (2 pcs)", "Mixed Raita"],
    status: "out-for-delivery"
  },
  {
    id: "del-34567",
    customerName: "Amit Kumar",
    address: "205, Seabird Building, Bandra West, Mumbai 400050",
    items: ["Dal Tadka", "Jeera Rice", "Aloo Gobi", "Chapati (2 pcs)"],
    status: "delivered"
  },
  {
    id: "del-45678",
    customerName: "Sonali Desai",
    address: "503, Green Park Society, Powai, Mumbai 400076",
    items: ["Dal Tadka", "Chapati (2 pcs)", "Gulab Jamun"],
    status: "pending"
  }
];

const AdminDeliveryList = () => {
  const changeDeliveryStatus = (id: string, newStatus: string) => {
    // In a real app, this would update the database
    console.log(`Changing status of delivery ${id} to ${newStatus}`);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'out-for-delivery':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Delivery Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {mockDeliveries.map((delivery) => (
            <div 
              key={delivery.id}
              className="border rounded-lg overflow-hidden bg-white"
            >
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{delivery.customerName}</h4>
                    <p className="text-sm text-gray-600">{delivery.address}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(delivery.status)}`}>
                    {delivery.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-sm font-medium mb-1">Items:</p>
                  <div className="flex flex-wrap gap-2">
                    {delivery.items.map((item, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-3">
                  {delivery.status === 'pending' && (
                    <Button 
                      size="sm"
                      onClick={() => changeDeliveryStatus(delivery.id, 'out-for-delivery')}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Mark Out for Delivery
                    </Button>
                  )}
                  {delivery.status === 'out-for-delivery' && (
                    <Button 
                      size="sm"
                      onClick={() => changeDeliveryStatus(delivery.id, 'delivered')}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      Mark Delivered
                    </Button>
                  )}
                  {delivery.status === 'delivered' && (
                    <Button 
                      size="sm"
                      variant="ghost"
                      disabled
                    >
                      Completed
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDeliveryList;
