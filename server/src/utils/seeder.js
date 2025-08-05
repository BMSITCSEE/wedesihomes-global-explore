const mongoose = require('mongoose');
const dotenv = require('dotenv');
const City = require('../models/City');
const Property = require('../models/Property');
const User = require('../models/User');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected for seeding');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

// Sample Cities Data
const cities = [
  {
    name: 'Melbourne',
    country: 'Australia',
    description: 'Major student city, home to University of Melbourne and RMIT',
    image: '/assets/melbourne.jpg',
    propertyCount: 0
  },
  {
    name: 'Adelaide',
    country: 'Australia',
    description: 'Peaceful city with top-ranked universities',
    image: '/assets/adelaide.jpg',
    propertyCount: 0
  },
  {
    name: 'Perth',
    country: 'Australia',
    description: 'Western Australia’s capital, known for education and lifestyle',
    image: '/assets/perth.jpg',
    propertyCount: 0
  },
  {
    name: 'Dublin',
    country: 'Ireland',
    description: 'Capital of Ireland, home to Trinity College and UCD',
    image: '/assets/dublin.jpg',
    propertyCount: 0
  },
  {
    name: 'Galway',
    country: 'Ireland', 
    description: 'Vibrant university city on the west coast',
    image: '/assets/galway.jpg',
    propertyCount: 0
  },
  {
    name: 'Cork',
    country: 'Ireland',
    description: 'Second largest city in Ireland',
    image: '/assets/cork.jpg',
    propertyCount: 0
  },
  {
    name: 'London',
    country: 'UK',
    description: 'Capital of England with world-renowned universities',
    image: '/assets/london.jpg',
    propertyCount: 0
  }
];

// Sample User (Property Owner)
const sampleUser = {
  name: 'Property Manager',
  email: 'manager@wedesihomes.com',
  password: '123456',
  role: 'owner',
  phone: '+353-1-234-5678'
};

