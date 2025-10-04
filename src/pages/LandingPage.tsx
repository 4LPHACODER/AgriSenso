import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import FeatureCarousel from '../components/landing/FeatureCarousel';
import FeaturesSection from '../components/landing/FeaturesSection';
import { motion } from 'framer-motion';
import { LeafIcon, ArrowRightIcon, UsersIcon } from 'lucide-react';
const LandingPage = () => {
  return <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Feature Carousel */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our Key Features
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            AgriSenso combines cutting-edge technology with agricultural
            expertise to revolutionize how you monitor and manage your farming
            operations.
          </motion.p>
        </div>
        <FeatureCarousel />
      </section>
      {/* Features Section */}
      <FeaturesSection />
      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Farmers Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of farmers who are already using AgriSenso to
              transform their operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            number: '12,000+',
            label: 'Active Users',
            icon: <UsersIcon size={24} className="text-white" />
          }, {
            number: '98%',
            label: 'Customer Satisfaction',
            icon: <LeafIcon size={24} className="text-white" />
          }, {
            number: '30%',
            label: 'Productivity Increase',
            icon: <ArrowRightIcon size={24} className="text-white" />
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1 * index
          }} viewport={{
            once: true
          }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>)}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-10" />
      </section>
      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-xl text-gray-300 mb-8">
            Join thousands of farmers who are already using AgriSenso to monitor
            health, predict weather patterns, and optimize their operations.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="flex flex-wrap justify-center gap-4">
            <a href="#signup" className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all">
              Get Started Now
              <ArrowRightIcon size={20} className="ml-2" />
            </a>
            <a href="#demo" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center hover:bg-white/20 transition-colors">
              Request Demo
            </a>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-10 h-10 flex items-center justify-center mr-2">
                <LeafIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AgriSenso</h3>
                <p className="text-gray-400 text-sm">Climate-Aware Farming</p>
              </div>
            </div>
            <div className="flex space-x-6">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </a>)}
            </div>
          </div>
          <hr className="border-gray-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 AgriSenso. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Contact', 'Support'].map(link => <a key={link} href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                    {link}
                  </a>)}
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;