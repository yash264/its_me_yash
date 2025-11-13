import React from 'react'
import { motion } from 'framer-motion'
import {
    FaTrophy,
    FaMedal,
    FaAward,
    FaCrown,
    FaCode,
    FaUsers,
    FaExternalLinkAlt,
    FaStar
} from "react-icons/fa"
import { achievement } from "../data/index"


const Achievement = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
            },
        }),
    }

    const gradientCombos = [
        {
            bg: "from-amber-900/90 via-yellow-900/80 to-orange-900/80",
            accent: "from-amber-500/15 to-yellow-500/15",
            border: "border-amber-400/30",
            text: "text-amber-200",
            icon: "text-amber-300",
            iconBg: "from-amber-400/20 to-yellow-400/20",
            orb: "bg-amber-500/20"
        },
        {
            bg: "from-slate-900/90 via-purple-900/80 to-violet-900/80",
            accent: "from-purple-500/15 to-violet-500/15",
            border: "border-purple-400/30",
            text: "text-purple-200",
            icon: "text-purple-300",
            iconBg: "from-purple-400/20 to-violet-400/20",
            orb: "bg-purple-500/20"
        },
        {
            bg: "from-slate-900/90 via-cyan-900/80 to-teal-900/80",
            accent: "from-cyan-500/15 to-teal-500/15",
            border: "border-cyan-400/30",
            text: "text-cyan-200",
            icon: "text-cyan-300",
            iconBg: "from-cyan-400/20 to-teal-400/20",
            orb: "bg-cyan-500/20"
        }
    ]

    const achievementIcons = [FaCrown, FaMedal, FaTrophy, FaAward, FaCode, FaUsers]

    const getAchievementRank = (title) => {
        if (title.toLowerCase().includes('winner') || title.toLowerCase().includes('1st')) return '🥇'
        if (title.toLowerCase().includes('second') || title.toLowerCase().includes('2nd')) return '🥉'
        return '🏆'
    }

    return (
        <section className="min-h-screen w-full py-20 relative" id="achievements">
            {/* Background with floating orbs */}
            <div className="absolute inset-0 -z-10">
                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-20 left-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-40 right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
                    className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
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
                        My <span className="text-green-600">Achivement</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        🏆 Achieved a strong foundation in Full Stack Development
                    </p>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {achievement.map((achievement, index) => {
                        const colorScheme = gradientCombos[index % gradientCombos.length]
                        const IconComponent = achievementIcons[index % achievementIcons.length]
                        const rankEmoji = getAchievementRank(achievement.title)

                        return (
                            <motion.div
                                key={achievement.id}
                                className="relative group cursor-pointer"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                whileHover={{ y: -15, scale: 1.02 }}
                            >
                                <div className={`relative overflow-hidden rounded-3xl p-8 h-full border border-white/10 bg-gradient-to-br ${colorScheme.bg} backdrop-blur-xl shadow-2xl min-h-[420px] flex flex-col`}>
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Decorative elements */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorScheme.accent} rounded-full blur-2xl -translate-y-20 translate-x-20`} />
                                    <div className={`absolute bottom-0 left-0 w-32 h-32 ${colorScheme.orb} rounded-full blur-2xl translate-y-16 -translate-x-16`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Achievement Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorScheme.iconBg} border ${colorScheme.border} relative`}>
                                                <IconComponent className={`text-3xl ${colorScheme.icon}`} />
                                                <div className="absolute -top-2 -right-2 text-2xl">
                                                    {rankEmoji}
                                                </div>
                                            </div>

                                            {achievement.link && achievement.link !== "#" && (
                                                <motion.a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all ${colorScheme.text}`}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FaExternalLinkAlt className="text-lg" />
                                                </motion.a>
                                            )}
                                        </div>

                                        {/* Achievement Title */}
                                        <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight">
                                            {achievement.title}
                                        </h3>

                                        {/* Achievement Description */}
                                        <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                                            {achievement.desc}
                                        </p>

                                        {/* Achievement Stats/Badge */}
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colorScheme.accent} border ${colorScheme.border}`}>
                                                <FaStar className={`text-sm ${colorScheme.icon}`} />
                                                <span className={`text-sm font-medium ${colorScheme.text}`}>
                                                    Achievement
                                                </span>
                                            </div>

                                            {achievement.link && achievement.link !== "#" && (
                                                <motion.a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    View
                                                    <FaExternalLinkAlt className="text-xs" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Animated Border */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, transparent 0%, ${colorScheme.text.replace('text-', 'rgba(')}0.3) 50%, transparent 100%)`,
                                            padding: '1px',
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'exclude'
                                        }} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Achievement;