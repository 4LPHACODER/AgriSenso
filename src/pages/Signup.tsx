import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LeafIcon, LockIcon, MailIcon, UserIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
const Signup = ({
  onSignup,
  theme = 'dark'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const navigate = useNavigate();
  // Mark page as loaded after a short delay to ensure smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    // Reset error state
    setError('');
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      setIsLoading(true);
      // Call the signup function passed from App.tsx
      const success = onSignup(name, email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Failed to create account');
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('An error occurred during signup. Please try again.');
      setIsLoading(false);
    }
  };
  const bgClass = theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-white to-gray-100';
  return <div className={`min-h-screen w-full ${bgClass} flex items-center justify-center p-4 relative overflow-hidden ${isPageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      {/* Optimized background elements - fewer and smaller on mobile */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0 pointer-events-none">
        <div className={`absolute top-1/4 -left-24 w-72 md:w-96 h-72 md:h-96 ${theme === 'dark' ? 'bg-green-500/20' : 'bg-green-500/10'} rounded-full blur-2xl md:blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-1/3 -right-20 w-64 md:w-80 h-64 md:h-80 ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/10'} rounded-full blur-2xl md:blur-3xl animate-pulse-slow animation-delay-2000`}></div>
      </div>
      {/* Signup container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="/AppLogo.png" alt="AgriSenso Logo" className="w-full h-full object-contain" />
          </div>
        </div>
        {/* Signup form */}
        <div className={`${theme === 'dark' ? 'bg-gray-800/60 backdrop-blur-md border-gray-700/50' : 'bg-white/80 backdrop-blur-md border-gray-200'} border rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8`}>
          <div className="text-center mb-6">
            <h1 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-1 md:mb-2`}>
              Create an Account
            </h1>
            <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
              Join AgriSenso today
            </p>
          </div>
          {error && <div className="mb-4 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="name" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium block`}>
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} disabled={isLoading} autoComplete="name" className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-700 text-gray-100' : 'bg-white/90 border-gray-300 text-gray-900'} border text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500`} placeholder="John Doe" />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium block`}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} autoComplete="email" className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-700 text-gray-100' : 'bg-white/90 border-gray-300 text-gray-900'} border text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500`} placeholder="name@agrisenso.com" />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium block`}>
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} autoComplete="new-password" className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-700 text-gray-100' : 'bg-white/90 border-gray-300 text-gray-900'} border text-sm rounded-lg block w-full pl-10 p-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500`} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} disabled={isLoading} className={`absolute inset-y-0 right-0 flex items-center pr-3 ${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} focus:outline-none`} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="confirmPassword" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium block`}>
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} disabled={isLoading} autoComplete="new-password" className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-700 text-gray-100' : 'bg-white/90 border-gray-300 text-gray-900'} border text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500`} placeholder="••••••••" />
              </div>
            </div>
            <div className="flex items-center">
              <input id="terms" type="checkbox" className={`w-4 h-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} rounded focus:ring-green-500 focus:ring-2`} />
              <label htmlFor="terms" className={`ml-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                I agree to the{' '}
                <a href="#" className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} hover:underline focus:outline-none focus:underline`}>
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button type="submit" disabled={isLoading} className={`w-full text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md transition-all flex items-center justify-center ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}>
              {isLoading ? <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </> : 'Create Account'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
              Already have an account?{' '}
              <Link to="/login" className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} hover:underline focus:outline-none focus:underline`}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
        {/* Back to landing page */}
        <div className="mt-6 text-center">
          <Link to="/" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm transition-colors focus:outline-none focus:underline`}>
            ← Back to home
          </Link>
        </div>
      </div>
    </div>;
};
export default Signup;