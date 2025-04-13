import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "ACE Software Solutions Pvt Ltd",
      role: "IoT Intern",
      period: "June 2024 - August 2024",
      location: "Chennai, Tamil Nadu",
      description: "Assisted in developing IoT software for monitoring CNC machine usage and tracking operator activity.",
      achievements: [
        "Developed software in Python and C++ to collect CNC machine data and generate client reports.",
        "Collaborated with the team during documentation and development phases.",
        "Actively participated in team meetings, contributing to project planning, technical discussions, and ideation."
      ]
    },
    {
      company: "KAA Shiv Infotech",
      role: "AI Intern",
      period: "May 2024 - June 2024",
      location: "Remote",
      description: "Worked with machine learning models and AI, gaining hands-on experience with various algorithms.",
      achievements: [
        "Developed a movie recommendation system using collaborative and content-based filtering, covering data preprocessing, model training, and evaluation.",
        "Optimized system performance and worked with large datasets using Python libraries such as Pandas, NumPy, and Scikit-learn.",
        "Gained experience in integrating machine learning models and optimizing recommendation systems."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Professional Experience</h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
