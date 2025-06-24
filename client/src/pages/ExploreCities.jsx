import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import CountrySection from '../components/cities/CountrySection';

const countries = [
  {
    name: 'India',
    flag: '🇮🇳',
    cities: [
      { name: 'Mumbai', properties: 120, image: '/api/placeholder/300/200' },
      { name: 'Delhi', properties: 95, image: '/api/placeholder/300/200' },
      { name: 'Bangalore', properties: 150, image: '/api/placeholder/300/200' },
      { name: 'Pune', properties: 80, image: '/api/placeholder/300/200' },
    ],
  },
  {
    name: 'UK',
    flag: '🇬🇧',
    cities: [
      { name: 'London', properties: 250, image: '/api/placeholder/300/200' },
      { name: 'Manchester', properties: 120, image: '/api/placeholder/300/200' },
      { name: 'Birmingham', properties: 90, image: '/api/placeholder/300/200' },
      { name: 'Edinburgh', properties: 75, image: '/api/placeholder/300/200' },
    ],
  },
  {
    name: 'USA',
    flag: '🇺🇸',
    cities: [
      { name: 'New York', properties: 300, image: '/api/placeholder/300/200' },
      { name: 'Los Angeles', properties: 180, image: '/api/placeholder/300/200' },
      { name: 'Chicago', properties: 140, image: '/api/placeholder/300/200' },
      { name: 'Boston', properties: 110, image: '/api/placeholder/300/200' },
    ],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    cities: [
      { name: 'Sydney', properties: 200, image: '/api/placeholder/300/200' },
      { name: 'Melbourne', properties: 180, image: '/api/placeholder/300/200' },
      { name: 'Brisbane', properties: 100, image: '/api/placeholder/300/200' },
      { name: 'Perth', properties: 70, image: '/api/placeholder/300/200' },
    ],
  },
];

const ExploreCities = () => {
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.navyBlue">
              Explore Student Cities 🌍
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Discover verified student accommodations in top educational hubs worldwide
            </Text>
          </VStack>

          <Tabs variant="soft-rounded" colorScheme="green" w="full">
            <TabList justifyContent="center" flexWrap="wrap">
              {countries.map((country) => (
                <Tab key={country.name} fontSize="lg" m={1}>
                  {country.flag} {country.name}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {countries.map((country) => (
                <TabPanel key={country.name}>
                  <CountrySection country={country} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
};

export default ExploreCities;