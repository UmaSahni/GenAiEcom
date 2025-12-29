/**
 * Old School Layout Component
 * 
 * Purpose: Traditional e-commerce layout with top navigation bar,
 * sidebar filters, and grid product display. Designed for users who
 * prefer classic, familiar e-commerce interfaces.
 * 
 * Features:
 * - Top navigation bar with logo and search
 * - Left sidebar navigation
 * - Traditional header design
 * - Grid-based product layout
 * - Classic color scheme
 */

"use client";

import Sidebar from "@/components/Sidebar";
import LayoutSwitcher from "@/components/LayoutSwitcher";

export default function OldSchoolLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="ml-16">
        {/* Traditional Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 gap-4">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <h1 className="text-2xl font-bold text-purple-600">Gromuse</h1>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-4 hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  />
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Section: Layout Switcher, Cart & Profile */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Layout Switcher */}
                <LayoutSwitcher />

                {/* Cart */}
                <button
                  className="relative text-gray-600 hover:text-gray-900 transition-colors"
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
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </button>

                {/* Profile */}
                <button
                  className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                  aria-label="User profile"
                >
                  <svg
                    className="w-full h-full text-gray-600"
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
        </header>

        {/* Main Content */}
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

