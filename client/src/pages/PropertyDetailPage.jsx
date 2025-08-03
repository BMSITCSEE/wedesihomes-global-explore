import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Button,
  Badge,
  Icon,
  Divider,
  useToast,
  Spinner,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaUtensils,
  FaSnowflake,
  FaStar,
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { propertyService } from '../services/property.service';

const PropertyDetailPage = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperty();
  }, [propertyId]);

  const fetchProperty = async () => {
    try {
      setLoading(true);
      const response = await propertyService.getProperty(propertyId);
      setProperty(response.property);
    } catch (error) {
      console.error('Error fetching property:', error);
      toast({
        title: 'Error',
        description: 'Failed to load property details',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      WiFi: FaWifi,
      Parking: FaCar,
      Pool: FaSwimmingPool,
      Gym: FaDumbbell,
      Kitchen: FaUtensils,
      'Air Conditioning': FaSnowflake,
    };
    return icons[amenity] || FaStar;
  };

  const roomTypes = [
    {
      type: 'Single Room',
      price: property?.price?.amount,
      description: 'Private single room with shared facilities',
      features: ['Private bedroom', 'Shared bathroom', 'Shared kitchen'],
      images: [
        '/assets/single-room-1.jpg',
        '/assets/single-room-2.jpg',
        '/assets/single-room-3.jpg',
      ]
    },
    {
      type: 'Shared Room',
      price: property?.price?.amount ? property.price.amount * 0.7 : 0,
      description: 'Shared room with roommate, great for making friends',
      features: ['Shared bedroom', 'Shared bathroom', 'Shared kitchen'],
      images: [
        '/assets/shared-room-1.jpg',
        '/assets/shared-room-2.jpg',
        '/assets/shared-room-3.jpg',
      ]
    },
    {
      type: 'Studio',
      price: property?.price?.amount ? property.price.amount * 1.5 : 0,
      description: 'Private studio with own kitchen and bathroom',
      features: ['Private bedroom', 'Private bathroom', 'Private kitchen'],
      images: [
        '/assets/studio-1.jpg',
        '/assets/studio-2.jpg',
        '/assets/studio-3.jpg',
      ]
    },
    {
      type: 'Ensuite Room',
      price: property?.price?.amount ? property.price.amount * 1.2 : 0,
      description: 'Private room with ensuite bathroom',
      features: ['Private bedroom', 'Private bathroom', 'Shared kitchen'],
      images: [
        '/assets/ensuite-1.jpg',
        '/assets/ensuite-2.jpg',
        '/assets/ensuite-3.jpg',
      ]
    }
  ];

  if (loading) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Spinner size="xl" color="brand.parrotGreen" />
          <Text>Loading property details...</Text>
        </VStack>
      </Center>
    );
  }

  if (!property) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Text fontSize="xl" color="gray.500">Property not found</Text>
          <Button onClick={() => navigate('/explore-cities')} variant="primary">
            Back to Cities
          </Button>
        </VStack>
      </Center>
    );
  }

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {/* Property Header */}
          <VStack spacing={4} align="start">
            <HStack justify="space-between" w="full">
              <VStack align="start" spacing={2}>
                <Heading size="xl" color="brand.navyBlue">
                  {property.name}
                </Heading>
                <HStack spacing={2}>
                  <Icon as={FaMapMarkerAlt} color="gray.500" />
                  <Text color="gray.600">{property.location?.address}</Text>
                </HStack>
              </VStack>
              
              <VStack align="end" spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color="brand.navyBlue">
                  ${property.price?.amount}
                </Text>
                <Text color="gray.500">per {property.price?.period}</Text>
              </VStack>
            </HStack>

            {property.featured && (
              <Badge colorScheme="green" fontSize="sm">
                Featured Property
              </Badge>
            )}
          </VStack>

          {/* Main Property Image */}
          <Image
            src={property.images?.[0]?.url || '/assets/default-property.jpg'}
            alt={property.name}
            w="100%"
            h="400px"
            objectFit="cover"
            borderRadius="xl"
          />

          {/* Property Details Tabs */}
          <Tabs variant="enclosed" colorScheme="green">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Room Types</Tab>
              <Tab>Amenities</Tab>
              <Tab>Location</Tab>
            </TabList>

            <TabPanels>
              {/* Overview Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Heading size="md" mb={3} color="brand.navyBlue">
                      About This Property
                    </Heading>
                    <Text color="gray.700" lineHeight="tall">
                      {property.description}
                    </Text>
                  </Box>

                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                    <VStack spacing={2} align="start">
                      <Text fontWeight="bold" color="brand.navyBlue">Property Type</Text>
                      <Text color="gray.600" textTransform="capitalize">
                        {property.propertyType}
                      </Text>
                    </VStack>
                    <VStack spacing={2} align="start">
                      <Text fontWeight="bold" color="brand.navyBlue">Total Rooms</Text>
                      <Text color="gray.600">
                        {property.roomDetails?.totalRooms || 'N/A'}
                      </Text>
                    </VStack>
                    <VStack spacing={2} align="start">
                      <Text fontWeight="bold" color="brand.navyBlue">Available Rooms</Text>
                      <Text color="gray.600">
                        {property.roomDetails?.availableRooms || 'N/A'}
                      </Text>
                    </VStack>
                  </SimpleGrid>
                </VStack>
              </TabPanel>

              {/* Room Types Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Heading size="md" color="brand.navyBlue">
                    Available Room Types
                  </Heading>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {roomTypes.map((room, index) => (
                      <Box
                        key={index}
                        border="1px"
                        borderColor="gray.200"
                        borderRadius="xl"
                        p={6}
                        bg="white"
                        boxShadow="sm"
                        transition="all 0.2s"
                        _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
                      >
                        <VStack spacing={4} align="stretch">
                          <HStack justify="space-between">
                            <Heading size="sm" color="brand.navyBlue">
                              {room.type}
                            </Heading>
                            <Text fontWeight="bold" color="brand.parrotGreen">
                              ${room.price}/{property.price?.period}
                            </Text>
                          </HStack>
                          
                          <Text color="gray.600" fontSize="sm">
                            {room.description}
                          </Text>
                          
                          <VStack spacing={1} align="start">
                            {room.features.map((feature, idx) => (
                              <Text key={idx} fontSize="sm" color="gray.700">
                                • {feature}
                              </Text>
                            ))}
                          </VStack>
                          
                          <Divider />
                          
                          <Button
                            variant="outline"
                            colorScheme="green"
                            size="sm"
                            onClick={() => navigate(`/property/${propertyId}/room/${room.type.toLowerCase().replace(' ', '-')}`)}
                          >
                            View Room Photos
                          </Button>
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </TabPanel>

              {/* Amenities Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Heading size="md" color="brand.navyBlue">
                    Property Amenities
                  </Heading>
                  
                  <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                    {property.amenities?.map((amenity, index) => {
                      const IconComponent = getAmenityIcon(amenity);
                      return (
                        <HStack key={index} spacing={3} p={3} bg="gray.50" borderRadius="md">
                          <Icon as={IconComponent} color="brand.parrotGreen" />
                          <Text fontSize="sm">{amenity}</Text>
                        </HStack>
                      );
                    })}
                  </SimpleGrid>
                </VStack>
              </TabPanel>

              {/* Location Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Heading size="md" color="brand.navyBlue">
                    Location & Nearby Universities
                  </Heading>
                  
                  <Box>
                    <Text fontWeight="bold" mb={2}>Address:</Text>
                    <Text color="gray.700">{property.location?.address}</Text>
                  </Box>

                  {property.location?.nearbyUniversities?.length > 0 && (
                    <Box>
                      <Text fontWeight="bold" mb={3}>Nearby Universities:</Text>
                      <VStack spacing={2} align="stretch">
                        {property.location.nearbyUniversities.map((uni, index) => (
                          <HStack key={index} justify="space-between" p={3} bg="gray.50" borderRadius="md">
                            <Text>{uni.name}</Text>
                            <Text color="brand.parrotGreen" fontWeight="medium">
                              {uni.distance}km away
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  )}
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          {/* Contact Section */}
          <Box bg="brand.lightGreen" p={6} borderRadius="xl">
            <VStack spacing={4}>
              <Heading size="md" color="brand.navyBlue">
                Interested in this property?
              </Heading>
              <Text textAlign="center" color="gray.700">
                Contact the property owner to book a viewing or ask questions
              </Text>
              <HStack spacing={4}>
                <Button variant="primary" size="lg">
                  Contact Owner
                </Button>
                <Button variant="outline" colorScheme="green" size="lg">
                  Book Viewing
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default PropertyDetailPage;
