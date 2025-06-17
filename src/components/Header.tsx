
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-600">
            WEDESIHOMES
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('properties')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Properties
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('properties')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                Properties
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
