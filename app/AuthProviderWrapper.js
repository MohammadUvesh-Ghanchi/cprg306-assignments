"use client";

import { AuthContextProvider } from "./contexts/AuthContext";

export default function AuthProviderWrapper({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
