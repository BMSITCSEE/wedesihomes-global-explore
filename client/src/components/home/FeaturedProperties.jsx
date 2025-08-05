import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // ✅ added
import PropertyCard from '../properties/PropertyCard';

const featuredProperties = [
  {
    id: 1,
    name: 'University Square',
    city: 'Melbourne',
    country: 'Australia',
    price: '$400 per week',
    image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754237882/univbig_iz4slr.webp',
    rating: 4.8,
    amenities: ['WiFi', 'Gym', 'Study Room'],
  },
  {
    id: 2,
    name: 'Yugo Adelaide City',
    city: 'Adelaide',
    country: 'Australia',
    price: '$350 per week',
    image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754241849/adecbig_f1kuvl.webp',
    rating: 4.9,
    amenities: ['Pool', 'WiFi', 'Security'],
  },
  {
    id: 3,
    name: 'Yugo Perth City',
    city: 'Perth',
    country: 'Australia',
    price: '$380 per week',
    image: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754241819/pertcbig_c0sfti.webp',
    rating: 4.7,
    amenities: ['Gym', 'Lounge', 'Kitchen'],
  },
];

const FeaturedProperties = () => {
  const navigate = useNavigate(); // ✅ added

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.navyBlue">
              Featured Properties ✨
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Hand-picked accommodations loved by students worldwide
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </SimpleGrid>

          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/explore-cities')} // ✅ now functional
          >
            View All Properties →
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default FeaturedProperties;
