
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Explore",
      links: [
        { name: "Search Properties", href: "#explore" },
        { name: "Popular Cities", href: "#explore" },
        { name: "University Guides", href: "#" },
        { name: "Student Resources", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Property Management", href: "#property-owners" },
        { name: "Virtual Tours", href: "#" },
        { name: "Booking Support", href: "#contact" },
        { name: "24/7 Assistance", href: "#contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Press & Media", href: "#" },
        { name: "Partner with Us", href: "#property-owners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#contact" },
        { name: "Student FAQs", href: "#" },
        { name: "Safety & Security", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" }
  ];

  return (
    <footer className="bg-[#001F54] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/4db46097-af03-455b-8399-e7c026afa69a.png" 
                alt="WEDESIHOMES" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Making student accommodation search simple, transparent, and exciting worldwide. 
              Your perfect student home is just a click away! 🌍✨
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-[#7CB518] hover:bg-[#6BA015] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4 text-[#7CB518]">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-[#7CB518] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#7CB518]/10 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated! 📫</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest student accommodation deals, city guides, and exclusive offers 
              delivered straight to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-[#001F54] border-0 focus:ring-2 focus:ring-[#7CB518]"
              />
              <button className="bg-[#7CB518] hover:bg-[#6BA015] text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} WEDESIHOMES. All rights reserved. Made with ❤️ for students worldwide.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#7CB518] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#7CB518] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#7CB518] text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#7CB518] text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
