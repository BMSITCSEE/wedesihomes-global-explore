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
const getSampleProperties = (cities, userId) => [
    // AUSTRALIA PROPERTIES - ADD THESE
  
  {
    name: 'Berkley Street',
    description: 'Want a room that’s just what you’re looking for? At this Elizabeth Street address, you’ll find one-person studios and six-bedroom townhouses (with everything in between). And they all include Smart TVs, super-fast wifi and air con. And that\'s not all. When deadlines loom, hit the communal study room or grab a study pod. Alternatively, avoid work altogether on our sunny terrace with skyscraper views, inside the gym or in our cinema room, bingeing on movie collections! Living with 330+ other Yugoers, there’ll always be someone who wants to join you.',
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
        lat: 51.4988,
        lng: -0.1749
      },
      nearbyUniversities: [
        { name: 'University of Melbourne', distance: 0.1 },
        { name: 'RMIT University', distance: 0.9 },
        { name: 'Trinity College', distance: 0.8 }
      ]
    },
    images: [
      { url: '' },
      { url: '' },
      { url: '' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning'],
    roomDetails: {
      totalRooms: 20,
      availableRooms: 7,
      bathroomType: 'private'
    },
    rules: {
      smoking: false,
      pets: false,
      visitors: true,
      minStay: 6
    },
    owner: userId,
    verified: true,
    featured: true,
    rating: {
      average: 4.8,
      count: 22
    },
    availability: true
  },
  
  {
    name: 'University Square',
    description: 'Want a top-notch studio with your own private terrace? Or how about a sociable six-bed apartment? With 20 different room styles, chances are we’ve got what you’re looking for. And even if you prefer to fly solo, with 340+ other students living here, finding a workout buddy for the gym or a bbq buddy for a cook up on the terrace won’t be a problem. Even better, at this Carlton address, not far from Little Italy, you’re just over the road from Melbourne Uni. You’ll never be late for lectures again!',
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
        lat: 51.4988,
        lng: -0.1749
      },
      nearbyUniversities: [
        { name: 'University of Melbourne', distance: 0.1 },
        { name: 'RMIT University', distance: 0.9 },
        { name: 'Trinity College', distance: 0.9 }
      ]
    },
    images: [
      { url: '' },
      { url: '' },
      { url: '' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning'],
    roomDetails: {
      totalRooms: 20,
      availableRooms: 7,
      bathroomType: 'private'
    },
    rules: {
      smoking: false,
      pets: false,
      visitors: true,
      minStay: 6
    },
    owner: userId,
    verified: true,
    featured: true,
    rating: {
      average: 4.8,
      count: 22
    },
    availability: true
  },
  
  {
    name: 'Yugo AdelaideCity',
    description: 'Squeezing the juice out of co-living, that’s Adelaide City. Of course, there are private spaces – our studio apartments are great for that! But with over 700 students, the social potential is off the scale. And for starters, you don’t have to live alone. We’ve got shared apartments too. Plus communal spaces that make you feel a part of everything, whether you’re studying, working out or chilling in our cinema room. So whatever type of student accommodation you\'re looking for in Adelaide, you\'re likely to find it at Adelaide City. Got a lecture to go to? We’re near all the universities — including the University of Adelaide and the University of South Australia — so there’s never far to go.',
    propertyType: 'apartment',
    price: {
      amount: 400,
      currency: 'AUD$',
      period: 'week'
    },
    location: {
      address: 'Adelaide City, 269 North Terrace, Adelaide, SA 5000',
      city: cities.find(c => c.name === 'Adelaide')._id,
      coordinates: {
        lat: '',
        lng: ''
      },
      nearbyUniversities: [
        { name: 'The University of Adelaide', distance: 0.1 },
        { name: 'University of South Australia', distance: 0.9 },
        { name: 'Torrens University Australia', distance: 0.9 }
      ]
    },
    images: [
      { url: '' },
      { url: '' },
      { url: '' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning'],
    roomDetails: {
      totalRooms: 20,
      availableRooms: 7,
      bathroomType: 'private'
    },
    rules: {
      smoking: false,
      pets: false,
      visitors: true,
      minStay: 6
    },
    owner: userId,
    verified: true,
    featured: true,
    rating: {
      average: 4.8,
      count: 22
    },
    availability: true
  },
  
  {
    name: 'Perth City',
    description: 'Experience best-in-class student living at Yugo Perth City! Our prime location provides convenient access to bus stops and Perth Railway Station, seamlessly connecting you to major universities. Choose from our diverse selection of fully furnished apartments, ranging from studios to spacious shared options. Here, you\'ll immerse yourself in a thriving community with an array of exceptional amenities, including a pool, gym, cinema, games room, study pods and rooftop terrace. As student accommodation in Perth goes, there\'s rarely so much to do under one roof! Also, Yugo Perth City was honoured with the Residential Architecture Award in 2019 for Purpose-Built Student Accommodation in Western Australia. Your ideal student living experience awaits!',
    propertyType: 'apartment',
    price: {
      amount: 400,
      currency: 'AUD$',
      period: 'week'
    },
    location: {
      address: 'Yugo Perth City, 89 Stirling Street, Perth, 6000',
      city: cities.find(c => c.name === 'Perth')._id,
      coordinates: {
        lat: '',
        lng: ''
      },
      nearbyUniversities: [
        { name: 'Curtin University', distance: 0.1 },
        { name: 'The University of Western Australia', distance: 0.9 },
        { name: 'UHI Perth', distance: 0.9 }
      ]
    },
    images: [
      { url: '' },
      { url: '' },
      { url: '' }
    ],
    amenities: ['WiFi', 'Gym', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Air Conditioning'],
    roomDetails: {
      totalRooms: 20,
      availableRooms: 7,
      bathroomType: 'private'
    },
    rules: {
      smoking: false,
      pets: false,
      visitors: true,
      minStay: 6
    },
    owner: userId,
    verified: true,
    featured: true,
    rating: {
      average: 4.8,
      count: 22
    },
    availability: true
  },


  {
    name: 'Trinity Student Residence',
    description: 'Modern student accommodation just 5 minutes walk from Trinity College Dublin. Features fully furnished rooms with high-speed WiFi, communal kitchens, and 24/7 security.',
    propertyType: 'apartment',
    price: {
      amount: 850,
      currency: 'EUR',
      period: 'month'
    },
    location: {
      address: '12 Nassau Street, Dublin 2, Ireland',
      city: cities.find(c => c.name === 'Dublin')._id,
      coordinates: {
        lat: 53.3441,
        lng: -6.2675
      },
      nearbyUniversities: [
        { name: 'Trinity College Dublin', distance: 0.3 },
        { name: 'University College Dublin', distance: 4.5 }
      ]
    },
    images: [
      { url: '/assets/property1-main.jpg', caption: 'Building exterior' },
      { url: '/assets/property1-kitchen.jpg', caption: 'Shared kitchen' },
      { url: '/assets/property1-room.jpg', caption: 'Sample room' }
    ],
    amenities: ['WiFi', 'Security', 'Laundry', 'Study Room', 'Kitchen', 'Gym'],
    roomDetails: {
      totalRooms: 25,
      availableRooms: 8,
      bathroomType: 'shared'
    },
    rules: {
      smoking: false,
      pets: false,
      visitors: true,
      minStay: 3
    },
    owner: userId,
    verified: true,
    featured: true,
    rating: {
      average: 4.5,
      count: 12
    },
    availability: true
  },
  {
    name: 'UCD Campus Lodge',
    description: 'Premium student housing near University College Dublin with ensuite rooms and modern facilities. Perfect for international students.',
    propertyType: 'shared',
    price: {
      amount: 750,
      currency: 'EUR',
      period: 'month'
    },
    location: {
      address: '45 Belfield Avenue, Dublin 4, Ireland',
      city: cities.find(c => c.name === 'Dublin')._id,
      coordinates: {
        lat: 53.3063,
        lng: -6.2197
      },
      nearbyUniversities: [
        { name: 'University College Dublin', distance: 0.5 },
        { name: 'Trinity College Dublin', distance: 6.2 }
      ]
    },
    images: [
      { url: '/assets/property2-main.jpg', caption: 'Modern building' },
      { url: '/assets/property2-room.jpg', caption: 'Ensuite room' },
      { url: '/assets/property2-common.jpg', caption: 'Common area' }
    ],
    amenities: ['WiFi', 'Gym', 'Pool', 'Parking', 'Laundry', 'Security', 'Kitchen'],
    roomDetails: {
      totalRooms: 40,
      availableRooms: 12,
      bathroomType: 'private'
    },
    rules: {
      smoking: false,
      pets: false,
      visitors: true,
      minStay: 6
    },
    owner: userId,
    verified: true,
    featured: false,
    rating: {
      average: 4.2,
      count: 8
    },
    availability: true
  },
  {
    name: 'Dublin City Student Hub',
    description: 'Central Dublin location with excellent transport links. Modern studio apartments and shared rooms available.',
    propertyType: 'studio',
    price: {
      amount: 950,
      currency: 'EUR',
      period: 'month'
    },
    location: {
      address: '78 Grafton Street, Dublin 1, Ireland',
      city: cities.find(c => c.name === 'Dublin')._id,
      coordinates: {
        lat: 53.3498,
        lng: -6.2603
      },
      nearbyUniversities: [
        { name: 'Trinity College Dublin', distance: 0.8 },
        { name: 'Dublin Institute of Technology', distance: 1.2 }
      ]
    },
    images: [
      { url: '/assets/property3-main.jpg', caption: 'City center location' },
      { url: '/assets/property3-studio.jpg', caption: 'Studio apartment' },
      { url: '/assets/property3-kitchen.jpg', caption: 'Modern kitchen' }
    ],
    amenities: ['WiFi', 'Security', 'Laundry', 'Air Conditioning', 'Kitchen'],
    roomDetails: {
      totalRooms: 30,
      availableRooms: 6,
      bathroomType: 'private'
    },
    rules: {
      smoking: false,
      pets: true,
      visitors: true,
      minStay: 1
    },
    owner: userId,
    verified: true,
    featured: true,
    rating: {
      average: 4.7,
      count: 15
    },
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
