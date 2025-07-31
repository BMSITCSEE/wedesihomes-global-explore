import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Divider,
  InputGroup,
  InputRightElement,
  IconButton,
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { authService } from '../../services/auth.service'; // ADD THIS IMPORT
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms & Conditions');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');

    console.log('Registration attempt with:', { 
      name: formData.name, 
      email: formData.email 
    });

    try {
      // CORRECTED: Use authService and proper variable name
      const response = await authService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });

      console.log('Registration response:', response);

      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.user));
        toast({
          title: 'Registration successful',
          description: 'Welcome to WEDESIHOMES!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        onClose?.();
        navigate('/');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
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
            placeholder="Create a strong password (min 6 characters)"
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
        onChange={(e) =>
          setFormData({ ...formData, agreeToTerms: e.target.checked })
        }
      >
        I agree to the Terms & Conditions
      </Checkbox>

      {error && <Text color="red.500" fontSize="sm">{error}</Text>}

      <Button variant="primary" type="submit" w="full" size="lg" isLoading={loading}>
        Sign Up
      </Button>

      <Divider />

      <Text fontSize="sm" color="gray.600">Social login coming soon...</Text>
    </VStack>
  );
};

export default SignupForm;
