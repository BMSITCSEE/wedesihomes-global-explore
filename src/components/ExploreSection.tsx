
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ExploreSection = () => {
  const cities = [
    {
      country: "India",
      cities: ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"],
      image: "🇮🇳",
      bgColor: "from-orange-100 to-orange-200"
    },
    {
      country: "United States",
      cities: ["New York", "Los Angeles", "Boston", "Chicago", "San Francisco"],
      image: "🇺🇸",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      country: "United Kingdom", 
      cities: ["London", "Manchester", "Edinburgh", "Birmingham", "Liverpool"],
      image: "🇬🇧",
      bgColor: "from-red-100 to-red-200"
    },
    {
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
      image: "🇦🇺",
      bgColor: "from-green-100 to-green-200"
    }
  ];

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-6">
            Explore Student Cities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing student accommodations in top destinations worldwide. 
            Your perfect home is waiting! 🌍
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((location, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${location.bgColor} flex items-center justify-center text-6xl`}>
                {location.image}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#001F54] mb-4">{location.country}</h3>
                <div className="space-y-2 mb-6">
                  {location.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="text-gray-600 hover:text-[#7CB518] transition-colors cursor-pointer">
                      {city}
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-[#7CB518] hover:bg-[#6BA015] text-white group-hover:bg-[#001F54] transition-all duration-300"
                >
                  View Properties
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
