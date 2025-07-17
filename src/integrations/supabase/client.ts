import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhaktixlkdenzljnacnf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYWt0aXhsa2Rlbnpsam5hY25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NDI5ODMsImV4cCI6MjA2MjUxODk4M30.TLosJorDD4b24CFg_zTBDczNMtERcHBQrUv-q3_OMGM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Access control functions for user_access table
export async function getAllUserAccess() {
  const { data, error } = await supabase.from('user_access').select('*');
  if (error) throw error;
  return data;
}

export async function updateUserAccess(phone_number, access) {
  const { data, error } = await supabase.from('user_access').upsert({
    phone_number,
    ...access,
  });
  if (error) throw error;
  return data;
}

export async function removeUserAccess(phone_number) {
  const { data, error } = await supabase.from('user_access').delete().eq('phone_number', phone_number);
  if (error) throw error;
  return data;
}

export async function getUserAccess(phone_number) {
  const { data, error } = await supabase.from('user_access').select('*').eq('phone_number', phone_number).single();
  if (error && error.code !== 'PGRST116') throw error;
  return data;
} 