import React from 'react';
import { motion } from 'framer-motion';
import { ActivityIcon, CloudIcon, BellIcon, BarChart2Icon, ShieldIcon, ZapIcon } from 'lucide-react';
import FeatureCard from './FeatureCard';
const features = [{
  icon: <ActivityIcon size={24} className="text-white" />,
  title: 'Health Monitoring',
  description: 'Real-time tracking of vital signs and behavior patterns to ensure optimal pig health.'
}, {
  icon: <CloudIcon size={24} className="text-white" />,
  title: 'Weather Intelligence',
  description: 'Advanced climate analytics to help you prepare for weather changes and optimize conditions.'
}, {
  icon: <BellIcon size={24} className="text-white" />,
  title: 'Smart Alerts',
  description: 'Instant notifications about critical health issues or environmental changes.'
}, {
  icon: <BarChart2Icon size={24} className="text-white" />,
  title: 'Advanced Analytics',
  description: 'Comprehensive data visualization tools to optimize farm operations.'
}, {
  icon: <ShieldIcon size={24} className="text-white" />,
  title: 'Disease Prevention',
  description: 'Early detection systems to prevent disease outbreaks and maintain herd health.'
}, {
  icon: <ZapIcon size={24} className="text-white" />,
  title: 'Energy Optimization',
  description: 'Smart systems to reduce energy consumption and promote sustainability.'
}];
const FeaturesSection = () => {
  return <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Smart Farming Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AgriSenso combines cutting-edge technology with agricultural
            expertise to revolutionize pig farming operations.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} index={index} />)}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-20" />
    </section>;
};
export default FeaturesSection;