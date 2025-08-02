const Message = require('../models/Message');
const asyncHandler = require('express-async-handler');

// @desc    Send message
// @route   POST /api/messages
// @access  Public
exports.sendMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    res.status(400);
    throw new Error('Please provide all required fields (name, email, subject, message)');
  }

  // Create message
  const newMessage = await Message.create({
    name,
    email,
    phone,
    subject,
    message,
  });

  res.status(201).json({
    success: true,
    message: 'Message sent successfully! We will get back to you soon.',
    data: {
      id: newMessage._id,
      name: newMessage.name,
      email: newMessage.email,
      subject: newMessage.subject,
      createdAt: newMessage.createdAt,
    },
  });
});

// @desc    Get all messages (admin only)
// @route   GET /api/messages
// @access  Private/Admin
exports.getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    count: messages.length,
    data: messages,
  });
});

// @desc    Update message status
// @route   PUT /api/messages/:id
// @access  Private/Admin
exports.updateMessageStatus = asyncHandler(async (req, res) => {
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );

  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }

  res.json({
    success: true,
    data: message,
  });
});
