
import React from 'react';
import { Users, Heart, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Globe className="h-12 w-12 text-[#7CB518]" />,
      title: "Global Reach",
      description: "Connecting students worldwide with quality accommodations across continents."
    },
    {
      icon: <Users className="h-12 w-12 text-[#7CB518]" />,
      title: "Student-First",
      description: "Every decision we make puts student needs, comfort, and success at the center."
    },
    {
      icon: <Heart className="h-12 w-12 text-[#7CB518]" />,
      title: "Community Driven",
      description: "Building lasting connections and friendships that extend beyond university years."
    },
    {
      icon: <Award className="h-12 w-12 text-[#7CB518]" />,
      title: "Quality Assured",
      description: "Rigorously vetted properties meeting our high standards for safety and comfort."
    }
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", emoji: "👩‍💼" },
    { name: "Mike Chen", role: "CTO", emoji: "👨‍💻" },
    { name: "Emma Davis", role: "Head of Operations", emoji: "👩‍🎯" },
    { name: "Alex Rivera", role: "Student Experience Lead", emoji: "👨‍🎓" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-6">About WEDESIHOMES</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to revolutionize student housing globally! 🌍 
            Founded by students who understand the struggle of finding quality accommodations, 
            we're building a platform that makes the search simple, transparent, and exciting.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:bg-[#7CB518]/5 transition-all duration-300 group hover:scale-105">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#001F54] mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-br from-[#7CB518]/10 to-[#001F54]/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#001F54] mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-600">
              The passionate minds behind WEDESIHOMES, working hard to make your student life amazing! ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h4 className="text-xl font-bold text-[#001F54] mb-2">{member.name}</h4>
                <p className="text-[#7CB518] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
