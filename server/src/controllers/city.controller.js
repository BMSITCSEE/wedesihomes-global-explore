const City = require('../models/City');
const asyncHandler = require('express-async-handler');

// @desc    Get all cities
// @route   GET /api/cities
// @access  Public
exports.getCities = asyncHandler(async (req, res) => {
  const cities = await City.find({ active: true }).sort('country.name name');

  res.json({
    success: true,
    count: cities.length,
    cities,
  });
});

// @desc    Get single city
// @route   GET /api/cities/:id
// @access  Public
exports.getCity = asyncHandler(async (req, res) => {
  const city = await City.findById(req.params.id);

  if (!city) {
    res.status(404);
    throw new Error('City not found');
  }

  res.json({
    success: true,
    city,
  });
});

// @desc    Create city
// @route   POST /api/cities
// @access  Private (Admin)
exports.createCity = asyncHandler(async (req, res) => {
  const city = await City.create(req.body);

  res.status(201).json({
    success: true,
    city,
  });
});

// @desc    Update city
// @route   PUT /api/cities/:id
// @access  Private (Admin)
exports.updateCity = asyncHandler(async (req, res) => {
  const city = await City.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!city) {
    res.status(404);
    throw new Error('City not found');
  }

  res.json({
    success: true,
    city,
  });
});

// @desc    Delete city
// @route   DELETE /api/cities/:id
// @access  Private (Admin)
exports.deleteCity = asyncHandler(async (req, res) => {
  const city = await City.findById(req.params.id);

  if (!city) {
    res.status(404);
    throw new Error('City not found');
  }

  await city.remove();

  res.json({
    success: true,
    data: {},
  });
});

// @desc    Get cities by country
// @route   GET /api/cities/country/:country
// @access  Public
exports.getCitiesByCountry = asyncHandler(async (req, res) => {
  const cities = await City.find({
    'country.name': req.params.country,
    active: true,
  }).sort('name');

  res.json({
    success: true,
    count: cities.length,
    cities,
  });
});