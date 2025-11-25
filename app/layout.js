import './globals.css';
import dynamic from 'next/dynamic'; // <-- New import for dynamic

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Next.js Assignments",
};

const AuthProviderWrapper = dynamic(() => import('./AuthProviderWrapper'), {
  ssr: false, 
  loading: () => <div className="p-8 text-white">Loading Authentication...</div>
});

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