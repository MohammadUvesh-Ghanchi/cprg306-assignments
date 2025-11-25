import "./globals.css";
import AuthProviderWrapper from "./AuthProviderWrapper";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Next.js Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 min-h-screen p-8">
        <AuthProviderWrapper>
          {children}
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
