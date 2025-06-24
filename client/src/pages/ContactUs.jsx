import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      color: 'brand.parrotGreen',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'hello@wedesihomes.com',
      color: 'brand.navyBlue',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '123 Student Street, London, UK',
      color: 'brand.parrotGreen',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: '+1 (555) 987-6543',
      color: 'brand.navyBlue',
    },
  ];

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.navyBlue">
              Get in Touch 📞
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Have questions? We're here to help! Reach out to us anytime.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} w="full">
            {/* Contact Form */}
            <Box bg="gray.50" p={8} borderRadius="2xl">
              <VStack spacing={6}>
                <Heading size="lg" color="brand.navyBlue">
                  Send us a Message
                </Heading>
                <FormControl>
                  <FormLabel>Your Name</FormLabel>
                  <Input placeholder="John Doe" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input placeholder="john@example.com" type="email" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="+1 234 567 8900" type="tel" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="How can we help you?"
                    rows={5}
                    bg="white"
                  />
                </FormControl>
                <Button variant="primary" size="lg" w="full">
                  Send Message
                </Button>
              </VStack>
            </Box>

            {/* Contact Information */}
            <VStack spacing={8} align="stretch">
              <Heading size="lg" color="brand.navyBlue">
                Contact Information
              </Heading>
              <VStack spacing={6} align="stretch">
                {contactInfo.map((info, index) => (
                  <HStack
                    key={index}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="md"
                    spacing={4}
                  >
                    <Icon as={info.icon} fontSize="2xl" color={info.color} />
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold" color="brand.navyBlue">
                        {info.title}
                      </Text>
                      <Text color="gray.600">{info.details}</Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>

              {/* Office Hours */}
              <Box bg="brand.lightGreen" p={6} borderRadius="xl">
                <VStack align="start" spacing={3}>
                  <Text fontSize="lg" fontWeight="bold" color="brand.navyBlue">
                    Office Hours 🕐
                  </Text>
                  <Text color="gray.700">Monday - Friday: 9:00 AM - 6:00 PM</Text>
                  <Text color="gray.700">Saturday: 10:00 AM - 4:00 PM</Text>
                  <Text color="gray.700">Sunday: Closed</Text>
                  <Text color="brand.parrotGreen" fontWeight="medium">
                    24/7 Emergency Support Available
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactUs;