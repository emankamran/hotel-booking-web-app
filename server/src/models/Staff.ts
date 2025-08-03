import mongoose, { Document, Schema } from 'mongoose';

export interface IStaff extends Document {
  name: string;
  position: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const StaffSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true,
    maxlength: [100, 'Position cannot exceed 100 characters']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  },

}, {
  timestamps: true
});

// Index for better query performance
StaffSchema.index({ position: 1 });

export default mongoose.model<IStaff>('Staff', StaffSchema);
