import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ChatbotIcon from './components/common/ChatbotIcon';

import Home from './pages/Home';
import ExploreCities from './pages/ExploreCities';
import HowItWorks from './pages/HowItWorks';
import ForPropertyOwners from './pages/ForPropertyOwners';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

// ✅ Updated imports
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore-cities" element={<ExploreCities />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/for-property-owners" element={<ForPropertyOwners />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* ✅ Updated Auth routes */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />

            {/* ❌ Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ChatbotIcon />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
