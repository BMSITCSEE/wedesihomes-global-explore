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
import PropertyCard from '../properties/PropertyCard';

const featuredProperties = [
  {
    id: 1,
    name: 'Sunny Student Studios',
    city: 'London',
    country: 'UK',
    price: '£850/month',
    image: '/assets/sunny-studios.jpg',
    rating: 4.8,
    amenities: ['WiFi', 'Gym', 'Study Room'],
  },
  {
    id: 2,
    name: 'Campus View Apartments',
    city: 'Sydney',
    country: 'Australia',
    price: 'A$1200/month',
    image: '/assets/campus-view.jpg',
    rating: 4.9,
    amenities: ['Pool', 'WiFi', 'Security'],
  },
  {
    id: 3,
    name: 'Metro Student Living',
    city: 'New York',
    country: 'USA',
    price: '$1500/month',
    image: '/assets/metro-living.jpg',
    rating: 4.7,
    amenities: ['Gym', 'Lounge', 'Kitchen'],
  },
];

const FeaturedProperties = () => {
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

          <Button variant="primary" size="lg">
            View All Properties →
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default FeaturedProperties;
