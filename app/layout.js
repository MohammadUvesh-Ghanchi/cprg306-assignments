import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Next.js Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
