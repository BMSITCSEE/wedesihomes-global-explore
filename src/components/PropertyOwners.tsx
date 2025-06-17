
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users, Clock } from 'lucide-react';

const PropertyOwners = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Maximize Revenue",
      description: "Earn up to 30% more with our dynamic pricing and global reach"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Tenants",
      description: "All students are background-checked and verified before booking"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Full Management",
      description: "We handle everything from marketing to maintenance requests"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support for both you and your tenants"
    }
  ];

  return (
    <section id="property-owners" className="py-20 bg-[#001F54]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              List Your Property with 
              <span className="text-[#7CB518] block">WEDESIHOMES</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of property owners who trust us to manage their student accommodations. 
              Earn more, stress less! 💰
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-[#7CB518] mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#7CB518] hover:bg-[#6BA015] text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                List Your Property
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#001F54] px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#7CB518] to-[#6BA015] rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-[#001F54] mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">Join our network of successful property owners today!</p>
                <Button className="bg-[#001F54] hover:bg-[#001F54]/90 text-white w-full">
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOwners;
