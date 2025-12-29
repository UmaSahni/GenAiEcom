/**
 * Landing Page Component
 * 
 * Purpose: Main landing page for the e-commerce website.
 * This page serves as the entry point for users visiting the site.
 * Supports both GenZ (modern) and Old School (traditional) layouts
 * based on user preference.
 * 
 * Features:
 * - Dynamic layout switching (GenZ/Old School)
 * - Fixed left sidebar with navigation icons
 * - GenZ: Carousel with dynamic product cards
 * - Old School: Traditional grid layout
 * - Responsive design for all screen sizes
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { GenZLayout, OldSchoolLayout } from "@/components/Layouts";
import HeroSection from "@/components/Hero";
import OldSchoolHome from "@/components/Layouts/OldSchoolHome";
import LayoutTransition from "@/components/Layouts/LayoutTransition";

export default function Home() {
  const { layoutType } = useLayout();
  const isGenZ = layoutType === "genz";

  return (
    <div className="relative">
      {/* GenZ Layout with Transition */}
      <LayoutTransition isVisible={isGenZ}>
        <GenZLayout>
          <HeroSection />
        </GenZLayout>
      </LayoutTransition>

      {/* Old School Layout with Transition */}
      <LayoutTransition isVisible={!isGenZ}>
        <OldSchoolLayout>
          <OldSchoolHome />
        </OldSchoolLayout>
      </LayoutTransition>
    </div>
  );
}
