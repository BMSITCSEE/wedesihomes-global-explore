import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const HeroSection = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #E8F5E9 0%, #E3F2FD 100%)"
      minH="70vh"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" h="full">
        <Flex
          h="full"
          align="center"
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
          py={20}
        >
          <Stack spacing={6} maxW="lg" flex={1}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                color="brand.navyBlue"
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
              <Text fontSize="xl" color="gray.600">
                Verified student accommodations in 50+ cities worldwide.
                Safe, affordable, and just a click away! ✨
              </Text>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button variant="primary" size="lg">
                  Explore Cities 🚀
                </Button>
                <Button variant="secondary" size="lg">
                  How It Works
                </Button>
              </Stack>
            </MotionBox>
          </Stack>
          
          <Box flex={1} display={{ base: 'none', lg: 'block' }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/hero-banner.jpg"
                alt="Students in accommodation"
                borderRadius="2xl"
                boxShadow="2xl"
              />
            </MotionBox>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
