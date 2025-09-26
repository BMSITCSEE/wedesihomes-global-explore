import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Avatar,
  Badge,
  Icon,
  Button,
  Spinner,
  Center,
  useColorModeValue,
  Flex,
  Progress,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaThumbsUp, 
  FaUser, 
  FaPlus, 
  FaFilter,
  FaSort,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [newReview, setNewReview] = useState({
    rating: 5,
    property: '',
    title: '',
    review: '',
    name: '',
    email: ''
  });
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // ✅ ALL HOOKS AT TOP LEVEL - BEFORE ANY CONDITIONAL LOGIC
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'brand.dark.cardBg');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'brand.dark.borderColor');
  const statsBg = useColorModeValue('brand.lightGreen', 'brand.dark.lightGreen');
  const ratingColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');
  const selectBg = useColorModeValue('white', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const footerBorderColor = useColorModeValue('gray.100', 'gray.700');
  const modalBg = useColorModeValue('blue.50', 'blue.900');
  const modalBorderColor = useColorModeValue('blue.200', 'blue.700');

  // Mock reviews and stats data
  const mockReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=7CB518&color=fff',
      rating: 5,
      date: '2024-01-15',
      property: 'Sunny Student Studios, London',
      title: 'Amazing Experience!',
      review: 'Amazing experience! The accommodation was exactly as described. Clean, modern facilities and excellent location near the university. The staff was incredibly helpful throughout my stay. Would definitely recommend to other international students.',
      verified: true,
      helpful: 24,
      category: 'student-accommodation'
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      avatar: 'https://ui-avatars.com/api/?name=Mohammed+Ali&background=001F54&color=fff',
      rating: 4,
      date: '2024-01-10',
      property: 'Campus View Apartments, Dublin',
      title: 'Great Value for Money',
      review: 'Great value for money. The room was spacious and well-furnished. Only minor issue was the WiFi speed, but overall a good experience. The common areas were well-maintained and the location was perfect for getting to Trinity College.',
      verified: true,
      helpful: 18,
      category: 'shared-apartment'
    },
    {
      id: 3,
      name: 'Emily Chen',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Chen&background=7CB518&color=fff',
      rating: 5,
      date: '2024-01-08',
      property: 'Metro Student Living, Sydney',
      title: 'Exceptional Service',
      review: 'Exceptional service from WEDESIHOMES! They helped me find the perfect accommodation in Sydney. The booking process was smooth and the property exceeded my expectations. The rooftop terrace and study areas were fantastic.',
      verified: true,
      helpful: 31,
      category: 'studio'
    },
  ];

  const mockStats = {
    totalReviews: 1247,
    averageRating: 4.6,
    ratingDistribution: {
      5: 68,
      4: 22,
      3: 7,
      2: 2,
      1: 1,
    },
  };

  useEffect(() => {
    fetchReviews();
  }, [filterBy, sortBy]);

  const fetchReviews = async () => {
    setLoading(true);
    
    // Simulate API loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let filteredReviews = [...mockReviews];
    
    // Apply filters
    if (filterBy !== 'all') {
      if (filterBy === 'verified') {
        filteredReviews = filteredReviews.filter(review => review.verified);
      } else if (filterBy === 'high-rated') {
        filteredReviews = filteredReviews.filter(review => review.rating >= 4);
      } else {
        filteredReviews = filteredReviews.filter(review => review.category === filterBy);
      }
    }
    
    // Apply sorting
    if (sortBy === 'newest') {
      filteredReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      filteredReviews.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'highest-rated') {
      filteredReviews.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'most-helpful') {
      filteredReviews.sort((a, b) => b.helpful - a.helpful);
    }
    
    setReviews(filteredReviews);
    setStats(mockStats);
    setLoading(false);
  };

  const handleSubmitReview = async () => {
    try {
      if (!newReview.property || !newReview.title || !newReview.review || !newReview.name || !newReview.email) {
        toast({
          title: 'Missing Information',
          description: 'Please fill in all required fields.',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      console.log('Submitting review:', newReview);
      
      toast({
        title: 'Review Submitted!',
        description: 'Thank you for your review. It will be published after verification.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      setNewReview({
        rating: 5,
        property: '',
        title: '',
        review: '',
        name: '',
        email: ''
      });
      
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit review. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const renderStars = (rating, size = "16px") => {
    return Array(5).fill(0).map((_, index) => (
      <Icon
        key={index}
        as={FaStar}
        color={index < rating ? 'yellow.400' : 'gray.300'}
        boxSize={size}
      />
    ));
  };

  const renderRatingSelector = () => {
    return (
      <HStack spacing={2}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            as={FaStar}
            boxSize="24px"
            color={star <= newReview.rating ? 'yellow.400' : 'gray.300'}
            cursor="pointer"
            _hover={{ color: star <= newReview.rating ? 'yellow.500' : 'yellow.200' }}
            onClick={() => setNewReview({...newReview, rating: star})}
          />
        ))}
        <Text ml={2} fontSize="sm" color={textColor}>
          ({newReview.rating} star{newReview.rating !== 1 ? 's' : ''})
        </Text>
      </HStack>
    );
  };

  if (loading) {
    return (
      <Box minH="60vh" bg={bgColor}>
        <Container maxW="container.xl" py={12}>
          <Center>
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.parrotGreen" thickness="4px" />
              <Text color={textColor}>Loading reviews...</Text>
            </VStack>
          </Center>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color={textColor}>
              Student Reviews 📝
            </Heading>
            <Text fontSize="xl" color={subtextColor} maxW="3xl">
              Real experiences from students worldwide. See what our community has to say about their accommodation journey.
            </Text>
          </VStack>

          {/* Stats Section */}
          <Box bg={cardBg} p={8} borderRadius="2xl" boxShadow="lg" w="full" maxW="4xl">
            <VStack spacing={6}>
              <VStack spacing={2}>
                <Text fontSize="4xl" fontWeight="bold" color={ratingColor}>
                  {stats.averageRating}
                </Text>
                <HStack>
                  {renderStars(Math.round(stats.averageRating), "20px")}
                </HStack>
                <Text color={subtextColor}>
                  Based on {stats.totalReviews.toLocaleString()} reviews
                </Text>
              </VStack>

              <VStack spacing={3} w="full">
                {[5, 4, 3, 2, 1].map(star => (
                  <HStack key={star} w="full" spacing={4}>
                    <HStack minW="80px">
                      <Text fontSize="sm" color={textColor}>
                        {star}
                      </Text>
                      <Icon as={FaStar} color="yellow.400" boxSize="12px" />
                    </HStack>
                    <Progress
                                            value={stats.ratingDistribution[star]}
                      size="md"
                      colorScheme="green"
                      flex={1}
                      borderRadius="full"
                    />
                    <Text fontSize="sm" minW="40px" color={subtextColor}>
                      {stats.ratingDistribution[star]}%
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>

          {/* Action Bar */}
          <Flex 
            justify="space-between" 
            align="center" 
            w="full" 
            flexWrap="wrap" 
            gap={4}
            bg={cardBg}
            p={4}
            borderRadius="xl"
            boxShadow="md"
          >
            <HStack spacing={4} flexWrap="wrap">
              <HStack>
                <Icon as={FaFilter} color={textColor} />
                <Text fontSize="sm" color={textColor}>Filter:</Text>
                <Select
                  size="sm"
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  maxW="200px"
                  bg={selectBg}
                >
                  <option value="all">All Reviews</option>
                  <option value="verified">Verified Only</option>
                  <option value="high-rated">4+ Stars</option>
                  <option value="student-accommodation">Student Accommodation</option>
                  <option value="shared-apartment">Shared Apartments</option>
                  <option value="studio">Studios</option>
                  <option value="private-room">Private Rooms</option>
                </Select>
              </HStack>

              <HStack>
                <Icon as={FaSort} color={textColor} />
                <Text fontSize="sm" color={textColor}>Sort:</Text>
                <Select
                  size="sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  maxW="200px"
                  bg={selectBg}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="most-helpful">Most Helpful</option>
                </Select>
              </HStack>
            </HStack>

            <Button
              leftIcon={<FaPlus />}
              variant="primary"
              onClick={onOpen}
              size="sm"
            >
              Write Review
            </Button>
          </Flex>

          {/* Reviews Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {reviews.map((review, index) => (
              <MotionBox
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                  _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
                  transition="all 0.3s ease-in-out"
                  border="1px solid"
                  borderColor={borderColor}
                  h="full"
                >
                  <VStack spacing={4} align="stretch" h="full">
                    {/* Header */}
                    <HStack justify="space-between" align="start">
                      <HStack>
                        <Avatar size="sm" src={review.avatar} name={review.name} />
                        <VStack align="start" spacing={0}>
                          <HStack>
                            <Text fontWeight="bold" fontSize="sm" color={textColor}>
                              {review.name}
                            </Text>
                            {review.verified && (
                              <Badge colorScheme="green" variant="subtle" size="sm">
                                ✓ Verified
                              </Badge>
                            )}
                          </HStack>
                          <Text fontSize="xs" color={subtextColor}>
                            {new Date(review.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </Text>
                        </VStack>
                      </HStack>
                      <HStack>
                        {renderStars(review.rating)}
                      </HStack>
                    </HStack>

                    {/* Property Info */}
                    <VStack align="start" spacing={1}>
                      <Text fontSize="sm" color={ratingColor} fontWeight="medium">
                        <Icon as={FaMapMarkerAlt} mr={1} />
                        {review.property}
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color={textColor}>
                        {review.title}
                      </Text>
                    </VStack>

                    {/* Review Content */}
                    <Box flex={1}>
                      <Icon as={FaQuoteLeft} color="gray.400" mb={2} />
                      <Text fontSize="sm" color={textColor} lineHeight="tall">
                        {review.review}
                      </Text>
                    </Box>

                    {/* Footer */}
                    <HStack justify="space-between" pt={2} borderTop="1px" borderColor={footerBorderColor}>
                      <Button
                        size="xs"
                        variant="ghost"
                        leftIcon={<FaThumbsUp />}
                        color={subtextColor}
                        _hover={{ 
                          color: ratingColor,
                          bg: hoverBg
                        }}
                      >
                        Helpful ({review.helpful})
                      </Button>
                      
                      <HStack spacing={2}>
                        <Badge 
                          variant="subtle" 
                          colorScheme="blue" 
                          fontSize="10px"
                          textTransform="capitalize"
                        >
                          {review.category.replace('-', ' ')}
                        </Badge>
                        <Text fontSize="xs" color={subtextColor}>
                          {review.rating}/5 ⭐
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Load More Button */}
          {reviews.length >= 3 && (
            <Center>
              <Button 
                variant="outline" 
                size="lg" 
                leftIcon={<FaUser />}
                _hover={{
                  bg: ratingColor,
                  color: 'white',
                  borderColor: ratingColor
                }}
              >
                Load More Reviews
              </Button>
            </Center>
          )}

          {/* No Reviews State */}
          {reviews.length === 0 && (
            <Center py={20}>
              <VStack spacing={4}>
                <Icon as={FaStar} boxSize="50px" color={subtextColor} />
                <Heading size="md" color={textColor}>
                  No Reviews Found
                </Heading>
                <Text color={subtextColor} textAlign="center">
                  No reviews match your current filters. Try adjusting your search criteria.
                </Text>
                <Button variant="primary" onClick={() => setFilterBy('all')}>
                  Show All Reviews
                </Button>
              </VStack>
            </Center>
          )}

          {/* Call to Action */}
          <Box
            bg={statsBg}
            p={8}
            borderRadius="2xl"
            textAlign="center"
            w="full"
            maxW="4xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <VStack spacing={4}>
              <Heading size="md" color={textColor}>
                Share Your Experience! ✨
              </Heading>
              <Text color={subtextColor} maxW="2xl">
                Help other students by sharing your accommodation experience. Your review helps build trust in our community and guides future students to make better decisions.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button variant="primary" size="lg" leftIcon={<FaPlus />} onClick={onOpen}>
                  Write a Review
                </Button>
                <Button variant="outline" size="lg" leftIcon={<FaStar />}>
                  Rate Your Stay
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Write Review Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
        <ModalContent bg={cardBg} borderRadius="2xl">
          <ModalHeader color={textColor}>
            <HStack>
              <Icon as={FaStar} color={ratingColor} />
              <Text>Write a Review</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
            <VStack spacing={6}>
              {/* Personal Information */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                <FormControl isRequired>
                  <FormLabel color={textColor}>Your Name</FormLabel>
                  <Input
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={textColor}>Email Address</FormLabel>
                  <Input
                    type="email"
                    value={newReview.email}
                    onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                    placeholder="your.email@example.com"
                  />
                </FormControl>
              </SimpleGrid>

              {/* Property Information */}
              <FormControl isRequired>
                <FormLabel color={textColor}>Property</FormLabel>
                <Select
                  value={newReview.property}
                  onChange={(e) => setNewReview({...newReview, property: e.target.value})}
                  placeholder="Select the property you stayed at"
                >
                  <option value="Sunny Student Studios, London">Sunny Student Studios, London</option>
                  <option value="Campus View Apartments, Dublin">Campus View Apartments, Dublin</option>
                  <option value="Metro Student Living, Sydney">Metro Student Living, Sydney</option>
                  <option value="University Heights, Manchester">University Heights, Manchester</option>
                  <option value="Downtown Student Hub, Toronto">Downtown Student Hub, Toronto</option>
                  <option value="City Central Residence, Edinburgh">City Central Residence, Edinburgh</option>
                </Select>
              </FormControl>

              {/* Rating */}
              <FormControl isRequired>
                <FormLabel color={textColor}>
                  <HStack>
                    <Icon as={FaStar} />
                    <Text>Overall Rating</Text>
                  </HStack>
                </FormLabel>
                {renderRatingSelector()}
              </FormControl>

              {/* Review Title */}
              <FormControl isRequired>
                <FormLabel color={textColor}>Review Title</FormLabel>
                <Input
                  value={newReview.title}
                  onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                  placeholder="Summarize your experience in a few words"
                  maxLength={100}
                />
                <Text fontSize="xs" color={subtextColor} mt={1}>
                  {newReview.title.length}/100 characters
                </Text>
              </FormControl>

              {/* Review Content */}
              <FormControl isRequired>
                <FormLabel color={textColor}>Your Review</FormLabel>
                <Textarea
                  value={newReview.review}
                  onChange={(e) => setNewReview({...newReview, review: e.target.value})}
                  placeholder="Share your detailed experience. What did you like? What could be improved? How was the location, facilities, staff, etc.?"
                  rows={6}
                  maxLength={1000}
                />
                <Text fontSize="xs" color={subtextColor} mt={1}>
                  {newReview.review.length}/1000 characters
                </Text>
              </FormControl>

              {/* Guidelines */}
              <Box 
                bg={modalBg}
                p={4} 
                borderRadius="md" 
                w="full"
                border="1px solid"
                borderColor={modalBorderColor}
              >
                <VStack align="start" spacing={2}>
                  <Text fontSize="sm" fontWeight="bold" color={textColor}>
                    Review Guidelines:
                  </Text>
                  <VStack align="start" spacing={1} fontSize="xs" color={subtextColor}>
                    <Text>• Be honest and constructive in your feedback</Text>
                    <Text>• Focus on your personal experience</Text>
                    <Text>• Mention specific aspects (location, cleanliness, staff, etc.)</Text>
                    <Text>• Avoid offensive language or personal attacks</Text>
                    <Text>• Reviews are moderated and may take 24-48 hours to appear</Text>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleSubmitReview}
              leftIcon={<FaStar />}
              isDisabled={!newReview.property || !newReview.title || !newReview.review || !newReview.name || !newReview.email}
            >
              Submit Review
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Reviews;
