import React from "react";
import Navbar from "@/components/Navbar";
const PricingSweet = () => {
  // Array of pricing plans
  const pricingPlans = [
    {
      name: "Free",
      description: "Start your journey",
      price: "$0",
      billing: "Forever free",
      borderColor: "border-pink-400",
      hoverBorderColor: "hover:border-pink-600",
      hoverShadowColor: "hover:shadow-pink-400/30",
      features: [
        "Basic Features",
        "5 Links",
        "Standard Support",
        "Limited Analytics",
      ],
    },
    {
      name: "Starter",
      description: "For small businesses",
      price: "$10/mo",
      billing: "Billed annually",
      borderColor: "border-purple-400",
      hoverBorderColor: "hover:border-purple-600",
      hoverShadowColor: "hover:shadow-purple-400/30",
      features: [
        "All Free Features",
        "20 Links",
        "Custom Themes",
        "Basic Analytics",
      ],
    },
    {
      name: "Pro",
      description: "For growing teams",
      price: "$25/mo",
      billing: "Billed annually",
      borderColor: "border-blue-400",
      hoverBorderColor: "hover:border-blue-600",
      hoverShadowColor: "hover:shadow-blue-400/30",
      features: [
        "All Starter Features",
        "Unlimited Links",
        "Advanced Analytics",
        "Priority Support",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      description: "For large enterprises",
      price: "$50/mo",
      billing: "Billed annually",
      borderColor: "border-teal-400",
      hoverBorderColor: "hover:border-teal-600",
      hoverShadowColor: "hover:shadow-teal-400/30",
      features: [
        "All Pro Features",
        "Custom Branding",
        "Team Collaboration",
        "24/7 Support",
      ],
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex flex-col items-center py-12">
      {/* Header Section */}
      <div className="text-center my-25">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2 tracking-wide">
          Discover Your Plan
        </h1>
        <p className="text-lg text-gray-600">
          Sweet pricing for every ambition.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex justify-center gap-8 flex-wrap px-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl p-6 w-72 border-2 ${plan.borderColor} shadow-md transform transition-all duration-300 hover:scale-105 ${plan.hoverBorderColor} ${plan.hoverShadowColor}`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
          <span className="absolute top-2 right-2 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Best Value
              </span>
            )}
            <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
            <p className="text-3xl font-bold text-gray-800 my-3">
              {plan.price}
            </p>
            <p className="text-gray-500 text-sm">{plan.billing}</p>
            <button className="bg-gray-800 text-white rounded-full px-6 py-2 mt-4 w-full text-sm hover:bg-blue-600 transition-colors">
              Select Plan
            </button>
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="text-pink-500 mr-2">✨</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PricingSweet;
