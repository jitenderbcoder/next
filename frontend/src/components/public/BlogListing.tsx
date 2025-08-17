"use client"
import { useState } from "react";

export default function BlogListing() {
  // Sample data - replace with your actual data
  const categories = ["All", "React", "Next.js", "JavaScript", "CSS", "Node.js"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const blogs = [
    {
      id: 1,
      title: "React Hooks Explained",
      excerpt: "Learn how to use React Hooks to simplify your functional components",
      category: "React",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Next.js 14 Features",
      excerpt: "Explore the latest features in Next.js 14 including Server Actions",
      category: "Next.js",
      date: "June 2, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "New CSS features you should be using in 2023",
      category: "CSS",
      date: "April 28, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Node.js Performance Tips",
      excerpt: "Optimize your Node.js applications with these techniques",
      category: "Node.js",
      date: "July 10, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "JavaScript ES2023 Features",
      excerpt: "What's new in JavaScript this year",
      category: "JavaScript",
      date: "March 22, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "React Server Components",
      excerpt: "Understanding React's new Server Components architecture",
      category: "React",
      date: "August 5, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section className="dark:bg-gray-900 bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {blog.date} · {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 flex items-center">
                  Read article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredBlogs.length > 6 && (
          <div className="mt-12 text-center">
            <button className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}