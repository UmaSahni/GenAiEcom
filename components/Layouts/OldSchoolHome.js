/**
 * Old School Home Page Component
 * 
 * Purpose: Traditional home page layout with banner, categories,
 * and product grid. Provides a classic e-commerce shopping experience.
 * 
 * Features:
 * - Promotional banner
 * - Category grid
 * - Featured products grid
 * - Traditional layout structure
 */

"use client";

import ProductCard from "@/components/ProductCard";
import { getProductImage } from "@/utils/unsplash";
import { useEffect, useState } from "react";

export default function OldSchoolHome() {
  const [products, setProducts] = useState([]);

  /**
   * Sample product data for Old School layout
   */
  const initialProducts = [
    {
      id: 1,
      name: "The Comeback Kid Instant...",
      rating: 5,
      reviews: 565,
      price: 29.99,
    },
    {
      id: 2,
      name: "OSEA salts of the earth body scrub",
      rating: 4.5,
      reviews: 1200,
      price: 48.00,
    },
    {
      id: 3,
      name: "SALT & STONE Body Wash",
      rating: 5,
      reviews: 6700,
      price: 32.00,
    },
    {
      id: 4,
      name: "Perfume Mist de Guava",
      rating: 4,
      reviews: 56,
      price: 45.00,
    },
    {
      id: 5,
      name: "Vacation Classic Lotion SPF 50",
      rating: 5,
      reviews: 57,
      price: 28.00,
    },
    {
      id: 6,
      name: "Premium Skincare Set",
      rating: 4.5,
      reviews: 890,
      price: 89.99,
    },
    {
      id: 7,
      name: "Organic Face Mask",
      rating: 5,
      reviews: 234,
      price: 24.99,
    },
    {
      id: 8,
      name: "Luxury Body Cream",
      rating: 4,
      reviews: 456,
      price: 39.99,
    },
  ];

  /**
   * useEffect for fetching images
   * Purpose: Fetches Unsplash images for all products on component mount
   */
  useEffect(() => {
    const productsWithImages = initialProducts.map((product) => ({
      ...product,
      image: getProductImage(product.name),
    }));
    setProducts(productsWithImages);
  }, []);

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome to Gromuse</h2>
          <p className="text-lg opacity-90">
            Shop the best products at amazing prices. Get organic produce and
            sustainably sourced groceries delivery at up to 4% off.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Shop by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Skincare", "Body Care", "Perfume", "Makeup"].map((cat) => (
              <div
                key={cat}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md hover:border-purple-300 transition-all cursor-pointer"
              >
                <p className="font-medium text-gray-900">{cat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Featured Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

