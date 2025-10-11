
'use client';

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login');
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null; // Or a redirect component
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user.email}!</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Your Personalized Feed</h2>
        <p className="mt-2 text-gray-500">Coming soon...</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Your Bookmarks</h2>
        <p className="mt-2 text-gray-500">Coming soon...</p>
      </div>
    </div>
  );
}
