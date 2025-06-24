import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Icon,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { FaHome, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const ForPropertyOwners = () => {
  const benefits = [
    {
      icon: FaHome,
      title: 'List Your Property',
      description: 'Easy listing process with professional photography support',
    },
    {
      icon: FaUsers,
      title: 'Reach Global Students',
      description: 'Connect with verified students from around the world',
    },
    {
      icon: FaChartLine,
      title: 'Maximize Revenue',
      description: 'Optimize pricing and reduce vacancy periods',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Payments',
      description: 'Guaranteed rent collection and tenant verification',
    },
  ];

  const stats = [
    { label: 'Average Occupancy', value: '95%' },
    { label: 'Properties Listed', value: '1000+' },
    { label: 'Happy Landlords', value: '500+' },
  ];

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={20}>
          {/* Hero Section */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading size="2xl" color="brand.navyBlue">
              List Your Property with WEDESIHOMES 🏠
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Join hundreds of property owners earning steady income from verified student tenants
            </Text>
            <Button variant="primary" size="lg">
              Get Started Today
            </Button>
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {stats.map((stat, index) => (
              <Stat
                key={index}
                bg="brand.lightGreen"
                p={6}
                borderRadius="2xl"
                textAlign="center"
              >
                <StatNumber fontSize="4xl" color="brand.parrotGreen">
                  {stat.value}
                </StatNumber>
                <StatLabel fontSize="lg" color="brand.navyBlue">
                  {stat.label}
                </StatLabel>
              </Stat>
            ))}
          </SimpleGrid>

          {/* Benefits */}
          <VStack spacing={8} w="full">
            <Heading size="xl" color="brand.navyBlue">
              Why List with Us?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {benefits.map((benefit, index) => (
                <HStack
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  boxShadow="lg"
                  spacing={4}
                  align="start"
                >
                  <Icon
                    as={benefit.icon}
                    fontSize="3xl"
                    color="brand.parrotGreen"
                  />
                  <VStack align="start" spacing={2}>
                    <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
                      {benefit.title}
                    </Text>
                    <Text color="gray.600">{benefit.description}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Contact Form */}
          <Box bg="gray.50" p={10} borderRadius="2xl" w="full" maxW="2xl">
            <VStack spacing={6}>
              <Heading size="lg" color="brand.navyBlue">
                Get in Touch
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder="John Doe" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="john@example.com" type="email" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input placeholder="+1 234 567 8900" type="tel" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Property Location</FormLabel>
                  <Input placeholder="City, Country" bg="white" />
                </FormControl>
              </SimpleGrid>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Tell us about your property..."
                  rows={4}
                  bg="white"
                />
              </FormControl>
              <Button variant="primary" size="lg" w="full">
                Submit Inquiry
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ForPropertyOwners;