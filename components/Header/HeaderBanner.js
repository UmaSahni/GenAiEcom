/**
 * HeaderBanner Component
 * 
 * Purpose: Displays a promotional banner at the top of the header section.
 * This banner promotes the mobile app download with platform availability information.
 * 
 * Features:
 * - Displays app download call-to-action
 * - Includes brand logo
 * - Platform availability information (iOS & Android)
 * - Clickable banner with arrow indicator
 * - Responsive design for mobile and desktop
 */

export default function HeaderBanner() {
  /**
   * handleBannerClick
   * Purpose: Handles the banner click to navigate to app download
   */
  const handleBannerClick = () => {
    // App download logic will be implemented here
    console.log("Navigate to app download");
  };

  return (
    <button
      onClick={handleBannerClick}
      className="w-full bg-gray-900 hover:bg-gray-800 transition-colors py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Shop Logo */}
          <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <p className="text-white text-sm font-medium">
            Download Shop app. Available on iOS & Android
          </p>
        </div>
        {/* Arrow Icon */}
        <svg
          className="w-4 h-4 text-white flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
}

