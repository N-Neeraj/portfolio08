import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Neeraj N
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            BTECH CSE ENGINEERING
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { to: '/about', label: 'About Me' },
              { to: '/skills', label: 'Skills' },
              { to: '/projects', label: 'Projects' },
              { to: '/experience', label: 'Experience' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-6 py-3 text-lg font-medium"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0" />
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white" />
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
                  {link.label}
                </span>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            {[
              { Icon: Github, href: 'https://github.com/N-Neeraj', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/neeraj-n-449095259', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:neerajn12b309@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <Player
          autoplay
          loop
          src="https://lottie.host/embed/animation-background/animation.json"
          style={{ width: '100%', height: '100%', opacity: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default Home;
