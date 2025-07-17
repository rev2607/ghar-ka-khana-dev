import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';

const MealPlanPage = () => {
  const { user, access } = useAuth();

  if (!user || !access?.mealplan_access) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#FFEFD6]">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-brand-brown">Access Restricted</h2>
            <p className="text-gray-700 mb-2">You do not have access to the Meal Plan Selection page.</p>
            <p className="text-gray-500">Please contact support or your admin for access.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#FFEFD6]">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-brand-brown">Meal Plan Selection</h2>
          <p className="text-gray-700 mb-4">(This is a placeholder for the meal plan selection UI.)</p>
          <div className="text-gray-500">Coming soon: Choose your meal plan here!</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MealPlanPage; 