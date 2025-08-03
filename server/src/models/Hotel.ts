import mongoose, { Document, Schema } from 'mongoose';

export interface IHotel extends Document {
  name: string;
  type: string;
  image: string;
  price: number;
  description: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  createdAt: Date;
  updatedAt: Date;
}

const HotelSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Hotel name is required'],
    trim: true,
    maxlength: [200, 'Hotel name cannot exceed 200 characters']
  },
  type: {
    type: String,
    required: [true, 'Hotel type is required'],
    trim: true,
    enum: [ 'Deluxe Room', 'Junior Room', 'Family Room'],
    maxlength: [100, 'Hotel type cannot exceed 100 characters']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  maxGuests: {
    type: Number,
    required: [true, 'Maximum guests is required'],
    min: [1, 'Maximum guests must be at least 1']
  },
  bedrooms: {
    type: Number,
    required: [true, 'Number of bedrooms is required'],
    min: [1, 'Bedrooms must be at least 1']
  },
  bathrooms: {
    type: Number,
    required: [true, 'Number of bathrooms is required'],
    min: [1, 'Bathrooms must be at least 1']
  },
}, {
  timestamps: true
});

// Indexes for better query performance
HotelSchema.index({ type: 1 });
HotelSchema.index({ price: 1 });


export default mongoose.model<IHotel>('Hotel', HotelSchema);
