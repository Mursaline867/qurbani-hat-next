"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const { loginUser, googleLogin } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  const handleGoogle = async () => {
    await googleLogin();
  };

  return (
    <section className="min-h-screen grid place-items-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
          <button className="btn btn-primary w-full">Login</button>
        </form>

        <button onClick={handleGoogle} className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-4">
          New here? <Link className="link link-primary" href="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}