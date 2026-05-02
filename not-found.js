import Link from 'next/link';
export default function NotFound() { return <section className="min-h-screen grid place-items-center text-center px-4"><div><h1 className="text-8xl font-black text-primary">404</h1><p className="text-2xl font-bold mb-4">Page not found</p><Link href="/" className="btn btn-primary">Back Home</Link></div></section>; }
