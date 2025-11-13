import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJsSquare,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiCplusplus,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiFlask,
    SiSocketdotio,
    SiVercel,
} from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-300" },
        { name: "Flask", icon: SiFlask, color: "text-gray-300" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Vercel", icon: SiVercel, color: "text-black" },
    ];

    const topRow = skills.slice(0, 6);
    const bottomRow = skills.slice(6, 12);

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
            },
        }),
    };

    return (
        <section
            id="skills"
            className="relative min-h-screen w-full py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50"
        >
            {/* Floating orbs background */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-20 left-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My <span className="text-orange-600">Skills</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        💻 Tools and technologies I use to build fast, modern, and scalable applications.
                    </p>
                </motion.div>

                {/* Top Row */}
                <div className="flex flex-wrap justify-center gap-10 mb-14">
                    {topRow.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={iconVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={index}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="flex flex-col items-center"
                            >
                                <Icon className={`text-6xl md:text-7xl ${skill.color}`} />
                                <span className="mt-3 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Row */}
                <div className="flex flex-wrap justify-center gap-10">
                    {bottomRow.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={iconVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={index + topRow.length}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="flex flex-col items-center"
                            >
                                <Icon className={`text-6xl md:text-7xl ${skill.color}`} />
                                <span className="mt-3 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
