import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkInDate: Date;
  checkOutDate: Date;
  room: string;
  specialRequests?: string;
  type: string;
  totalAmount?: number;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  checkInDate: {
    type: Date,
    required: [true, 'Check-in date is required'],
    validate: {
      validator: function(value: Date) {
        return value >= new Date();
      },
      message: 'Check-in date must be in the future'
    }
  },
  checkOutDate: {
    type: Date,
    required: [true, 'Check-out date is required'],
    validate: {
      validator: function(this: IAppointment, value: Date) {
        return value > this.checkInDate;
      },
      message: 'Check-out date must be after check-in date'
    }
  },
 
  type: {
    type: String,
    required: [true, 'Room type is required'],
    trim: true,
    enum: ['Junior Room', 'Deluxe Room', 'Family Room']
  },
   room: {
    type: String,
    required: [true, 'Type is required'],
    trim: true,
    enum: ['Single Room', 'Double Room', 'Suite'],
  },
  specialRequests: {
    type: String,
    trim: true,
    maxlength: [500, 'Special requests cannot exceed 500 characters']
  },

}, {
  timestamps: true
});

// Indexes for better query performance
AppointmentSchema.index({ email: 1 });
AppointmentSchema.index({ checkInDate: 1 });
AppointmentSchema.index({ createdAt: -1 });

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
