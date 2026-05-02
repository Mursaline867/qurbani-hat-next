'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [loading, user, router]);

  if (loading) return <div className="min-h-[60vh] grid place-items-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>;
  if (!user) return null;
  return children;
}
