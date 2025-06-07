
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';

// Mock customer data - in a real app, this would come from Supabase
const mockCustomers = [
  {
    id: "user-12345",
    name: "Rohit Sharma",
    email: "rohit@example.com",
    subscriptionPlan: 30,
    daysLeft: 22,
    status: "active"
  },
  {
    id: "user-23456",
    name: "Priya Patel",
    email: "priya@example.com",
    subscriptionPlan: 14,
    daysLeft: 8,
    status: "active"
  },
  {
    id: "user-34567",
    name: "Amit Kumar",
    email: "amit@example.com",
    subscriptionPlan: 7,
    daysLeft: 2,
    status: "active"
  },
  {
    id: "user-45678",
    name: "Sonali Desai",
    email: "sonali@example.com",
    subscriptionPlan: 30,
    daysLeft: 15,
    status: "paused"
  },
  {
    id: "user-56789",
    name: "Vikram Singh",
    email: "vikram@example.com",
    subscriptionPlan: 7,
    daysLeft: 0,
    status: "expired"
  }
];

const AdminCustomerList = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Customer Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscription
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Days Left
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {customer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {customer.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.subscriptionPlan}-day plan</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.daysLeft}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${customer.status === 'active' ? 'bg-green-100 text-green-800' : 
                        customer.status === 'paused' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminCustomerList;
