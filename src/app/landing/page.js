// app/landing/page.tsx
"use client";

import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <nav className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-md fixed w-full z-10">
   <h1 className={`text-3xl text-white ${dancingScript.className}`}>
    Glow&Shine
  </h1>
  <ul className="flex space-x-6">
    <li className="hover:text-yellow-300 text-white transition cursor-pointer">Home</li>
    <li className="hover:text-yellow-300 text-white transition cursor-pointer">About</li>
    <li className="hover:text-yellow-300 text-white transition cursor-pointer">Contact</li>
  </ul>
</nav>

      
      {/* Hero Section */}
   {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center text-white">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="\products\bg3.jpg" // replace with your image path
      alt="Cosmetics Hero"
      className="w-full h-full object-cover brightness-85"
    />
  </div>

  {/* Hero Content */}
  <motion.div
    initial={{ opacity: 0, y: -50 }}   // start slightly above
    animate={{ opacity: 1, y: 0 }}     // slide down to position
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center px-6 max-w-2xl"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
      Glow & Shine Cosmetics
    </h1>
    <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
      Discover premium beauty products curated just for you.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-white text-pink-500 font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
        Shop Now
      </button>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
        Explore Collection
      </button>
    </div>
  </motion.div>

  {/* Infinite Product Slider */}
<div className="absolute bottom-10 w-full overflow-hidden">
  <motion.div
    className="flex gap-5"
    animate={{ x: ["0%", "-50%"] }} // move half width of duplicated content
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 15, // adjust speed
      ease: "linear"
    }}
  >
    {/* Duplicate array for seamless loop */}
    {[1,2,3,4,1,2,3,4].map((item, index) => (
      <img
        key={index}
        src={`/products/product${item}.jpg`}
        alt={`Product ${item}`}
        className="h-60 w-70 object-cover rounded-lg shadow-lg"
      />
    ))}
  </motion.div>
</div>


</section>


      {/* Product Highlights */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1,2,3,4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                src={`/products/product${item}.jpg`}
                alt={`Product ${item}`}
                className="h-48 mx-auto mb-4 rounded-lg"
              />
             <h3 className="font-semibold text-lg mb-2">
  {item === 1 ? "Lipstick" : item === 2 ? "Mascara" : item === 3
    ? "Serum"
    : "Moisturizer"}
</h3>
<p className="text-pink-500 font-bold">
  {item === 1 ? "Rs.350.00" : item === 2 ? "Rs.250.00"  : item === 3
    ? "Rs.499.00"
    : "Rs.299.00"}
</p>

            </motion.div>
          ))}
        </div>
      </section>

     {/* About Section */}
<section className="py-20 px-10 bg-purple-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-bold mb-6">Our Story</h2>
      <p className="text-lg text-gray-700">
        Glow&Shine was created with a simple dream – to bring safe, natural, 
        and effective skincare to everyone. Inspired by nature and powered by science, 
        we craft cruelty-free products that let your true beauty shine. 
        Our mission is to make beauty simple, sustainable, and kind.
      </p>
    </div>

    {/* Image Content */}
    <div className="flex justify-center md:justify-end">
      <img 
        src="/products/bg4.jpg" 
        alt="Our Story" 
         className="rounded-xl shadow-lg h-85 w-full object-cover" 
      />
    </div>

  </div>
</section>


      {/* Testimonials */}
      <section className="py-20 px-10">
  <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Sophia",
        review: "Amazing products! My skin has never felt better.",
      },
      {
        name: "Arjun",
        review: "Glow&Shine has completely transformed my skincare routine!",
      },
      {
        name: "Maya",
        review: "High-quality and affordable. I’m so impressed with the results.",
      },
    ].map((testimonial, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transform transition duration-300"
      >
        <p className="text-gray-700 mb-4 italic">&quot;{testimonial.review}&quot;</p>
        <h4 className="font-semibold text-pink-600">{testimonial.name}</h4>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="bg-pink-400 text-white py-10 text-center">
        <p>© 2025 Glow & Shine Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
}
