export default function BlogSection() {
    const posts = [
        {
            id: 1,
            title: "Getting Started with React in 2023",
            excerpt: "Learn how to set up a modern React development environment with the latest tools and best practices.",
            date: "May 15, 2023",
            readTime: "5 min read",
            category: "React",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS Layouts",
            excerpt: "Advanced techniques for creating responsive layouts with Tailwind CSS that will boost your productivity.",
            date: "June 2, 2023",
            readTime: "8 min read",
            category: "CSS",
            image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "State Management in 2023: Beyond Redux",
            excerpt: "Exploring modern state management solutions like Zustand, Jotai, and React Query for your next project.",
            date: "June 18, 2023",
            readTime: "10 min read",
            category: "JavaScript",
            image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Latest Articles
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        Learn from our expert team and stay updated with the latest trends
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover"
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        {post.category}
                                    </p>
                                    <a href="#" className="block mt-2">
                                        <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                                            {post.title}
                                        </h3>
                                        <p className="mt-3 text-base text-gray-500">
                                            {post.excerpt}
                                        </p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        View all articles
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}