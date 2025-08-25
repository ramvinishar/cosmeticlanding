"use client";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md p-6 z-50 shadow-lg">
      <h1 className={`text-3xl text-white ${dancingScript.className}`}>
    Glow&Shine
  </h1>
    </nav>
  );
}
