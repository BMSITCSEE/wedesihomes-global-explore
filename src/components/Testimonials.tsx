
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "State University",
      rating: 5,
      text: "WEDESIHOMES made my university experience so much better. The community feel and modern amenities are exactly what I needed as a student."
    },
    {
      name: "Mike Chen",
      university: "Tech Institute",
      rating: 5,
      text: "Great value for money and the location is perfect. The study spaces helped me maintain my GPA while enjoying a social environment."
    },
    {
      name: "Emma Davis",
      university: "City College",
      rating: 5,
      text: "The staff is incredibly helpful and responsive. I felt safe and comfortable throughout my entire stay. Highly recommend!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from students who have made WEDESIHOMES their home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
