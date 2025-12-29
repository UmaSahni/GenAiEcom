/**
 * Layout Transition Component
 * 
 * Purpose: Provides smooth fade-in/fade-out transitions when switching
 * between GenZ and Old School layouts. Prevents jarring layout jumps.
 * 
 * Features:
 * - Fade out current layout
 * - Fade in new layout
 * - Smooth CSS transitions with easing
 * - Prevents content flash
 * - Cross-fade effect
 * - Proper z-index management
 */

"use client";

import { useEffect, useState } from "react";

export default function LayoutTransition({ children, isVisible }) {
    const [shouldRender, setShouldRender] = useState(isVisible);
    const [opacity, setOpacity] = useState(isVisible ? 1 : 0);

    useEffect(() => {
        if (isVisible) {
            // Fade in - ensure component is rendered first
            setShouldRender(true);
            // Use double requestAnimationFrame for smooth transition
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setOpacity(1);
                });
            });
        } else {
            // Fade out
            setOpacity(0);
            // Remove from DOM after fade out completes
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // Slightly longer than transition for smooth removal

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div
            className="w-full"
            style={{
                opacity: opacity,
                transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: opacity === 0 ? "none" : "auto",
            }}
        >
            {children}
        </div>
    );
}

