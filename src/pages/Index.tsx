
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExploreSection from '@/components/ExploreSection';
import HowItWorks from '@/components/HowItWorks';
import PropertyOwners from '@/components/PropertyOwners';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  console.log('Index page rendering...');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ExploreSection />
      <HowItWorks />
      <PropertyOwners />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
