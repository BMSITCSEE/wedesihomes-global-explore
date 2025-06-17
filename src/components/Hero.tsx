
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Dream <span className="text-orange-600">Student Home</span> Awaits
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover premium student accommodations designed for comfort, community, and academic success. 
              From cozy studios to shared apartments, we make finding your perfect home away from home effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg"
              >
                Find Your Home
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-lg"
              >
                View Properties
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Accommodations</h3>
                  <p className="text-gray-600">Modern, furnished, and ready for students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
