"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <motion.p
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ damping: 6, stiffness: 300 }}
        initial="hidden"
        animate="visible"
        className="rounded-lg hover:bg-black dark:border-white dark:hover:border-sky-400 hover:text-amber-500 hover:border-sky-400 border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold md:block "
      >
        QuizifyAI
      </motion.p>
    </div>
  );
};

export default Logo;
