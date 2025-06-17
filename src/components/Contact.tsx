
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "We'll get back to you within 24 hours. Thanks for reaching out!",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email", 
      content: "hello@wedesihomes.com",
      subtext: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      content: "123 Innovation Hub, Tech City",
      subtext: "Visit us for a coffee!"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      content: "Available 24/7",
      subtext: "Instant support"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📸", handle: "@wedesihomes" },
    { name: "Twitter", icon: "🐦", handle: "@wedesihomes" },
    { name: "LinkedIn", icon: "💼", handle: "WEDESIHOMES" },
    { name: "Facebook", icon: "📘", handle: "wedesihomes" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your perfect student home? Let's chat! We're here to help make your accommodation 
            search smooth and exciting! 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-[#7CB518] to-[#6BA015] text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Send className="h-6 w-6 mr-2" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#7CB518] focus:ring-[#7CB518]"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#7CB518] focus:ring-[#7CB518]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#7CB518] focus:ring-[#7CB518]"
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#7CB518] focus:ring-[#7CB518]"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your housing needs, preferred location, budget, or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 border-gray-300 focus:border-[#7CB518] focus:ring-[#7CB518]"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-[#7CB518] hover:bg-[#6BA015] text-white py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message 🚀
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-[#001F54] mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-[#7CB518]/5 transition-colors">
                    <div className="text-[#7CB518] mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001F54]">{info.title}</h4>
                      <p className="text-gray-700 font-medium">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#001F54] to-[#001F54]/90 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-6">Follow Us on Social Media</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-[#7CB518]">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-br from-[#7CB518]/10 to-[#7CB518]/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-[#001F54] mb-4">Quick Response Promise ⚡</h4>
              <p className="text-gray-600 mb-4">
                We typically respond to inquiries within 2 hours during business hours. 
                For urgent matters, use our live chat for instant support!
              </p>
              <Button variant="outline" className="border-[#7CB518] text-[#7CB518] hover:bg-[#7CB518] hover:text-white">
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
