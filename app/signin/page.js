/**
 * Sign In Page
 * 
 * Purpose: User authentication page for login and registration.
 * Allows users to sign in or create a new account.
 * 
 * Features:
 * - Login form
 * - Registration form
 * - Social login options
 * - Password recovery
 */

import Sidebar from "@/components/Sidebar";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area - Offset for Sidebar */}
      <div className="ml-16">
        <main className="w-full py-8 px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign In</h1>
            <p className="text-gray-600 mb-8">Welcome back! Please sign in to your account.</p>
            {/* Sign in form will be added here */}
          </div>
        </main>
      </div>
    </div>
  );
}

