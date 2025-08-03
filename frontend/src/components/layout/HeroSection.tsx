import { useLocation } from "react-router-dom";

export function HeroSection() {
  const location = useLocation();

  // Get current path
  const path = location.pathname;

  // Dynamic titles based on route
  let heading = "Welcome";
  let breadcrumb = "Home > Welcome";

  if (path === "/") {
    heading = "About Us";
    breadcrumb = "Home > About Us";
  } else if (path === "/booking") {
    heading = "Booking";
    breadcrumb = "Home > Booking";
  } else {
    heading = "404 Error";
    breadcrumb = "Home > Error";
  }

  return (
    <div
      className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-section-bg.png')`,
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl pl-6 sm:pl-12 lg:pl-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h1>
          <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">
              Home
            </span>
            <span className="text-gray-300">→</span>
            <span className="text-yellow-400 font-medium">
              {breadcrumb.split(">")[1].trim()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
