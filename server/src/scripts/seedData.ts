import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Staff from '../models/Staff';
import Hotel from '../models/Hotel';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel-booking';
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected for seeding...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const staffData = [
  {
    name: 'Sarah Johnson',
    position: 'Head Chef',
    image: '/images/chef-01.jpg',
  },
  {
    name: 'Michael Chen',
    position: 'Executive Chef',
    image: '/images/chef-02.jpg',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Hotel Manager',
    image: '/images/supervisor.jpg',
  },
  {
    name: 'David Thompson',
    position: 'Housekeeping Supervisor',
    image: '/images/room-cleaner.jpg',
  }
];

const hotelData = [
  {
    name: 'Deluxe Rooms',
    image: '/images/card-image-01.jpg',
    price: 500,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Deluxe Room',
  },
  {
    name: 'Family Rooms',
    image: '/images/card-image-02.jpg',
    price: 600,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Family Room',
  },
  {
    name: 'Junior Rooms',
    image: '/images/card-image-03.jpg',
    price: 300,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Junior Room',
  },
];

const seedDatabase = async (): Promise<void> => {
  try {
    // Clear existing data
    await Staff.deleteMany({});
    await Hotel.deleteMany({});
    
    console.log('Existing data cleared...');

    // Insert staff data
    const createdStaff = await Staff.insertMany(staffData);
    console.log(`${createdStaff.length} staff members seeded successfully`);

    // Insert hotel data
    const createdHotels = await Hotel.insertMany(hotelData);
    console.log(`${createdHotels.length} hotels seeded successfully`);

    console.log('Database seeded successfully! 🌱');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

const runSeed = async (): Promise<void> => {
  await connectDB();
  await seedDatabase();
};

// Run the seed function if this file is executed directly
if (require.main === module) {
  runSeed();
}

export { seedDatabase, staffData, hotelData };
