"use client";

import { motion } from "framer-motion";

export default function ScrollDownAnim() {
  return (
    <div className="border-2 border-white border-opacity-90 h-16 w-10 rounded-full flex justify-center p-2">
      <motion.div 
        className="bg-white opacity-90 rounded-full h-1/2 w-full"
        animate={{ y: 20 }}
        transition={{
          y : {
            duration: 0.4,
            repeatDelay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }
        }}  
      />
    </div>
  )
}