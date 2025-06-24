import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  Divider,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', formData);
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <InputRightElement>
            <IconButton
              size="sm"
              variant="ghost"
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <HStack justify="space-between"  w="full">
       
        <Link color="brand.parrotGreen" fontSize="sm">
          Forgot Password?
        </Link>
      </HStack>

      <Button variant="primary" type="submit" w="full" size="lg">
        Login
      </Button>

      <Divider />

      <Text fontSize="sm" color="gray.600">
        Or continue with
      </Text>

      <HStack spacing={4} w="full">
        <Button
          leftIcon={<FaGoogle />}
          variant="outline"
          flex={1}
          colorScheme="red"
        >
          Google
        </Button>
        <Button
          leftIcon={<FaFacebook />}
          variant="outline"
          flex={1}
          colorScheme="facebook"
        >
          Facebook
        </Button>
      </HStack>
    </VStack>
  );
};

export default LoginForm;