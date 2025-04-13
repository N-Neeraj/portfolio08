import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';


const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Prediction System",
      description: "Built a CNN-based plant disease classification model using TensorFlow and OpenCV for image analysis. Developed a user-friendly web dashboard using React.js and Flask, allowing users to upload plant images and receive disease diagnoses with treatment recommendations. Integrated a cloud database for scalable data storage and seamless access.",
      image: "/images/pdd.jpg",
      tags: ["Python", "TensorFlow", "Express", "MongoDB", "CNN"],
      github: "https://github.com/N-Neeraj/plant_disease_detection.git"
    },
    {
      title: "Face Recognition System",
      description: "Designed and deployed a high-performance face recognition system for secure authentication, utilizing deep learning models like FaceNet and OpenCV. Integrated into a web-based platform with JWT-based role-based access control. Deployed on AWS using a serverless architecture for scalability and reliability.",
      image: "/images/download.jpg",
      tags: ["Python", "Flask", "OpenCV", "JWT", "PostgreSQL"],
      github: "https://github.com/N-Neeraj/face-recognition1.git"
    },
    {
      title: "Stock Market Prediction Software",
      description: "Developed an AI-powered stock market prediction system using LSTM neural networks for accurate time-series forecasting. Integrated cloud-based APIs to fetch real-time stock data, enabling dynamic predictions. Optimized the backend using Flask and deployed the containerized model with Docker on AWS for scalable access.",
      image: "/images/st.jpg",
      tags: ["Python", "LSTM", "FastAPI", "Pandas", "AWS"],
      github: "https://github.com/N-Neeraj/Stock_prediction-.git"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Featured Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:underline"
                  >
                    <Github className="w-5 h-5 mr-1 text-black" />
                    <span className="text-sm text-blue-600">View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
