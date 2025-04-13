import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Me</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I’m Neeraj N, a third-year B.Tech student specializing in Internet of Things (IoT) at Shiv Nadar University with a strong passion for backend development. I have hands-on experience in building scalable and secure backend systems using Node.js, TypeScript, Express, PostgreSQL, MongoDB, Redis, and WebSocket. I’ve developed various projects, including real-time chat systems, video meeting platforms, and intelligent dashboards, while adhering to clean architecture principles. With a keen interest in problem-solving and a quick learning ability, I’m seeking a backend development internship where I can apply my technical skills and contribute to impactful projects.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p>B.Tech in Internet of Things (IoT)</p>
                <p className="text-gray-500">Shiv Nadar University, 2025 (Expected)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p>Internship Experience in IoT and Software Development</p>
                <p className="text-gray-500">ACE Solutions, KAA Shiv Infotech</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-600 dark:bg-blue-500 rounded-xl p-6 text-white flex items-center justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Want to know more?</h3>
            <p>Download my resume for my full background and experience.</p>
          </div>
          <a
            href="https://drive.google.com/file/d/1YfGpn0vJc0-kCoFHH0q95bpQgK9jl6Z-/view?usp=sharing"
            download
            className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
