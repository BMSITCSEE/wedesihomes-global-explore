const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth.middleware');
const {
  getCities,
  getCity,
  createCity,
  updateCity,
  deleteCity,
  getCitiesByCountry,
} = require('../controllers/city.controller');

// Public routes
router.get('/', getCities);
router.get('/:id', getCity);
router.get('/country/:country', getCitiesByCountry);

// Admin only routes
router.post('/', protect, authorize('admin'), createCity);
router.put('/:id', protect, authorize('admin'), updateCity);
router.delete('/:id', protect, authorize('admin'), deleteCity);

module.exports = router;