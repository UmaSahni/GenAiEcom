/**
 * ProductCarousel Component
 * 
 * Purpose: Displays a continuous carousel of product cards behind the search bar.
 * Creates an engaging visual experience with products rotating automatically.
 * Products are positioned in a dynamic, overlapping arrangement.
 * 
 * Features:
 * - Automatic carousel rotation
 * - Multiple product cards displayed simultaneously
 * - Smooth animations and transitions
 * - Positioned behind search bar (lower z-index)
 * - Responsive design
 */

"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProductImage } from "@/utils/unsplash";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  /**
   * Initial product data
   * Purpose: Base product data structure - images will be fetched from Unsplash
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

  /**
   * useEffect for auto-rotation
   * Purpose: Automatically rotates the carousel every 3 seconds
   */
  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  /**
   * getVisibleProducts
   * Purpose: Returns the products that should be visible in the carousel
   * Creates a sliding window effect by showing multiple products at once
   * @returns {Array} Array of visible product objects with positioning
   */
  const getVisibleProducts = () => {
    const visibleCount = 8; // Number of products to show simultaneously
    const visibleProducts = [];

    for (let i = 0; i < visibleCount; i++) {
      const productIndex = (currentIndex + i) % products.length;
      visibleProducts.push({
        ...products[productIndex],
        position: i,
      });
    }

    return visibleProducts;
  };

  const visibleProducts = products.length > 0 ? getVisibleProducts() : [];

  /**
   * isUnderSearchBar
   * Purpose: Checks if a product card is positioned under/behind the search bar area
   * The search bar is centered horizontally and vertically in the hero section
   * @param {number} left - Left position percentage
   * @param {number} top - Top position percentage
   * @returns {boolean} True if card is under search bar area
   */
  const isUnderSearchBar = (left, top) => {
    // Search bar area: horizontally centered (20-80%), vertically around middle (30-60%)
    // Made wider to catch more cards that might be partially under the search bar
    const searchBarLeftMin = 20;
    const searchBarLeftMax = 80;
    const searchBarTopMin = 30;
    const searchBarTopMax = 60;

    // Card dimensions (approximate in percentage)
    // Card is 180px wide, container is typically 1200-1500px = ~12-15%
    const cardWidthPercent = 15;
    // Card height is approximately 300-350px, container height is ~600px = ~50-60%
    const cardHeightPercent = 50;

    // Check if card center or any part overlaps with search bar area
    const cardCenterX = left + cardWidthPercent / 2;
    const cardCenterY = top + cardHeightPercent / 2;
    const cardRight = left + cardWidthPercent;
    const cardBottom = top + cardHeightPercent;

    // Card is under search bar if its center or edges are in the search bar area
    return (
      (cardCenterX >= searchBarLeftMin && cardCenterX <= searchBarLeftMax &&
        cardCenterY >= searchBarTopMin && cardCenterY <= searchBarTopMax) ||
      (left < searchBarLeftMax && cardRight > searchBarLeftMin &&
        top < searchBarTopMax && cardBottom > searchBarTopMin)
    );
  };

  /**
   * getProductPosition
   * Purpose: Calculates dynamic positioning for each product card
   * Creates an organic, scattered layout similar to shop.app
   * @param {number} index - The index of the product in the visible array
   * @returns {Object} Position and transform styles
   */
  const getProductPosition = (index) => {
    // Create more organic positioning patterns
    const positions = [
      { left: 5, top: 15, rotation: -5, scale: 0.85 },
      { left: 25, top: 10, rotation: 3, scale: 0.9 },
      { left: 45, top: 20, rotation: -2, scale: 0.95 },
      { left: 65, top: 12, rotation: 4, scale: 0.88 },
      { left: 15, top: 45, rotation: -3, scale: 0.92 },
      { left: 35, top: 50, rotation: 2, scale: 0.87 },
      { left: 55, top: 48, rotation: -4, scale: 0.93 },
      { left: 75, top: 52, rotation: 5, scale: 0.89 },
    ];

    const pos = positions[index % positions.length];

    // Add some variation based on currentIndex for movement
    const variation = Math.sin((currentIndex + index) * 0.5) * 2;

    const left = pos.left + variation;
    const top = pos.top + (index % 2) * 3;

    // Check if card is under search bar and adjust opacity
    const underSearchBar = isUnderSearchBar(left, top);
    const baseOpacity = Math.max(0.7, 1 - (index % 4) * 0.1);
    // Make cards under search bar much more faded (0.1 opacity for strong fade effect)
    const opacity = underSearchBar ? 0.8: baseOpacity;

    return {
      left,
      top,
      rotation: pos.rotation + variation * 0.5,
      scale: pos.scale + (index % 3) * 0.02,
      opacity,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {visibleProducts.map((product, index) => {
          const position = getProductPosition(index);

          return (
            <div
              key={`${product.id}-${currentIndex}-${index}`}
              className="absolute transition-all duration-1000 ease-in-out hidden md:block"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                transform: `rotate(${position.rotation}deg) scale(${position.scale})`,
                width: "180px",
                zIndex: 10 - (index % 4), // Lower z-index for products behind
                opacity: position.opacity, // Opacity adjusted based on search bar position
                transition: "opacity 0.5s ease-in-out, transform 1s ease-in-out", // Smooth opacity transition
              }}
            >
              <ProductCard product={product} />
            </div>
          );
        })}
        {/* Mobile: Show fewer products */}
        {visibleProducts.slice(0, 4).map((product, index) => {
          const mobilePositions = [
            { left: 10, top: 20, rotation: -3, scale: 0.8 },
            { left: 50, top: 15, rotation: 2, scale: 0.75 },
            { left: 20, top: 50, rotation: -2, scale: 0.78 },
            { left: 60, top: 55, rotation: 3, scale: 0.77 },
          ];
          const pos = mobilePositions[index % mobilePositions.length];

          // Check if mobile card is under search bar
          const underSearchBar = isUnderSearchBar(pos.left, pos.top);
          const baseOpacity = Math.max(0.6, 1 - index * 0.15);
          // Make cards under search bar much more faded (0.1 opacity for strong fade effect)
          const opacity = underSearchBar ? 0.1 : baseOpacity;

          return (
            <div
              key={`mobile-${product.id}-${currentIndex}-${index}`}
              className="absolute transition-all duration-1000 ease-in-out md:hidden"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                transform: `rotate(${pos.rotation}deg) scale(${pos.scale})`,
                width: "140px",
                zIndex: 10 - index,
                opacity: opacity, // Opacity adjusted based on search bar position
              }}
            >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

