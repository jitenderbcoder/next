export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "Community access"
      ],
      cta: "Get started",
      featured: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      features: [
        "Up to 20 projects",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Team features"
      ],
      cta: "Popular",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited projects",
        "Premium support",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise options"
      ],
      cta: "Contact us",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Choose a plan that works for your team
          </p>
        </div>

        <div className="mt-12 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 border rounded-lg shadow-sm ${
                plan.featured
                  ? "border-indigo-500 ring-1 ring-indigo-500"
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="ml-1 text-lg font-medium text-gray-500">
                  {plan.period}
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full px-4 py-2 border rounded-md text-sm font-medium ${
                  plan.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 border-transparent"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}