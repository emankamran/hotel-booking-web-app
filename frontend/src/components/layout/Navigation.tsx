"use client"

import { useState } from "react"
import { Search, Menu, ChevronDown, ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const navigate = useNavigate();

  const menuItems = [
    { name: "Home", hasDropdown: true },
    { name: "Pages", hasDropdown: true },
    { name: "Rooms & Suites", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    { name: "Blog", hasDropdown: true },
    { name: "Contact", hasDropdown: false },
  ]

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Logo Icon - Slanted Building */}
              <div className="relative">
                <svg width="32" height="32" viewBox="0 0 32 32" className="transform -rotate-12">
                  <rect x="4" y="8" width="6" height="20" fill="#10b981" />
                  <rect x="10" y="6" width="6" height="22" fill="#059669" />
                  <rect x="16" y="4" width="6" height="24" fill="#047857" />
                  <rect x="22" y="2" width="6" height="26" fill="#065f46" />
                  {/* Windows */}
                  <rect x="5" y="10" width="1" height="1" fill="white" />
                  <rect x="7" y="10" width="1" height="1" fill="white" />
                  <rect x="5" y="12" width="1" height="1" fill="white" />
                  <rect x="7" y="12" width="1" height="1" fill="white" />
                  <rect x="11" y="8" width="1" height="1" fill="white" />
                  <rect x="13" y="8" width="1" height="1" fill="white" />
                  <rect x="11" y="10" width="1" height="1" fill="white" />
                  <rect x="13" y="10" width="1" height="1" fill="white" />
                  <rect x="17" y="6" width="1" height="1" fill="white" />
                  <rect x="19" y="6" width="1" height="1" fill="white" />
                  <rect x="17" y="8" width="1" height="1" fill="white" />
                  <rect x="19" y="8" width="1" height="1" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold">Fixyland</span>
            </div>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
             {menuItems.map((item) => (
  <button
    key={item.name}
    onClick={() => item.name === "Home" && navigate("/")}
    className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm font-medium"
  >
    <span>{item.name}</span>
    {item.hasDropdown && <ChevronDown size={14} />}
  </button>
))}

            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Search size={18} className="text-white" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={18} className="text-white" />
            </button>

            {/* Desktop Menu Button (visible on larger screens) */}
            <button className="hidden lg:flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Menu size={18} className="text-white" />
            </button>

            {/* Book Your Stay Button */}
            <Button onClick={() => navigate("/booking")} className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-md flex items-center space-x-2 text-sm">
              <span>Book Your Stay</span>
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-700 text-white placeholder-gray-400 border-none outline-none flex-1 px-2 py-1 rounded"
                />
              </div>

              {/* Mobile Menu Items */}
              {menuItems.map((item) => (
  <button
    key={item.name}
    onClick={() => item.name === "Home" && navigate("/")}
    className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:bg-gray-700 rounded-md"
  >
    <span>{item.name}</span>
    {item.hasDropdown && <ChevronDown size={14} />}
  </button>
))}

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
