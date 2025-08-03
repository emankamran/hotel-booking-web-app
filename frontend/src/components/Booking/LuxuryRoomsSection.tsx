import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Users,
  Bed,
  Bath,
  ArrowRight,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Hotel {
  _id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  description: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: Hotel[];
}

export default function LuxuryRoomsSection() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHotelsData = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiBaseUrl =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await fetch(`${apiBaseUrl}/api/hotels`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch hotels data: ${response.status} ${response.statusText}`
        );
      }

      const data: ApiResponse = await response.json();

      if (data.success && data.data) {
        console.log("Hotels data fetched successfully:", data.data);
        setHotels(data.data);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (err) {
      console.error("Error fetching hotels data:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotelsData();
  }, []);

  const handleRetry = () => {
    fetchHotelsData();
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-emerald-200 text-sm font-medium mb-2 tracking-wider uppercase">
              OUR BEST ROOMS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Luxury Rooms and Resort
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden animate-pulse"
              >
                <div className="bg-gray-300 h-64 w-full"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="flex gap-6 mb-4">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-emerald-200 text-sm font-medium mb-2 tracking-wider uppercase">
              OUR BEST ROOMS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Luxury Rooms and Resort
            </h2>
          </div>
          <div className="text-center py-12">
            <AlertCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Unable to Load Hotel Data
            </h3>
            <p className="text-emerald-200 mb-6 max-w-md mx-auto">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-200"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-emerald-200 text-sm font-medium mb-2 tracking-wider uppercase">
            OUR BEST ROOMS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Luxury Rooms and Resort
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hotels.map((hotel, i) => (
            <Card
              key={hotel._id}
              className={`bg-white overflow-hidden ${
                i === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-sm font-medium">
                  ${hotel.price} / Night
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{hotel.maxGuests} Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{hotel.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>
                      {hotel.bathrooms} Bath{hotel.bathrooms > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {hotel.description}
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
