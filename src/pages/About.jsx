import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-600">
          Welcome to our website! This is the About page where we describe our mission and team.
        </p>
      </div>
    </motion.div>
  )
}

export default About
