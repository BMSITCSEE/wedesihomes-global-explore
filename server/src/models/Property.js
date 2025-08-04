const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide property name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide property description'],
    },
    propertyType: {
      type: String,
      enum: ['studio', 'shared', 'apartment', 'house'],
      required: true,
    },
    price: {
      amount: {
        type: Number,
        required: [true, 'Please provide price'],
      },
      currency: {
        type: String,
        required: true,
        default: 'USD',
      },
      period: {
        type: String,
        enum: ['month', 'week', 'day'],
        default: 'month',
      },
    },
    location: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true,
      },
      coordinates: {
        lat: Number,
        lng: Number,
      },
      nearbyUniversities: [{
        name: String,
        distance: Number,
      }],
    },
    images: [{
      url: String,
      caption: String,
    }],
    amenities: [{
      type: String,
      enum: [
        'WiFi',
        'Gym',
        'Pool',
        'Parking',
        'Laundry',
        'Security',
        'Study Room',
        'Kitchen',
        'Air Conditioning',
        'Heating',
        'Cinema Room',
        'Rooftop Terrace',
        'BBQ Area',
        'Games Room',
        'Study Pods',
      ],
    }],
    roomDetails: {
      totalRooms: Number,
      availableRooms: Number,
      bathroomType: {
        type: String,
        enum: ['private', 'shared'],
      },
    },
    // NEW: Room Types with all variations
    roomTypes: [{
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        amount: {
          type: Number,
          required: true,
        },
        currency: {
          type: String,
          required: true,
        },
        period: {
          type: String,
          required: true,
        }
      },
      description: String,
      features: [String],
      images: [{
        url: String,
        caption: String,
      }],
      available: {
        type: Boolean,
        default: true,
      },
      floor: {
        type: String,
        enum: ['lower', 'upper', 'high', 'top', 'ground'],
      },
      hasView: {
        type: Boolean,
        default: false,
      },
      viewType: {
        type: String,
        enum: ['city', 'cbd', 'terrace', 'garden'],
      },
      hasTerrace: {
        type: Boolean,
        default: false,
      },
      isDDA: {
        type: Boolean,
        default: false,
      },
      bedCount: {
        type: Number,
        min: 1,
        max: 10,
      },
      bathroomType: {
        type: String,
        enum: ['private', 'shared', 'ensuite'],
      },
      roomSize: {
        type: String,
        enum: ['small', 'medium', 'large', 'executive', 'premium'],
      },
      bedType: {
        type: String,
        enum: ['single', 'twin', 'double', 'bunk'],
      },
      specialFeatures: [String],
    }],
    rules: {
      smoking: {
        type: Boolean,
        default: false,
      },
      pets: {
        type: Boolean,
        default: false,
      },
      visitors: {
        type: Boolean,
        default: true,
      },
      minStay: {
        type: Number,
        default: 1,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    availability: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes for better query performance
propertySchema.index({ 'location.city': 1, price: 1 });
propertySchema.index({ name: 'text', description: 'text' });
propertySchema.index({ 'roomTypes.type': 1 });
propertySchema.index({ 'roomTypes.price.amount': 1 });

module.exports = mongoose.model('Property', propertySchema);
