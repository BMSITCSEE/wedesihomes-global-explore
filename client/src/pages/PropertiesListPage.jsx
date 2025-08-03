import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  Badge,
  HStack,
  Icon,
  useToast,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { FaBed, FaBath, FaMapMarkerAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { propertyService } from '../services/property.service';

const PropertiesListPage = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedProperties, setSavedProperties] = useState(new Set());

  useEffect(() => {
    fetchProperties();
  }, [cityName]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await propertyService.getPropertiesByCity(cityName);
      setProperties(response.properties || []);
    } catch (error) {
      console.error('Error fetching properties:', error);
      toast({
        title: 'Error',
        description: 'Failed to load properties',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProperty = async (propertyId) => {
    try {
      await propertyService.toggleSaveProperty(propertyId);
      
      const newSavedProperties = new Set(savedProperties);
      if (savedProperties.has(propertyId)) {
        newSavedProperties.delete(propertyId);
        toast({
          title: 'Removed from saved',
          status: 'info',
          duration: 2000,
          isClosable: true,
        });
      } else {
        newSavedProperties.add(propertyId);
        toast({
          title: 'Saved to favorites',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
      setSavedProperties(newSavedProperties);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Please login to save properties',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Spinner size="xl" color="brand.parrotGreen" />
          <Text>Loading properties in {cityName}...</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.navyBlue">
              Properties in {cityName} 🏠
            </Heading>
            <Text fontSize="xl" color="gray.600">
              {properties.length} verified student accommodations available
            </Text>
          </VStack>

          {properties.length === 0 ? (
            <VStack spacing={4} py={20}>
              <Text fontSize="xl" color="gray.500">
                No properties found in {cityName}
              </Text>
              <Button onClick={() => navigate('/explore-cities')} variant="primary">
                Explore Other Cities
              </Button>
            </VStack>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {properties.map((property) => (
                <Box
                  key={property._id}
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                  transition="transform 0.2s"
                  _hover={{ transform: 'translateY(-4px)' }}
                  position="relative"
                >
                  {/* Property Image */}
                  <Box position="relative">
                    <Image
                      src={property.images?.[0]?.url || '/assets/default-property.jpg'}
                      alt={property.name}
                      w="100%"
                      h="200px"
                      objectFit="cover"
                    />
                    
                    {/* Save Button */}
                    <Button
                      position="absolute"
                      top={3}
                      right={3}
                      size="sm"
                      colorScheme="white"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveProperty(property._id);
                      }}
                    >
                      <Icon
                        as={savedProperties.has(property._id) ? FaHeart : FaRegHeart}
                        color={savedProperties.has(property._id) ? 'red.500' : 'white'}
                        fontSize="lg"
                      />
                    </Button>

                    {/* Featured Badge */}
                    {property.featured && (
                      <Badge
                        position="absolute"
                        top={3}
                        left={3}
                        colorScheme="green"
                        fontSize="xs"
                      >
                        Featured
                      </Badge>
                    )}
                  </Box>

                  {/* Property Details */}
                  <VStack align="start" p={6} spacing={3}>
                    <Heading size="md" color="brand.navyBlue" noOfLines={2}>
                      {property.name}
                    </Heading>

                    <HStack spacing={2}>
                      <Icon as={FaMapMarkerAlt} color="gray.500" />
                      <Text color="gray.600" fontSize="sm" noOfLines={1}>
                        {property.location?.address}
                      </Text>
                    </HStack>

                    <HStack spacing={4}>
                      <HStack spacing={1}>
                        <Icon as={FaBed} color="brand.parrotGreen" />
                        <Text fontSize="sm">{property.roomDetails?.totalRooms || 'N/A'} rooms</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <Icon as={FaBath} color="brand.parrotGreen" />
                        <Text fontSize="sm">{property.roomDetails?.bathroomType || 'Shared'}</Text>
                      </HStack>
                    </HStack>

                    <HStack justify="space-between" w="full" align="center">
                      <VStack align="start" spacing={0}>
                        <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
                          ${property.price?.amount}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          per {property.price?.period}
                        </Text>
                      </VStack>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => navigate(`/property/${property._id}`)}
                      >
                        View Details
                      </Button>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default PropertiesListPage;
