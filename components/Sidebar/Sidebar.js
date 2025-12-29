/**
 * Sidebar Component
 * 
 * Purpose: Fixed left sidebar navigation for the e-commerce website.
 * Provides quick access to main navigation items and user account.
 * Remains visible and fixed on the left side of the screen while scrolling.
 * 
 * Features:
 * - Fixed positioning (stays on left side when scrolling)
 * - Navigation icons (Home, Categories, Cart, Deals, Favorites)
 * - User sign-in section at the bottom
 * - Active state indication
 * - Responsive design
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  /**
   * isActive
   * Purpose: Checks if a route is currently active based on pathname
   * @param {string} path - The path to check
   * @returns {boolean} True if the path is active
   */
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 z-50">
      {/* Logo/Brand Icon */}
      <Link href="/" className="mb-8 cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
      </Link>

      {/* Navigation Icons */}
      <nav className="flex-1 flex flex-col gap-6 w-full items-center">
        {/* Home */}
        <Link
          href="/"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
            isActive("/")
              ? "bg-purple-100 text-purple-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Home"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>

        {/* Categories/Grid */}
        <Link
          href="/categories"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
            isActive("/categories")
              ? "bg-purple-100 text-purple-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Categories"
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </Link>

        {/* Shopping Cart */}
        <Link
          href="/cart"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors relative ${
            isActive("/cart")
              ? "bg-purple-100 text-purple-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
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
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </Link>

        {/* Deals/Price Tag */}
        <Link
          href="/deals"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
            isActive("/deals")
              ? "bg-purple-100 text-purple-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Deals"
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
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
        </Link>

        {/* Favorites/Heart */}
        <Link
          href="/favorites"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
            isActive("/favorites")
              ? "bg-purple-100 text-purple-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Favorites"
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </Link>
      </nav>

      {/* Sign In Section */}
      <div className="mt-auto flex flex-col items-center gap-2">
        <Link
          href="/signin"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
            isActive("/signin")
              ? "bg-purple-100 text-purple-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Sign in"
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
        <span className="text-xs text-gray-500 font-medium">Sign in</span>
      </div>
    </aside>
  );
}

