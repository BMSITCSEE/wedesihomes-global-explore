const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide city name'],
      trim: true,
    },
    country: {
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
        uppercase: true,
        maxlength: 2,
      },
      flag: String,
    },
    image: {
      type: String,
      required: true,
    },
    description: String,
    universities: [{
      name: String,
      ranking: Number,
      studentCount: Number,
    }],
    propertyCount: {
      type: Number,
      default: 0,
    },
    popularAreas: [{
      name: String,
      description: String,
    }],
    transport: {
      metro: Boolean,
      bus: Boolean,
      bike: Boolean,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for searching
citySchema.index({ name: 1, 'country.name': 1 });

module.exports = mongoose.model('City', citySchema);