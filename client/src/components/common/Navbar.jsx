import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Image,
  Container,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import AuthModal from '../auth/AuthModal';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Explore Cities', path: '/explore-cities' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'For Property Owners', path: '/for-property-owners' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <Box bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={100}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            
            <HStack spacing={8} alignItems="center">
              <Link to="/">
                <Image src="/logo.png" alt="WEDESIHOMES" h="40px" />
              </Link>
              
              <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <ChakraLink
                    key={link.name}
                    as={Link}
                    to={link.path}
                    px={2}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: 'none',
                      bg: 'brand.lightGreen',
                      color: 'brand.parrotGreen',
                    }}
                    fontWeight="medium"
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </HStack>
            </HStack>
            
            <Flex alignItems="center">
              <HStack spacing={4}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleAuthClick('login')}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleAuthClick('signup')}
                >
                  Sign Up ✨
                </Button>
              </HStack>
            </Flex>
          </Flex>
          
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                {Links.map((link) => (
                  <ChakraLink
                    key={link.name}
                    as={Link}
                    to={link.path}
                    onClick={onClose}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
      
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
};

export default Navbar;
