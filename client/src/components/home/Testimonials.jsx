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
} from '@chakra-ui/react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    university: 'University College London',
    country: 'UK',
    avatar: '👩‍🎓',
    image: '/api/placeholder/100/100',
    text: 'WEDESIHOMES made finding accommodation in London so easy! The verified listings gave me peace of mind, and the support team was incredibly helpful throughout the process.',
    rating: 5,
    propertyName: 'Camden Student Studios',
    date: '2 months ago',
  },
  {
    id: 2,
    name: 'Raj Patel',
    university: 'New York University',
    country: 'USA',
    avatar: '👨‍🎓',
    image: '/api/placeholder/100/100',
    text: 'Great platform! Found my perfect apartment near campus within days. The virtual tour feature saved me so much time, and the booking process was seamless.',
    rating: 5,
    propertyName: 'Manhattan Student Living',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Emma Chen',
    university: 'University of Sydney',
    country: 'Australia',
    avatar: '👩‍🎓',
    image: '/api/placeholder/100/100',
    text: 'Love the variety of options and the detailed property information. The filters helped me find exactly what I was looking for within my budget. Highly recommend!',
    rating: 5,
    propertyName: 'Sydney Harbor Residences',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    university: 'University of Manchester',
    country: 'UK',
    avatar: '👨‍🎓',
    image: '/api/placeholder/100/100',
    text: 'As an international student, I was worried about finding accommodation from abroad. WEDESIHOMES made it stress-free with verified properties and responsive landlords.',
    rating: 5,
    propertyName: 'Manchester Central Quarters',
    date: '1 month ago',
  },
  {
    id: 5,
    name: 'Priya Singh',
    university: 'IIT Delhi',
    country: 'India',
    avatar: '👩‍🎓',
    image: '/api/placeholder/100/100',
    text: 'The platform is super user-friendly! I loved being able to compare different properties and read genuine reviews from other students. Found my home in just 3 days!',
    rating: 5,
    propertyName: 'Delhi Student Homes',
    date: '2 weeks ago',
  },
  {
    id: 6,
    name: 'James Wilson',
    university: 'University of Melbourne',
    country: 'Australia',
    avatar: '👨‍🎓',
    image: '/api/placeholder/100/100',
    text: 'Excellent service! The 24/7 support chat was incredibly helpful when I had questions. The whole process from search to booking was smooth and professional.',
    rating: 5,
    propertyName: 'Melbourne City Living',
    date: '1 month ago',
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
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
        {/* Quote Icon */}
        <Icon
          as={FaQuoteLeft}
          color="brand.parrotGreen"
          fontSize={{ base: '2xl', md: '3xl' }}
          position="absolute"
          top={4}
          left={4}
          opacity={0.2}
        />

        {/* Rating Stars */}
        <HStack spacing={1} alignSelf="flex-start" mt={2}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Icon key={i} as={FaStar} color="yellow.400" fontSize="lg" />
          ))}
        </HStack>

        {/* Testimonial Text */}
        <Text
          color="gray.700"
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign="center"
          flex={1}
          lineHeight="tall"
        >
          "{testimonial.text}"
        </Text>

        {/* Property Badge */}
        <Badge
          colorScheme="green"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
        >
          {testimonial.propertyName}
        </Badge>

        {/* User Info */}
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
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const stats = [
    { label: 'Happy Students', value: '5000+', emoji: '😊' },
    { label: 'Average Rating', value: '4.9/5', emoji: '⭐' },
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
              <Heading
                size={{ base: 'xl', md: '2xl' }}
                color="brand.navyBlue"
                mb={2}
              >
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
                Join thousands of happy students who found their perfect home with WEDESIHOMES
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

          {/* Testimonials Carousel */}
          <Box w="full" position="relative">
            {isMobile ? (
              // Mobile Swiper
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                style={{ paddingBottom: '50px' }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={true}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Desktop Grid
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                <AnimatePresence mode="wait">
                  {testimonials.slice(0, slidesPerView).map((testimonial, index) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      isActive={index === 1}
                    />
                  ))}
                </AnimatePresence>
              </SimpleGrid>
            )}

            {/* Navigation Buttons (Desktop) */}
            {!isMobile && (
              <>
                <IconButton
                  icon={<FaChevronLeft />}
                  position="absolute"
                  left={{ base: -4, lg: -12 }}
                  top="50%"
                  transform="translateY(-50%)"
                  colorScheme="green"
                  variant="solid"
                  borderRadius="full"
                  size="lg"
                  aria-label="Previous testimonial"
                  onClick={() => {
                    // Handle previous navigation
                  }}
                />
                <IconButton
                  icon={<FaChevronRight />}
                  position="absolute"
                  right={{ base: -4, lg: -12 }}
                  top="50%"
                  transform="translateY(-50%)"
                  colorScheme="green"
                  variant="solid"
                  borderRadius="full"
                  size="lg"
                  aria-label="Next testimonial"
                  onClick={() => {
                    // Handle next navigation
                  }}
                />
              </>
            )}
          </Box>

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
                Join thousands of students who trust WEDESIHOMES
              </Text>
              <HStack spacing={4}>
                <Button
                  size="lg"
                  bg="brand.parrotGreen"
                  color="white"
                  _hover={{ bg: '#6BA414' }}
                >
                  Start Searching 🚀
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
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