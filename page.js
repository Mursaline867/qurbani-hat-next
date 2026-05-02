import Link from 'next/link';
import animals from '@/data/animals.json';
import AnimalCard from '@/components/AnimalCard';

export default function Home() {
  const featured = animals.slice(0, 4);
  return <div>
    <section className="hero min-h-[78vh] hero-pattern px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop" className="max-w-md w-full rounded-[2rem] shadow-2xl animate__animated animate__zoomIn" alt="Qurbani cow" />
        <div className="max-w-2xl animate__animated animate__fadeInLeft">
          <div className="badge badge-secondary mb-4">Trusted Qurbani Marketplace</div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">Book healthy cows & goats with confidence.</h1>
          <p className="py-6 text-lg opacity-80">Explore verified livestock, compare prices, check details, and submit a quick booking request after login.</p>
          <Link href="/animals" className="btn btn-primary btn-lg">Browse Animals</Link>
        </div>
      </div>
    </section>

    <section className="px-4 lg:px-12 py-16">
      <div className="text-center mb-10"><h2 className="text-4xl font-black text-primary">Featured Animals</h2><p>Popular Qurbani choices from trusted farms.</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{featured.map(animal => <AnimalCard key={animal.id} animal={animal} />)}</div>
    </section>

    <section className="px-4 lg:px-12 pb-16 grid lg:grid-cols-2 gap-6">
      <div className="card bg-primary text-primary-content shadow-xl"><div className="card-body"><h3 className="card-title text-3xl">Qurbani Tips</h3><ul className="list-disc list-inside space-y-2"><li>Check age, weight, teeth, and visible health condition.</li><li>Choose animals from trusted sellers and verified farms.</li><li>Confirm transport, delivery, and booking details early.</li><li>Keep payment and seller communication clear.</li></ul></div></div>
      <div className="card bg-secondary text-secondary-content shadow-xl"><div className="card-body"><h3 className="card-title text-3xl">Top Breeds</h3><div className="grid grid-cols-2 gap-3"><span className="badge badge-lg">Red Chittagong</span><span className="badge badge-lg">Sahiwal</span><span className="badge badge-lg">Black Bengal</span><span className="badge badge-lg">Jamunapari</span></div><p className="mt-4">These breeds are popular in Bangladesh for health, size, and Qurbani suitability.</p></div></div>
    </section>
  </div>;
}
