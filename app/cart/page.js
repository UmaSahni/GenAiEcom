/**
 * Shopping Cart Page
 * 
 * Purpose: Displays the user's shopping cart with all selected items.
 * Allows users to review, modify, and proceed to checkout.
 * 
 * Features:
 * - Cart items display
 * - Quantity modification
 * - Price calculation
 * - Checkout functionality
 */

import Sidebar from "@/components/Sidebar";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area - Offset for Sidebar */}
      <div className="ml-16">
        <main className="w-full py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
            <p className="text-gray-600">Review your items</p>
            {/* Cart content will be added here */}
          </div>
        </main>
      </div>
    </div>
  );
}

