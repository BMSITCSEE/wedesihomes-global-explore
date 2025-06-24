const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth.middleware');
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
} = require('../controllers/property.controller');

// Public routes
router.get('/', getProperties);
router.get('/featured', getFeaturedProperties);
router.get('/search', searchProperties);
router.get('/city/:cityId', getPropertysByCity);
router.get('/:id', getProperty);

// Protected routes
router.post('/', protect, authorize('owner', 'admin'), createProperty);
router.put('/:id', protect, authorize('owner', 'admin'), updateProperty);
router.delete('/:id', protect, authorize('owner', 'admin'), deleteProperty);
router.post('/:id/save', protect, toggleSaveProperty);
router.get('/user/saved', protect, getSavedProperties);

module.exports = router;