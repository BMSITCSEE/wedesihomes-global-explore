const express = require('express');
const router = express.Router();
const { 
  sendMessage, 
  getMessages, 
  updateMessageStatus 
} = require('../controllers/message.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

// Public route
router.post('/', sendMessage);

// Admin routes (protected)
router.get('/', protect, authorize('admin'), getMessages);
router.put('/:id', protect, authorize('admin'), updateMessageStatus);

module.exports = router;
