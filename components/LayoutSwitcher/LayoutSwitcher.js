/**
 * Layout Switcher Component
 * 
 * Purpose: Interactive toggle button to switch between GenZ and Old School layouts.
 * Features a modern, user-friendly design with smooth animations and clear visual feedback.
 * 
 * Features:
 * - Interactive toggle switch with labels
 * - Smooth animations and transitions
 * - Visual feedback on hover and click
 * - Clear layout type indicators
 * - Accessible design with ARIA labels
 * - Responsive design
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { useState } from "react";

export default function LayoutSwitcher() {
  const { layoutType, toggleLayout } = useLayout();
  const [isHovered, setIsHovered] = useState(false);

  /**
   * handleToggle
   * Purpose: Handles the toggle action with visual feedback
   */
  const handleToggle = () => {
    toggleLayout();
  };

  const isGenZ = layoutType === "genz";

  return (
    <div className="flex items-center gap-3 px-2 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
      {/* GenZ Label - Clickable */}
      <button
        onClick={handleToggle}
        className={`
          text-sm font-semibold transition-all duration-300 cursor-pointer px-2 py-1 rounded
          ${isGenZ
            ? "text-purple-600 scale-110 bg-purple-50"
            : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
          }
        `}
        aria-label="Switch to GenZ layout"
      >
        GenZ
      </button>

      {/* Toggle Switch */}
      <button
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative inline-flex items-center h-7 w-14 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          ${isGenZ ? "bg-purple-600" : "bg-gray-300"}
          ${isHovered ? "scale-110 shadow-lg" : "shadow-md"}
        `}
        aria-label={`Switch to ${isGenZ ? "Old School" : "GenZ"} layout`}
        aria-pressed={!isGenZ}
        role="switch"
      >
        {/* Toggle Handle */}
        <span
          className={`
            inline-block h-6 w-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out
            ${isGenZ ? "translate-x-1" : "translate-x-7"}
          `}
        >
          {/* Icon inside toggle */}
          <span className="flex items-center justify-center h-full w-full">
            {isGenZ ? (
              <svg
                className="w-3 h-3 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            ) : (
              <svg
                className="w-3 h-3 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </span>
      </button>

      {/* Old School Label - Clickable */}
      <button
        onClick={handleToggle}
        className={`
          text-sm font-semibold transition-all duration-300 cursor-pointer px-2 py-1 rounded
          ${!isGenZ
            ? "text-purple-600 scale-110 bg-purple-50"
            : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
          }
        `}
        aria-label="Switch to Old School layout"
      >
        Old School
      </button>
    </div>
  );
}

