
import React from 'react';
import { Search, Heart, Home } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12" />,
      step: "01",
      title: "Search & Discover",
      description: "Browse through thousands of verified student accommodations worldwide. Filter by location, budget, and amenities."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      step: "02", 
      title: "Book with Confidence",
      description: "Secure your perfect home with our easy booking process. Virtual tours and verified reviews help you choose wisely."
    },
    {
      icon: <Home className="h-12 w-12" />,
      step: "03",
      title: "Move in & Enjoy",
      description: "Hassle-free check-in and 24/7 support. Focus on your studies while we take care of your comfort."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#7CB518]/5 to-[#001F54]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding your dream student home has never been easier. 
            Follow these simple steps and you'll be settled in no time! 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-[#7CB518] z-10 transform translate-x-4"></div>
              )}
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group-hover:scale-105">
                <div className="bg-gradient-to-br from-[#7CB518] to-[#6BA015] text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-[#001F54] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#001F54] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
