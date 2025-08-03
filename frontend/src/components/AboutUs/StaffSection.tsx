import { Plus, AlertCircle, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

interface StaffMember {
  _id: string;
  name: string;
  position: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  count: number;
  data: StaffMember[];
}

export default function StaffSection() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStaffData = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiBaseUrl =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await fetch(`${apiBaseUrl}/api/staff/experts`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch staff data: ${response.status} ${response.statusText}`
        );
      }

      const data: ApiResponse = await response.json();

      if (data.success && data.data) {
        setStaffMembers(data.data);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (err) {
      console.error("Error fetching staff data:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, []);

  const handleRetry = () => {
    fetchStaffData();
  };

  if (loading) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              FLEXYLAND STAFF
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Expert Staff Persons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
              >
                <div className="bg-gray-300 h-[350px] w-full"></div>
                <div className="p-6 text-center">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              FLEXYLAND STAFF
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Expert Staff Persons
            </h2>
          </div>
          <div className="text-center py-12">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Unable to Load Staff Data
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition-colors duration-200"
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
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            FLEXYLAND STAFF
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Expert Staff Persons
          </h2>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {staffMembers.map((staff) => (
            <div
              key={staff._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Staff Image with Badge */}
              <div className="relative overflow-hidden">
                <img
                  src={staff.image || "/placeholder.svg"}
                  alt={`${staff.name} - ${staff.position}`}
                  width={280}
                  height={350}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Green Plus Badge */}
                <div className="absolute bottom-4 right-4 bg-primary text-white rounded-full p-2 shadow-lg">
                  <Plus className="h-4 w-4" />
                </div>
              </div>

              {/* Staff Info */}
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 text-xl mb-1">
                  {staff.name}
                </h3>
                <p className="text-gray-500 text-base">— {staff.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
