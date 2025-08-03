import AppointmentSection from "../components/Booking/AppointmentSection";
import LuxuryRoomsSection from "./../components/Booking/LuxuryRoomsSection";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <AppointmentSection />
      <LuxuryRoomsSection />
    </div>
  );
}
