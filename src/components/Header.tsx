
import React, { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4db46097-af03-455b-8399-e7c026afa69a.png" 
              alt="WEDESIHOMES" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-[#001F54] hover:text-[#7CB518] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('explore')} 
              className="text-[#001F54] hover:text-[#7CB518] transition-colors duration-300 font-medium"
            >
              Explore Cities
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-[#001F54] hover:text-[#7CB518] transition-colors duration-300 font-medium"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('property-owners')} 
              className="text-[#001F54] hover:text-[#7CB518] transition-colors duration-300 font-medium"
            >
              For Property Owners
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[#001F54] hover:text-[#7CB518] transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-[#001F54] hover:text-[#7CB518] transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-[#001F54] text-[#001F54] hover:bg-[#001F54] hover:text-white transition-all duration-300"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button 
              className="bg-[#7CB518] hover:bg-[#6BA015] text-white transition-all duration-300"
            >
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#001F54]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-[#001F54] hover:text-[#7CB518] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('explore')} className="text-left py-2 text-[#001F54] hover:text-[#7CB518] transition-colors">
                Explore Cities
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 text-[#001F54] hover:text-[#7CB518] transition-colors">
                How it Works
              </button>
              <button onClick={() => scrollToSection('property-owners')} className="text-left py-2 text-[#001F54] hover:text-[#7CB518] transition-colors">
                For Property Owners
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-[#001F54] hover:text-[#7CB518] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-[#001F54] hover:text-[#7CB518] transition-colors">
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-[#001F54] text-[#001F54]">
                  Login
                </Button>
                <Button className="bg-[#7CB518] hover:bg-[#6BA015] text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
