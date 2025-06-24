const mongoose = require('mongoose');
const dotenv = require('dotenv');
const City = require('../models/City');
const User = require('../models/User');
const Property = require('../models/Property');

dotenv.config();

const cities = [
  {
    name: 'London',
    country: { name: 'UK', code: 'GB', flag: '🇬🇧' },
    image: '/api/placeholder/800/600',
    description: 'Vibrant capital with world-class universities',
    universities: [
      { name: 'University College London', ranking: 8, studentCount: 42000 },
      { name: 'Imperial College London', ranking: 7, studentCount: 19000 },
      { name: 'Kings College London', ranking: 35, studentCount: 33000 },
    ],
    popularAreas: [
      { name: 'Camden', description: 'Trendy area with great nightlife' },
      { name: 'Shoreditch', description: 'Hip area with cafes and art' },
    ],
    transport: { metro: true, bus: true, bike: true },
  },
  {
    name: 'New York',
    country: { name: 'USA', code: 'US', flag: '🇺🇸' },
    image: '/api/placeholder/800/600',
    description: 'The city that never sleeps',
    universities: [
      { name: 'Columbia University', ranking: 22, studentCount: 33000 },
      { name: 'New York University', ranking: 39, studentCount: 52000 },
    ],
    popularAreas: [
      { name: 'Manhattan', description: 'Heart of NYC' },
      { name: 'Brooklyn', description: 'Trendy borough with character' },
    ],
    transport: { metro: true, bus: true, bike: true },
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wedesihomes');
    console.log('Connected to MongoDB');

    // Clear existing data
    await City.deleteMany({});
    await User.deleteMany({});
    await Property.deleteMany({});
    console.log('Cleared existing data');

    // Create cities
    const createdCities = await City.insertMany(cities);
    console.log(Created ${createdCities.length} cities);

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@wedesihomes.com',
      password: 'admin123',
      role: 'admin',
      emailVerified: true,
    });
    console.log('Created admin user');

    // Create property owner
    const owner = await User.create({
      name: 'John Property Owner',
      email: 'owner@wedesihomes.com',
      password: 'owner123',
      role: 'owner',
      emailVerified: true,
    });
    console.log('Created property owner');

    // Create sample properties
    const properties = [];
    for (const city of createdCities) {
      for (let i = 0; i < 5; i++) {
        properties.push({
          name: Student Haven ${i + 1},
          description: 'Modern student accommodation with all amenities',
          propertyType: ['studio', 'shared', 'apartment'][i % 3],
          price: {
            amount: 800 + (i * 100),
            currency: city.country.code === 'GB' ? 'GBP' : 'USD',
            period: 'month',
          },
          location: {
            address: ${i + 1} Student Street,
            city: city._id,
            coordinates: { lat: 51.5074, lng: -0.1278 },
            nearbyUniversities: [
              { name: city.universities[0].name, distance: 1.5 },
            ],
          },
          images: [
            { url: '/api/placeholder/800/600', caption: 'Living Room' },
            { url: '/api/placeholder/800/600', caption: 'Bedroom' },
          ],
          amenities: ['WiFi', 'Gym', 'Study Room', 'Security'],
          roomDetails: {
            totalRooms: 10,
            availableRooms: 5,
            bathroomType: 'private',
          },
          rules: {
            smoking: false,
            pets: false,
            visitors: true,
            minStay: 3,
          },
          owner: owner._id,
          verified: true,
          featured: i < 2,
          rating: { average: 4.5, count: 23 },
        });
      }
    }

    await Property.insertMany(properties);
    console.log(Created ${properties.length} properties);

    // Update city property counts
    for (const city of createdCities) {
      const count = await Property.countDocuments({ 'location.city': city._id });
      await City.findByIdAndUpdate(city._id, { propertyCount: count });
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();