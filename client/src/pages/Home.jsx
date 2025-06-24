import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from '../components/home/HeroSection';
import SearchBar from '../components/home/SearchBar';
import HowItWorks from '../components/home/HowItWorks';
import StatsSection from '../components/home/StatsSection';
import Testimonials from '../components/home/Testimonials';
import FeaturedProperties from '../components/home/FeaturedProperties';

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <SearchBar />
      <HowItWorks />
      <StatsSection />
      <FeaturedProperties />
      <Testimonials />
    </Box>
  );
};

export default Home;