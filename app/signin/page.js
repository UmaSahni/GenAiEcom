/**
 * Sign In Page
 * 
 * Purpose: User authentication page for login and registration.
 * Allows users to sign in or create a new account.
 * Supports both GenZ and Old School layouts.
 * 
 * Features:
 * - Login form
 * - Registration form
 * - Social login options
 * - Password recovery
 * - Dynamic layout support
 */

"use client";

import { useLayout } from "@/contexts/LayoutContext";
import { GenZLayout, OldSchoolLayout } from "@/components/Layouts";
import LayoutTransition from "@/components/Layouts/LayoutTransition";

export default function SignInPage() {
  const { layoutType } = useLayout();
  const isGenZ = layoutType === "genz";

  const content = (
    <div className="py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign In</h1>
        <p className="text-gray-600 mb-8">Welcome back! Please sign in to your account.</p>
        {/* Sign in form will be added here */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <LayoutTransition isVisible={isGenZ}>
        <GenZLayout>{content}</GenZLayout>
      </LayoutTransition>
      <LayoutTransition isVisible={!isGenZ}>
        <OldSchoolLayout>{content}</OldSchoolLayout>
      </LayoutTransition>
    </div>
  );
}

