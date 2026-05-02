'use client';
import Link from 'next/link';
import PrivateRoute from '@/components/PrivateRoute';
import { useAuth } from '@/context/AuthContext';

export default function MyProfile() {
  const { user } = useAuth();
  return <PrivateRoute><section className="min-h-screen px-4 py-16 hero-pattern"><div className="card max-w-xl mx-auto glass-card shadow-2xl"><div className="card-body items-center text-center"><div className="avatar"><div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4"><img src={user?.photoURL || user?.photo || 'https://i.postimg.cc/7Z4BNK5K/user.png'} alt="profile" /></div></div><h1 className="text-4xl font-black text-primary">{user?.displayName || 'QurbaniHat User'}</h1><p className="text-lg">{user?.email}</p><Link href="/update-profile" className="btn btn-primary mt-4">Update Information</Link></div></div></section></PrivateRoute>;
}
