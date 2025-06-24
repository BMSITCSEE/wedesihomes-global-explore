import React from 'react';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="400px"
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.parrotGreen"
          size="xl"
        />
        <Text color="gray.600" fontSize="lg">
          {message}
        </Text>
      </VStack>
    </Box>
  );
};

export default LoadingSpinner;