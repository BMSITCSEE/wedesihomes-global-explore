import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import CityCard from './CityCard';

const CountrySection = ({ country }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
      {country.cities.map((city) => (
        <CityCard key={city.name} city={city} country={country.name} />
      ))}
    </SimpleGrid>
  );
};

export default CountrySection;