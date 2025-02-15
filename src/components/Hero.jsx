import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lorem ipsum
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover amazing content and explore the best features we have to offer.
          </motion.p>
          <motion.a 
            href="/#/about" 
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Get Started
          </motion.a>
        </section>
      );
}

export default Hero
