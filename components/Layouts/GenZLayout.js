/**
 * GenZ Layout Component
 * 
 * Purpose: Modern GenZ layout with carousel, dynamic product cards,
 * and contemporary design elements. Designed for users who prefer
 * modern, dynamic, and visually engaging interfaces.
 * 
 * Features:
 * - Carousel behind search bar
 * - Dynamic product positioning
 * - Modern UI elements
 * - Contemporary design
 */

"use client";

import Sidebar from "@/components/Sidebar";
import LayoutSwitcher from "@/components/LayoutSwitcher";

export default function GenZLayout({ children }) {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Area - Offset for Sidebar */}
            <div className="ml-16">
                <div className="relative">

                    {/* Layout Switcher in Header */}
                    <div className="absolute top-2 right-4 z-50">
                        <LayoutSwitcher />
                    </div>
                </div>

                {/* Main Content */}
                <main className="w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}

