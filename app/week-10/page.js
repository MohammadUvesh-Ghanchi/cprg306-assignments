"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Week 10 — Login Page</h1>

      {!user && (
        <>
          <p className="mb-4">You are not logged in.</p>
          <button
            onClick={handleLogin}
            className="bg-indigo-600 px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        </>
      )}

      {user && (
        <>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Logout
          </button>

          <br />
          <br />

          <Link href="/week-10/shopping-list" className="underline">
            Go to Shopping List →
          </Link>
        </>
      )}
    </div>
  );
}
