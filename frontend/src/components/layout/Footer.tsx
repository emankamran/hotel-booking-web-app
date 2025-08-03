import { Facebook, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "..//ui/input";
import { Checkbox } from "../ui/checkbox";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6 space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg font-bold text-white">Fixyland</span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Nam libero tempore cum soluta nobis eligendi optio cumque nihile
                impedit quo minus maxime placeat facere
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">EXPLORE</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Hotel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hotel Staff
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Latest News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">CONTACT</h3>
              <div className="space-y-4">
                <p className="text-gray-400">
                  7631 Sabina Park, 115 Devon Isle,
                  <br />
                  Louisiana, USA
                </p>
                <p className="text-white font-semibold">(+1) 987 654 3210</p>
                <p className="text-white">info@domain.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6">NEWSLETTER</h3>
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Ex. info@domain.com"
                    className="bg-transparent border-gray-600 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 py-3 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-0"
                  />
                  <Button
                    size="sm"
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent p-0"
                  >
                    <Send className="h-5 w-5 text-gray-400 hover:text-emerald-500 transition-colors" />
                  </Button>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    className="mt-1 border-gray-600 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-400 leading-relaxed"
                  >
                    I agree to all terms and policies
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © Copyright 2025 Flexyland. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms and Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
