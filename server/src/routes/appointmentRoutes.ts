import express from 'express';
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById
} from '../controllers/appointmentController';

const router = express.Router();

// @route   POST /api/appointments
// @desc    Create a new appointment
// @access  Public
router.post('/', createAppointment);

// @route   GET /api/appointments
// @desc    Get all appointments with filtering and pagination
// @access  Public (In production, this should be protected)
router.get('/', getAllAppointments);

// @route   GET /api/appointments/:id
// @desc    Get appointment by ID
// @access  Public (In production, this should be protected)
router.get('/:id', getAppointmentById);

export default router;
