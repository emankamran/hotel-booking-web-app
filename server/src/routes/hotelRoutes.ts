import express from 'express';
import {
  getAllHotels,
  getHotelById,
  getHotelsByType,
  getFeaturedHotels
} from '../controllers/hotelController';

const router = express.Router();

// @route   GET /api/hotels/featured
// @desc    Get featured hotels (high rating)
// @access  Public
router.get('/featured', getFeaturedHotels);

// @route   GET /api/hotels/type/:type
// @desc    Get hotels by type
// @access  Public
router.get('/type/:type', getHotelsByType);

// @route   GET /api/hotels
// @desc    Get all hotels with filtering and pagination
// @access  Public
router.get('/', getAllHotels);

// @route   GET /api/hotels/:id
// @desc    Get hotel by ID
// @access  Public
router.get('/:id', getHotelById);

export default router;
