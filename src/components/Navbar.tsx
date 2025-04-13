import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrollProgress: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const cleanedPath = pathname === '/' ? 'home' : pathname.slice(1); // Converts path to section name
    setActiveSection(cleanedPath);
  }, [location]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: '0%' }}
      />
      
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Portfolio
                </motion.span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLinks activeSection={activeSection} />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
          </div>
        </motion.div>
      </nav>
    </>
  );
};

const NavLinks = ({ activeSection }: { activeSection: string }) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ href, label }) => {
        const id = href === '/' ? 'home' : href.slice(1);
        const isActive = activeSection === id;

        return (
          <Link
            key={href}
            to={href}
            className={`relative px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
            }`}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="activeSection"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

const MobileNavLinks = ({ setIsMenuOpen }: { setIsMenuOpen: (value: boolean) => void }) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          to={href}
          onClick={() => setIsMenuOpen(false)}
          className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

const ThemeToggle = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => (
  <motion.button
    onClick={toggleTheme}
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {theme === 'dark' ? (
      <Sun className="w-5 h-5 text-yellow-500" />
    ) : (
      <Moon className="w-5 h-5 text-gray-600" />
    )}
  </motion.button>
);

export default Navbar;
