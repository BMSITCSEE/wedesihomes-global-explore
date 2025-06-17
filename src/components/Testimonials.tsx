
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "Harvard University",
      location: "Boston, USA",
      rating: 5,
      text: "WEDESIHOMES made my study abroad experience incredible! Found my perfect home in just 2 days. The virtual tour was so detailed, I felt like I was already there! 🏠✨",
      emoji: "👩‍🎓"
    },
    {
      name: "Raj Patel",
      university: "University of Melbourne",
      location: "Melbourne, Australia", 
      rating: 5,
      text: "As an international student, I was worried about finding accommodation. WEDESIHOMES team supported me throughout the process. My apartment is amazing and the community is so welcoming! 🇦🇺",
      emoji: "👨‍💻"
    },
    {
      name: "Emma Thompson",
      university: "University of Edinburgh",
      location: "Edinburgh, UK",
      rating: 5,
      text: "Best decision ever! The location is perfect, just 5 minutes from campus. The study spaces helped me ace my exams, and I made lifelong friends here. Highly recommend! 🎓💫",
      emoji: "👩‍🔬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#7CB518]/5 to-[#001F54]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-6">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from students who found their perfect homes through WEDESIHOMES! 🌟
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#7CB518]/20" />
              
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.emoji}</div>
                <div>
                  <h4 className="font-bold text-[#001F54] text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.university}</p>
                  <p className="text-sm text-[#7CB518] font-medium">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#7CB518] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7CB518] mb-2">10K+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7CB518] mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7CB518] mb-2">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
