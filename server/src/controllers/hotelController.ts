import { Request, Response } from 'express';
import Hotel from '../models/Hotel';

export const getAllHotels = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      type, 
      minPrice, 
      maxPrice, 
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;
    
    const query: any = {};
    
    // Filter by type
    if (type) {
      query.type = { $regex: type, $options: 'i' };
    }
    
    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Build sort object
    const sortObj: any = {};
    sortObj[sortBy as string] = sortOrder === 'asc' ? 1 : -1;

    const hotels = await Hotel.find(query)
      .select('-__v')
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .sort(sortObj);

    const total = await Hotel.countDocuments(query);

    res.status(200).json({
      success: true,
      count: hotels.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: hotels
    });
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch hotels',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getHotelById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const hotel = await Hotel.findById(id).select('-__v');
    
    if (!hotel) {
      res.status(404).json({
        success: false,
        message: 'Hotel not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: hotel
    });
  } catch (error) {
    console.error('Error fetching hotel by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch hotel',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getHotelsByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.params;
    const { page = 1, limit = 10 } = req.query;
    
    const hotels = await Hotel.find({ 
      type: { $regex: type, $options: 'i' }
    })
      .select('-__v')
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .sort({ price: 1 });

    const total = await Hotel.countDocuments({ 
      type: { $regex: type, $options: 'i' }
    });

    res.status(200).json({
      success: true,
      count: hotels.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: hotels
    });
  } catch (error) {
    console.error('Error fetching hotels by type:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch hotels by type',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};

export const getFeaturedHotels = async (req: Request, res: Response): Promise<void> => {
  try {
    const { limit = 6 } = req.query;
    
    const hotels = await Hotel.find({})
      .select('-__v')
      .limit(Number(limit))
      .sort({ price: -1 });

    res.status(200).json({
      success: true,
      count: hotels.length,
      data: hotels
    });
  } catch (error) {
    console.error('Error fetching featured hotels:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch featured hotels',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
};
