"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Variants } from "framer-motion";
// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  }
};

const trendingItem: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.5,
      ease: "backOut"
    }
  })
};

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="dark:bg-gray-900 dark:border-white/[0.1] bg-accent relative overflow-hidden py-12 md:py-20 flex justify-center items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Main heading */}
          <motion.div variants={item}>
            <h1 className="font-extrabold tracking-tight mb-2">
              <motion.span
                className="text-3xl md:text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Coderschain
              </motion.span>
              <motion.span
                className="block text-gray-800 dark:text-white mt-4 text-3xl md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Learn, Build, Share
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            variants={item}
          >
            Discover articles, tutorials and resources for modern development
          </motion.p>

          {/* Search bar */}
          <motion.div
            className="mt-10 max-w-2xl mx-auto"
            variants={item}
          >
            <div className="relative">
              <motion.input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, tutorials..."
                className="w-full px-6 py-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
              <motion.button
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium"
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(to right, #2563eb, #7c3aed)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-2"
            variants={container}
          >
            {["React", "Next.js", "JavaScript", "CSS", "Node.js"].map((category) => (
              <motion.span
                key={category}
                className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                variants={item}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
              >
                {category}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Trending articles */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h3
            className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Trending Now
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                title: "React Server Components",
                category: "React",
                reads: "12.4k"
              },
              {
                title: "Next.js 14 Features",
                category: "Next.js",
                reads: "8.7k"
              },
              {
                title: "CSS Container Queries",
                category: "CSS",
                reads: "5.2k"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={trendingItem}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    {article.reads}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                  {article.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

    </section>
  );
}