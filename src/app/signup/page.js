"use client"; // ✅ client component

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });



export default function Page() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) router.push("/landing");
    else alert("User already exists or error");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-150 via-sky-200 to-green-150
">
      <Navbar />

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded-2xl shadow-2xl w-96 space-y-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center text-Blue ${dancingScript.className}`}
          > 
          Sign Up
        </motion.h1>

        <input
          {...register("name")}
          placeholder="Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-green-600 transition"
        >
          Sign Up
        </motion.button>

        <p className="text-center text-sm text-gray-600">
          Already a customer?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.form>
    </div>
  );
}
