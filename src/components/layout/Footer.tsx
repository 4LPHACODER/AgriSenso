import React from 'react';
const Footer = ({
  theme
}) => {
  return <footer className={`${theme === 'dark' ? 'bg-gray-900/50 backdrop-blur-lg border-gray-800/50' : 'bg-white/80 backdrop-blur-lg border-gray-200'} border-t py-4 px-6 transition-colors`}>
      <div className="flex flex-col items-center justify-center">
        <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
          © 2025 AgriSenso. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} text-xs`}>
            Privacy Policy
          </a>
          <a href="#" className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} text-xs`}>
            Terms of Service
          </a>
          <a href="#" className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} text-xs`}>
            Contact
          </a>
        </div>
      </div>
    </footer>;
};
export default Footer;