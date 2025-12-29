/**
 * Favorites Page
 * 
 * Purpose: Displays user's favorite/wishlist items.
 * Allows users to save products for later purchase.
 * Supports both GenZ and Old School layouts.
 * 
 * Features:
 * - Favorite items list
 * - Add/remove favorites
 * - Quick add to cart
 * - Product recommendations
 * - Dynamic layout support
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { GenZLayout, OldSchoolLayout } from "@/components/Layouts";
import LayoutTransition from "@/components/Layouts/LayoutTransition";

export default function FavoritesPage() {
  const { layoutType } = useLayout();
  const isGenZ = layoutType === "genz";

  const content = (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Favorites</h1>
        <p className="text-gray-600 mb-8">Your saved items</p>
        {/* Favorites content will be added here */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-500">No favorites yet. Start adding items to your wishlist!</p>
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

