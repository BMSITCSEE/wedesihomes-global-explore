import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  IconButton,
  useBreakpointValue,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { propertyService } from '../services/property.service';

const RoomDetailPage = () => {
  const { propertyId, roomType } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [property, setProperty] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPropertyAndRoom();
  }, [propertyId, roomType]);

  const fetchPropertyAndRoom = async () => {
    try {
      setLoading(true);
      const response = await propertyService.getProperty(propertyId);
      setProperty(response.property);
      
      // Find the specific room type from the property's room types
      const foundRoom = response.property.roomTypes?.find(room => room.type === roomType);
      setRoomData(foundRoom);
    } catch (error) {
      console.error('Error fetching property:', error);
    } finally {
      setLoading(false);
    }
  };

  const showArrows = useBreakpointValue({ base: false, md: true });

  if (loading) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Spinner size="xl" color="brand.parrotGreen" />
          <Text>Loading room details...</Text>
        </VStack>
      </Center>
    );
  }

  if (!roomData) {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4}>
          <Text fontSize="xl" color="gray.500">Room type not found</Text>
          <Button onClick={() => navigate(`/property/${propertyId}`)} variant="primary">
            Back to Property
          </Button>
        </VStack>
      </Container>
    );
  }

  const images = roomData.images || [
    { url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Room view' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <HStack spacing={4}>
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              onClick={() => navigate(`/property/${propertyId}`)}
            >
              Back to Property
            </Button>
            <VStack align="start" spacing={1}>
              <Heading size="lg" color="brand.navyBlue">
                {roomData.name}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="brand.parrotGreen">
                ${roomData.price?.amount}/{roomData.price?.period}
              </Text>
            </VStack>
          </HStack>

          {/* Image Carousel */}
          <Box position="relative" w="100%" maxW="800px" mx="auto">
            {/* Main Image */}
            <Box position="relative" borderRadius="xl" overflow="hidden">
              <Image
                src={images[currentImageIndex]?.url}
                alt={`${roomData.name} - Image ${currentImageIndex + 1}`}
                w="100%"
                h={{ base: "300px", md: "500px" }}
                objectFit="cover"
              />

              {/* Navigation Arrows */}
              {showArrows && images.length > 1 && (
                <>
                  <IconButton
                    icon={<FaChevronLeft />}
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    colorScheme="blackAlpha"
                    variant="solid"
                    size="lg"
                    onClick={prevImage}
                    zIndex={2}
                  />
                  <IconButton
                    icon={<FaChevronRight />}
                    position="absolute"
                    right={4}
                    top="50%"
                    transform="translateY(-50%)"
                    colorScheme="blackAlpha"
                    variant="solid"
                    size="lg"
                    onClick={nextImage}
                    zIndex={2}
                  />
                </>
              )}

              {/* Image Counter */}
              <Box
                position="absolute"
                bottom={4}
                right={4}
                bg="blackAlpha.700"
                color="white"
                px={3}
                py={1}
                borderRadius="md"
                fontSize="sm"
              >
                {currentImageIndex + 1} / {images.length}
              </Box>
            </Box>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <HStack spacing={2} mt={4} justify="center" flexWrap="wrap">
                {images.map((image, index) => (
                  <Box
                    key={index}
                    cursor="pointer"
                    onClick={() => goToImage(index)}
                    border="2px"
                    borderColor={index === currentImageIndex ? "brand.parrotGreen" : "transparent"}
                    borderRadius="md"
                    overflow="hidden"
                    transition="all 0.2s"
                    _hover={{ transform: "scale(1.05)" }}
                  >
                    <Image
                                            src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      w="60px"
                      h="60px"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </HStack>
            )}
          </Box>

          {/* Room Details */}
          <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" mb={3} color="brand.navyBlue">
                  About This Room
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  {roomData.description}
                </Text>
              </Box>

              <Box>
                <Heading size="md" mb={3} color="brand.navyBlue">
                  What's Included
                </Heading>
                <VStack spacing={2} align="start">
                  {roomData.features?.map((feature, index) => (
                    <Text key={index} color="gray.700">
                      ✅ {feature}
                    </Text>
                  ))}
                </VStack>
              </Box>

              {/* Additional Room Details */}
              {(roomData.bedCount || roomData.bathroomType || roomData.floor) && (
                <Box>
                  <Heading size="md" mb={3} color="brand.navyBlue">
                    Room Specifications
                  </Heading>
                  <VStack spacing={2} align="start">
                    {roomData.bedCount && (
                      <Text color="gray.700">🛏️ {roomData.bedCount} bed(s)</Text>
                    )}
                    {roomData.bathroomType && (
                      <Text color="gray.700" textTransform="capitalize">
                        🚿 {roomData.bathroomType} bathroom
                      </Text>
                    )}
                    {roomData.floor && (
                      <Text color="gray.700" textTransform="capitalize">
                        📍 {roomData.floor} floor
                      </Text>
                    )}
                    {roomData.hasView && roomData.viewType && (
                      <Text color="gray.700" textTransform="capitalize">
                        🌟 {roomData.viewType} view
                      </Text>
                    )}
                    {roomData.hasTerrace && (
                      <Text color="gray.700">🏞️ Private terrace</Text>
                    )}
                    {roomData.isDDA && (
                      <Text color="gray.700">♿ DDA accessible</Text>
                    )}
                  </VStack>
                </Box>
              )}
            </VStack>
          </Box>

          {/* Action Buttons */}
          <Box bg="brand.lightGreen" p={6} borderRadius="xl">
            <VStack spacing={4}>
              <Heading size="md" color="brand.navyBlue" textAlign="center">
                Ready to book this room?
              </Heading>
              <Text textAlign="center" color="gray.700">
                Contact us to schedule a viewing or secure your booking
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button variant="primary" size="lg">
                  Book This Room
                </Button>
                <Button variant="outline" colorScheme="green" size="lg">
                  Schedule Viewing
                </Button>
                <Button variant="ghost" colorScheme="green" size="lg">
                  Ask Questions
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default RoomDetailPage;
