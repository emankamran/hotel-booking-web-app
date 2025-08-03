import { ArrowRight, Check, Waves, Bike, Utensils } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function ActivitiesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small heading */}
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
              LUXURY HOTEL
            </p>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Provide Outdoor Activities To All Visitors
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            {/* Features with icons */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-200 flex-shrink-0">
                  <Waves className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    The Best Swimming Pool
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-200 flex-shrink-0">
                  <Bike className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    The Best Stationary Bike
                  </h3>
                </div>
              </div>
            </div>

            {/* Bullet points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary rounded-full p-1 flex-shrink-0 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-600">
                  It is a long fact that a reader will be distracted by the
                  readable
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary rounded-full p-1 flex-shrink-0 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy of the printing and industry
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary rounded-full p-1 flex-shrink-0 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-600">
                  There are many variations of Lorem Ipsum majority
                </p>
              </div>
            </div>

            {/* Button */}
            <Button className="bg-primary hover:bg-primary text-white px-8 py-3 rounded-none font-semibold flex items-center space-x-2 group">
              <span>Discover More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Images Layout */}
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] w-full">
              {/* Large main image - right side (fireplace scene) */}
              <div className="absolute top-0 right-0 w-[300px] md:w-[350px] h-[400px] md:h-[450px] z-10">
                <img
                  src="/images/activities-section-02.jpg?height=250&width=150"
                  alt="Cozy fireplace interior"
                  className="object-cover rounded-2xl shadow-lg max-w-[350px] max-h-[450px]"
                />
              </div>

              {/* Smaller image - bottom left (restaurant interior) */}
              <div className="absolute bottom-0 left-0 w-[200px] md:w-[240px] h-[160px] md:h-[180px] z-10">
                <img
                  src="/images/activities-section-01.jpg"
                  alt="Modern restaurant interior"
                  className="object-cover rounded-2xl shadow-lg max-w-[240px] max-h-[180px]"
                />
              </div>

              {/* Restaurant overlay card - positioned between the two images */}
              <div className="absolute bottom-[120px] left-[160px] md:bottom-[140px] md:left-[180px] bg-black/90 text-white p-4 rounded-xl max-w-[180px] z-20 shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Utensils className="h-4 w-4" />
                  <span className="font-bold text-sm">Restaurants</span>
                </div>
                <p className="text-xs opacity-90 leading-relaxed">
                  Come to eat at the best restaurants with amazing food and
                  great atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
