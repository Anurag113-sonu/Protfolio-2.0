import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // modern icons
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const qualifications = [
  {
    title: "Graduation",
    institute: "Centurion University of Technology and Management, Bhubaneswar",
    score: "CGPA: 9.25",
    year: "2022 - 2026",
    color: "from-blue-400 to-green-600",
  },
  {
    title: "12th Grade",
    institute: "Kiit higher secondary school,BBSR, CHSE Odisha",
    score: "Percentage: 89%",
    year: "2019 - 2021",
    color: "from-green-400 to-blue-600",
  },
  {
    title: "10th Grade",
    institute: "B.K high school ,Kendujhar , BSE Odisha",
    score: "Percentage: 85%",
    year: "2019",
    color: "from-orange-400 to-purple-600",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* About Text + Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">

          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p>
              Hi, I'm <span className="font-bold text-blue-500">Anurag</span>, a
              Passionate <span className="font-semibold">Web Developer</span> &
              Tech Enthusiast 🚀. I specialize in{" "}
              <span className="font-semibold">modern web technologies</span>,
              cloud computing ☁️, and AI 🤖.
            </p>
            <p>
              I love transforming ideas into{" "}
              <span className="font-semibold text-purple-500">
                scalable, impactful solutions
              </span>{" "}
              that push the boundaries of innovation.
            </p>
            <p>
              Outside of coding, you’ll find me learning new technologies,
              contributing to{" "}
              <span className="font-semibold text-blue-400">open-source</span>{" "}
              projects, and writing{" "}
              <span className="font-semibold text-pink-500">
                technical articles
              </span>{" "}
              to share knowledge.
            </p>
            {/* Download CV Button */}
              <a
                href="/MyCV_Rudra (2).pdf" // <-- Path to your CV file
                download
                className="inline-block mt-6 px-10 py-4 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-all"
                >
              
                Download CV
              </a>
          </motion.div>

          {/* Code Block Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "PedroTech",
  origin: "🌍 Somewhere between a coffee shop and a terminal",
  role: "Fullstack Web Sorcerer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Education Timeline
          </h3>

          <div className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-4">
            {qualifications.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 ml-6"
              >
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                  <GraduationCap size={18} />
                </span>

                <div
                  className={`p-6 bg-gradient-to-r ${q.color} rounded-xl shadow-lg`}
                >
                  <h4 className="text-xl font-bold">{q.title}</h4>
                  <p className="text-sm opacity-90">{q.institute}</p>
                  <p className="font-semibold mt-2">{q.score}</p>
                  <p className="text-xs opacity-80 mt-1">{q.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
