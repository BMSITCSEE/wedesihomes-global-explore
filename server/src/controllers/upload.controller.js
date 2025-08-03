const cloudinary = require('../config/cloudinary');
const asyncHandler = require('express-async-handler');

// @desc    Upload single image
// @route   POST /api/upload/single
// @access  Private
exports.uploadSingle = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No image file provided');
  }

  res.json({
    success: true,
    message: 'Image uploaded successfully',
    imageUrl: req.file.path,
    publicId: req.file.filename,
  });
});

// @desc    Upload multiple images
// @route   POST /api/upload/multiple
// @access  Private
exports.uploadMultiple = asyncHandler(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    res.status(400);
    throw new Error('No image files provided');
  }

  const images = req.files.map(file => ({
    url: file.path,
    publicId: file.filename,
  }));

  res.json({
    success: true,
    message: `${images.length} images uploaded successfully`,
    images: images,
  });
});

// @desc    Delete image
// @route   DELETE /api/upload/:publicId
// @access  Private
exports.deleteImage = asyncHandler(async (req, res) => {
  const { publicId } = req.params;

  try {
    await cloudinary.uploader.destroy(publicId);
    
    res.json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    res.status(500);
    throw new Error('Failed to delete image');
  }
});
