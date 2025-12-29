/**
 * HeroSection Component
 * 
 * Purpose: Main hero section of the landing page featuring the brand logo,
 * prominent search functionality, and a product carousel displayed behind
 * the search bar. This creates an engaging visual experience for users.
 * 
 * Features:
 * - Large brand logo display
 * - Centered search bar with prominent styling
 * - Product carousel positioned behind search bar
 * - Search action button
 * - Responsive design for all screen sizes
 * - Proper z-index layering for carousel and search bar
 */

"use client";

import { useState } from "react";
import ProductCarousel from "@/components/Carousel";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * handleSearch
   * Purpose: Handles the search form submission
   * @param {Event} e - Form submission event
   */
  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic will be implemented here
    console.log("Searching for:", searchQuery);
  };

  /**
   * handleSearchChange
   * Purpose: Updates the search query state as user types
   * @param {Event} e - Input change event
   */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="w-full py-12 px-4 relative min-h-[600px]">
      {/* Product Carousel - Positioned Behind Search Bar */}
      <div className="absolute inset-0 z-0">
        <ProductCarousel />
      </div>

      {/* Content Layer - Above Carousel */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Brand Logo */}
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-purple-600 mb-4">
            shop
          </h1>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative z-20">
          <div className="relative bg-white rounded-full shadow-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="What are you shopping for today?"
              className="w-full px-6 py-4 pr-14 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 text-lg bg-white"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

