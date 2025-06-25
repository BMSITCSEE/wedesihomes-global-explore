import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Tooltip,
  useDisclosure,
  Slide,
  VStack,
  Text,
  HStack,
  Input,
  Button,
  CloseButton,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ChatbotIcon = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Floating Chat Button */}
      <MotionBox
        position="fixed"
        bottom={4}
        right={4}
        zIndex={100}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Tooltip label="Need help? Chat with us!" placement="left">
          <IconButton
            icon={<ChatIcon />}
            size="lg"
            colorScheme="green"
            borderRadius="full"
            boxShadow="lg"
            onClick={onToggle}
            aria-label="Open chat"
          />
        </Tooltip>
      </MotionBox>

      {/* Chat Window */}
      <Slide direction="bottom" in={isOpen} unmountOnExit style={{ zIndex: 99 }}>
        <Box
          position="fixed"
          bottom={{ base: '60px', md: '20px' }}
          right={{ base: '10px', md: '20px' }}
          w={{ base: '90%', md: '350px' }}
          h="500px"
          maxH="80vh"
          bg="white"
          borderRadius="2xl"
          boxShadow="2xl"
          overflow="hidden"
        >
          {/* Chat Header */}
          <HStack
            bg="brand.parrotGreen"
            p={4}
            justify="space-between"
            color="white"
          >
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold">WEDESIHOMES Support</Text>
              <Text fontSize="sm">We typically reply instantly</Text>
            </VStack>
            <CloseButton onClick={onToggle} />
          </HStack>

          {/* Chat Body */}
          <VStack h="380px" p={4} bg="gray.50" overflowY="auto" spacing={4}>
            <Box
              bg="white"
              p={3}
              borderRadius="lg"
              alignSelf="flex-start"
              maxW="80%"
            >
              <Text fontSize="sm">
                👋 Hi! Welcome to WEDESIHOMES! How can I help you today?
              </Text>
            </Box>
          </VStack>

          {/* Chat Input */}
          <HStack p={4} borderTop="1px" borderColor="gray.200">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size="sm"
            />
            <Button variant="primary" size="sm">
              Send
            </Button>
          </HStack>
        </Box>
      </Slide>
    </>
  );
};

export default ChatbotIcon;
