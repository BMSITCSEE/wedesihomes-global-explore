const express = require('express');
const router = express.Router();
const {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  getFeaturedProperties,
  searchProperties,
  getPropertysByCity,
  toggleSaveProperty,
  getSavedProperties,
  getPropertiesByCityName, // ADD THIS
} = require('../controllers/property.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

// Public routes
router.get('/', getProperties);
router.get('/featured', getFeaturedProperties);
router.get('/search', getPropertiesByCityName); // ADD THIS LINE
router.get('/city/:cityId', getPropertysByCity);
router.get('/:id', getProperty);

// Protected routes
router.post('/', protect, authorize('owner', 'admin'), createProperty);
router.put('/:id', protect, authorize('owner', 'admin'), updateProperty);
router.delete('/:id', protect, authorize('owner', 'admin'), deleteProperty);
router.post('/:id/save', protect, toggleSaveProperty);
router.get('/user/saved', protect, getSavedProperties);

module.exports = router;
