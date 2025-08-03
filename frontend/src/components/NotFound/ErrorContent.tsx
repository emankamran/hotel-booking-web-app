import { Button } from "../ui/button";

export function ErrorContent() {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="relative inline-block">
              <div className="w-64 h-40 sm:w-80 sm:h-52 md:w-96 md:h-64 bg-gradient-to-b from-teal-100 to-teal-200 rounded-full mx-auto relative overflow-hidden">
                {/* Background mountains */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path
                      d="M0,150 L100,80 L200,120 L300,60 L400,100 L400,200 L0,200 Z"
                      fill="#e5e7eb"
                    />
                    {/* Trees */}
                    <circle cx="80" cy="140" r="15" fill="#10b981" />
                    <rect x="77" y="140" width="6" height="20" fill="#92400e" />
                    <circle cx="320" cy="130" r="18" fill="#10b981" />
                    <rect
                      x="316"
                      y="130"
                      width="8"
                      height="25"
                      fill="#92400e"
                    />
                    <circle cx="150" cy="160" r="12" fill="#10b981" />
                    <rect
                      x="147"
                      y="160"
                      width="6"
                      height="15"
                      fill="#92400e"
                    />
                    {/* Grass elements */}
                    <path
                      d="M50,170 L55,160 L60,170"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M120,175 L125,165 L130,175"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M280,165 L285,155 L290,165"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Clouds */}
                    <ellipse
                      cx="100"
                      cy="40"
                      rx="20"
                      ry="8"
                      fill="white"
                      opacity="0.8"
                    />
                    <ellipse
                      cx="300"
                      cy="30"
                      rx="25"
                      ry="10"
                      fill="white"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              {/* 404 Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900">
                  404
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 px-4">
            Ohh! Page Not Found
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-sm sm:max-w-md mx-auto px-4 leading-relaxed">
            We're sorry but we can't seem to find the page you requested. This
            might be because you have typed the web address incorrectly.
          </p>

          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-medium text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            Back To Home →
          </Button>
        </div>
      </div>
    </div>
  );
}
