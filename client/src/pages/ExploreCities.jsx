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
    name: 'Ireland',
    flag: '🇮🇪',
    cities: [
      { name: 'Dublin', properties: 120, image: '/assets/dublin.jpg' },
      { name: 'Galway', properties: 95, image: '/assets/galway.jpg' },
      { name: 'Cork', properties: 80, image: '/assets/cork.jpg' },
      { name: 'Dublin Castle', properties: 50, image: '/assets/dublin-castle.jpg' },
    ],
  },
  {
    name: 'UK',
    flag: '🇬🇧',
    cities: [
      { name: 'London', properties: 250, image: '/assets/uk/london.jpg' },
      { name: 'Manchester', properties: 120, image: '/assets/uk/manchester.jpg' },
      { name: 'Birmingham', properties: 90, image: '/assets/uk/birmingham.jpg' },
      { name: 'Edinburgh', properties: 75, image: '/assets/uk/edinburgh.jpg' },
    ],
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    cities: [
      { name: 'Auckland', properties: 150, image: '/assets/auckland.jpg' },
      { name: 'Sky Tower', properties: 60, image: '/assets/sky-tower.jpg' },
      { name: 'NZ Museum', properties: 70, image: '/assets/nz-museum.jpg' },
      { name: 'Christchurch', properties: 50, image: '/assets/christchurch.jpg' },
    ],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    cities: [
      { name: 'Sydney', properties: 200, image: '/assets/au/sydney.jpg' },
      { name: 'Melbourne', properties: 180, image: '/assets/au/melbourne.jpg' },
      { name: 'Brisbane', properties: 100, image: '/assets/au/brisbane.jpg' },
      { name: 'Perth', properties: 70, image: '/assets/au/perth.jpg' },
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
