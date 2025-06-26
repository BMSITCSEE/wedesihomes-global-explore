import React, { useState } from 'react';
import { Box, Input, Button, Heading, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        form,
        { withCredentials: true }
      );
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box p={8} maxW="md" mx="auto">
      <Heading mb={6}>Sign Up</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="green" onClick={handleRegister}>
          Register
        </Button>
      </VStack>
    </Box>
  );
};

export default Register;
