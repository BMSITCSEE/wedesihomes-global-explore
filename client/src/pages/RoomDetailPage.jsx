import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

const RoomDetailPage = () => {
  const { propertyId, roomType } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock room data - in real app, fetch from API
  const roomData = {
    'single-room': {
      type: 'Single Room',
      price: 800,
      description: 'A comfortable private single room with modern furnishings, perfect for students who value privacy and quiet study time.',
      features: [
        'Private bedroom with single bed',
        'Study desk and chair',
        'Built-in wardrobe',
        'Shared bathroom facilities',
        'Shared kitchen access',
        'High-speed WiFi included',
        'All utilities included'
      ],
      images: [
        '/assets/single-room-1.jpg',
        '/assets/single-room-2.jpg', 
        '/assets/single-room-3.jpg',
        '/assets/single-room-4.jpg',
        '/assets/single-room-5.jpg'
      ]
    },
    'shared-room': {
      type: 'Shared Room',
      price: 560,
      description: 'A spacious shared room with twin beds, ideal for students who enjoy company and want to make new friends.',
      features: [
        'Twin beds with personal storage',
        'Two study desks and chairs',
        'Shared wardrobe space',
        'Shared bathroom facilities',
        'Shared kitchen access',
        'High-speed WiFi included',
        'All utilities included'
      ],
      images: [
        '/assets/shared-room-1.jpg',
        '/assets/shared-room-2.jpg',
        '/assets/shared-room-3.jpg',
        '/assets/shared-room-4.jpg'
      ]
    },
    'studio': {
      type: 'Studio',
      price: 1200,
      description: 'A fully self-contained studio apartment with private kitchen and bathroom, offering complete independence.',
      features: [
        'Private studio space',
        'Double bed',
        'Private kitchenette',
        'Private bathroom',
        'Study area',
        'Storage space',
        'High-speed WiFi included',
        'All utilities included'
      ],
      images: [
        '/assets/studio-1.jpg',
        '/assets/studio-2.jpg',
        '/assets/studio-3.jpg',
        '/assets/studio-4.jpg',
        '/assets/studio-5.jpg',
        '/assets/studio-6.jpg'
      ]
    },
    'ensuite-room': {
      type: 'Ensuite Room',
      price: 960,
      description: 'A private room with ensuite bathroom, combining privacy with shared social spaces.',
      features: [
        'Private bedroom with single bed',
        'Private ensuite bathroom',
        'Study desk and chair',
        'Built-in wardrobe',
        'Shared kitchen access',
        'High-speed WiFi included',
        'All utilities included'
      ],
      images: [
        '/assets/ensuite-1.jpg',
        '/assets/ensuite-2.jpg',
        '/assets/ensuite-3.jpg',
        '/assets/ensuite-4.jpg',
        '/assets/ensuite-5.jpg'
      ]
    }
  };

  const room = roomData[roomType];
  const showArrows = useBreakpointValue({ base: false, md: true });

  if (!room) {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4}>
          <Text>Room type not found</Text>
          <Button onClick={() => navigate(`/property/${propertyId}`)} variant="primary">
            Back to Property
          </Button>
        </VStack>
      </Container>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
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
            </Button>
            <VStack align="start" spacing={1}>
              <Heading size="lg" color="brand.navyBlue">
                {room.type}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="brand.parrotGreen">
                ${room.price}/month
              </Text>
            </VStack>
          </HStack>

          {/* Image Carousel */}
          <Box position="relative" w="100%" maxW="800px" mx="auto">
            {/* Main Image */}
            <Box position="relative" borderRadius="xl" overflow="hidden">
              <Image
                src={room.images[currentImageIndex]}
                alt={`${room.type} - Image ${currentImageIndex + 1}`}
                w="100%"
                h={{ base: "300px", md: "500px" }}
                objectFit="cover"
              />

              {/* Navigation Arrows */}
              {showArrows && room.images.length > 1 && (
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
                {currentImageIndex + 1} / {room.images.length}
              </Box>
            </Box>

            {/* Thumbnail Navigation */}
            <HStack spacing={2} mt={4} justify="center" flexWrap="wrap">
              {room.images.map((image, index) => (
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
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    w="60px"
                    h="60px"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </HStack>
          </Box>

          {/* Room Details */}
          <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" mb={3} color="brand.navyBlue">
                  About This Room
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  {room.description}
                </Text>
              </Box>

              <Box>
                <Heading size="md" mb={3} color="brand.navyBlue">
                  What's Included
                </Heading>
                <VStack spacing={2} align="start">
                  {room.features.map((feature, index) => (
                    <Text key={index} color="gray.700">
                      ✅ {feature}
                    </Text>
                  ))}
                </VStack>
              </Box>
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
