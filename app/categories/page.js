/**
 * Categories Page
 * 
 * Purpose: Displays product categories and allows users to browse products by category.
 * This page shows all available product categories in the e-commerce store.
 * Supports both GenZ and Old School layouts.
 * 
 * Features:
 * - Category grid/list display
 * - Category filtering
 * - Product browsing by category
 * - Dynamic layout support
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { GenZLayout, OldSchoolLayout } from "@/components/Layouts";
import LayoutTransition from "@/components/Layouts/LayoutTransition";

export default function CategoriesPage() {
  const { layoutType } = useLayout();
  const isGenZ = layoutType === "genz";

  const content = (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Categories</h1>
        <p className="text-gray-600 mb-8">Browse products by category</p>
        {/* Category content will be added here */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["Skincare", "Body Care", "Perfume", "Makeup", "Hair Care", "Wellness"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md hover:border-purple-300 transition-all cursor-pointer"
            >
              <p className="font-medium text-gray-900">{cat}</p>
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

