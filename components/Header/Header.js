/**
 * Header Component
 * 
 * Purpose: Main header component for the e-commerce website.
 * Contains the top banner and navigation bar with logo, shopping cart,
 * and user profile. This header is sticky and remains visible while scrolling.
 * Note: Search functionality has been moved to the hero section.
 * 
 * Features:
 * - Sticky positioning (stays at top when scrolling)
 * - Top promotional banner
 * - Shopping cart with item count indicator
 * - User profile access
 * - Brand logo
 * - Responsive design
 */

"use client";

import HeaderBanner from "./HeaderBanner";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Top Banner */}
      <HeaderBanner />
      
      {/* Main Header */}
      <div className="w-full bg-teal-900 shadow-md ml-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 gap-4">
            {/* Right Section: Cart & Profile */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Shopping Cart */}
              <button
                className="relative text-white hover:text-teal-200 transition-colors"
                aria-label="Shopping cart"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* Cart Item Count Badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>

              {/* User Profile */}
              <button
                className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white hover:border-teal-200 transition-colors"
                aria-label="User profile"
              >
                <svg
                  className="w-full h-full text-white bg-teal-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

