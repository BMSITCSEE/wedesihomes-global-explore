const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware');
const { protect, authorize } = require('../middleware/auth.middleware');
const {
  uploadSingle,
  uploadMultiple,
  deleteImage,
} = require('../controllers/upload.controller');

// Protected routes - only property owners and admins can upload
router.post('/single', protect, authorize('owner', 'admin'), upload.single('image'), uploadSingle);
router.post('/multiple', protect, authorize('owner', 'admin'), upload.array('images', 10), uploadMultiple);
router.delete('/:publicId', protect, authorize('owner', 'admin'), deleteImage);

module.exports = router;
