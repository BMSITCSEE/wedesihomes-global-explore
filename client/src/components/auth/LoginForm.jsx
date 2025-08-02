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
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(
        // CORRECT (CRA syntax)
        `${process.env.REACT_APP_API_URL || 'https://wedesihomes-backend.onrender.com/api'}/auth/login`,
        formData,
        { withCredentials: true }
      );
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose?.();
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
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

      {error && <Text color="red.500" fontSize="sm">{error}</Text>}

      <HStack justify="space-between" w="full">
        <Link color="brand.parrotGreen" fontSize="sm">Forgot Password?</Link>
      </HStack>

      <Button variant="primary" type="submit" w="full" size="lg" isLoading={loading}>
        Login
      </Button>

      <Divider />

      <Text fontSize="sm" color="gray.600">Or continue with</Text>

      <HStack spacing={4} w="full">
        <Button leftIcon={<FaGoogle />} variant="outline" flex={1} colorScheme="red">Google</Button>
        <Button leftIcon={<FaFacebook />} variant="outline" flex={1} colorScheme="facebook">Facebook</Button>
      </HStack>
    </VStack>
  );
};

export default LoginForm;
