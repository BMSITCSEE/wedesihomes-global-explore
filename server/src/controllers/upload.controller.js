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

  try {
    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'wedesihomes',
      resource_type: 'auto',
      transformation: [{ width: 1200, height: 800, crop: 'limit', quality: 'auto' }],
    });

    res.json({
      success: true,
      message: 'Image uploaded successfully',
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500);
    throw new Error('Failed to upload image to Cloudinary');
  }
});

// @desc    Upload multiple images
// @route   POST /api/upload/multiple
// @access  Private
exports.uploadMultiple = asyncHandler(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    res.status(400);
    throw new Error('No image files provided');
  }

  try {
    const uploadPromises = req.files.map(async (file) => {
      const b64 = Buffer.from(file.buffer).toString('base64');
      const dataURI = `data:${file.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: 'wedesihomes',
        resource_type: 'auto',
        transformation: [{ width: 1200, height: 800, crop: 'limit', quality: 'auto' }],
      });

      return {
        url: result.secure_url,
        publicId: result.public_id,
      };
    });

    const images = await Promise.all(uploadPromises);

    res.json({
      success: true,
      message: `${images.length} images uploaded successfully`,
      images: images,
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500);
    throw new Error('Failed to upload images to Cloudinary');
  }
});

// @desc    Delete image
// @route   DELETE /api/upload/:publicId
// @access  Private
exports.deleteImage = asyncHandler(async (req, res) => {
  const { publicId } = req.params;

  try {
    // Replace hyphens with slashes for nested folder structure
    const formattedPublicId = publicId.replace(/-/g, '/');
    
    await cloudinary.uploader.destroy(formattedPublicId);
    
    res.json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    res.status(500);
    throw new Error('Failed to delete image');
  }
});
