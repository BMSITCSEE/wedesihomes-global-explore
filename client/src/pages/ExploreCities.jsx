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
      { name: 'Glasgow', properties: 0, image: '/assets/edinburgh.jpg' },
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
  // Append these to the countries array (or replace existing ones like UK)
  {
    name: 'USA',
    flag: '🇺🇸',
    cities: [
      { name: 'Boston', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424137/boston_rqtiem.webp' },
      { name: 'New York', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424138/new_v0jbyx.webp' },
      { name: 'San Francisco', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424138/san_kncx1o.webp' },
      { name: 'Chicago', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424137/chicago_uhuuqh.webp' },
    ],
  },
  
  {
    name: 'Germany',
    flag: '🇩🇪',
    cities: [
      { name: 'Munich', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424638/munich_wahk2a.webp' },
      { name: 'Berlin', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424638/berlin_fwh6ym.webp' },
      { name: 'Aachen', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424638/Aachen_gnzmkx.webp' },
      { name: 'Frankfurt', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424638/Frankfurt_wbt6r7.webp' },
    ],
  },
  {
    name: 'Spain',
    flag: '🇪🇸',
    cities: [
      { name: 'Madrid', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425218/madrid_iubyzp.jpg' },
      { name: 'Barcelona', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425218/barcelona_nkwwrd.jpg' },
      { name: 'Valencia', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425219/Valencia_jd2uqn.jpg' },
      { name: 'Granada', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425218/Granada_t9ujns.jpg' },
    ],
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    cities: [
      { name: 'Milan', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425218/Milan_dkugn4.jpg' },
      { name: 'Rome', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425219/Rome_d514ba.jpg' },
      { name: 'Florence', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425218/Florence_bhocof.jpg' },
      { name: 'Bologna', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425218/Bologna_uw4ubt.jpg' },
    ],
  },
  {
    name: 'France',
    flag: '🇫🇷',
    cities: [
      { name: 'Paris', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425439/Paris_abjnq0.jpg' },
      { name: 'Lyon', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425439/Lyon_tpyco3.jpg' },
      { name: 'Toulouse', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425439/Toulouse_tsssr7.jpg' },
      { name: 'Montpellier', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425439/Montpellier_xzzhfk.jpg' },
    ],
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    cities: [
      { name: 'Lisbon', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425714/Lisbon_gqee4r.jpg' },
      { name: 'Porto', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425715/Porto_ajrxnt.jpg' },
      { name: 'Coimbra', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425714/Coimbra_sjudoe.jpg' },
      { name: 'Braga', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425715/Braga_hoiku5.jpg' },
    ],
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    cities: [
      { name: 'Dubai', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425604/dubai_badyu8.avif' },
      { name: 'Sharjah', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425619/sharjah_lepvnw.avif' },
      { name: 'Ajman', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425603/ajman_tjrxnu.avif' },
      { name: 'Abu Dhabi', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425699/abudhabi_za1ibr.avif' },
    ],
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    cities: [
      { name: 'Vienna', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425349/vienna_bmimzc.avif' },
      { name: 'Graz', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425349/graz_qlxuy8.avif' },
      { name: 'Innsbruck', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425349/innsbruck_i7olti.avif' },
      { name: 'Salzburg', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754425349/salzburg_c2tjrq.avif' },
    ],
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    cities: [
      { name: 'Tokyo', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424837/tokyo_bw5q8j.avif' },
      { name: 'Kyoto', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424836/kyoto_myvmss.avif' },
      { name: 'Osaka', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424837/osaka_ggo22m.avif' },
      { name: 'Fukuoka', properties: 0, image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754424836/fukuoka_gf5nwv.avif' },
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
