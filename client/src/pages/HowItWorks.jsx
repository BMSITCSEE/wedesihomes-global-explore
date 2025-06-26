import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const HowItWorksPage = () => {
  const steps = [
    {
      title: 'Search & Discover 🔍',
      description: 'Browse through thousands of verified student accommodations',
      details: [
        'Filter by city, university, or budget',
        'View detailed property information',
        'Check real student reviews',
        'Compare different options',
      ],
      image: '/assets/searchanddiscover.jpg',
    },
    {
      title: 'Connect & Explore ❤',
      description: 'Get in touch with property managers and schedule viewings',
      details: [
        'Chat directly with property owners',
        'Schedule virtual tours',
        'Ask questions about amenities',
        'Get instant responses',
      ],
      image: '/assets/connectandexplore.jpg',
    },
    {
      title: 'Book & Move In 🔑',
      description: 'Secure your accommodation with our safe booking process',
      details: [
        'Secure online payment',
        'Digital contract signing',
        'Move-in checklist provided',
        '24/7 support available',
      ],
      image: '/assets/bookandmovein.jpg',
    },
  ];

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={20}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.navyBlue">
              How WEDESIHOMES Works
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Your journey to finding the perfect student home in 3 simple steps
            </Text>
          </VStack>

          {steps.map((step, index) => (
            <SimpleGrid
              key={index}
              columns={{ base: 1, lg: 2 }}
              spacing={10}
              alignItems="center"
              w="full"
            >
              <VStack
                align="start"
                spacing={6}
                order={{ base: 2, lg: index % 2 === 0 ? 1 : 2 }}
              >
                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="brand.parrotGreen"
                    mb={2}
                  >
                    Step {index + 1}
                  </Text>
                  <Heading size="xl" color="brand.navyBlue" mb={4}>
                    {step.title}
                  </Heading>
                  <Text fontSize="lg" color="gray.600" mb={6}>
                    {step.description}
                  </Text>
                </Box>

                <List spacing={3}>
                  {step.details.map((detail, i) => (
                    <ListItem key={i} display="flex" alignItems="center">
                      <ListIcon
                        as={FaCheckCircle}
                        color="brand.parrotGreen"
                        fontSize="xl"
                      />
                      <Text color="gray.700">{detail}</Text>
                    </ListItem>
                  ))}
                </List>
              </VStack>

              <Box
                order={{ base: 1, lg: index % 2 === 0 ? 2 : 1 }}
                w="full"
                h="300px" // Ensures all images have same height
                overflow="hidden"
                borderRadius="2xl"
                boxShadow="xl"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </SimpleGrid>
          ))}

          <Button variant="primary" size="lg">
            Start Searching Now 
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowItWorksPage;
