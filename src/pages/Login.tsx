import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const { user, sendOtp, verifyOtp } = useAuth();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp' | 'done'>(user ? 'done' : 'phone');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await sendOtp(phone);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setStep('otp');
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await verifyOtp(phone, otp);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setStep('done');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-gray-50 rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login with Phone</h1>
          {step === 'phone' && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </form>
          )}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </form>
          )}
          {step === 'done' && user && (
            <div className="text-center">
              <div className="text-green-600 font-semibold mb-2">Logged in as {user.phone || user.email}</div>
              <div className="text-gray-500 text-sm">You are now authenticated.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login; 