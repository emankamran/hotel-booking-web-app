import { Request, Response } from 'express';
import Staff from '../models/Staff';

export const getExpertStaff = async (req: Request, res: Response): Promise<void> => {
  try {
    const expertStaff = await Staff.find({})
      .select('-__v')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: expertStaff.length,
      data: expertStaff
    });
  } catch (error) {
    console.error('Error fetching expert staff:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch expert staff',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getAllStaff = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = 1, limit = 10, position } = req.query;
    
    const query: any = {};
    
    if (position) {
      query.position = { $regex: position, $options: 'i' };
    }

    const staff = await Staff.find(query)
      .select('-__v')
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .sort({ createdAt: -1 });

    const total = await Staff.countDocuments(query);

    res.status(200).json({
      success: true,
      count: staff.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: staff
    });
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch staff',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getStaffById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const staff = await Staff.findById(id).select('-__v');
    
    if (!staff) {
      res.status(404).json({
        success: false,
        message: 'Staff member not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: staff
    });
  } catch (error) {
    console.error('Error fetching staff by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch staff member',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};
