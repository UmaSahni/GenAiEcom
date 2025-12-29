/**
 * ProductCard Component
 * 
 * Purpose: Displays individual product information in a card format.
 * Used within the carousel to showcase featured products with images,
 * ratings, reviews, and product names.
 * 
 * Features:
 * - Product image display
 * - Product name/title
 * - Star rating display
 * - Review count
 * - Hover effects
 * - Responsive sizing
 */

export default function ProductCard({ product, className = "" }) {
    const { name, image, rating, reviews, price } = product;

    /**
     * renderStars
     * Purpose: Renders star rating based on the product's rating value
     * @param {number} rating - The product's rating (0-5)
     * @returns {JSX.Element} Star rating display
     */
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-0.5">
                {[...Array(fullStars)].map((_, i) => (
                    <svg
                        key={`full-${i}`}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                {hasHalfStar && (
                    <svg
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="half-fill">
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#half-fill)"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg
                        key={`empty-${i}`}
                        className="w-4 h-4 text-gray-300 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    /**
     * formatReviews
     * Purpose: Formats review count for display (e.g., 6700 -> 6.7K)
     * @param {number} count - The review count
     * @returns {string} Formatted review count string
     */
    const formatReviews = (count) => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    };

    return (
        <div
            className={`bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ${className}`}
        >
            {/* Product Image */}
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden relative">
                {image ? (
                    <>
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                                // Fallback if image fails to load
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                            }}
                        />
                        <div className="hidden absolute inset-0 items-center justify-center bg-gray-100 text-gray-400 text-sm">
                            Loading...
                        </div>
                    </>
                ) : (
                    <div className="text-gray-400 text-sm">Product Image</div>
                )}
            </div>

            {/* Product Name */}
            <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                {name}
            </h3>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-2 mb-2">
                {renderStars(rating)}
                <span className="text-xs text-gray-600">
                    ({formatReviews(reviews)})
                </span>
            </div>

            {/* Price */}
            {price && (
                <p className="text-lg font-bold text-gray-900">${price}</p>
            )}
        </div>
    );
}

