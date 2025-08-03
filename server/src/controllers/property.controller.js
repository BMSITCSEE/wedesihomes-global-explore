const Property = require('../models/Property');
const City = require('../models/City');
const asyncHandler = require('express-async-handler');

// @desc    Get all properties
// @route   GET /api/properties
// @access  Public
exports.getProperties = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sort = '-createdAt' } = req.query;

  const properties = await Property.find({ availability: true })
    .populate('location.city', 'name country')
    .populate('owner', 'name email phone')
    .sort(sort)
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Property.countDocuments({ availability: true });

  res.json({
    success: true,
    count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    properties,
  });
});

// @desc    Get single property
// @route   GET /api/properties/:id
// @access  Public
exports.getProperty = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id)
    .populate('location.city', 'name country')
    .populate('owner', 'name email phone avatar');

  if (!property) {
    res.status(404);
    throw new Error('Property not found');
  }

  res.json({
    success: true,
    property,
  });
});

// @desc    Create property
// @route   POST /api/properties
// @access  Private (Owner/Admin)
exports.createProperty = asyncHandler(async (req, res) => {
  req.body.owner = req.user.id;

  const property = await Property.create(req.body);

  // Update city property count
  await City.findByIdAndUpdate(req.body.location.city, {
    $inc: { propertyCount: 1 },
  });

  res.status(201).json({
    success: true,
    property,
  });
});

// @desc    Update property
// @route   PUT /api/properties/:id
// @access  Private (Owner/Admin)
exports.updateProperty = asyncHandler(async (req, res) => {
  let property = await Property.findById(req.params.id);

  if (!property) {
    res.status(404);
    throw new Error('Property not found');
  }

  // Make sure user is property owner or admin
  if (property.owner.toString() !== req.user.id && req.user.role !== 'admin') {
    res.status(401);
    throw new Error('Not authorized to update this property');
  }

  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    property,
  });
});

// @desc    Delete property
// @route   DELETE /api/properties/:id
// @access  Private (Owner/Admin)
exports.deleteProperty = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    res.status(404);
    throw new Error('Property not found');
  }

  // Make sure user is property owner or admin
  if (property.owner.toString() !== req.user.id && req.user.role !== 'admin') {
    res.status(401);
    throw new Error('Not authorized to delete this property');
  }

  await property.remove();

  // Update city property count
  await City.findByIdAndUpdate(property.location.city, {
    $inc: { propertyCount: -1 },
  });

  res.json({
    success: true,
    data: {},
  });
});

// @desc    Get featured properties
// @route   GET /api/properties/featured
// @access  Public
exports.getFeaturedProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({ featured: true, availability: true })
    .populate('location.city', 'name country')
    .limit(6);

  res.json({
    success: true,
    properties,
  });
});

// @desc    Search properties
// @route   GET /api/properties/search
// @access  Public
exports.searchProperties = asyncHandler(async (req, res) => {
  const {
    q,
    city,
    minPrice,
    maxPrice,
    propertyType,
    amenities,
    page = 1,
    limit = 10,
  } = req.query;

  const query = { availability: true };

  // Text search
  if (q) {
    query.$text = { $search: q };
  }

  // City filter
  if (city) {
    query['location.city'] = city;
  }

  // Price range
  if (minPrice || maxPrice) {
    query['price.amount'] = {};
    if (minPrice) query['price.amount'].$gte = Number(minPrice);
    if (maxPrice) query['price.amount'].$lte = Number(maxPrice);
  }

  // Property type
  if (propertyType) {
    query.propertyType = propertyType;
  }

  // Amenities
  if (amenities) {
    const amenitiesArray = amenities.split(',');
    query.amenities = { $in: amenitiesArray };
  }

  const properties = await Property.find(query)
    .populate('location.city', 'name country')
    .sort('-rating.average -createdAt')
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Property.countDocuments(query);

  res.json({
    success: true,
    count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    properties,
  });
});

// @desc    Get properties by city
// @route   GET /api/properties/city/:cityId
// @access  Public
exports.getPropertysByCity = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const properties = await Property.find({
    'location.city': req.params.cityId,
    availability: true,
  })
    .populate('owner', 'name')
    .sort('-createdAt')
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Property.countDocuments({
    'location.city': req.params.cityId,
    availability: true,
  });

  res.json({
    success: true,
    count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    properties,
  });
});

// @desc    Toggle save property
// @route   POST /api/properties/:id/save
// @access  Private
exports.toggleSaveProperty = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const propertyId = req.params.id;

  const index = user.savedProperties.indexOf(propertyId);
  
  if (index > -1) {
    user.savedProperties.splice(index, 1);
  } else {
    user.savedProperties.push(propertyId);
  }

  await user.save();

  res.json({
    success: true,
    saved: index === -1,
  });
});

// @desc    Get saved properties
// @route   GET /api/properties/user/saved
// @access  Private
exports.getSavedProperties = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).populate({
    path: 'savedProperties',
    populate: {
      path: 'location.city',
      select: 'name country',
    },
  });
  res.json({
    success: true,
    properties: user.savedProperties,
  });
});

// @desc    Get properties by city name
// @route   GET /api/properties/search
// @access  Public
exports.getPropertiesByCityName = asyncHandler(async (req, res) => {
  const { city, page = 1, limit = 12 } = req.query;

  let query = { availability: true };

  if (city) {
    // First find the city by name
    const cityDoc = await City.findOne({ 
      name: { $regex: city, $options: 'i' } 
    });
    
    if (cityDoc) {
      query['location.city'] = cityDoc._id;
    } else {
      // If city not found, return empty results
      return res.json({
        success: true,
        count: 0,
        totalPages: 0,
        currentPage: page,
        properties: [],
      });
    }
  }

  const properties = await Property.find(query)
    .populate('location.city', 'name country')
    .populate('owner', 'name email phone')
    .sort('-createdAt')
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Property.countDocuments(query);

  res.json({
    success: true,
    count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    properties,
  });
});
