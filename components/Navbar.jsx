'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const handleLogout = async () => { await logoutUser(); toast.success('Logged out successfully'); };
  const links = <><li><Link href="/">Home</Link></li><li><Link href="/animals">All Animals</Link></li>{user && <li><Link href="/my-profile">My Profile</Link></li>}</>;
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-green-100 px-4 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown"><div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">☰</div><ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">{links}</ul></div>
        <Link href="/" className="text-2xl font-black text-primary">🐄 Qurbani<span className="text-secondary">Hat</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex"><ul className="menu menu-horizontal px-1 font-semibold">{links}</ul></div>
      <div className="navbar-end gap-2">
        {user ? <><div className="avatar"><div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"><img
  src={user?.photoURL || user?.photo || user?.image || "https://i.postimg.cc/7Z4BNK5K/user.png"}
  alt="avatar"/></div></div><button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button></> : <><Link className="btn btn-ghost btn-sm" href="/login">Login</Link><Link className="btn btn-primary btn-sm" href="/register">Register</Link></>}
      </div>
    </div>
  );
}
