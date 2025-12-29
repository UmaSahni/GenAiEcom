/**
 * Deals Page
 * 
 * Purpose: Displays special deals, discounts, and promotional offers.
 * Shows time-limited offers and featured discounted products.
 * 
 * Features:
 * - Deal listings
 * - Discount badges
 * - Time-limited offers
 * - Featured promotions
 */

import Sidebar from "@/components/Sidebar";

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area - Offset for Sidebar */}
      <div className="ml-16">
        <main className="w-full py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Deals & Offers</h1>
            <p className="text-gray-600">Special discounts and promotions</p>
            {/* Deals content will be added here */}
          </div>
        </main>
      </div>
    </div>
  );
}

