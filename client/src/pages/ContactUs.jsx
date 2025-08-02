import React, { useState } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '9211787788',
      color: 'brand.parrotGreen',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'wedesihomes@gmail.com',
      color: 'brand.navyBlue',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'A6 1903 Amrapali Golf Homes',
      color: 'brand.parrotGreen',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: '9211797788',
      color: 'brand.navyBlue',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields (Name, Email, Message)',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || 'https://wedesihomes-backend.onrender.com/api'}/messages`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `New Contact Form Message from ${formData.name}`,
          message: formData.message,
        }
      );

      if (response.data.success) {
        toast({
          title: 'Message Sent! 🎉',
          description: 'Thank you for contacting us! We will get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Message send error:', error);
      toast({
        title: 'Message Failed',
        description: error.response?.data?.message || 'Failed to send message. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

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
              <VStack spacing={6} as="form" onSubmit={handleSubmit}>
                <Heading size="lg" color="brand.navyBlue">
                  Send us a Message
                </Heading>
                <FormControl isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input 
                    name="name"
                    placeholder="John Doe" 
                    bg="white"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input 
                    name="email"
                    placeholder="john@example.com" 
                    type="email" 
                    bg="white"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input 
                    name="phone"
                    placeholder="+1 234 567 8900" 
                    type="tel" 
                    bg="white"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    bg="white"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <Button 
                  variant="primary" 
                  size="lg" 
                  w="full"
                  type="submit"
                  isLoading={loading}
                  loadingText="Sending..."
                >
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
