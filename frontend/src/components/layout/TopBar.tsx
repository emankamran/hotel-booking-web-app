import { Facebook, Twitter, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          {/* Mobile: Two lines, Desktop: Single line with left/right layout */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-1 sm:gap-0 text-xs">
            {/* First line on mobile: Address and Email */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
              <span className="flex items-center gap-2">
                <span className="text-yellow-300">•</span>
                <span>7631 Sabina Park, 115 Devon Isle, USA</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-300">•</span>
                <span>info@domain.com</span>
              </span>
              {/* Phone number - hidden on mobile, shown on desktop */}
              <span className="hidden sm:flex items-center gap-2">
                <span className="text-yellow-300">•</span>
                <span>(+1) 987 654 3210</span>
              </span>
            </div>

            {/* Second line on mobile: Phone and Social Icons */}
            <div className="flex items-center justify-center sm:hidden gap-2">
              <span className="flex items-center gap-2">
                <span className="text-yellow-300">•</span>
                <span>(+1) 987 654 3210</span>
              </span>
              <div className="flex items-center gap-3 ml-2">
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Behance"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Social Icons on the right */}
          <div className="hidden sm:flex items-center justify-end gap-4">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Behance"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
