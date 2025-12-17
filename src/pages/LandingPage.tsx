import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import FeatureCarousel from '../components/landing/FeatureCarousel';
import FeaturesSection from '../components/landing/FeaturesSection';
import { motion } from 'framer-motion';
import { LeafIcon, ArrowRightIcon, UsersIcon, CheckCircleIcon } from 'lucide-react';
const LandingPage = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Video Showcase Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See AgriSenso in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how our IoT technology transforms traditional farming into
              smart, data-driven operations.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/images/inAction.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            </div>
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-white text-sm font-medium">3D Model</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-10" />
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10" />
      </section>
            {/* About Section - Feature Carousel */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black scroll-mt-20">
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
            About
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
      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black scroll-mt-20">
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
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AgriSenso today with our affordable camera
              installation package.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Pricing Card */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full inline-block mb-6">
                CAMERA PACKAGE
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Camera Installment
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-white">₱4,299</span>
                <span className="text-gray-400 ml-2">only</span>
              </div>
              <div className="space-y-4 mb-8">
                {['High-definition IoT camera', 'Professional installation', 'Real-time monitoring access', 'Cloud storage included', '24/7 technical support', 'Free 99 days subscription'].map((feature, index) => <div key={index} className="flex items-center">
                    <div className="bg-green-500/20 rounded-full p-1 mr-3">
                      <CheckCircleIcon size={20} className="text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>)}
              </div>
              <Link to="/signup" className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-4 rounded-full font-medium flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all">
                Get Started Now
                <ArrowRightIcon size={20} className="ml-2" />
              </Link>
            </motion.div>
            {/* Video Component Showcase */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4">
                  <h4 className="text-xl font-bold text-white mb-2">
                    What You Get
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Premium components for complete farm monitoring
                  </p>
                </div>
                <div className="relative h-96">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/images/disassemble.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
      <section id="contact" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black scroll-mt-20">
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
            <Link to="/signup" className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all">
              Get Started Now
              <ArrowRightIcon size={20} className="ml-2" />
            </Link>
            <a href="/dashboard" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center hover:bg-white/20 transition-colors">
              Request Demo
            </a>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gradient-to-b from-black via-gray-900 to-black py-12">
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