"use client"; // Needed for animations in Next.js App Router
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center gap-12 p-6 ">
        {/* Card 1: Adopt a Pet */}
        <div className="hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-lg">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          className="relative  rounded-2xl shadow-xl overflow-hidden w-80 md:w-96"
        >
          <div className="relative w-full h-48">
            <Image
              src="/images/add-adopt.jpg"
              alt="Adopt a Pet"
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
              className="rounded-t-2xl"
              priority
            />
            
          </div>
          <div className="p-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Adopt a Pet</h2>
            <p className="text-gray-600 mb-4">Find your new furry friend!</p>
            <Link href="/Adopt">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3   font-semibold rounded-lg transition-all hover:bg-blue-600"
              >
                Adopt Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        </div>
        </div>
        {/* Card 2: Add a Pet for Adoption */}
        <div className="hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-lg">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          className="relative  rounded-2xl shadow-xl overflow-hidden w-80 md:w-96  "
        >
          <div className="">
          <div className="relative w-full h-48 px-6 py-2 ">
            <Image
              src="/images/get-adopt.jpg"
              alt="Add a Pet"
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
              className="rounded-t-2xl"
              priority
            />
          </div>
          <div className="p-6 text-center ">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 ">Add a Pet</h2>
            <p className="text-gray-600 mb-4">List a pet for adoption.</p>
            <Link href="/add-pets">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 font-semibold rounded-lg transition-all hover:bg-green-600"
              >
                Add Pet
              </motion.button>
            </Link>
          </div>
          </div>
        </motion.div>
        </div>
      </div>
     
   
  );
}
