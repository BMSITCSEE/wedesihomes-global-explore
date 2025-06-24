import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PropertyCard from './PropertyCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertyCarousel = ({ properties }) => {
  return (
    <Box position="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        className="swiper-button-prev"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left={-4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        borderRadius="full"
        colorScheme="green"
        aria-label="Previous property"
      />
      <IconButton
        className="swiper-button-next"
        icon={<ChevronRightIcon />}
        position="absolute"
        right={-4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        borderRadius="full"
        colorScheme="green"
        aria-label="Next property"
      />
    </Box>
  );
};

export default PropertyCarousel;