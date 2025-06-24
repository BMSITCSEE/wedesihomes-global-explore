import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const MotionBox = motion(Box);

const stats = [
  { label: 'Cities', value: 50, suffix: '+', emoji: '🌍' },
  { label: 'Properties', value: 1000, suffix: '+', emoji: '🏠' },
  { label: 'Happy Students', value: 5000, suffix: '+', emoji: '😊' },
  { label: 'Support', value: 24, suffix: '/7', emoji: '💬' },
];

const StatsSection = () => {
  return (
    <Box py={20} bg="brand.navyBlue">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Stat
                bg="white"
                p={6}
                borderRadius="2xl"
                textAlign="center"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl',
                }}
              >
                <StatLabel fontSize="3xl" mb={2}>
                  {stat.emoji}
                </StatLabel>
                <StatNumber
                  fontSize="4xl"
                  color="brand.parrotGreen"
                  fontWeight="bold"
                >
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </StatNumber>
                <StatHelpText
                  fontSize="lg"
                  color="brand.navyBlue"
                  fontWeight="medium"
                >
                  {stat.label}
                </StatHelpText>
              </Stat>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StatsSection;