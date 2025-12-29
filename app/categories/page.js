/**
 * Categories Page
 * 
 * Purpose: Displays product categories and allows users to browse products by category.
 * This page shows all available product categories in the e-commerce store.
 * 
 * Features:
 * - Category grid/list display
 * - Category filtering
 * - Product browsing by category
 */

import Sidebar from "@/components/Sidebar";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area - Offset for Sidebar */}
      <div className="ml-16">
        <main className="w-full py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Categories</h1>
            <p className="text-gray-600">Browse products by category</p>
            {/* Category content will be added here */}
          </div>
        </main>
      </div>
    </div>
  );
}

