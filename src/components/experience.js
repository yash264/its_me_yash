import React from "react";
import { Experiences } from "../data/index";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaExternalLinkAlt } from "react-icons/fa"; // Import external link icon

function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const gradientColors = [
    "from-slate-900/90 via-blue-900/80 to-indigo-900/80",
    "from-slate-900/90 via-purple-900/80 to-violet-900/80",
    "from-slate-900/90 via-emerald-900/80 to-teal-900/80",
    "from-slate-900/90 via-rose-900/80 to-pink-900/80",
    "from-slate-900/90 via-amber-900/80 to-orange-900/80",
    "from-slate-900/90 via-cyan-900/80 to-sky-900/80",
  ];

  const accentColors = [
    { bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-400/30", text: "text-blue-200", icon: "text-blue-300" },
    { bg: "from-purple-500/10 to-violet-500/10", border: "border-purple-400/30", text: "text-purple-200", icon: "text-purple-300" },
    { bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-400/30", text: "text-emerald-200", icon: "text-emerald-300" },
    { bg: "from-rose-500/10 to-pink-500/10", border: "border-rose-400/30", text: "text-rose-200", icon: "text-rose-300" },
    { bg: "from-amber-500/10 to-orange-500/10", border: "border-amber-400/30", text: "text-amber-200", icon: "text-amber-300" },
    { bg: "from-cyan-500/10 to-sky-500/10", border: "border-cyan-400/30", text: "text-cyan-200", icon: "text-cyan-300" },
  ];

  return (
    <section className="min-h-screen w-full py-20 relative" id="experience">
      {/* Background with floating orbs */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-40 right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Showcasing diverse projects that highlight my skills, creativity, and impact in software development.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Experiences.map((experience, index) => {
            const colorIndex = index % gradientColors.length;
            const accent = accentColors[colorIndex];

            return (
              <motion.div
                key={experience.id}
                className="relative group cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ y: -10 }}
              >
                <div className={`relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br ${gradientColors[colorIndex]} backdrop-blur-xl shadow-2xl min-h-[400px] flex flex-col`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accent.bg} rounded-full blur-2xl -translate-y-16 translate-x-16`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Experience Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${accent.bg} border ${accent.border}`}>
                        <FaCode className={`text-2xl ${accent.icon}`} />
                      </div>
                      <div className="flex gap-3">
                        {experience.github && experience.github !== "#" && (
                          <motion.a
                            href={experience.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all ${accent.text}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="text-lg" />
                          </motion.a>
                        )}
                        {experience.liveLink && experience.liveLink !== "#" && (
                          <motion.a
                            href={experience.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all ${accent.text}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="text-lg" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Experience Title */}
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                      {experience.title}
                    </h3>

                    {/* Experience Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                      {experience.desc}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 rounded-full text-xs border font-medium transition-all hover:scale-105 ${accent.text} bg-white/10 border-white/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-3 mt-auto">
                      {experience.github && experience.github !== "#" && (
                        <motion.a
                          href={experience.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${accent.bg} border ${accent.border} text-white text-sm font-medium hover:shadow-lg transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaGithub className="text-base" />
                          GitHub
                        </motion.a>
                      )}
                      {experience.liveLink && experience.liveLink !== "#" && (
                        <motion.a
                          href={experience.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${accent.bg} border ${accent.border} text-white text-sm font-medium hover:shadow-lg transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt className="text-base" />
                          Live Link
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
