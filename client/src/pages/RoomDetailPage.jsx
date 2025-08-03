import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

const RoomDetailPage = () => {
  const { propertyId, roomType } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock room data - in real app, fetch from API
  const roomData = {
  // — ADELAIDE CITY —
  'adelaide-1-bed-apartment': {
    type: '1 Bed Apartment',
    price: 659,
    description: 'One-bedroom apartment (~28.5 sqm) with ensuite bathroom, double bed, desk, 2 wardrobes, private kitchen & lounge.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Desk with chair',
      'Private kitchen & lounge',
      'Two wardrobes'
    ],
    images: [
      'https://example.com/adelaide/1bed-1.jpg',
      'https://example.com/adelaide/1bed-2.jpg'
    ]
  },
  'adelaide-2-bed-shared-apartment': {
    type: '2 Bed Shared Apartment',
    price: 389,
    description: 'Two-bedroom shared apartment with communal kitchen, lounge, and bathroom.',
    features: [
      'Two single beds',
      'Shared bathroom',
      'Shared kitchen & lounge',
      'Dedicated desk'
    ],
    images: [
      'https://example.com/adelaide/2bedshared-1.jpg',
      'https://example.com/adelaide/2bedshared-2.jpg'
    ]
  },
  'adelaide-4-bed-shared-apartment': {
    type: '4 Bed Shared Apartment',
    price: 359,
    description: 'Four-bedroom shared apartment with communal living areas.',
    features: [
      'King single bed per room',
      'Shared kitchen & bathroom',
      'Dedicated desk & storage'
    ],
    images: [
      'https://example.com/adelaide/4bedshared-1.jpg',
      'https://example.com/adelaide/4bedshared-2.jpg'
    ]
  },
  'adelaide-4-bed-shared-apartment-large': {
    type: '4 Bed Shared Apartment (Large)',
    price: 379,
    description: 'Larger layout four-bedroom shared apartment for more space and comfort.',
    features: [
      'King single beds',
      'Spacious shared lounge',
      'Shared kitchen & bathroom',
      'Desk and storage in each room'
    ],
    images: [
      'https://example.com/adelaide/4bedlarge-1.jpg',
      'https://example.com/adelaide/4bedlarge-2.jpg'
    ]
  },
  'adelaide-5-bed-ensuite': {
    type: '5 Bed Ensuite Apartment',
    price: 414,
    description: 'Five private bedrooms, each with ensuite bathroom, shared kitchen and lounge across ~92 sqm.',
    features: [
      'King single bed in each room',
      'Private ensuite bathroom',
      'Shared kitchen & lounge',
      'Desk and wardrobe in each room'
    ],
    images: [
      'https://example.com/adelaide/5bedensuite-1.jpg',
      'https://example.com/adelaide/5bedensuite-2.jpg'
    ]
  },
  'adelaide-5-bed-shared-apartment': {
    type: '5 Bed Shared Apartment',
    price: 399,
    description: 'Five-bedroom shared apartment with communal facilities and generous layout.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared kitchen & lounge',
      'Desk & storage per room'
    ],
    images: [
      'https://example.com/adelaide/5bedshared-1.jpg',
      'https://example.com/adelaide/5bedshared-2.jpg'
    ]
  },
  'adelaide-single-ensuite': {
    type: 'Single Ensuite',
    price: 389,
    description: 'Single room (~13.5 sqm) with ensuite bathroom, kitchenette, desk & storage.',
    features: [
      'King single bed',
      'Ensuite bathroom',
      'Kitchenette (microwave & fridge)',
      'Desk & wardrobe'
    ],
    images: [
      'https://example.com/adelaide/singleensuite-1.jpg',
      'https://example.com/adelaide/singleensuite-2.jpg'
    ]
  },
  'adelaide-studio': {
    type: 'Studio',
    price: 569,
    description: 'Self-contained studio apartment—bedroom, ensuite bathroom, kitchenette, and study space.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette',
      'Desk & storage'
    ],
    images: [
      'https://example.com/adelaide/studio-1.jpg',
      'https://example.com/adelaide/studio-2.jpg'
    ]
  },
  'adelaide-studio-large': {
    type: 'Studio (Large)',
    price: null,
    description: 'Large studio layout (currently not available).',
    features: [
      'Larger layout',
      'Ensuite bathroom',
      'Kitchenette',
      'Desk & extra storage'
    ],
    images: [
      'https://example.com/adelaide/studiolarge-1.jpg',
      'https://example.com/adelaide/studiolarge-2.jpg'
    ]
  },
  'adelaide-studio-dda': {
    type: 'Studio DDA',
    price: null,
    description: 'Accessible studio (~27 sqm) with wide wet-room bathroom and lower-level kitchen facilities.',
    features: [
      'Double bed',
      'Wet-room ensuite',
      'Lower-level kitchenette',
      'Spacious layout'
    ],
    images: [
      'https://example.com/adelaide/studiodda-1.jpg',
      'https://example.com/adelaide/studiodda-2.jpg'
    ]
  },

  // — PERTH CITY —
  'perth-5-bed-shared-apartment': {
    type: '5 Bed Shared Apartment',
    price: 444,
    description: 'Five-bedroom shared unit with communal kitchen, lounge & modern furnishings.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared kitchen & living area',
      'Desk & storage per room'
    ],
    images: [
      'https://example.com/perth/5bedshared-1.jpg',
      'https://example.com/perth/5bedshared-2.jpg'
    ]
  },
  'perth-5-bed-shared-apartment-high-floor': {
    type: '5 Bed Shared Apartment High Floor',
    price: 454,
    description: 'High-floor five-bedroom shared unit with city views and communal facilities.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared kitchen & lounge',
      'Desk & storage per room'
    ],
    images: [
      'https://example.com/perth/5bedhf-1.jpg',
      'https://example.com/perth/5bedhf-2.jpg'
    ]
  },
  'perth-6-bed-shared-apartment': {
    type: '6 Bed Shared Apartment',
    price: 434,
    description: 'Six-bedroom shared unit for social living with communal areas.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared kitchen & lounge',
      'Desk & storage per room'
    ],
    images: [
      'https://example.com/perth/6bedshared-1.jpg',
      'https://example.com/perth/6bedshared-2.jpg'
    ]
  },
  'perth-6-bed-shared-apartment-high-floor': {
    type: '6 Bed Shared Apartment High Floor',
    price: 644,
    description: 'High-floor six-bedroom shared apartment with expansive space and city vistas.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared lounge & kitchen',
      'Desk & storage per room'
    ],
    images: [
      'https://example.com/perth/6bedhfhf-1.jpg',
      'https://example.com/perth/6bedhfhf-2.jpg'
    ]
  },
  'perth-studio': {
    type: 'Studio',
    price: 404,
    description: 'Compact self-contained studio (~18 sqm) with double bed, ensuite bathroom & kitchenette.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette',
      'Desk & storage'
    ],
    images: [
      'https://example.com/perth/studio-1.jpg',
      'https://example.com/perth/studio-2.jpg'
    ]
  },
  'perth-studio-high-floor': {
    type: 'Studio High Floor',
    price: null,
    description: 'High-floor studio unit with modern amenities.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette',
      'Desk & storage'
    ],
    images: [
      'https://example.com/perth/studiohf-1.jpg',
      'https://example.com/perth/studiohf-2.jpg'
    ]
  },
  'perth-twin-studio': {
    type: 'Twin Studio',
    price: 394,
    description: 'Twin studio (~27 sqm) with two separate sleeping areas and shared ensuite bathroom.',
    features: [
      'Two king single beds',
      'Shared ensuite bathroom',
      'Desk & wardrobe per compartment'
    ],
    images: [
      'https://example.com/perth/twinstudio-1.jpg',
      'https://example.com/perth/twinstudio-2.jpg'
    ]
  },
  'perth-twin-studio-high-floor': {
    type: 'Twin Studio High Floor',
    price: null,
    description: 'High-floor twin studio with enhanced city views.',
    features: [
      'Twin beds',
      'Ensuite bathroom',
      'Desk & wardrobe per compartment'
    ],
    images: [
      'https://example.com/perth/twinstudiohf-1.jpg',
      'https://example.com/perth/twinstudiohf-2.jpg'
    ]
  },

  // — YUGO BERKELEY STREET (Melbourne) —
  'berkeley-1-bed-apartment': {
    type: '1 Bed Apartment',
    price: 769,
    description: 'Private one-bedroom apartment with ensuite bathroom and separate living area (~30 sqm).',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Private kitchenette & lounge',
      'Desk & wardrobe'
    ],
    images: [
      'https://example.com/berkeley/1bed-1.jpg',
      'https://example.com/berkeley/1bed-2.jpg'
    ]
  },
  'berkeley-3-bed-apartment-top-floor': {
    type: '3 Bed Apartment Top Floor',
    price: 429,
    description: 'Three-bedroom shared apartment located on the top floor.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared kitchen & living',
      'Desk & wardrobe'
    ],
    images: [
      'https://example.com/berkeley/3bedtop-1.jpg',
      'https://example.com/berkeley/3bedtop-2.jpg'
    ]
  },
  'berkeley-3-bed-apartment-with-terrace': {
    type: '3 Bed Apartment with Terrace',
    price: 469,
    description: 'Three-bedroom shared unit with private terrace.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchen & living area',
      'Desk & wardrobe'
    ],
    images: [
      'https://example.com/berkeley/3bedterrace-1.jpg',
      'https://example.com/berkeley/3bedterrace-2.jpg'
    ]
  },
  'berkeley-3-bed-ensuite-apartment': {
    type: '3 Bed Ensuite Apartment',
    price: null,
    description: 'Three-bedroom apartment where each room has its own ensuite bathroom (~68 sqm).',
    features: [
      'King single beds',
      'Ensuite bathroom per room',
      'Desk & wardrobe in each room'
    ],
    images: [
      'https://example.com/berkeley/3bedensuite-1.jpg',
      'https://example.com/berkeley/3bedensuite-2.jpg'
    ]
  },
  'berkeley-6-bed-townhouse-city-view': {
    type: '6 Bed Townhouse City View',
    price: 439,
    description: 'Two-level townhouse with six bedrooms, shared kitchen & lounge, city views (~128 sqm).',
    features: [
      'King single beds',
      'Shared bathroom',
      'Shared kitchen & living rooms',
      'Desk & wardrobe per room'
    ],
    images: [
      'https://example.com/berkeley/6bedtownhouse-1.jpg',
      'https://example.com/berkeley/6bedtownhouse-2.jpg'
    ]
  },
  'berkeley-premium-studio': {
    type: 'Premium Studio',
    price: null,
    description: 'Studio (~20 sqm) with fully fitted kitchen and study space.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & desk'
    ],
    images: [
      'https://example.com/berkeley/premiumstudio-1.jpg',
      'https://example.com/berkeley/premiumstudio-2.jpg'
    ]
  },
  'berkeley-executive-studio-with-terrace-upper': {
    type: 'Executive Studio with Terrace Upper',
    price: null,
    description: 'Executive studio (~27 sqm) with kitchenette, living area and private terrace.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & desk',
      'Private terrace'
    ],
    images: [
      'https://example.com/berkeley/exestudioterrace-1.jpg',
      'https://example.com/berkeley/exestudioterrace-2.jpg'
    ]
  },
  'berkeley-studio-with-terrace': {
    type: 'Studio with Terrace',
    price: null,
    description: 'Studio (~20 sqm) with private terrace, modern kitchenette, and ensuite bathroom.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & desk',
      'Private terrace'
    ],
    images: [
      'https://example.com/berkeley/studioterrace-1.jpg',
      'https://example.com/berkeley/studioterrace-2.jpg'
    ]
  },

  // — YUGO UNIVERSITY SQUARE (Melbourne) —
  'uni-1-bed-apartment-lower': {
    type: '1 Bed Apartment Lower',
    price: 759,
    description: 'One-bedroom lower-level apartment with ensuite bathroom & living space.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/1bedlower-1.jpg',
      'https://example.com/unisq/1bedlower-2.jpg'
    ]
  },
  'uni-1-bed-apartment-upper': {
    type: '1 Bed Apartment Upper',
    price: 779,
    description: 'One-bedroom upper-level apartment with ensuite and views.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/1bedupper-1.jpg',
      'https://example.com/unisq/1bedupper-2.jpg'
    ]
  },
  'uni-1-bed-apartment-with-terrace': {
    type: '1 Bed Apartment with Terrace',
    price: null,
    description: 'One-bedroom apartment with private terrace.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/1bedterrace-1.jpg',
      'https://example.com/unisq/1bedterrace-2.jpg'
    ]
  },
  'uni-2-bed-apartment': {
    type: '2 Bed Apartment',
    price: null,
    description: 'Two-bedroom shared apartment.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/2bed-1.jpg',
      'https://example.com/unisq/2bed-2.jpg'
    ]
  },
  'uni-2-bed-apartment-with-terrace-lower': {
    type: '2 Bed Apartment with Terrace – Lower',
    price: null,
    description: 'Lower-level two-bedroom apartment with terrace.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/2bedterracelower-1.jpg',
      'https://example.com/unisq/2bedterracelower-2.jpg'
    ]
  },
  'uni-2-bed-apartment-with-terrace-upper': {
    type: '2 Bed Apartment with Terrace – Upper',
    price: null,
    description: 'Upper-level two-bedroom apartment with terrace.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/2bedterraceupper-1.jpg',
      'https://example.com/unisq/2bedterraceupper-2.jpg'
    ]
  },
  'uni-3-bed-apartment-lower': {
    type: '3 Bed Apartment Lower',
    price: 459,
    description: 'Three-bedroom lower-level apartment.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/3bedlower-1.jpg',
      'https://example.com/unisq/3bedlower-2.jpg'
    ]
  },
  'uni-3-bed-apartment-upper': {
    type: '3 Bed Apartment Upper',
    price: 469,
    description: 'Upper-level three-bedroom apartment (~49 sqm).',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/3bedupper-1.jpg',
      'https://example.com/unisq/3bedupper-2.jpg'
    ]
  },
  'uni-3-bed-duplex-with-terrace': {
    type: '3 Bed Duplex with Terrace',
    price: 449,
    description: 'Duplex-style three-bedroom apartment with private terrace.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/3bedduplex-1.jpg',
      'https://example.com/unisq/3bedduplex-2.jpg'
    ]
  },
  'uni-4-bed-apartment': {
    type: '4 Bed Apartment',
    price: 309,
    description: 'Four-bedroom shared apartment.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/4bed-1.jpg',
      'https://example.com/unisq/4bed-2.jpg'
    ]
  },
  'uni-6-bed-apartment-lower-bunk': {
    type: '6 Bed Apartment Lower (Bunk Cabin)',
    price: 319,
    description: 'Six-bedroom bunk-style shared unit (lower level).',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/6bedlowerbunk-1.jpg',
      'https://example.com/unisq/6bedlowerbunk-2.jpg'
    ]
  },
  'uni-6-bed-apartment-with-terrace-bunk': {
    type: '6 Bed Apartment with Terrace (Bunk Cabin)',
    price: 319,
    description: 'Six-bedroom bunk unit with terrace.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/6bedterrace-1.jpg',
      'https://example.com/unisq/6bedterrace-2.jpg'
    ]
  },
  'uni-6-bed-apartment-upper-bunk': {
    type: '6 Bed Apartments Upper (Bunk Cabin)',
    price: null,
    description: 'Upper-level six-bedroom bunk-style shared unit.',
    features: [
      'King single beds',
      'Shared bathroom',
      'Kitchenette & lounge',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/6bedupperbunk-1.jpg',
      'https://example.com/unisq/6bedupperbunk-2.jpg'
    ]
  },
  'uni-premium-studio': {
    type: 'Premium Studio',
    price: 599,
    description: 'Premium studio with living space, kitchen, and storage (~21 sqm+).',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & living space',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/premiumstudio-1.jpg',
      'https://example.com/unisq/premiumstudio-2.jpg'
    ]
  },
  'uni-premium-studio-with-terrace': {
    type: 'Premium Studio with Terrace',
    price: null,
    description: 'Premium studio with private terrace.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/premiumterrace-1.jpg',
      'https://example.com/unisq/premiumterrace-2.jpg'
    ]
  },
  'uni-studio-lower': {
    type: 'Studio Lower',
    price: null,
    description: 'Standard lower-level studio.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/studiolower-1.jpg',
      'https://example.com/unisq/studiolower-2.jpg'
    ]
  },
  'uni-studio-upper': {
    type: 'Studio Upper',
    price: 619,
    description: 'Upper-level standard studio (~18 sqm).',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/studioupper-1.jpg',
      'https://example.com/unisq/studioupper-2.jpg'
    ]
  },
  'uni-studio-with-terrace': {
    type: 'Studio with Terrace',
    price: null,
    description: 'Studio with private terrace.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/studioterrace-1.jpg',
      'https://example.com/unisq/studioterrace-2.jpg'
    ]
  },
  'uni-studio-with-terrace-upper': {
    type: 'Studio with Terrace Upper',
    price: null,
    description: 'Upper-level studio with terrace.',
    features: [
      'Double bed',
      'Ensuite bathroom',
      'Kitchenette & terrace',
      'Desk & storage'
    ],
    images: [
      'https://example.com/unisq/studioterraceupper-1.jpg',
      'https://example.com/unisq/studioterraceupper-2.jpg'
    ]
  },
  'uni-dda-studio': {
    type: 'DDA Studio',
    price: null,
    description: 'Accessible studio (~27 sqm) with wet-room bathroom and kitchen.',
    features: [
      'Wet-room ensuite',
      'Lower-level kitchenette',
      'Double bed',
      'Spacious layout'
    ],
    images: [
      'https://example.com/unisq/ddastudio-1.jpg',
      'https://example.com/unisq/ddastudio-2.jpg'
    ]
  },
  'uni-twin-studio': {
    type: 'Twin Studio',
    price: 419,
    description: 'Twin studio (~26 sqm) with separate sleeping compartments and ensuite bathroom.',
    features: [
      'Two king single beds',
      'Ensuite bathroom',
      'Desk & wardrobe per compartment'
    ],
    images: [
      'https://example.com/unisq/twinstudio-1.jpg',
      'https://example.com/unisq/twinstudio-2.jpg'
    ]
  },
  'uni-twin-studio-high-floor': {
    type: 'Twin Studio High Floor',
    price: null,
    description: 'High-floor twin studio layout.',
    features: [
      'Two king single beds',
      'Ensuite bathroom',
      'Desk & wardrobe per compartment'
    ],
    images: [
      'https://example.com/unisq/twinstudiohf-1.jpg',
      'https://example.com/unisq/twinstudiohf-2.jpg'
    ]
  }
};
  

  const room = roomData[roomType];
  const showArrows = useBreakpointValue({ base: false, md: true });

  if (!room) {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4}>
          <Text>Room type not found</Text>
          <Button onClick={() => navigate(`/property/${propertyId}`)} variant="primary">
            Back to Property
          </Button>
        </VStack>
      </Container>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <HStack spacing={4}>
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              onClick={() => navigate(`/property/${propertyId}`)}
            >
            </Button>
            <VStack align="start" spacing={1}>
              <Heading size="lg" color="brand.navyBlue">
                {room.type}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="brand.parrotGreen">
                ${room.price}/month
              </Text>
            </VStack>
          </HStack>

          {/* Image Carousel */}
          <Box position="relative" w="100%" maxW="800px" mx="auto">
            {/* Main Image */}
            <Box position="relative" borderRadius="xl" overflow="hidden">
              <Image
                src={room.images[currentImageIndex]}
                alt={`${room.type} - Image ${currentImageIndex + 1}`}
                w="100%"
                h={{ base: "300px", md: "500px" }}
                objectFit="cover"
              />

              {/* Navigation Arrows */}
              {showArrows && room.images.length > 1 && (
                <>
                  <IconButton
                    icon={<FaChevronLeft />}
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    colorScheme="blackAlpha"
                    variant="solid"
                    size="lg"
                    onClick={prevImage}
                    zIndex={2}
                  />
                  <IconButton
                    icon={<FaChevronRight />}
                    position="absolute"
                    right={4}
                    top="50%"
                    transform="translateY(-50%)"
                    colorScheme="blackAlpha"
                    variant="solid"
                    size="lg"
                    onClick={nextImage}
                    zIndex={2}
                  />
                </>
              )}

              {/* Image Counter */}
              <Box
                position="absolute"
                bottom={4}
                right={4}
                bg="blackAlpha.700"
                color="white"
                px={3}
                py={1}
                borderRadius="md"
                fontSize="sm"
              >
                {currentImageIndex + 1} / {room.images.length}
              </Box>
            </Box>

            {/* Thumbnail Navigation */}
            <HStack spacing={2} mt={4} justify="center" flexWrap="wrap">
              {room.images.map((image, index) => (
                <Box
                  key={index}
                  cursor="pointer"
                  onClick={() => goToImage(index)}
                  border="2px"
                  borderColor={index === currentImageIndex ? "brand.parrotGreen" : "transparent"}
                  borderRadius="md"
                  overflow="hidden"
                  transition="all 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    w="60px"
                    h="60px"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </HStack>
          </Box>

          {/* Room Details */}
          <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" mb={3} color="brand.navyBlue">
                  About This Room
                </Heading>
                <Text color="gray.700" lineHeight="tall">
                  {room.description}
                </Text>
              </Box>

              <Box>
                <Heading size="md" mb={3} color="brand.navyBlue">
                  What's Included
                </Heading>
                <VStack spacing={2} align="start">
                  {room.features.map((feature, index) => (
                    <Text key={index} color="gray.700">
                      ✅ {feature}
                    </Text>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Action Buttons */}
          <Box bg="brand.lightGreen" p={6} borderRadius="xl">
            <VStack spacing={4}>
              <Heading size="md" color="brand.navyBlue" textAlign="center">
                Ready to book this room?
              </Heading>
              <Text textAlign="center" color="gray.700">
                Contact us to schedule a viewing or secure your booking
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button variant="primary" size="lg">
                  Book This Room
                </Button>
                <Button variant="outline" colorScheme="green" size="lg">
                  Schedule Viewing
                </Button>
                <Button variant="ghost" colorScheme="green" size="lg">
                  Ask Questions
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default RoomDetailPage;
