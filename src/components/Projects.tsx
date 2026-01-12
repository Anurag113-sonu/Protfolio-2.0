import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Anurag-AI',
    description: 'AI-powered chatbot using the Gemini API for seamless interactions.',
    image: 'AI.png',
    github: 'https://github.com/Anurag113-sonu/Anurag-AI',
    demo: 'https://anurag-ai.vercel.app/',
    tags: ['React', 'Node.js', 'Gemini API'],
  },
  {
    title: 'TODO_LIST',
    description: 'todo list application ',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Anurag113-sonu/TODO_LIST',
    demo: 'https://todo-list-five-omega-90.vercel.app/',
    tags: ['Next.js'],
  },
  {
    title: 'Weather App',
    description: 'A simple weather application that provides current weather information based on user input.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Anurag113-sonu/Weather-App',
    demo: 'https://weather-app-steel-one-69.vercel.app/',
    // tags: ['Shell', 'Python', 'Gemini API'],
  },
  {
    title: 'Memory-game',
    description: 'A fun and interactive memory game that challenges players to match pairs',
    image: 'game.png',
    github: 'https://github.com/Anurag113-sonu/Memory-game',
    demo: 'https://memory-game-theta-three-85.vercel.app/',
    tags: ['React Native', 'Node.js', ],
  },
  // {
  //   title: 'CV Builder',
  //   description: 'A modern CV/Resume builder that allows users to create and export professional resumes easily.',
  //   image: 'cvpr.png',
  //   github: 'https://github.com/RudraP2004/CV-Builder',
  //   demo: '#',
  //   tags: ['React', 'Tailwind CSS', 'Node.js'],
  // },
  {
    title: 'MyPortfolio',
    description: 'A personal portfolio website showcasing projects, skills, and achievements with a modern responsive design.',
    image: 'image copy.png', // add your screenshot in public folder
    github: 'https://github.com/RudraP2004/MyPortfolio',
    demo: '#', // put your live portfolio link here if deployed
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'My-Drop',
    description: ' Share Anything Instantly.Create temporary spaces to share files, text, and URLs with anyone. No registration required.',
    image: 'mydrop.png', // add your screenshot in public folder
    github: 'https://github.com/RudraP2004/MyPortfolio',
    demo: '#', // put your live portfolio link here if deployed
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
