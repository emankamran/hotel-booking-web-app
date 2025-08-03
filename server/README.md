# Hotel Booking Backend API

A TypeScript Express.js backend API for a hotel booking system with MongoDB integration.

## Features

- **Expert Staff API (GET)** - Retrieve staff data for the About Us page
- **Hotels API (GET)** - Retrieve hotel listings for the Booking page
- **Appointment API (POST)** - Save appointment data to database
- TypeScript support
- MongoDB with Mongoose ODM
- CORS configured for React frontend
- Error handling middleware
- Data validation
- Seeded sample data

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **Development**: Nodemon, ts-node

## Project Structure

```
server/
├── src/
│   ├── config/
│   │   └── database.ts          # MongoDB connection
│   ├── controllers/
│   │   ├── staffController.ts   # Staff API logic
│   │   ├── hotelController.ts   # Hotel API logic
│   │   └── appointmentController.ts # Appointment API logic
│   ├── middleware/
│   │   └── errorHandler.ts      # Global error handling
│   ├── models/
│   │   ├── Staff.ts            # Staff data model
│   │   ├── Hotel.ts            # Hotel data model
│   │   └── Appointment.ts      # Appointment data model
│   ├── routes/
│   │   ├── staffRoutes.ts      # Staff API routes
│   │   ├── hotelRoutes.ts      # Hotel API routes
│   │   └── appointmentRoutes.ts # Appointment API routes
│   ├── scripts/
│   │   └── seedData.ts         # Database seeding script
│   └── server.ts               # Main server file
├── .env                        # Environment variables
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy .env file and update values if needed
# Default MongoDB URI: mongodb://localhost:27017/hotel-booking
# Default Port: 5000
# Default Frontend URL: http://localhost:5173
```

4. Make sure MongoDB is running on your system

## Usage

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Seed Database
```bash
npm run seed
```

## API Endpoints

### Staff API
- `GET /api/staff/experts` - Get expert staff members
- `GET /api/staff` - Get all staff with filtering and pagination
- `GET /api/staff/:id` - Get staff member by ID

### Hotels API
- `GET /api/hotels` - Get all hotels with filtering and pagination
- `GET /api/hotels/featured` - Get featured hotels (high rating)
- `GET /api/hotels/type/:type` - Get hotels by type
- `GET /api/hotels/:id` - Get hotel by ID

### Appointments API
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Get all appointments with filtering
- `GET /api/appointments/:id` - Get appointment by ID
- `PUT /api/appointments/:id/status` - Update appointment status

### Health Check
- `GET /health` - API health check
- `GET /` - API information and available endpoints

## Query Parameters

## Sample API Responses

### Staff API Response
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "_id": "...",
      "name": "Sarah Johnson",
      "position": "Head Chef",
      "image": "/images/chef-01.jpg",
      "createdAt": "2025-01-03T00:00:00.000Z",
      "updatedAt": "2025-01-03T00:00:00.000Z"
    }
  ]
}
```

### Hotels API Response
```json
{
  "success": true,
  "count": 6,
  "total": 6,
  "page": 1,
  "pages": 1,
  "data": [
    {
      "_id": "...",
      "name": "Royal Presidential Suite",
      "type": "Presidential Suite",
      "image": "/images/card-image-01.jpg",
      "price": 899,
      "description": "Experience ultimate luxury...",
      "maxGuests": 4,
      "bedrooms": 2,
      "bathrooms": 2,
    }
  ]
}
```

### Create Appointment Request
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "checkInDate": "2025-02-01",
  "checkOutDate": "2025-02-05",
  "room": "Suite",
   "type": "Deluxe Room",
  "specialRequests": "Late check-in requested"
}
```

## Error Handling

The API includes comprehensive error handling:
- Validation errors (400)
- Not found errors (404)
- Server errors (500)
- MongoDB-specific errors
- Development vs production error responses


## Development

The server uses:
- **nodemon** for auto-restart during development
- **ts-node** for running TypeScript directly
- **TypeScript** for type safety
- **ESLint** compatible configuration

## Production Deployment

1. Build the project: `npm run build`
2. Set environment variables for production
3. Ensure MongoDB is accessible
4. Run: `npm start`

## License

ISC
