import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const CityCard = ({ city, country }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        borderRadius="2xl"
        overflow="hidden"
        bg="white"
        boxShadow="lg"
        _hover={{ boxShadow: 'xl' }}
        transition="all 0.3s"
        h="full"
      >
        <Box position="relative" h="150px">
          <Image
            src={city.image}
            alt={city.name}
            h="full"
            w="full"
            objectFit="cover"
          />
          <Badge
            position="absolute"
            top={3}
            right={3}
            bg="brand.navyBlue"
            color="white"
            px={2}
            py={1}
            borderRadius="full"
            fontSize="xs"
          >
            {city.properties} properties
          </Badge>
        </Box>

        <VStack p={6} spacing={4} align="stretch">
          <VStack spacing={1} align="start">
            <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
              {city.name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {country}
            </Text>
          </VStack>

          <Button variant="primary" size="sm" w="full">
            View Properties
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default CityCard;
