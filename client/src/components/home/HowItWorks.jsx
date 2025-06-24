import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSearch, FaHeart, FaKey } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const steps = [
  {
    icon: FaSearch,
    emoji: '🔍',
    title: 'Search & Explore',
    description: 'Browse through verified student accommodations in your desired city',
  },
  {
    icon: FaHeart,
    emoji: '❤',
    title: 'Shortlist & Compare',
    description: 'Save your favorites and compare amenities, prices, and locations',
  },
  {
    icon: FaKey,
    emoji: '🔑',
    title: 'Book & Move In',
    description: 'Secure your booking online and get ready to move into your new home',
  },
];

const HowItWorks = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.navyBlue">
              How It Works
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Finding your perfect student home is as easy as 1-2-3! 🎯
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            {steps.map((step, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack
                  bg="white"
                  p={8}
                  borderRadius="2xl"
                  boxShadow="lg"
                  spacing={4}
                  h="full"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl',
                  }}
                >
                  <Box
                    bg="brand.lightGreen"
                    p={4}
                    borderRadius="full"
                    fontSize="3xl"
                  >
                    {step.emoji}
                  </Box>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.navyBlue">
                    Step {index + 1}
                  </Text>
                  <Text fontSize="xl" fontWeight="semibold" color="brand.navyBlue">
                    {step.title}
                  </Text>
                  <Text color="gray.600" textAlign="center">
                    {step.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowItWorks;