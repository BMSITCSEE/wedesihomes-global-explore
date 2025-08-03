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
