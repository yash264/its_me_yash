import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/its_me_yash.jpg";


function Introduction() {

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
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white">
            <span className="block text-4xl sm:text-5xl font-semibold text-gray-300">
              Hello, I’m
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl text-red-400 bg-clip-text text-transparent mt-2 animate-gradient-x">
              Yash
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 max-w-lg mt-6">
            A passionate{" "}
            <span className="text-sky-400 font-semibold">Full Stack Developer</span>{" "}
            dedicated to building modern, scalable, and interactive web
            applications that bring ideas to life.
          </p>

        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-end relative"
        >
          {/* Glowing gradient ring */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 blur-3xl opacity-40 animate-pulse"></div>

          {/* Profile image */}
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