// Sample Properties
// Sample Properties with ALL Room Types
const getSampleProperties = (cities, userId) => [
  // ADELAIDE CITY
  {
    name: 'Yugo Adelaide City',
    description: 'Squeezing the juice out of co-living, that\'s Adelaide City. Of course, there are private spaces – our studio apartments are great for that! But with over 700 students, the social potential is off the scale.',
    propertyType: 'apartment',
    price: {
      amount: 350,
      currency: 'AUD$',
      period: 'week'
    },
    location: {
      address: 'Adelaide City, 269 North Terrace, Adelaide, SA 5000',
      city: cities.find(c => c.name === 'Adelaide')._id,
      coordinates: {
        lat: -34.9285,
        lng: 138.6007
      },
      nearbyUniversities: [
        { name: 'The University of Adelaide', distance: 0.1 },
        { name: 'University of South Australia', distance: 0.9 },
        { name: 'Torrens University Australia', distance: 0.9 }
      ]
    },
    images: [
      { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754241849/adecbig_f1kuvl.webp' },
      { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754241849/adecbig_f1kuvl.webp' }
      //{ url: '' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning', 'Cinema Room'],
    roomDetails: {
      totalRooms: 700,
      availableRooms: 50,
      bathroomType: 'shared'
    },
    roomTypes: [
      {
        type: '1-bed-apartment',
        name: '1 Bed Apartment',
        price: { amount: 450, currency: 'AUD$', period: 'week' },
        description: 'Private one-bedroom apartment with kitchen and bathroom',
        features: ['Private bedroom', 'Private kitchen', 'Private bathroom', 'Living area', 'Study desk'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249956/1_Bed_Apartment1_ttfjhs.webp', caption: '1 bed apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249957/1_Bed_Apartment2_hztft9.webp', caption: '1 bed apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249959/1_Bed_Apartment3_ohdr3r.webp', caption: '1 bed apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249961/1_Bed_Apartment4_zz9mta.webp', caption: '1 bed apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249963/1_Bed_Apartment5_z6svrw.webp', caption: '1 bed apartment' }  
        ],
        bedCount: 1,
        bathroomType: 'private',
        bedType: 'double'
      },
      {
        type: '2-bed-shared-apartment',
        name: '2 Bed Shared Apartment',
        price: { amount: 380, currency: 'AUD$', period: 'week' },
        description: 'Shared two-bedroom apartment with common areas',
        features: ['Shared bedrooms', 'Shared kitchen', 'Shared bathroom', 'Common living area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249974/2_Bed_Shared_Apartment1_vkumy8.webp', caption: '2 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249975/2_Bed_Shared_Apartment2_v1mkps.webp', caption: '2 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249977/2_Bed_Shared_Apartment3_frcetw.webp', caption: '2 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249980/2_Bed_Shared_Apartment4_bpmx2t.webp', caption: '2 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249982/2_Bed_Shared_Apartment5_pc3lbz.webp', caption: '2 bed shared apartment' }
          
        ],
        bedCount: 2,
        bathroomType: 'shared',
        bedType: 'single'
      },
      {
        type: '4-bed-shared-apartment',
        name: '4 Bed Shared Apartment',
        price: { amount: 320, currency: 'AUD$', period: 'week' },
        description: 'Four-bedroom shared apartment ideal for groups',
        features: ['4 bedrooms', 'Shared kitchen', 'Shared bathrooms', 'Common areas'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250013/4_Bed_Shared_Apartment1_yozl97.webp', caption: '4 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250015/4_Bed_Shared_Apartment2_xk4v0z.webp', caption: '4 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250018/4_Bed_Shared_Apartment3_b6pi2a.webp', caption: '4 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250020/4_Bed_Shared_Apartment4_feenil.webp', caption: '4 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250025/4_Bed_Shared_Apartment6_z7urbk.webp', caption: '4 bed shared apartment' }
        ],
        bedCount: 4,
        bathroomType: 'shared',
        bedType: 'single'
      },
      {
        type: '4-bed-shared-apartment-large',
        name: '4 Bed Shared Apartment (Large)',
        price: { amount: 340, currency: 'AUD$', period: 'week' },
        description: 'Spacious four-bedroom shared apartment with extra living space',
        features: ['4 large bedrooms', 'Spacious kitchen', 'Multiple bathrooms', 'Large common area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249987/4_Bed_Shared_Apartment_Large_1_oexpos.webp', caption: '4 bed large apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249997/4_Bed_Shared_Apartment_Large_2_rewmky.webp', caption: '4 bed large apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754249998/4_Bed_Shared_Apartment_Large_3_ierphg.webp', caption: '4 bed large apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250001/4_Bed_Shared_Apartment_Large_4_ztignf.webp', caption: '4 bed large apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250007/4_Bed_Shared_Apartment_Large_7_uog2f9.webp', caption: '4 bed large apartment' }
        ],
        bedCount: 4,
        bathroomType: 'shared',
        roomSize: 'large',
        bedType: 'single'
      },
      {
        type: '5-bed-ensuite',
        name: '5 Bed Ensuite',
        price: { amount: 390, currency: 'AUD$', period: 'week' },
        description: 'Five-bedroom apartment with ensuite bathrooms',
        features: ['5 bedrooms', 'Ensuite bathrooms', 'Shared kitchen', 'Common living area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250035/5_Bed_Ensuite1_ofumpb.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250036/5_Bed_Ensuite2_kaotky.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250039/5_Bed_Ensuite3_ccdp8w.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250041/5_Bed_Ensuite4_vlwnn7.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250044/5_Bed_Ensuite5_swou2s.webp', caption: '5 bed ensuite' }
        ],
        bedCount: 5,
        bathroomType: 'private',
        bedType: 'single'
      },
      {
        type: '5-bed-shared-apartment',
        name: '5 Bed Shared Apartment',
        price: { amount: 310, currency: 'AUD$', period: 'week' },
        description: 'Five-bedroom shared apartment with communal facilities',
        features: ['5 bedrooms', 'Shared bathrooms', 'Large kitchen', 'Study areas'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250052/5_Bed_Shared_Apartment1_ekyyv7.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250055/5_Bed_Shared_Apartment2_a16jri.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250057/5_Bed_Shared_Apartment3_rvk8qi.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250059/5_Bed_Shared_Apartment4_ciwt3u.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250065/5_Bed_Shared_Apartment7_kpc5fy.webp', caption: '5 bed shared apartment' }
        ],
        bedCount: 5,
        bathroomType: 'shared',
        bedType: 'single'
      },
      {
        type: 'single-ensuite',
        name: 'Single Ensuite',
        price: { amount: 420, currency: 'AUD$', period: 'week' },
        description: 'Private single room with ensuite bathroom',
        features: ['Private bedroom', 'Ensuite bathroom', 'Shared kitchen', 'Study desk'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250071/Single_Ensuite1_vlgx7o.webp', caption: 'Single ensuite room' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250074/Single_Ensuite2_bfn1z8.webp', caption: 'Single ensuite room' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250075/Single_Ensuite3_oj83hj.webp', caption: 'Single ensuite room' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250078/Single_Ensuite4_lv2dgk.webp', caption: 'Single ensuite room' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250079/Single_Ensuite5_tgjvtj.webp', caption: 'Single ensuite room' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        bedType: 'single'
      },
      {
        type: 'studio',
        name: 'Studio',
        price: { amount: 480, currency: 'AUD$', period: 'week' },
        description: 'Self-contained studio apartment',
        features: ['Private studio', 'Kitchenette', 'Private bathroom', 'Study area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250127/Studio1_ru5gfs.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250129/Studio2_jvuuoc.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250132/Studio3_yj6gxg.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250135/Studio4_miiygb.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250136/Studio5_bpdkop.webp', caption: 'Studio apartment' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        bedType: 'double'
      },
      {
        type: 'studio-large',
        name: 'Studio (Large)',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Spacious self-contained studio apartment',
        features: ['Large studio space', 'Full kitchen', 'Private bathroom', 'Extra storage'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250085/Studio_Large_1_aaul89.webp', caption: 'Large studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250096/Studio_Large_2_ugage4.webp', caption: 'Large studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250097/Studio_Large_3_d8nxbx.webp', caption: 'Large studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250100/Studio_Large_4_wce8kd.webp', caption: 'Large studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250102/Studio_Large_5_fx3t37.webp', caption: 'Large studio apartment' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        roomSize: 'large',
        bedType: 'double'
      },
      {
        type: 'studio-dda',
        name: 'Studio DDA',
        price: { amount: 480, currency: 'AUD$', period: 'week' },
        description: 'Disability-accessible studio apartment',
        features: ['DDA compliant', 'Accessible bathroom', 'Kitchenette', 'Emergency assistance'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250112/Studio_DDA1_lqnrks.webp', caption: 'DDA studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250115/Studio_DDA2_dar721.webp', caption: 'DDA studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250117/Studio_DDA3_cz9mcu.webp', caption: 'DDA studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250120/Studio_DDA4_spjgbh.webp', caption: 'DDA studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754250121/Studio_DDA5_zpimu3.webp', caption: 'DDA studio' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        isDDA: true,
        bedType: 'single'
      }
    ],
    rules: { smoking: false, pets: false, visitors: true, minStay: 6 },
    owner: userId,
    verified: true,
    featured: true,
    rating: { average: 4.8, count: 22 },
    availability: true
  },

  // PERTH CITY
  {
    name: 'Yugo Perth City',
    description: 'Experience best-in-class student living at Yugo Perth City! Our prime location provides convenient access to bus stops and Perth Railway Station, seamlessly connecting you to major universities.',
    propertyType: 'apartment',
    price: {
      amount: 380,
      currency: 'AUD$',
      period: 'week'
    },
    location: {
      address: 'Yugo Perth City, 89 Stirling Street, Perth, 6000',
      city: cities.find(c => c.name === 'Perth')._id,
      coordinates: {
        lat: -31.9505,
        lng: 115.8605
      },
      nearbyUniversities: [
        { name: 'Curtin University', distance: 0.1 },
        { name: 'The University of Western Australia', distance: 0.9 },
        { name: 'UHI Perth', distance: 0.9 }
      ]
    },
    images: [
      { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754241819/pertcbig_c0sfti.webp', caption: 'Perth City Building' },
      { url: 'https://res.cloudinary.com/demo/image/upload/v1440095286/tkfvgr7fmlg3eamzsgaa.jpg', caption: 'Pool Area' },
      { url: 'https://res.cloudinary.com/demo/image/upload/v1440095261/rkyjkfgwvg0l2xhqmtln.jpg', caption: 'Rooftop Terrace' }
    ],
    amenities: ['WiFi', 'Gym', 'Pool', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning', 'Cinema Room', 'Games Room', 'Rooftop Terrace'],
    roomDetails: {
      totalRooms: 400,
      availableRooms: 35,
      bathroomType: 'shared'
    },
    roomTypes: [
      {
        type: '5-bed-ensuite-apartment',
        name: '5 Bed Ensuite Apartment',
        price: { amount: 360, currency: 'AUD$', period: 'week' },
        description: 'Five-bedroom apartment with ensuite bathrooms',
        features: ['5 bedrooms', 'Ensuite bathrooms', 'Shared kitchen', 'Common living area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248032/5_Bed_Ensuite_Apartment1_jpjnrs.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248033/5_Bed_Ensuite_Apartment2_mdiijr.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248034/5_Bed_Ensuite_Apartment3_gclko4.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248037/5_Bed_Ensuite_Apartment4_stnip2.webp', caption: '5 bed ensuite' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248038/5_Bed_Ensuite_Apartment5_p7yy27.webp', caption: '5 bed ensuite' }
        ],
        bedCount: 5,
        bathroomType: 'private'
      },
      {
        type: '5-bed-ensuite-apartment-high-floor',
        name: '5 Bed Ensuite Apartment High Floor',
        price: { amount: 390, currency: 'AUD$', period: 'week' },
        description: 'Five-bedroom apartment with ensuite bathrooms on high floor with city views',
        features: ['5 bedrooms', 'Ensuite bathrooms', 'City views', 'High floor location'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248020/5_Bed_Ensuite_Apartment_High_Floor1_vsllxx.webp', caption: '5 bed ensuite high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248021/5_Bed_Ensuite_Apartment_High_Floor2_w7jhjo.webp', caption: '5 bed ensuite high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248023/5_Bed_Ensuite_Apartment_High_Floor3_ckjha6.webp', caption: '5 bed ensuite high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248024/5_Bed_Ensuite_Apartment_High_Floor4_guy5bc.webp', caption: '5 bed ensuite high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248026/5_Bed_Ensuite_Apartment_High_Floor5_uuqxst.webp', caption: '5 bed ensuite high floor' }
        ],
        bedCount: 5,
        bathroomType: 'private',
        floor: 'high',
        hasView: true,
        viewType: 'city'
      },
      {
        type: '5-bed-shared-apartment',
        name: '5 Bed Shared Apartment',
        price: { amount: 320, currency: 'AUD$', period: 'week' },
        description: 'Five-bedroom shared apartment with communal facilities',
        features: ['5 bedrooms', 'Shared bathrooms', 'Large kitchen', 'Study areas'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248060/5_Bed_Shared_Apartment1_m2wp4n.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248061/5_Bed_Shared_Apartment2_intdmd.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248064/5_Bed_Shared_Apartment3_anence.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248065/5_Bed_Shared_Apartment4_vg5duu.webp', caption: '5 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248068/5_Bed_Shared_Apartment5_iqabds.webp', caption: '5 bed shared apartment' }
        ],
        bedCount: 5,
        bathroomType: 'shared'
      },
      {
        type: '5-bed-shared-apartment-high-floor',
        name: '5 Bed Shared Apartment High Floor',
        price: { amount: 340, currency: 'AUD$', period: 'week' },
        description: 'Five-bedroom shared apartment on high floor with views',
        features: ['5 bedrooms', 'Shared bathrooms', 'High floor', 'City views'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248044/5_Bed_Shared_Apartment_High_Floor1_t6xldp.webp', caption: '5 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248046/5_Bed_Shared_Apartment_High_Floor2_bex41z.webp', caption: '5 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248048/5_Bed_Shared_Apartment_High_Floor3_w4ar8g.webp', caption: '5 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248050/5_Bed_Shared_Apartment_High_Floor4_tktbbv.webp', caption: '5 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248053/5_Bed_Shared_Apartment_High_Floor6_yaquyb.webp', caption: '5 bed shared high floor' }
        ],
        bedCount: 5,
        bathroomType: 'shared',
        floor: 'high',
        hasView: true
      },
      {
        type: '6-bed-shared-apartment',
        name: '6 Bed Shared Apartment',
        price: { amount: 300, currency: 'AUD$', period: 'week' },
        description: 'Six-bedroom shared apartment for large groups',
        features: ['6 bedrooms', 'Multiple bathrooms', 'Large kitchen', 'Common areas'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248101/6_Bed_Shared_Apartment1_tag7af.webp', caption: '6 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248108/6_Bed_Shared_Apartment2_rfwtfz.webp', caption: '6 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248105/6_Bed_Shared_Apartment3_cd0i5t.webp', caption: '6 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248106/6_Bed_Shared_Apartment4_llvndh.webp', caption: '6 bed shared apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248109/6_Bed_Shared_Apartment5_kr8gi5.webp', caption: '6 bed shared apartment' }
        ],
        bedCount: 6,
        bathroomType: 'shared'
      },
      {
        type: '6-bed-shared-apartment-high-floor',
        name: '6 Bed Shared Apartment High Floor',
        price: { amount: 320, currency: 'AUD$', period: 'week' },
        description: 'Six-bedroom shared apartment on high floor',
        features: ['6 bedrooms', 'Multiple bathrooms', 'High floor views', 'Large common area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248076/6_Bed_Shared_Apartment_High_Floor1_frq4xj.webp', caption: '6 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248089/6_Bed_Shared_Apartment_High_Floor2_bevsbz.webp', caption: '6 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248090/6_Bed_Shared_Apartment_High_Floor3_y7ozkx.webp', caption: '6 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248090/6_Bed_Shared_Apartment_High_Floor4_erpokl.webp', caption: '6 bed shared high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248093/6_Bed_Shared_Apartment_High_Floor5_kq0zse.webp', caption: '6 bed shared high floor' }
        ],
        bedCount: 6,
        bathroomType: 'shared',
        floor: 'high',
        hasView: true
      },
      {
        type: 'studio',
        name: 'Studio',
        price: { amount: 480, currency: 'AUD$', period: 'week' },
        description: 'Self-contained studio apartment',
        features: ['Private studio', 'Kitchenette', 'Private bathroom', 'Study area'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248140/Studio1_bj8j06.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248142/Studio2_tq2cga.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248145/Studio3_u6iyrs.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248147/Studio4_uzw8zh.webp', caption: 'Studio apartment' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248148/Studio5_jhtwhq.webp', caption: 'Studio apartment' }
        ],
        bedCount: 1,
        bathroomType: 'private'
      },
      {
        type: 'studio-high-floor',
        name: 'Studio High Floor',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Studio apartment on high floor with city views',
        features: ['Private studio', 'High floor location', 'City views', 'Kitchenette'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248117/Studio_High_Floor1_synmdg.webp', caption: 'Studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248118/Studio_High_Floor2_jjqgkl.webp', caption: 'Studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248123/Studio_High_Floor3_mrjryq.webp', caption: 'Studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248123/Studio_High_Floor4_tnmvtj.webp', caption: 'Studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248126/Studio_High_Floor5_ksol3e.webp', caption: 'Studio high floor' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        floor: 'high',
        hasView: true
      },
      {
        type: 'twin-studio',
        name: 'Twin Studio',
        price: { amount: 420, currency: 'AUD$', period: 'week' },
        description: 'Studio apartment with twin beds for sharing',
        features: ['Twin beds', 'Shared studio space', 'Kitchenette', 'Private bathroom'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248182/Twin_Studio1_vdoq7y.webp', caption: 'Twin studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248183/Twin_Studio2_bxamyu.webp', caption: 'Twin studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248186/Twin_Studio3_zgougz.webp', caption: 'Twin studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248187/Twin_Studio4_umzlnp.webp', caption: 'Twin studio' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248190/Twin_Studio5_nm6y6e.webp', caption: 'Twin studio' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        bedType: 'twin'
      },
      {
        type: 'twin-studio-high-floor',
        name: 'Twin Studio High Floor',
        price: { amount: 450, currency: 'AUD$', period: 'week' },
        description: 'Twin studio on high floor with panoramic views',
        features: ['Twin beds', 'High floor views', 'Kitchenette', 'Premium location'],
        images: [
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248164/Twin_Studio_High_Floor1_uhps7l.webp', caption: 'Twin studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248165/Twin_Studio_High_Floor2_pzkdra.webp', caption: 'Twin studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248168/Twin_Studio_High_Floor3_raqjoe.webp', caption: 'Twin studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248170/Twin_Studio_High_Floor4_ct73lq.webp', caption: 'Twin studio high floor' },
          { url: 'https://res.cloudinary.com/dcwhtdkpb/image/upload/v1754248173/Twin_Studio_High_Floor5_sjwih7.webp', caption: 'Twin studio high floor' }
        ],
        bedCount: 1,
        bathroomType: 'private',
        bedType: 'twin',
        floor: 'high',
        hasView: true
      }
    ],
    rules: { smoking: false, pets: false, visitors: true, minStay: 6 },
    owner: userId,
    verified: true,
    featured: true,
    rating: { average: 4.6, count: 19 },
    availability: true
  },

  // BERKELEY STREET MELBOURNE
  {
    name: 'Yugo Berkeley Street',
    description: 'Want a room that\'s just what you\'re looking for? At this Elizabeth Street address, you\'ll find one-person studios and six-bedroom townhouses (with everything in between).',
    propertyType: 'apartment',
    price: {
      amount: 400,
      currency: 'AUD$',
      period: 'week'
    },
    location: {
      address: 'Yugo Berkeley Street, 145 Berkeley Street, Melbourne, 3000',
      city: cities.find(c => c.name === 'Melbourne')._id,
      coordinates: {
        lat: -37.8136,
        lng: 144.9631
      },
      nearbyUniversities: [
        { name: 'University of Melbourne', distance: 0.1 },
        { name: 'RMIT University', distance: 0.9 },
        { name: 'Trinity College', distance: 0.8 }
      ]
    },
    images: [
      { url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', caption: 'Berkeley Street Building' },
      { url: 'https://res.cloudinary.com/demo/image/upload/v1440095286/tkfvgr7fmlg3eamzsgaa.jpg', caption: 'Rooftop Terrace' },
      { url: 'https://res.cloudinary.com/demo/image/upload/v1440095261/rkyjkfgwvg0l2xhqmtln.jpg', caption: 'Cinema Room' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning', 'Cinema Room', 'Rooftop Terrace'],
    roomDetails: {
      totalRooms: 330,
      availableRooms: 25,
      bathroomType: 'shared'
    },
    roomTypes: [
      {
        type: '1-bed-apartment',
        name: '1 Bed Apartment',
        price: { amount: 550, currency: 'AUD$', period: 'week' },
        description: 'Private one-bedroom apartment with full facilities',
        features: ['Private bedroom', 'Private kitchen', 'Private bathroom', 'Living area'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '1 bed apartment' }],
        bedCount: 1, bathroomType: 'private'
      },
      {
        type: '3-bed-apartment',
        name: '3 Bed Apartment',
        price: { amount: 420, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom apartment for sharing',
        features: ['3 bedrooms', 'Shared kitchen', 'Shared bathrooms', 'Common living area'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed apartment' }],
        bedCount: 3, bathroomType: 'shared'
      },
      {
        type: '3-bed-apartment-top-floor',
        name: '3 Bed Apartment Top Floor',
        price: { amount: 450, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom apartment on top floor with premium views',
        features: ['3 bedrooms', 'Top floor location', 'Premium views', 'Shared facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed top floor' }],
        bedCount: 3, bathroomType: 'shared', floor: 'top', hasView: true
      },
      {
        type: '3-bed-apartment-with-terrace',
        name: '3 Bed Apartment with Terrace',
        price: { amount: 480, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom apartment with private terrace access',
        features: ['3 bedrooms', 'Private terrace', 'Outdoor space', 'Shared facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed with terrace' }],
        bedCount: 3, bathroomType: 'shared', hasTerrace: true
      },
      {
        type: '3-bed-apartment-with-terrace-upper',
        name: '3 Bed Apartment with Terrace Upper',
        price: { amount: 500, currency: 'AUD$', period: 'week' },
        description: 'Upper floor three-bedroom apartment with terrace',
        features: ['3 bedrooms', 'Upper floor', 'Private terrace', 'Premium location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed terrace upper' }],
        bedCount: 3, bathroomType: 'shared', hasTerrace: true, floor: 'upper'
      },
      {
        type: '3-bed-ensuite-apartment',
        name: '3 Bed Ensuite Apartment',
        price: { amount: 470, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom apartment with ensuite bathrooms',
        features: ['3 bedrooms', 'Ensuite bathrooms', 'Shared kitchen', 'Privacy'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed ensuite' }],
        bedCount: 3, bathroomType: 'private'
      },
      {
        type: '3-bed-ensuite-apartment-with-terrace',
        name: '3 Bed Ensuite Apartment with Terrace',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Premium three-bedroom ensuite apartment with terrace',
        features: ['3 bedrooms', 'Ensuite bathrooms', 'Private terrace', 'Premium amenities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed ensuite terrace' }],
        bedCount: 3, bathroomType: 'private', hasTerrace: true
      },
      {
        type: '6-bed-townhouse',
        name: '6 Bed Townhouse',
        price: { amount: 350, currency: 'AUD$', period: 'week' },
        description: 'Spacious six-bedroom townhouse for large groups',
        features: ['6 bedrooms', 'Multiple bathrooms', 'Full kitchen', 'Living areas', 'Outdoor space'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '6 bed townhouse' }],
        bedCount: 6, bathroomType: 'shared'
      },
      {
        type: '6-bed-townhouse-city-view',
        name: '6 Bed Townhouse City View',
        price: { amount: 380, currency: 'AUD$', period: 'week' },
        description: 'Six-bedroom townhouse with stunning city views',
        features: ['6 bedrooms', 'City views', 'Multiple levels', 'Premium location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '6 bed townhouse city view' }],
        bedCount: 6, bathroomType: 'shared', hasView: true, viewType: 'city'
      },
      {
        type: 'dda-studio',
        name: 'DDA Studio',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Disability-accessible studio apartment',
        features: ['DDA compliant', 'Accessible facilities', 'Private bathroom', 'Kitchenette'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'DDA studio' }],
        bedCount: 1, bathroomType: 'private', isDDA: true
      },
      {
        type: 'executive-studio',
        name: 'Executive Studio',
        price: { amount: 580, currency: 'AUD$', period: 'week' },
        description: 'Premium executive studio with high-end finishes',
        features: ['Executive finishes', 'Premium appliances', 'Large space', 'Study area'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Executive studio' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'executive'
      },
      {
        type: 'executive-studio-lower',
        name: 'Executive Studio Lower',
        price: { amount: 560, currency: 'AUD$', period: 'week' },
        description: 'Executive studio on lower floor',
        features: ['Executive finishes', 'Lower floor', 'Easy access', 'Premium amenities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Executive studio lower' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'executive', floor: 'lower'
      },
      {
        type: 'executive-studio-with-cbd-view',
        name: 'Executive Studio with CBD View',
        price: { amount: 620, currency: 'AUD$', period: 'week' },
        description: 'Executive studio with stunning CBD views',
        features: ['Executive finishes', 'CBD views', 'Premium location', 'Large windows'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Executive studio CBD view' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'executive', hasView: true, viewType: 'cbd'
      },
      {
        type: 'executive-studio-with-terrace',
        name: 'Executive Studio with Terrace',
        price: { amount: 650, currency: 'AUD$', period: 'week' },
        description: 'Executive studio with private terrace',
        features: ['Executive finishes', 'Private terrace', 'Outdoor space', 'Premium amenities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Executive studio terrace' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'executive', hasTerrace: true
      },
      {
        type: 'executive-studio-with-terrace-upper',
        name: 'Executive Studio with Terrace Upper',
        price: { amount: 670, currency: 'AUD$', period: 'week' },
        description: 'Upper floor executive studio with terrace',
        features: ['Executive finishes', 'Upper floor', 'Private terrace', 'Premium views'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Executive studio terrace upper' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'executive', hasTerrace: true, floor: 'upper'
      },
      {
        type: 'premium-studio',
        name: 'Premium Studio',
        price: { amount: 540, currency: 'AUD$', period: 'week' },
        description: 'Premium studio apartment with modern amenities',
        features: ['Premium finishes', 'Modern appliances', 'Spacious layout', 'Study area'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Premium studio' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'premium'
      },
      {
        type: 'premium-studio-with-cbd-view',
        name: 'Premium Studio with CBD View',
        price: { amount: 580, currency: 'AUD$', period: 'week' },
        description: 'Premium studio with CBD views',
        features: ['Premium finishes', 'CBD views', 'Large windows', 'Modern amenities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Premium studio CBD view' }],
                bedCount: 1, bathroomType: 'private', roomSize: 'premium', hasView: true, viewType: 'cbd'
      },
      {
        type: 'studio-with-terrace',
        name: 'Studio with Terrace',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Studio apartment with private terrace access',
        features: ['Private terrace', 'Outdoor space', 'Kitchenette', 'Natural light'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Studio with terrace' }],
        bedCount: 1, bathroomType: 'private', hasTerrace: true
      },
      {
        type: 'studio-with-terrace-upper',
        name: 'Studio with Terrace Upper',
        price: { amount: 540, currency: 'AUD$', period: 'week' },
        description: 'Upper floor studio with terrace and city views',
        features: ['Upper floor', 'Private terrace', 'City views', 'Premium location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Studio terrace upper' }],
        bedCount: 1, bathroomType: 'private', hasTerrace: true, floor: 'upper'
      }
    ],
    rules: { smoking: false, pets: false, visitors: true, minStay: 6 },
    owner: userId,
    verified: true,
    featured: true,
    rating: { average: 4.8, count: 22 },
    availability: true
  },

  // UNIVERSITY SQUARE MELBOURNE
  {
    name: 'University Square',
    description: 'Want a top-notch studio with your own private terrace? Or how about a sociable six-bed apartment? With 20 different room styles, chances are we\'ve got what you\'re looking for.',
    propertyType: 'apartment',
    price: {
      amount: 400,
      currency: 'AUD$',
      period: 'week'
    },
    location: {
      address: 'University Square, 85 Barry Street, Carlton, 3053',
      city: cities.find(c => c.name === 'Melbourne')._id,
      coordinates: {
        lat: -37.8014,
        lng: 144.9633
      },
      nearbyUniversities: [
        { name: 'University of Melbourne', distance: 0.1 },
        { name: 'RMIT University', distance: 0.9 },
        { name: 'Trinity College', distance: 0.9 }
      ]
    },
    images: [
      { url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', caption: 'University Square Building' },
      { url: 'https://res.cloudinary.com/demo/image/upload/v1440095286/tkfvgr7fmlg3eamzsgaa.jpg', caption: 'Study Areas' },
      { url: 'https://res.cloudinary.com/demo/image/upload/v1440095261/rkyjkfgwvg0l2xhqmtln.jpg', caption: 'Common Facilities' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning', 'BBQ Area'],
    roomDetails: {
      totalRooms: 340,
      availableRooms: 30,
      bathroomType: 'shared'
    },
    roomTypes: [
      {
        type: '1-bed-apartment-lower',
        name: '1 Bed Apartment Lower',
        price: { amount: 500, currency: 'AUD$', period: 'week' },
        description: 'One-bedroom apartment on lower floor with easy access',
        features: ['Private bedroom', 'Lower floor', 'Easy access', 'Private facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '1 bed lower' }],
        bedCount: 1, bathroomType: 'private', floor: 'lower'
      },
      {
        type: '1-bed-apartment-upper',
        name: '1 Bed Apartment Upper',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'One-bedroom apartment on upper floor with better views',
        features: ['Private bedroom', 'Upper floor', 'Better views', 'Private facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '1 bed upper' }],
        bedCount: 1, bathroomType: 'private', floor: 'upper'
      },
      {
        type: '1-bed-apartment-with-terrace',
        name: '1 Bed Apartment with Terrace',
        price: { amount: 580, currency: 'AUD$', period: 'week' },
        description: 'One-bedroom apartment with private terrace',
        features: ['Private bedroom', 'Private terrace', 'Outdoor space', 'Premium location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '1 bed terrace' }],
        bedCount: 1, bathroomType: 'private', hasTerrace: true
      },
      {
        type: '2-bed-apartment',
        name: '2 Bed Apartment',
        price: { amount: 420, currency: 'AUD$', period: 'week' },
        description: 'Two-bedroom apartment perfect for sharing',
        features: ['2 bedrooms', 'Shared facilities', 'Common living area', 'Study spaces'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '2 bed apartment' }],
        bedCount: 2, bathroomType: 'shared'
      },
      {
        type: '2-bed-apartment-with-terrace-lower',
        name: '2 Bed Apartment with Terrace – Lower',
        price: { amount: 450, currency: 'AUD$', period: 'week' },
        description: 'Lower floor two-bedroom apartment with terrace access',
        features: ['2 bedrooms', 'Lower floor', 'Terrace access', 'Easy access'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '2 bed terrace lower' }],
        bedCount: 2, bathroomType: 'shared', hasTerrace: true, floor: 'lower'
      },
      {
        type: '2-bed-apartment-with-terrace-upper',
        name: '2 Bed Apartment with Terrace – Upper',
        price: { amount: 480, currency: 'AUD$', period: 'week' },
        description: 'Upper floor two-bedroom apartment with terrace and views',
        features: ['2 bedrooms', 'Upper floor', 'Private terrace', 'Better views'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '2 bed terrace upper' }],
        bedCount: 2, bathroomType: 'shared', hasTerrace: true, floor: 'upper'
      },
      {
        type: '3-bed-apartment-lower',
        name: '3 Bed Apartment Lower',
        price: { amount: 380, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom apartment on lower floor',
        features: ['3 bedrooms', 'Lower floor', 'Shared facilities', 'Easy access'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed lower' }],
        bedCount: 3, bathroomType: 'shared', floor: 'lower'
      },
      {
        type: '3-bed-apartment-upper',
        name: '3 Bed Apartment Upper',
        price: { amount: 400, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom apartment on upper floor with views',
        features: ['3 bedrooms', 'Upper floor', 'Better views', 'Shared facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed upper' }],
        bedCount: 3, bathroomType: 'shared', floor: 'upper'
      },
      {
        type: '3-bed-duplex-with-terrace',
        name: '3 Bed Duplex with Terrace',
        price: { amount: 460, currency: 'AUD$', period: 'week' },
        description: 'Three-bedroom duplex apartment with private terrace',
        features: ['3 bedrooms', 'Duplex layout', 'Private terrace', 'Multiple levels'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '3 bed duplex terrace' }],
        bedCount: 3, bathroomType: 'shared', hasTerrace: true
      },
      {
        type: '4-bed-apartment',
        name: '4 Bed Apartment',
        price: { amount: 350, currency: 'AUD$', period: 'week' },
        description: 'Four-bedroom apartment for group living',
        features: ['4 bedrooms', 'Shared facilities', 'Large common area', 'Group friendly'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '4 bed apartment' }],
        bedCount: 4, bathroomType: 'shared'
      },
      {
        type: '6-bed-apartment-lower-bunk-cabin',
        name: '6 Bed Apartment Lower (Bunk Cabin)',
        price: { amount: 280, currency: 'AUD$', period: 'week' },
        description: 'Budget-friendly six-bed apartment with bunk beds on lower floor',
        features: ['6 bunk beds', 'Lower floor', 'Budget option', 'Shared facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '6 bed bunk lower' }],
        bedCount: 6, bathroomType: 'shared', bedType: 'bunk', floor: 'lower'
      },
      {
        type: '6-bed-apartment-with-terrace-bunk-cabin',
        name: '6 Bed Apartment with Terrace (Bunk Cabin)',
        price: { amount: 300, currency: 'AUD$', period: 'week' },
        description: 'Six-bed bunk apartment with terrace access',
        features: ['6 bunk beds', 'Terrace access', 'Outdoor space', 'Budget friendly'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '6 bed bunk terrace' }],
        bedCount: 6, bathroomType: 'shared', bedType: 'bunk', hasTerrace: true
      },
      {
        type: '6-bed-apartments-upper-bunk-cabin',
        name: '6-bed Apartments Upper (Bunk Cabin)',
        price: { amount: 290, currency: 'AUD$', period: 'week' },
        description: 'Upper floor six-bed bunk apartment',
        features: ['6 bunk beds', 'Upper floor', 'Budget option', 'Shared facilities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: '6 bed bunk upper' }],
        bedCount: 6, bathroomType: 'shared', bedType: 'bunk', floor: 'upper'
      },
      {
        type: 'dda-studio',
        name: 'DDA Studio',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Fully accessible studio apartment',
        features: ['DDA compliant', 'Accessible bathroom', 'Accessible kitchen', 'Support features'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'DDA studio' }],
        bedCount: 1, bathroomType: 'private', isDDA: true
      },
      {
        type: 'premium-studio',
        name: 'Premium Studio',
        price: { amount: 540, currency: 'AUD$', period: 'week' },
        description: 'High-end studio with premium finishes',
        features: ['Premium finishes', 'High-end appliances', 'Spacious layout', 'Modern design'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Premium studio' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'premium'
      },
      {
        type: 'premium-studio-with-terrace',
        name: 'Premium Studio with Terrace',
        price: { amount: 580, currency: 'AUD$', period: 'week' },
        description: 'Premium studio with private terrace',
        features: ['Premium finishes', 'Private terrace', 'Outdoor space', 'High-end amenities'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Premium studio terrace' }],
        bedCount: 1, bathroomType: 'private', roomSize: 'premium', hasTerrace: true
      },
      {
        type: 'studio-lower',
        name: 'Studio Lower',
        price: { amount: 460, currency: 'AUD$', period: 'week' },
        description: 'Studio apartment on lower floor',
        features: ['Lower floor', 'Easy access', 'Private facilities', 'Convenient location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Studio lower' }],
        bedCount: 1, bathroomType: 'private', floor: 'lower'
      },
      {
        type: 'studio-upper',
        name: 'Studio Upper',
        price: { amount: 480, currency: 'AUD$', period: 'week' },
        description: 'Studio apartment on upper floor with views',
        features: ['Upper floor', 'Better views', 'Private facilities', 'Quiet location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Studio upper' }],
        bedCount: 1, bathroomType: 'private', floor: 'upper'
      },
      {
        type: 'studio-with-terrace',
        name: 'Studio with Terrace',
        price: { amount: 520, currency: 'AUD$', period: 'week' },
        description: 'Studio apartment with private outdoor terrace',
        features: ['Private terrace', 'Outdoor space', 'Natural light', 'Premium location'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Studio terrace' }],
        bedCount: 1, bathroomType: 'private', hasTerrace: true
      },
      {
        type: 'twin-studio',
        name: 'Twin Studio',
        price: { amount: 420, currency: 'AUD$', period: 'week' },
        description: 'Studio with twin beds for sharing',
        features: ['Twin beds', 'Shared studio space', 'Private facilities', 'Social option'],
        images: [{ url: 'https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample', caption: 'Twin studio' }],
        bedCount: 1, bathroomType: 'private', bedType: 'twin'
      }
    ],
    rules: { smoking: false, pets: false, visitors: true, minStay: 6 },
    owner: userId,
    verified: true,
    featured: true,
    rating: { average: 4.8, count: 22 },
    availability: true
  }
];

// Seeder Functions
const importData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await City.deleteMany();
    await Property.deleteMany();
    await User.deleteOne({ email: sampleUser.email });

    console.log('🗑️  Data Destroyed');

    // Insert Cities
    const createdCities = await City.insertMany(cities);
    console.log('🏙️  Cities Imported');

    // Create sample user
    const createdUser = await User.create(sampleUser);
    console.log('👤 Sample user created');

    // Insert Properties
    const properties = getSampleProperties(createdCities, createdUser._id);
    await Property.insertMany(properties);
    
    // Update city property counts
    for (const city of createdCities) {
      const count = properties.filter(p => p.location.city.toString() === city._id.toString()).length;
      await City.findByIdAndUpdate(city._id, { propertyCount: count });
    }

    console.log('🏠 Properties Imported');
    console.log('✅ Data Import Success');
    process.exit();
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await City.deleteMany();
    await Property.deleteMany();
    await User.deleteOne({ email: sampleUser.email });
    console.log('🗑️  Data Destroyed');
    process.exit();
  } catch (error) {
    console.error('❌ Error destroying data:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
