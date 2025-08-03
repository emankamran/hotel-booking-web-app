import type React from "react";
export default function StatisticsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {/* Statistic 1 */}
          <div className="text-center relative">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-transparent">
              <span
                className="inline-block"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                305
              </span>
              <span
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-1"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                +
              </span>
            </div>
            <div className="text-white text-lg md:text-xl font-medium">
              Luxury Rooms
            </div>

            {/* Vertical separator - hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-white/30"></div>
          </div>

          {/* Statistic 2 */}
          <div className="text-center relative">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-transparent">
              <span
                className="inline-block"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                650
              </span>
              <span
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-1"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                +
              </span>
            </div>
            <div className="text-white text-lg md:text-xl font-medium">
              Regular Guests
            </div>

            {/* Vertical separator */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-white/30"></div>
          </div>

          {/* Statistic 3 */}
          <div className="text-center relative">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-transparent">
              <span
                className="inline-block"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                80
              </span>
              <span
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-1"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                +
              </span>
            </div>
            <div className="text-white text-lg md:text-xl font-medium">
              Team Member
            </div>

            {/* Vertical separator */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-white/30"></div>
          </div>

          {/* Statistic 4 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-transparent">
              <span
                className="inline-block"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                75
              </span>
              <span
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-1"
                style={
                  {
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                  } as React.CSSProperties
                }
              >
                +
              </span>
            </div>
            <div className="text-white text-lg md:text-xl font-medium">
              Beaches
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
