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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Testimonial data (unchanged)
const testimonials = [/* your testimonials array here */];

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

          {/* Testimonials */}
          <Box w="full" position="relative">
            {isMobile ? (
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
                    <TestimonialCard testimonial={testimonial} isActive={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
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
