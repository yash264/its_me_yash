import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/it's_me_Yash.jpg";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Python",
];

function Introduction() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Hi, I’m <span className="text-sky-400">Yash</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-lg mt-6">
            A passionate{" "}
            <span className="text-sky-400 font-semibold">Full Stack Developer</span>{" "}
            dedicated to building modern, scalable, and interactive web applications
            that bring ideas to life.
          </p>

          {/* Skill badges */}
          <div className="mt-10 flex flex-wrap gap-3 max-w-lg">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-lg transition-transform duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("topicSelection")}
            className="mt-10 inline-flex items-center justify-center px-10 py-3 rounded-full text-white font-medium text-lg
             bg-gradient-to-r from-rose-600 to-pink-500 hover:from-purple-600 hover:to-indigo-600
             shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-end relative"
        >
          {/* Glowing gradient ring with rectangular shape */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 blur-3xl opacity-40 animate-pulse"></div>

          {/* Profile image with rectangular rounded corners */}
          <div className="relative p-[5px] rounded-3xl bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 shadow-2xl">
            <img
              src={profileImg}
              alt="Profile"
              className="w-56 h-96 md:w-64 md:h-[400px] object-cover rounded-3xl border-4 border-[#0f172a]"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Introduction;

