
import React from 'react';
import { Home, Wifi, Car, Shield, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Fully Furnished",
      description: "Move in ready with all essential furniture and appliances"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "High-Speed Internet",
      description: "Unlimited Wi-Fi perfect for studying and streaming"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Parking Available",
      description: "Secure parking spaces for residents"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Security",
      description: "Round-the-clock security for your peace of mind"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Spaces",
      description: "Common areas for studying and socializing"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Leasing",
      description: "Semester and yearly lease options available"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a comfortable and successful university experience, 
            all included in one convenient package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
