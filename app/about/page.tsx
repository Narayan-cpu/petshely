'use client';

import { motion } from "framer-motion";

export default function Adopt() {
  return (
    <section id="about" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-6"
        >
          🐾 About Petshely
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto"
        >
          Petshely is a community-driven platform dedicated to rescuing, rehabilitating, and rehoming stray and abandoned animals. Our goal is to provide every pet with a second chance.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
          {[
            {
              title: "🐕 Pet Listings",
              desc: "Find adoptable pets with detailed profiles.",
            },
            {
              title: "📝 Adoption Process",
              desc: "Easy and transparent adoption system.",
            },
            {
              title: "📖 Pet Care Blog",
              desc: "Learn pet care tips from experts.",
            },
            {
              title: "🏡 Community Support",
              desc: "Connect with pet lovers and shelters.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)]"
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
