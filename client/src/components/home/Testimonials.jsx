import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Avatar,
  Icon,
  IconButton,
  useBreakpointValue,
  Flex,
  Badge,
  Button,
} from '@chakra-ui/react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom'; // ✅ added
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Testimonials data placeholder (you can add actual data)
const testimonials = [];

const TestimonialCard = ({ testimonial, isActive }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    h="full"
  >
    <VStack
      bg="white"
      p={{ base: 6, md: 8 }}
      borderRadius="2xl"
      boxShadow={isActive ? 'xl' : 'lg'}
      spacing={6}
      h="full"
      position="relative"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '2xl',
      }}
      border="1px solid"
      borderColor="gray.100"
    >
      <Icon
        as={FaQuoteLeft}
        color="brand.parrotGreen"
        fontSize={{ base: '2xl', md: '3xl' }}
        position="absolute"
        top={4}
        left={4}
        opacity={0.2}
      />
      <HStack spacing={1} alignSelf="flex-start" mt={2}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Icon key={i} as={FaStar} color="yellow.400" fontSize="lg" />
        ))}
      </HStack>
      <Text
        color="gray.700"
        fontSize={{ base: 'md', md: 'lg' }}
        textAlign="center"
        flex={1}
        lineHeight="tall"
      >
        "{testimonial.text}"
      </Text>
      <Badge colorScheme="green" px={3} py={1} borderRadius="full" fontSize="sm">
        {testimonial.propertyName}
      </Badge>
      <VStack spacing={3} w="full">
        <Flex align="center" gap={4}>
          <Text fontSize="4xl">{testimonial.avatar}</Text>
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="lg" color="brand.navyBlue">
              {testimonial.name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {testimonial.university}
            </Text>
            <HStack spacing={2}>
              <Text fontSize="xs" color="gray.500">
                {testimonial.country}
              </Text>
              <Text fontSize="xs" color="gray.400">
                • {testimonial.date}
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  </MotionBox>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const navigate = useNavigate(); // ✅ added

  const stats = [
    { label: 'Happy Students', value: '5000+', emoji: '😊' },
    { label: 'Rating', value: '4.9/5', emoji: '⭐' },
    { label: 'Success Rate', value: '98%', emoji: '✅' },
  ];

  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Heading size={{ base: 'xl', md: '2xl' }} color="brand.navyBlue" mb={2}>
                What Students Say 💬
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600">
                Join thousands of happy students who found their perfect home with WEDESI HOMES
              </Text>
            </MotionBox>
          </VStack>

          {/* Stats */}
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            gap={8}
            flexWrap="wrap"
            justify="center"
          >
            {stats.map((stat, index) => (
              <VStack
                key={index}
                bg="white"
                px={8}
                py={6}
                borderRadius="2xl"
                boxShadow="md"
                spacing={2}
                minW={{ base: '150px', md: '200px' }}
              >
                <Text fontSize="3xl">{stat.emoji}</Text>
                <Text fontSize="2xl" fontWeight="bold" color="brand.parrotGreen">
                  {stat.value}
                </Text>
                <Text color="gray.600" fontWeight="medium">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </MotionFlex>

          {/* Testimonials Display (Unchanged) */}

          {/* CTA */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <VStack
              bg="brand.navyBlue"
              color="white"
              p={8}
              borderRadius="2xl"
              spacing={4}
              textAlign="center"
              w="full"
              maxW="2xl"
            >
              <Heading size="lg">Ready to Find Your Perfect Home?</Heading>
              <Text fontSize="lg" opacity={0.9}>
                Join thousands of students who trust WEDESI HOMES
              </Text>
              <HStack spacing={4}>
                <Button
                  size="lg"
                  bg="brand.parrotGreen"
                  color="white"
                  _hover={{ bg: '#6BA414' }}
                  onClick={() => navigate('/explore-cities')} // ✅ Start Searching
                >
                  Start Searching
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  onClick={() => navigate('/reviews')} // ✅ Read More Reviews
                >
                  Read More Reviews
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Testimonials;
