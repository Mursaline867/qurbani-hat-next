"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from '@/lib/toast';

export default function RegisterPage() {
  const router = useRouter();
  const { registerUser, googleLogin } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    try {
      await registerUser(email, password, name, photo);
      toast.success("Registration successful");
      router.push("/login");
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  const handleGoogle = async () => {
    await googleLogin();
  };

  return (
    <section className="min-h-screen grid place-items-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Register</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <input name="name" type="text" placeholder="Name" className="input input-bordered w-full" required />
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="photo" type="url" placeholder="Photo URL" className="input input-bordered w-full" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
          <button className="btn btn-primary w-full">Register</button>
        </form>

        <button onClick={handleGoogle} className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have account? <Link className="link link-primary" href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}