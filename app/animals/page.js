'use client';
import { useMemo, useState, useEffect } from 'react';
import animalsData from '@/data/animals.json';
import AnimalCard from '@/components/AnimalCard';

export default function AnimalsPage() {
  const [sort, setSort] = useState('default');
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 500); return () => clearTimeout(timer); }, []);
  const animals = useMemo(() => {
    const arr = [...animalsData];
    if (sort === 'low') arr.sort((a,b) => a.price - b.price);
    if (sort === 'high') arr.sort((a,b) => b.price - a.price);
    return arr;
  }, [sort]);
  return <section className="px-4 lg:px-12 py-12 min-h-screen">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"><div><h1 className="text-4xl font-black text-primary">All Animals</h1><p>Sort and choose your preferred Qurbani animal.</p></div><select className="select select-bordered" value={sort} onChange={e => setSort(e.target.value)}><option value="default">Default Sort</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option></select></div>
    {loading ? <div className="grid place-items-center min-h-[50vh]"><span className="loading loading-bars loading-lg text-primary"></span></div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}</div>}
  </section>;
}
