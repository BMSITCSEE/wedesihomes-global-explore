
import React from 'react';
import { Users, Heart, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Student-Focused",
      description: "Every detail designed with student life in mind, from study spaces to social areas."
    },
    {
      icon: <Heart className="h-12 w-12 text-orange-600" />,
      title: "Community First",
      description: "Building connections and friendships that last beyond university years."
    },
    {
      icon: <Award className="h-12 w-12 text-orange-600" />,
      title: "Quality Assured",
      description: "Premium accommodations maintained to the highest standards of comfort and safety."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About WEDESIHOMES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than just a housing provider – we're your partners in creating an exceptional university experience. 
            Our mission is to provide students with comfortable, affordable, and community-driven accommodations that feel like home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-orange-50 transition-colors">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Story</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Founded by students, for students, WEDESIHOMES understands the unique challenges of finding quality accommodation 
            during university years. We've created a platform that not only provides housing but builds communities where 
            students can thrive academically and socially.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
