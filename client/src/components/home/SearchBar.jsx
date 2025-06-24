import React, { useState } from 'react';
import {
  Box,
  Container,
  Input,
  Button,
  HStack,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <MotionBox
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg="white"
        boxShadow="xl"
        borderRadius="full"
        mx="auto"
        maxW="container.md"
        mt="-10"
        position="relative"
        zIndex={10}
        p={{ base: 4, md: 6 }}
      >
        <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold" color="brand.navyBlue">
            🔍 Search your dream accommodation
          </Text>
          <HStack
            spacing={4}
            width="full"
            direction={{ base: 'column', md: 'row' }}
          >
            <InputGroup flex={1}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Enter city or university name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="lg"
                borderRadius="full"
                focusBorderColor="brand.parrotGreen"
                _hover={{ borderColor: 'brand.parrotGreen' }}
              />
            </InputGroup>
            <Button
              variant="primary"
              size="lg"
              px={8}
              width={{ base: 'full', md: 'auto' }}
            >
              Search Now
            </Button>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default SearchBar;