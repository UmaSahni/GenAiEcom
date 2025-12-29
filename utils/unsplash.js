/**
 * Unsplash Image Utility Functions
 * 
 * Purpose: Provides functions to fetch random images from Unsplash for product cards.
 * Uses Unsplash Source API for easy access to Unsplash images without API keys.
 * 
 * Features:
 * - Fetch random images based on product names
 * - Generate image URLs with proper dimensions
 * - Consistent images per product (using seed)
 * - Uses actual Unsplash images
 */

/**
 * getRandomImage
 * Purpose: Generates an Unsplash image URL using Unsplash Source API.
 * Uses a seed based on the search term to get consistent images for the same product.
 * 
 * @param {string} searchTerm - The search term for the image (used as seed)
 * @param {number} width - Image width in pixels (default: 400)
 * @param {number} height - Image height in pixels (default: 400)
 * @returns {string} Unsplash image URL
 */
export function getRandomImage(searchTerm = "product", width = 400, height = 400) {
    // Generate a seed from the search term to get consistent images
    const seed = searchTerm
        .toLowerCase()
        .split('')
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Clean search term for URL
    const cleanTerm = encodeURIComponent(
        searchTerm.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '')
    );

    // Use Unsplash Source API - this provides random Unsplash images
    // Format: https://source.unsplash.com/{width}x{height}/?{keyword}&sig={seed}
    // The sig parameter helps with caching and ensures different images for different seeds
    return `https://source.unsplash.com/${width}x${height}/?${cleanTerm || 'beauty'}&sig=${seed}`;
}

/**
 * getProductImage
 * Purpose: Gets an appropriate random image URL based on product name.
 * Uses the product name as a seed to ensure consistent images for the same product.
 * 
 * @param {string} productName - The product name (used as seed for consistent images)
 * @returns {string} Random image URL
 */
export function getProductImage(productName) {
    // Use product name as seed to get consistent images for the same product
    // This ensures the same product always shows the same image
    return getRandomImage(productName, 400, 400);
}

/**
 * extractKeywords
 * Purpose: Extracts relevant keywords from product names for image search
 * 
 * @param {string} productName - The product name
 * @returns {Array<string>} Array of relevant keywords
 */
function extractKeywords(productName) {
    const lowerName = productName.toLowerCase();
    const keywordMap = {
        skincare: ["skincare", "face", "cream", "serum", "mask"],
        body: ["body", "wash", "scrub", "lotion", "soap"],
        perfume: ["perfume", "fragrance", "cologne", "mist"],
        makeup: ["makeup", "cosmetics", "palette", "lipstick"],
        beauty: ["beauty", "cosmetic", "care"],
        organic: ["organic", "natural", "green"],
        luxury: ["luxury", "premium", "high-end"],
    };

    // Find matching keywords
    for (const [key, terms] of Object.entries(keywordMap)) {
        if (terms.some((term) => lowerName.includes(term))) {
            return [key, ...terms.slice(0, 2)];
        }
    }

    // Default keywords if no match
    return ["beauty", "product"];
}

/**
 * getRandomUnsplashImage
 * Purpose: Gets a completely random image (for backwards compatibility)
 * 
 * @param {number} width - Image width (default: 400)
 * @param {number} height - Image height (default: 400)
 * @returns {string} Random image URL
 */
export function getRandomUnsplashImage(width = 400, height = 400) {
    // Generate a random seed for truly random images
    const randomSeed = Math.floor(Math.random() * 10000);
    return `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;
}

