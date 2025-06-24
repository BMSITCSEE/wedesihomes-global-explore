import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Avatar,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const BlogPreviewCard = ({ post }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="md"
        _hover={{ boxShadow: 'lg' }}
        transition="all 0.3s"
      >
        <Image
          src={post.image}
          alt={post.title}
          h="200px"
          w="full"
          objectFit="cover"
        />
        
        <VStack p={6} align="stretch" spacing={4}>
          <HStack spacing={2}>
            <Badge colorScheme="green" variant="subtle">
              {post.category}
            </Badge>
            <Text fontSize="sm" color="gray.500">
              {post.readTime} min read
            </Text>
          </HStack>

          <VStack align="stretch" spacing={2}>
            <Link
              fontSize="xl"
              fontWeight="bold"
              color="brand.navyBlue"
              _hover={{ color: 'brand.parrotGreen' }}
            >
              {post.title}
            </Link>
            <Text color="gray.600" noOfLines={2}>
              {post.excerpt}
            </Text>
          </VStack>

          <HStack justify="space-between">
            <HStack>
              <Avatar size="sm" name={post.author.name} src={post.author.avatar} />
              <VStack align="start" spacing={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {post.author.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {post.date}
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default BlogPreviewCard;