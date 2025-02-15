import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
      <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Reach out to us for more information.
          </p>
        </div>
      </motion.div>
    );
  };
  
  export default Contact; // ✅ Must include "export default Contact"