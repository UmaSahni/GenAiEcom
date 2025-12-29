/**
 * Deals Page
 * 
 * Purpose: Displays special deals, discounts, and promotional offers.
 * Shows time-limited offers and featured discounted products.
 * Supports both GenZ and Old School layouts.
 * 
 * Features:
 * - Deal listings
 * - Discount badges
 * - Time-limited offers
 * - Featured promotions
 * - Dynamic layout support
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { GenZLayout, OldSchoolLayout } from "@/components/Layouts";
import LayoutTransition from "@/components/Layouts/LayoutTransition";

export default function DealsPage() {
  const { layoutType } = useLayout();
  const isGenZ = layoutType === "genz";

  const content = (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Deals & Offers</h1>
        <p className="text-gray-600 mb-8">Special discounts and promotions</p>
        {/* Deals content will be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((deal) => (
            <div key={deal} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                {deal * 20}% OFF
              </div>
              <h3 className="text-lg font-semibold mb-2">Special Deal {deal}</h3>
              <p className="text-gray-600 text-sm">Limited time offer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <LayoutTransition isVisible={isGenZ}>
        <GenZLayout>{content}</GenZLayout>
      </LayoutTransition>
      <LayoutTransition isVisible={!isGenZ}>
        <OldSchoolLayout>{content}</OldSchoolLayout>
      </LayoutTransition>
    </div>
  );
}

