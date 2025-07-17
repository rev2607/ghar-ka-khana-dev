import React, { createContext, useContext, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface User {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  sendOtp: (phone: string) => Promise<{ error: string | null }>;
  verifyOtp: (phone: string, otp: string) => Promise<{ error: string | null }>;
  logout: () => void;
  access: {
    subscription_access: boolean;
    mealplan_access: boolean;
  } | null;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [access, setAccess] = useState<{ subscription_access: boolean; mealplan_access: boolean } | null>(null);

  // Fetch access info after login
  const fetchAccess = async (phone?: string) => {
    if (!phone) {
      setAccess(null);
      return;
    }
    try {
      const { getUserAccess } = await import('@/integrations/supabase/client');
      const data = await getUserAccess(phone);
      if (data) {
        setAccess({
          subscription_access: data.subscription_access,
          mealplan_access: data.mealplan_access,
        });
      } else {
        setAccess({ subscription_access: false, mealplan_access: false });
      }
    } catch (e) {
      setAccess({ subscription_access: false, mealplan_access: false });
    }
  };

  // Send OTP to phone number
  const sendOtp = async (phone: string) => {
    const { error } = await supabase.auth.signInWithOtp({ phone });
    return { error: error ? error.message : null };
  };

  // Verify OTP and log in
  const verifyOtp = async (phone: string, otp: string) => {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: 'sms',
    });
    if (data?.user) {
      setUser({
        id: data.user.id,
        phone: data.user.phone ?? undefined,
        email: data.user.email ?? undefined,
      });
      await fetchAccess(data.user.phone ?? undefined);
    }
    return { error: error ? error.message : null };
  };

  // Logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setAccess(null);
  };

  // Optionally, listen for auth state changes (e.g., refresh on reload)
  // useEffect(() => {
  //   const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
  //     if (session?.user) {
  //       setUser({
  //         id: session.user.id,
  //         phone: session.user.phone ?? undefined,
  //         email: session.user.email ?? undefined,
  //       });
  //       fetchAccess(session.user.phone ?? undefined);
  //     } else {
  //       setUser(null);
  //       setAccess(null);
  //     }
  //   });
  //   return () => {
  //     listener?.subscription.unsubscribe();
  //   };
  // }, []);

  const isAdmin = user?.phone === '9346780091' || user?.phone === '+919346780091' || user?.phone === '919346780091';

  return (
    <AuthContext.Provider value={{ user, sendOtp, verifyOtp, logout, access, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 