'use client';

import { useParams } from 'next/navigation';
import animals from '@/data/animals.json';
import PrivateRoute from '@/components/PrivateRoute';
import { useAuth } from '@/context/AuthContext';
import toast from '@/lib/toast';

export default function DetailsPage() {
  const { user } = useAuth();
  const params = useParams();
  const animalId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const animal = animals.find((item) => String(item.id) === String(animalId));

  const handleBooking = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success('Booking request submitted successfully!');
  };

  if (!animal) {
    return (
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-3xl font-bold">Animal not found</h1>
      </div>
    );
  }
  return <PrivateRoute><section className="px-4 lg:px-12 py-12 min-h-screen"><div className="grid lg:grid-cols-2 gap-8"><img src={animal.image} alt={animal.name} className="w-full h-[520px] object-cover rounded-[2rem] shadow-xl"/><div className="space-y-4"><div className="badge badge-secondary">{animal.category}</div><h1 className="text-5xl font-black text-primary">{animal.name}</h1><p className="text-lg">{animal.description}</p><div className="stats stats-vertical md:stats-horizontal shadow w-full"><div className="stat"><div className="stat-title">Price</div><div className="stat-value text-primary">৳{animal.price.toLocaleString()}</div></div><div className="stat"><div className="stat-title">Weight</div><div className="stat-value">{animal.weight}kg</div></div><div className="stat"><div className="stat-title">Age</div><div className="stat-value">{animal.age}y</div></div></div><div className="grid grid-cols-2 gap-3"><p><b>Type:</b> {animal.type}</p><p><b>Breed:</b> {animal.breed}</p><p><b>Location:</b> {animal.location}</p><p><b>Category:</b> {animal.category}</p></div></div></div><div className="card bg-base-100 shadow-xl mt-10 max-w-3xl mx-auto"><div className="card-body"><h2 className="card-title text-3xl text-primary">Booking Form</h2><form onSubmit={handleBooking} className="grid md:grid-cols-2 gap-4"><input className="input input-bordered" defaultValue={user?.displayName || ''} name="name" placeholder="Your name" required/><input className="input input-bordered" defaultValue={user?.email || ''} name="email" placeholder="Email" required/><input className="input input-bordered" name="phone" placeholder="Phone number" required/><input className="input input-bordered" name="address" placeholder="Address" required/><button className="btn btn-primary md:col-span-2">Submit Booking</button></form></div></div></section></PrivateRoute>;
}
