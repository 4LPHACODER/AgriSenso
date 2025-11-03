import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ArrowUpRightIcon, LeafIcon, MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/70 backdrop-blur-lg' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.div initial={{
          rotate: 0
        }} whileHover={{
          rotate: 15
        }} className="w-10 h-10 flex items-center justify-center mr-2">
            <img src="/AppLogo.png" alt="AgriSenso Logo" className="w-full h-full object-contain" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center">
              Agri
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Senso
              </span>
            </h1>
            <p className="text-xs text-gray-400">Climate-Aware Farming</p>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[{
          name: 'About',
          id: 'about'
        }, {
          name: 'Features',
          id: 'features'
        }, {
          name: 'Pricing',
          id: 'pricing'
        }, {
          name: 'Contact',
          id: 'contact'
        }].map(item => <button key={item.name} onClick={() => scrollToSection(item.id)} className="px-4 py-2 text-gray-300 hover:text-white relative group">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>)}
          <Link to="/login" className="ml-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors">
            Sign In
          </Link>
          <Link to="/signup" className="ml-2 px-5 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center">
            Get Started
            <ArrowUpRightIcon size={16} className="ml-1" />
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
          {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-5 space-y-4">
              {[{
            name: 'About',
            id: 'about'
          }, {
            name: 'Features',
            id: 'features'
          }, {
            name: 'Pricing',
            id: 'pricing'
          }, {
            name: 'Contact',
            id: 'contact'
          }].map(item => <button key={item.name} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white">
                  {item.name}
                </button>)}
              <div className="pt-4 flex flex-col space-y-3">
                <Link to="/login" className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
                <Link to="/signup" className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white hover:shadow-lg hover:shadow-green-500/20 transition-all text-center" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;