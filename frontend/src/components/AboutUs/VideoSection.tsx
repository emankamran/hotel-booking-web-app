import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  // Close video on ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVideoOpen) {
        closeVideo();
      }
    };

    if (isVideoOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  // Close video when clicking outside the video area
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <>
      <section className="py-20 md:py-24 lg:py-32 xl:py-40 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Small badge */}
          <div className="inline-block mb-8 md:mb-12">
            <span className="bg-white text-primary px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              AMAZING EXPERIENCE
            </span>
          </div>

          {/* Main heading - smaller size */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto leading-tight">
            Relax And Enjoy With Our
            <br />
            Hotel & Resort
          </h2>

          {/* Play button - smaller size */}
          <div className="flex justify-center">
            <button
              onClick={openVideo}
              className="bg-white hover:bg-gray-100 transition-all duration-300 rounded-full p-4 md:p-5 lg:p-6 shadow-lg group"
            >
              <Play
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary ml-1 group-hover:scale-110 transition-transform"
                fill="currentColor"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video element */}
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              poster="/placeholder.svg?height=720&width=1280"
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              {/* May add multiple source formats */}
              <source src="/placeholder-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
