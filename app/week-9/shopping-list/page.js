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

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>You must be logged in to view this page.</h2>
        <a href="/week-9">Go to Login Page</a>
      </div>
    );
  }

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Week 9 — Login Page</h1>

      {!user && <button onClick={handleLogin}>Login with GitHub</button>}

      {user && (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          <br />
          <br />
          <Link href="/week-9/shopping-list">Go to Shopping List →</Link>
        </>
      )}
    </div>
  );
}
