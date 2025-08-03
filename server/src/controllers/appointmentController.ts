import { Request, Response } from 'express';
import Appointment from '../models/Appointment';
import Hotel from '../models/Hotel';

export const createAppointment = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      checkInDate,
      checkOutDate,
      room,
      type,
      specialRequests
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !checkInDate || !checkOutDate || !room || !type) {
      res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
      return;
    }

    // Validate dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      res.status(400).json({
        success: false,
        message: 'Check-in date must be today or in the future'
      });
      return;
    }

    if (checkOut <= checkIn) {
      res.status(400).json({
        success: false,
        message: 'Check-out date must be after check-in date'
      });
      return;
    }

    // Check if room type exists in hotels
    const hotel = await Hotel.findOne({ 
      type: type
    });

    if (!hotel) {
      res.status(400).json({
        success: false,
        message: 'Selected room type is not available'
      });
      return;
    }

    // Calculate total amount (simplified calculation)
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    const totalAmount = hotel.price * nights;

    // Create appointment
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      room,
      type,
      specialRequests,
      totalAmount
    });

    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: appointment
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    
    // Handle validation errors
    if (error instanceof Error && (error as any).name === 'ValidationError') {
      const messages = Object.values((error as any).errors).map((err: any) => err.message);
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to create appointment',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getAllAppointments = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      email,
      room,
      type,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;
    
    const query: any = {};
    
    if (email) {
      query.email = { $regex: email, $options: 'i' };
    }
    
    if (room) {
      query.room = { $regex: room, $options: 'i' };
    }
    
    if (type) {
      query.type = { $regex: type, $options: 'i' };
    }

    // Build sort object
    const sortObj: any = {};
    sortObj[sortBy as string] = sortOrder === 'asc' ? 1 : -1;

    const appointments = await Appointment.find(query)
      .select('-__v')
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .sort(sortObj);

    const total = await Appointment.countDocuments(query);

    res.status(200).json({
      success: true,
      count: appointments.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: appointments
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch appointments',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getAppointmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const appointment = await Appointment.findById(id).select('-__v');
    
    if (!appointment) {
      res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: appointment
    });
  } catch (error) {
    console.error('Error fetching appointment by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch appointment',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};
