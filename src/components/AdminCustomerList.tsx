
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllUserAccess, updateUserAccess, removeUserAccess } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

const AdminCustomerList = () => {
  const { isAdmin } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin) return;
    setLoading(true);
    getAllUserAccess()
      .then(setUsers)
      .catch(e => setError('Failed to load users'))
      .finally(() => setLoading(false));
  }, [isAdmin]);

  const handleToggle = async (phone_number: string, field: 'subscription_access' | 'mealplan_access', value: boolean) => {
    try {
      await updateUserAccess(phone_number, { [field]: value });
      setUsers(users => users.map(u => u.phone_number === phone_number ? { ...u, [field]: value } : u));
    } catch {
      setError('Failed to update access');
    }
  };

  const handleRemove = async (phone_number: string) => {
    try {
      await removeUserAccess(phone_number);
      setUsers(users => users.filter(u => u.phone_number !== phone_number));
    } catch {
      setError('Failed to remove access');
    }
  };

  if (!isAdmin) return null;

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Access Control</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? <div>Loading...</div> : error ? <div className="text-red-600">{error}</div> : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Phone Number</th>
                  <th className="px-4 py-2 text-center">Subscription Page</th>
                  <th className="px-4 py-2 text-center">Meal Plan Page</th>
                  <th className="px-4 py-2 text-center">Remove All Access</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user: any) => (
                  <tr key={user.phone_number}>
                    <td className="px-4 py-2">{user.phone_number}</td>
                    <td className="px-4 py-2 text-center">
                      <input type="checkbox" checked={user.subscription_access} onChange={e => handleToggle(user.phone_number, 'subscription_access', e.target.checked)} />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input type="checkbox" checked={user.mealplan_access} onChange={e => handleToggle(user.phone_number, 'mealplan_access', e.target.checked)} />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button onClick={() => handleRemove(user.phone_number)} className="text-red-600 hover:underline">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {users.length === 0 && <div className="text-gray-500 py-4">No users found.</div>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminCustomerList;
