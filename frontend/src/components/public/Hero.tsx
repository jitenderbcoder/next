export default function Hero() {
    return (
        <section className="dark:bg-black dark:border-white/[0.2] bg-white relative  overflow-hidden py-24 md:py-32">
            {/* <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute top-0 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            </div> */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
                        Build Amazing Apps
                    </span>
                    <span className="block text-white mt-2">Faster Than Ever</span>
                </h1>

                <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                    The complete toolkit for building modern, scalable applications.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                        Get Started
                    </button>
                    <button className="px-8 py-3.5 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}