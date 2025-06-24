import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Divider,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Checkbox,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SignupForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup:', formData);
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          placeholder="+1 234 567 8900"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
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

      <Checkbox
        isChecked={formData.agreeToTerms}
        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
      >
        I agree to the Terms & Conditions
      </Checkbox>

      <Button variant="primary" type="submit" w="full" size="lg">
        Sign Up
      </Button>

      <Divider />

      <Text fontSize="sm" color="gray.600">
        Or sign up with
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

export default SignupForm;