import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import ContactCard from "./ContactCard";

// Zod validation schema
const appointmentSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be less than 50 characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 50 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
    checkInDate: z.string().min(1, "Check-in date is required"),
    checkOutDate: z.string().min(1, "Check-out date is required"),
    room: z.enum(["Single Room", "Double Room", "Suite"], {
      message: "Please select a room type",
    }),
    type: z.enum(["Deluxe Room", "Junior Room", "Family Room"], {
      message: "Please select a room category",
    }),
    specialRequests: z
      .string()
      .max(500, "Special requests must be less than 500 characters")
      .optional(),
  })
  .refine(
    (data) => {
      const checkIn = new Date(data.checkInDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return checkIn >= today;
    },
    {
      message: "Check-in date must be today or in the future",
      path: ["checkInDate"],
    }
  )
  .refine(
    (data) => {
      const checkIn = new Date(data.checkInDate);
      const checkOut = new Date(data.checkOutDate);

      return checkOut > checkIn;
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOutDate"],
    }
  );

type AppointmentFormData = z.infer<typeof appointmentSchema>;

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: string[];
}

export default function AppointmentSection() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    room: "Single Room",
    type: "Deluxe Room",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const handleInputChange = (
    field: keyof AppointmentFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear field-specific error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }

    // Clear API error
    if (apiError) setApiError(null);
  };

  const validateForm = (): boolean => {
    try {
      appointmentSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err: any) => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setApiError(null);

    try {
      const apiBaseUrl =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await fetch(`${apiBaseUrl}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          checkInDate: "",
          checkOutDate: "",
          room: "Single Room",
          type: "Deluxe Room",
          specialRequests: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error(data.message || "Failed to create appointment");
      }
    } catch (err) {
      console.error("Error creating appointment:", err);
      setApiError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2 tracking-wider uppercase">
            STAY WITH US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Make An Appointment
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <CardContent className="p-0">
                {/* Success Message */}
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <p className="text-green-800">
                      Appointment booked successfully! We'll contact you soon.
                    </p>
                  </div>
                )}

                {/* API Error Message */}
                {apiError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <p className="text-red-800">{apiError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Ex. first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className={`w-full ${
                          errors.firstName ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Ex. last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className={`w-full ${
                          errors.lastName ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Ex. info@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Ex. (+1) 987 654 3210"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className={`w-full ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Type
                      </label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) =>
                          handleInputChange(
                            "type",
                            value as AppointmentFormData["type"]
                          )
                        }
                      >
                        <SelectTrigger
                          className={errors.type ? "border-red-500" : ""}
                        >
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Deluxe Room">
                            Deluxe Room
                          </SelectItem>
                          <SelectItem value="Junior Room">
                            Junior Room
                          </SelectItem>
                          <SelectItem value="Family Room">
                            Family Room
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.type && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.type}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Room
                      </label>
                      <Select
                        value={formData.room}
                        onValueChange={(value) =>
                          handleInputChange(
                            "room",
                            value as AppointmentFormData["room"]
                          )
                        }
                      >
                        <SelectTrigger
                          className={errors.room ? "border-red-500" : ""}
                        >
                          <SelectValue placeholder="Select Room" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Single Room">
                            Single Room
                          </SelectItem>
                          <SelectItem value="Double Room">
                            Double Room
                          </SelectItem>
                          <SelectItem value="Suite">Suite</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.room && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.room}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check In
                      </label>
                      <Input
                        type="date"
                        value={formData.checkInDate}
                        onChange={(e) =>
                          handleInputChange("checkInDate", e.target.value)
                        }
                        className={`w-full ${
                          errors.checkInDate ? "border-red-500" : ""
                        }`}
                        min={getTodayDate()}
                        required
                      />
                      {errors.checkInDate && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.checkInDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check Out
                      </label>
                      <Input
                        type="date"
                        value={formData.checkOutDate}
                        onChange={(e) =>
                          handleInputChange("checkOutDate", e.target.value)
                        }
                        className={`w-full ${
                          errors.checkOutDate ? "border-red-500" : ""
                        }`}
                        min={formData.checkInDate || getTodayDate()}
                        required
                      />
                      {errors.checkOutDate && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.checkOutDate}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Ex. type message"
                      rows={4}
                      value={formData.specialRequests || ""}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      className={`w-full ${
                        errors.specialRequests ? "border-red-500" : ""
                      }`}
                    />
                    {errors.specialRequests && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.specialRequests}
                      </p>
                    )}
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          Book Appointment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <ContactCard />
        </div>
      </div>
    </section>
  );
}
