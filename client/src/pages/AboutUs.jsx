import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutUs = () => {
  const team = [
    {
      name: 'Raj Sharma',
      role: 'CEO & Founder',
      emoji: '👨‍💼',
      bio: 'Passionate about making student accommodation accessible globally',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      emoji: '👩‍💻',
      bio: 'Tech enthusiast building seamless experiences for students',
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Operations',
      emoji: '👨‍🔧',
      bio: 'Ensuring smooth operations and happy customers worldwide',
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Lead',
      emoji: '👩‍🎨',
      bio: 'Creating connections between students and their dream homes',
    },
  ];

  const values = [
    {
      title: 'Trust & Safety',
      description: 'Every property is verified for student safety',
      emoji: '🛡',
    },
    {
      title: 'Global Community',
      description: 'Connecting students across 50+ cities worldwide',
      emoji: '🌍',
    },
    {
      title: 'Innovation',
      description: 'Using technology to simplify accommodation search',
      emoji: '💡',
    },
    {
      title: 'Support',
      description: '24/7 assistance for all your housing needs',
      emoji: '💬',
    },
  ];

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={20}>
          {/* Hero Section */}
          <VStack spacing={6} textAlign="center" maxW="3xl">
            <Heading size="2xl" color="brand.navyBlue">
              About WEDESIHOMES 🏡
            </Heading>
            <Text fontSize="xl" color="gray.600">
              We're on a mission to make finding student accommodation as easy as 
              ordering your favorite food! Started by students, for students.
            </Text>
          </VStack>

          {/* Story Section */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading size="xl" color="brand.navyBlue">
                Our Story
              </Heading>
              <Text fontSize="lg" color="gray.600">
                WEDESIHOMES was born from a simple frustration - finding safe, 
                affordable student housing shouldn't be a nightmare! 
              </Text>
              <Text color="gray.600">
                As international students ourselves, we experienced the challenges 
                of searching for accommodation in a new city. Language barriers, 
                unverified listings, and complex booking processes made it incredibly 
                stressful.
              </Text>
              <Text color="gray.600">
                That's why we created WEDESIHOMES - a platform that brings trust, 
                transparency, and simplicity to student accommodation search. Every 
                property is verified, every landlord is vetted, and every student 
                is supported throughout their journey.
              </Text>
            </VStack>
            <Image
              src="/api/placeholder/500/400"
              alt="Students in accommodation"
              borderRadius="2xl"
              boxShadow="xl"
            />
          </SimpleGrid>

          {/* Values Section */}
          <VStack spacing={8} w="full">
            <Heading size="xl" color="brand.navyBlue">
              Our Values
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {values.map((value, index) => (
                <VStack
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="2xl"
                  boxShadow="lg"
                  spacing={4}
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl',
                  }}
                >
                  <Text fontSize="4xl">{value.emoji}</Text>
                  <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
                    {value.title}
                  </Text>
                  <Text color="gray.600" textAlign="center">
                    {value.description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Team Section */}
          <VStack spacing={8} w="full">
            <Heading size="xl" color="brand.navyBlue">
              Meet Our Team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              {team.map((member, index) => (
                <VStack
                  key={index}
                  bg="gray.50"
                  p={6}
                  borderRadius="2xl"
                  spacing={4}
                >
                  <Text fontSize="5xl">{member.emoji}</Text>
                  <VStack spacing={1}>
                    <Text fontSize="xl" fontWeight="bold" color="brand.navyBlue">
                      {member.name}
                    </Text>
                    <Text color="brand.parrotGreen" fontWeight="medium">
                      {member.role}
                    </Text>
                  </VStack>
                  <Text color="gray.600" textAlign="center" fontSize="sm">
                    {member.bio}
                  </Text>
                  <HStack spacing={3}>
                    <Icon as={FaLinkedin} color="brand.navyBlue" cursor="pointer" />
                    <Icon as={FaTwitter} color="brand.navyBlue" cursor="pointer" />
                  </HStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutUs;