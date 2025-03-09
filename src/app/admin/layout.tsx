"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('entropia_admin_auth');
    setIsAuthenticated(auth === 'true');
    setIsLoading(false);

    // If not authenticated and not on the login page, redirect to login
    if (auth !== 'true' && pathname !== '/admin') {
      router.push('/admin');
    }
  }, [pathname, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // If on login page or authenticated, show content
  if (pathname === '/admin' || isAuthenticated) {
    return <>{children}</>;
  }

  // This should not be visible due to the redirect, but just in case
  return null;
} 