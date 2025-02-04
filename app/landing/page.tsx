// app/landing/page.tsx
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
   
    <div className="text-center mt-6">
      <section id='Home'>
       <div className='mb-9'>
   <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-lg"
>
  Welcome to <span className="text-yellow-500">Petshely</span> 🐾
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mt-4 px-6 max-w-3xl mx-auto"
>
  Your ultimate platform for pet adoption. <span className="font-semibold text-gray-900 dark:text-white">Browse through available pets</span> and give them a loving home today!
</motion.p>
</div>
      {/* Swiper Slider for Dog Images */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="relative w-full h-96"> {/* Adjust the height as needed */}
            <Image
              src="/images/dog3.jpg" // Ensure the image is in the public directory
              alt="Dog 3"
              fill // Make the image fill the parent container
              objectFit="cover" // Ensures the image covers the area without distortion
              className="rounded-lg"
         
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative w-full h-96">
            <Image
              src="/images/stray-cat1.jpg"
              alt="Dog 2"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-96">
            <Image
              src="/images/cow-1.jpg"
              alt="Dog 3"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      </section>
    
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-[url('/pets-bg.jpg')]">
        <div className="absolute inset-0  bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold  z-10"
        >
          Find Your Furry Friend 🐶🐱
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg  mt-4 z-10"
        >
          Adopt, Love, and Give a Second Chance! ❤️
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg z-10"
          href="./pets"
        >
          Start Adopting
        </motion.a>
      </header>

      {/* Goals Section */}
      <section className="py-16 ">
        <h2 className="text-4xl font-bold text-center">🎯 Our Goals</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 px-6 max-w-5xl mx-auto">
          {[
            { icon: "🏡", text: "Provide Loving Homes for Pets" },
            { icon: "💖", text: "Reduce Stray Population" },
            { icon: "📚", text: "Educate Responsible Pet Ownership" },
          ].map((goal, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-lg shadow-md text-center"
            >
              <p className="text-5xl">{goal.icon}</p>
              <p className="text-lg mt-3">{goal.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      

      {/* Call to Action */}
      <section  className="py-16  text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          🏡 Ready to Adopt?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-3 mb-6"
        >
          Find your perfect furry friend today and change a life!
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 text-yellow-500 font-semibold hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full   shadow-lg"
          href="./Adopt"
        >
          Browse Pets
        </motion.a>
      </section>
   
    
  </div>
  );
}
