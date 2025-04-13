import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tooltip } from 'react-tooltip';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 99, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 95, icon: "🟢" },
        { name: "Python", level: 100, icon: "🐍" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "GraphQL", level: 70, icon: "📊" },
        { name: "MySQL", level: 100, icon: "🐬" },
        { name: "MongoDB", level: 100, icon: "🍃" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Git", level: 90, icon: "📦" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Linux", level: 80, icon: "🐧" },
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Pandas", level: 95, icon: "🧮" },
        { name: "NumPy", level: 92, icon: "📐" },
        { name: "Matplotlib", level: 93, icon: "📊" },
        { name: "Seaborn", level: 90, icon: "🌊" },
        { name: "Tableau", level: 91, icon: "📈" },
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Technical Skills</h1>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: "Projects Completed", value: "4+" },

            { title: "Technologies", value: "20+" }
          ].map((stat, index) => (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
