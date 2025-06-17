
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Backend integration point
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-[#7CB518]/10 to-[#001F54]/5">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#001F54] leading-tight mb-8 animate-fade-in">
            Find Your Perfect 
            <span className="text-[#7CB518] block">Student Home</span>
            Anywhere in the World
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed animate-fade-in">
            Discover amazing student accommodations in India, US, UK, Australia and beyond. 
            Your home away from home is just a click away! 🏠✨
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-scale-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7CB518] h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Enter city, university, or area..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-gray-200 focus:border-[#7CB518] focus:ring-[#7CB518]"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="bg-[#7CB518] hover:bg-[#6BA015] text-white px-8 h-14 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#7CB518] mb-2">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#7CB518] mb-2">1000+</div>
              <div className="text-gray-600">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#7CB518] mb-2">10K+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#7CB518] mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
