import express from 'express';
import {
  getExpertStaff,
  getAllStaff,
  getStaffById
} from '../controllers/staffController';

const router = express.Router();

// @route   GET /api/staff/experts
// @desc    Get all expert staff members
// @access  Public
router.get('/experts', getExpertStaff);

// @route   GET /api/staff
// @desc    Get all staff members with filtering and pagination
// @access  Public
router.get('/', getAllStaff);

// @route   GET /api/staff/:id
// @desc    Get staff member by ID
// @access  Public
router.get('/:id', getStaffById);

export default router;
