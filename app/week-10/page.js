"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
// Removed Lucide imports (Github, LogOut, ShoppingCart) to prevent errors.
// Icons are replaced with Inline SVGs below.

// Inline SVG Icon Components (Replaces Lucide-React)
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22V18C15 16.9001 14.8091 16.2999 14.5 16C14.887 16.2999 15.353 16.5 16 16.5C18.17 16.5 19 14.5 19 12C19 9.3 17 8.5 17 7.5C17 7.0399 17.5 5.5 15 5.5C15 5.5 13.9 5.5 12 7C10.1 5.5 9 5.5 9 5.5C6.5 5.5 7 7.0399 7 7.5C7 8.5 5 9.3 5 12C5 14.5 5.83 16.5 8 16.5C8.647 16.5 9.113 16.2999 9.5 16C9.1909 16.2999 9 16.9001 9 18V22"></path>
    <path d="M9 18C9 19.3333 9.3333 20 10 20C10.6667 20 11 19.3333 11 18"></path>
    <path d="M13 18C13 19.3333 13.3333 20 14 20C14.6667 20 15 19.3333 15 18"></path>
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"></path>
  </svg>
);

const ShoppingCartIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="8" cy="20" r="1" />
    <circle cx="19" cy="20" r="1" />
    <path d="M2 2h3l2.25 10.375L18.75 12l2.75-8H6.5" />
    <path d="M9 16.5h10.5" />
  </svg>
);

const LogOutIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      // Ensure this function is called safely within the client environment
      await gitHubSignIn();
    } catch (err) {
      console.log("GitHub Sign-In Error:", err);
    }
  };

  const handleLogout = async () => {
    // Ensure this function is called safely within the client environment
    await firebaseSignOut();
  };

  return (
    // Center the content on the screen
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-sm text-white text-center">
        
        <h1 className="text-3xl font-extrabold mb-8 text-indigo-400">
          Weekly Planner Login
        </h1>

        {!user && (
          <div className="space-y-4">
            <p className="text-gray-300">
              Sign in to access your shopping list and meal ideas.
            </p>
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center space-x-2 
                         bg-indigo-600 hover:bg-indigo-500 
                         text-white font-semibold py-3 px-6 
                         rounded-lg transition duration-200 
                         shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <GithubIcon size={20} />
              <span>Login with GitHub</span>
            </button>
          </div>
        )}

        {user && (
          <div className="space-y-6">
            <div className="text-left bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Welcome back!</p>
              <p className="text-xl font-bold mb-1 truncate">{user.displayName}</p>
              <p className="text-sm text-indigo-300 truncate">{user.email}</p>
            </div>

            <Link 
              href="/week-10/shopping-list"
              className="w-full flex items-center justify-center space-x-2 
                         bg-green-600 hover:bg-green-500 
                         text-white font-semibold py-3 px-6 
                         rounded-lg transition duration-200 
                         shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <ShoppingCartIcon size={20} />
              <span>Go to Shopping List</span>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 
                         bg-red-600 hover:bg-red-500 
                         text-white font-medium py-3 px-6 
                         rounded-lg transition duration-200 
                         shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}