export default function Testimonials() {
  const testimonials = [
    {
      quote: "This platform transformed our development workflow. We shipped 40% faster!",
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The best developer experience I've had in my 10 years of coding.",
      name: "Michael Chen",
      role: "Lead Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Our team productivity increased dramatically after switching.",
      name: "Emma Rodriguez",
      role: "Engineering Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Developers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Join thousands of satisfied users building with our platform
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-600 mt-4">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}