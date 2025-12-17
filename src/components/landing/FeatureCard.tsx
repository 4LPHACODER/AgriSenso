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
    y: 50,
    scale: 0.9
  }} whileInView={{
    opacity: 1,
    y: 0,
    scale: 1
  }} viewport={{
    once: true,
    amount: 0.3
  }} transition={{
    duration: 0.6,
    delay: 0.1 * index,
    ease: 'easeOut'
  }} whileHover={{
    scale: 1.05,
    y: -10
  }} className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-shadow cursor-pointer group">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
      background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%)'
    }} />
      <div className="p-6 relative z-10">
        <motion.div whileHover={{
        rotate: 360,
        scale: 1.1
      }} transition={{
        duration: 0.6
      }} className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/50">
          {icon}
        </motion.div>
        <motion.h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          {title}
        </motion.h3>
        <motion.p className="text-gray-300 group-hover:text-gray-200 transition-colors">
          {description}
        </motion.p>
      </div>
      <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500" initial={{
      scaleX: 0
    }} whileInView={{
      scaleX: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8,
      delay: 0.2 + 0.1 * index
    }} style={{
      transformOrigin: 'left'
    }} />
      <motion.div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>;
};
export default FeatureCard;