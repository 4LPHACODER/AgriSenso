import React from 'react';
import { motion } from 'framer-motion';
const FeatureCard = ({
  icon,
  title,
  description,
  index
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.1 * index
  }} className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5" />
      <div className="p-6 relative z-10">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500" />
    </motion.div>;
};
export default FeatureCard;