'use client';
import { useRouter } from 'next/navigation';
import PrivateRoute from '@/components/PrivateRoute';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

export default function UpdateProfile() {
  const { user, updateUserInfo } = useAuth();
  const router = useRouter();
  const handleUpdate = async e => { e.preventDefault(); const form = e.currentTarget; try { await updateUserInfo(form.name.value, form.image.value); toast.success('Profile updated successfully'); router.push('/my-profile'); } catch (err) { toast.error(err.message); } };
  return <PrivateRoute><section className="min-h-screen grid place-items-center px-4 hero-pattern"><div className="card w-full max-w-lg glass-card shadow-2xl"><div className="card-body"><h1 className="text-4xl font-black text-primary text-center">Update Information</h1><p className="text-center opacity-75">Updates logged-in user name and image.</p><form onSubmit={handleUpdate} className="space-y-4"><input className="input input-bordered w-full" name="name" defaultValue={user?.displayName || ''} placeholder="Name" required/><input className="input input-bordered w-full" name="image" defaultValue={user?.photoURL || user?.photo || ''} placeholder="Image URL" required/><button className="btn btn-primary w-full">Update Information</button></form></div></div></section></PrivateRoute>;
}
