import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  HStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box minH="80vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.md">
        <VStack spacing={8} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="9xl" fontWeight="bold" color="brand.parrotGreen">
              404
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Heading size="xl" color="brand.navyBlue" mb={4}>
              Oops! Page Not Found 🏠
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              Looks like you've wandered into uncharted territory. 
              Let's get you back home!
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HStack spacing={4}>
              <Button variant="primary" size="lg" onClick={() => navigate('/')}>
                Go to Homepage
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/explore-cities')}
              >
                Explore Cities
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default NotFound;
