import React from 'react';
import { CalendarIcon, ArrowUpRightIcon, LeafIcon } from 'lucide-react';
const Header = () => {
  return <header className="absolute top-0 left-0 right-0 z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center mr-2 shadow-md">
            <LeafIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white drop-shadow-md">
            AgriSenso
          </h1>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <a href="#about" className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
            About Us
          </a>
          <a href="#membership" className="px-4 py-2 text-white hover:bg-white/20 hover:backdrop-blur-sm hover:rounded-full transition-all">
            Membership
          </a>
          <a href="#shop" className="px-4 py-2 text-white hover:bg-white/20 hover:backdrop-blur-sm hover:rounded-full transition-all">
            Shop
          </a>
          <a href="#article" className="px-4 py-2 text-white hover:bg-white/20 hover:backdrop-blur-sm hover:rounded-full transition-all">
            Article
          </a>
          <button className="ml-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <CalendarIcon size={20} />
          </button>
          <a href="#contact" className="ml-2 px-4 py-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors flex items-center shadow-md">
            Contact Us
            <span className="ml-1 bg-white/20 rounded-full p-1">
              <ArrowUpRightIcon size={16} className="text-white" />
            </span>
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>;
};
export default Header;