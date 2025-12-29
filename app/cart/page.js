/**
 * Shopping Cart Page
 * 
 * Purpose: Displays the user's shopping cart with all selected items.
 * Allows users to review, modify, and proceed to checkout.
 * Supports both GenZ and Old School layouts.
 * 
 * Features:
 * - Cart items display
 * - Quantity modification
 * - Price calculation
 * - Checkout functionality
 * - Dynamic layout support
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { GenZLayout, OldSchoolLayout } from "@/components/Layouts";
import LayoutTransition from "@/components/Layouts/LayoutTransition";

export default function CartPage() {
  const { layoutType } = useLayout();
  const isGenZ = layoutType === "genz";

  const content = (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        <p className="text-gray-600 mb-8">Review your items</p>
        {/* Cart content will be added here */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-500">Your cart is empty</p>
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

