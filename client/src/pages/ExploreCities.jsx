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
  SimpleGrid,
  Image,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // ✅ Added

const countries = [
  {
    name: 'Ireland',
    flag: '🇮🇪',
    cities: [
      { name: 'Dublin', properties: 0, image: '/assets/dublin.jpg' },
      { name: 'Galway', properties: 0, image: '/assets/galway.jpg' },
      { name: 'Cork', properties: 0, image: '/assets/cork.jpg' },
      { name: 'Dublin Castle', properties: 0, image: '/assets/dublin-castle.jpg' },
    ],
  },
  {
    name: 'UK',
    flag: '🇬🇧',
    cities: [
      { name: 'London', properties: 0, image: '/assets/london.jpg' },
      { name: 'Manchester', properties: 0, image: '/assets/manchester.jpg' },
      { name: 'Birmingham', properties: 0, image: '/assets/birmingham.jpg' },
      { name: 'Edinburgh', properties: 0, image: '/assets/edinburgh.jpg' },
    ],
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    cities: [
      { name: 'Auckland', properties: 0, image: '/assets/auckland.jpg' },
      { name: 'Sky Tower', properties: 0, image: '/assets/sky-tower.jpg' },
      { name: 'NZ Museum', properties: 0, image: '/assets/nz-museum.jpg' },
      { name: 'Christchurch', properties: 0, image: '/assets/christchurch.jpg' },
    ],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    cities: [
      { name: 'Sydney', properties: 0, image: '/assets/sydney.jpg' },
      { name: 'Melbourne', properties: 2, image: '/assets/melbourne.jpg' },
      { name: 'Adelaide', properties: 1, image: '/assets/brisbane.jpg' },
      { name: 'Perth', properties: 1, image: '/assets/perth.jpg' },
    ],
  },
];

const ExploreCities = () => {
  const navigate = useNavigate(); // ✅ navigation hook

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
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    {country.cities.map((city) => (
                      <Box
                        key={city.name}
                        bg="white"
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="md"
                        p={4}
                      >
                        <Image
                          src={city.image}
                          alt={city.name}
                          w="100%"
                          h="150px"
                          objectFit="cover"
                          borderRadius="md"
                        />
                        <VStack align="start" mt={4}>
                          <Text fontWeight="bold" fontSize="lg" color="brand.navyBlue">
                            {city.name}
                          </Text>
                          <Text color="gray.600">{city.properties} properties</Text>
                          <Button
                            variant="outline"
                            colorScheme="green"
                            onClick={() => navigate(`/properties/${encodeURIComponent(city.name)}`)} // ✅ Added
                          >
                            View Properties
                          </Button>
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>
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
