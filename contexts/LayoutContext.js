/**
 * Layout Context
 * 
 * Purpose: Manages the layout preference (GenZ vs Old School) across the application.
 * Provides layout state and toggle functionality with localStorage persistence.
 * 
 * Features:
 * - Global layout state management
 * - localStorage persistence
 * - Layout toggle functionality
 * - Context provider for app-wide access
 */

"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [layoutType, setLayoutType] = useState("genz"); // "genz" or "oldschool"
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * useEffect for loading layout preference
   * Purpose: Loads saved layout preference from localStorage on mount
   */
  useEffect(() => {
    const savedLayout = localStorage.getItem("layoutPreference");
    if (savedLayout && (savedLayout === "genz" || savedLayout === "oldschool")) {
      setLayoutType(savedLayout);
    }
  }, []);

  /**
   * toggleLayout
   * Purpose: Switches between GenZ and Old School layouts with smooth transition
   * Saves preference to localStorage for persistence
   */
  const toggleLayout = () => {
    const newLayout = layoutType === "genz" ? "oldschool" : "genz";
    setLayoutType(newLayout);
    localStorage.setItem("layoutPreference", newLayout);
  };

  return (
    <LayoutContext.Provider value={{ layoutType, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

/**
 * useLayout Hook
 * Purpose: Custom hook to access layout context
 * @returns {Object} Layout context with layoutType and toggleLayout function
 */
export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
}

