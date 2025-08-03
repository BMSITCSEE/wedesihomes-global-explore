import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const PropertyCard = ({ property }) => {
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
      >
        <Box position="relative">
          <Image
            src={property.image}
            alt={property.name}
            h="200px"
            w="full"
            objectFit="cover"
          />
          <Badge
            position="absolute"
            top={4}
            right={4}
            bg="brand.parrotGreen"
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            Featured
          </Badge>
        </Box>

        <VStack align="stretch" p={6} spacing={4}>
          <VStack align="stretch" spacing={2}>
            <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
              {property.name}
            </Text>
            <HStack color="gray.600">
              <Icon as={FaMapMarkerAlt} />
              <Text>{property.city}, {property.country}</Text>
            </HStack>
          </VStack>

          <HStack justify="space-between">
            <Text fontSize="2xl" fontWeight="bold" color="brand.parrotGreen">
              {property.price}
            </Text>
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text fontWeight="medium">{property.rating}</Text>
            </HStack>
          </HStack>

          <HStack spacing={2} flexWrap="wrap">
            {property.amenities.map((amenity, index) => (
              <Badge
                key={index}
                colorScheme="green"
                variant="subtle"
                px={2}
                py={1}
                borderRadius="full"
              >
                {amenity}
              </Badge>
            ))}
          </HStack>

          <Button variant="primary" size="md" w="full">
            View Details
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default PropertyCard;
