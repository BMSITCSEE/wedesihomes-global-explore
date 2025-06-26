import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // ✅ added

const MotionBox = motion(Box);

const HeroSection = () => {
  return (
    <Box
      bgImage="url('/hero-banner.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="70vh"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.4)"
        zIndex="1"
      />

      <Container maxW="container.xl" h="full" position="relative" zIndex="2">
        <Stack
          h="full"
          align="flex-start"
          justify="center"
          spacing={6}
          maxW="2xl"
          py={20}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              color="white"
              lineHeight="shorter"
            >
              Find Your Perfect
              <Text as="span" color="brand.parrotGreen">
                {' '}Student Home{' '}
              </Text>
              Anywhere 🏡
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="xl" color="gray.100">
              Verified student accommodations in 50+ cities worldwide.
              Safe, affordable, and just a click away!
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={RouterLink}
                to="/explore-cities"
                variant="primary"
                size="lg"
              >
                Explore Cities 
              </Button>
              <Button
                as={RouterLink}
                to="/how-it-works"
                variant="secondary"
                size="lg"
              >
                How It Works
              </Button>
            </Stack>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
