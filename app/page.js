/**
 * Landing Page Component
 * 
 * Purpose: Main landing page for the e-commerce website.
 * This page serves as the entry point for users visiting the site.
 * It displays a fixed sidebar navigation, header with banner, and a hero section
 * with a prominent search bar for product discovery.
 * 
 * Features:
 * - Fixed left sidebar with navigation icons
 * - Sticky header with promotional banner
 * - Hero section with centered search functionality
 * - Responsive design for all screen sizes
 * - Clean layout with proper spacing
 */

import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area - Offset for Sidebar */}
      <div className="ml-16">

        {/* Main Content */}
        <main className="w-full">
          {/* Hero Section with Search Bar and Carousel */}
          <HeroSection />

          {/* Additional content sections will be added here */}
        </main>
      </div>
    </div>
  );
}
