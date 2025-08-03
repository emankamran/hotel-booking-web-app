export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small heading */}
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
              OUR SKILLS
            </p>
            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Choose for us?
            </h2>
            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
            {/* Progress Bars */}
            <div className="space-y-6 sm:space-y-8">
              {/* Services - 95% */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    Services
                  </span>
                  <span className="text-primary font-bold text-base sm:text-lg">
                    95%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              {/* Chef Master - 85% */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    Chef Master
                  </span>
                  <span className="text-primary font-bold text-base sm:text-lg">
                    85%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              {/* Design - 92% */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    Design
                  </span>
                  <span className="text-primary font-bold text-base sm:text-lg">
                    92%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
              {/* It Solution - 98% */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    It Solution
                  </span>
                  <span className="text-primary font-bold text-base sm:text-lg">
                    98%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images Layout*/}
          <div className="relative order-first lg:order-last">
            {/* Container*/}
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
              {/* Large main image - beach scene with wooden deck */}
              <div className="absolute top-0 right-0 sm:right-4 md:right-6 lg:right-0 xl:right-[-20px] w-[85%] sm:w-[80%] md:w-[75%] lg:w-[85%] xl:w-full h-[70%] sm:h-[75%] md:h-[80%] z-10">
                <img
                  src="/images/why-choose-us-01.jpg?height=480&width=600&text=Beach+Resort+Deck"
                  alt="Beach resort with wooden deck and lounge chair"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Smaller overlapping image - restaurant/cafe exterior */}
              <div className="absolute bottom-[25%] sm:bottom-[30%] md:bottom-[35%] lg:bottom-[40%] left-0 sm:left-2 md:left-4 lg:left-0 w-[45%] sm:w-[40%] md:w-[35%] lg:w-[40%] xl:w-[240px] h-[35%] sm:h-[32%] md:h-[30%] lg:h-[30%] xl:h-[180px] z-20">
                <img
                  src="/images/why-choose-us-02.jpg?height=180&width=240&text=Restaurant+Cafe"
                  alt="Restaurant cafe exterior"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-2 sm:border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
