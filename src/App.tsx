import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light'); // 'dark' or 'light'
  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  // Mock authentication functions
  const handleLogin = (email, password) => {
    // In a real app, this would validate credentials against a backend
    setIsAuthenticated(true);
    return true;
  };
  const handleSignup = (name, email, password) => {
    // In a real app, this would create a new user in the backend
    setIsAuthenticated(true);
    return true;
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return <div className={`app ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} theme={theme} /> : <Navigate to="/dashboard" replace />} />
          <Route path="/signup" element={!isAuthenticated ? <Signup onSignup={handleSignup} theme={theme} /> : <Navigate to="/dashboard" replace />} />
          <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} /> : <Navigate to="/login" replace />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>;
}