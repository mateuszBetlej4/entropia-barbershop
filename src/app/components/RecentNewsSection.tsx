"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  date: string;
  type: 'facebook-iframe' | 'instagram-iframe' | 'custom';
  iframeCode?: string;
  content?: string;
}

export default function RecentNewsSection() {
  const [recentNews, setRecentNews] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('entropia_posts');
    if (savedPosts) {
      const parsedPosts: Post[] = JSON.parse(savedPosts);
      // Sort posts by date (newest first) and take the first 3
      const sortedPosts = parsedPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
      setRecentNews(sortedPosts);
    }
    setLoading(false);
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  // Generate excerpt from content
  const generateExcerpt = (post: Post) => {
    if (post.content) {
      return post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '');
    }
    return post.type === 'facebook-iframe'
      ? 'Post z Facebooka. Kliknij, aby zobaczyć więcej.' 
      : 'Post z Instagrama. Kliknij, aby zobaczyć więcej.';
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-16 bg-zinc-950" style={{ backgroundColor: "#09090B" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Aktualności
            </h2>
            <p className="text-sm sm:text-base text-gray-400" style={{ color: "#9CA3AF" }}>
              Ładowanie aktualności...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" style={{ borderColor: "#8A3793" }}></div>
          </div>
        </div>
      </section>
    );
  }

  if (recentNews.length === 0) {
    return null; // Don't show the section if there are no news
  }

  return (
    <section className="py-12 sm:py-16 bg-zinc-950" style={{ backgroundColor: "#09090B" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Aktualności
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
            Bądź na bieżąco z najnowszymi wydarzeniami, promocjami i aktualnościami z Entropia Barbershop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {recentNews.map((news) => (
            <div key={news.id} className="bg-zinc-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: "#18181B" }}>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs sm:text-sm text-gray-400 mr-2" style={{ color: "#9CA3AF" }}>{formatDate(news.date)}</span>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-900 text-purple-200" style={{ backgroundColor: "#581C60", color: "#E9D5FF" }}>
                    {news.type === 'facebook-iframe' ? 'Facebook' : news.type === 'instagram-iframe' ? 'Instagram' : 'Post'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{news.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4" style={{ color: "#D1D5DB" }}>{generateExcerpt(news)}</p>
                <Link
                  href={`/aktualnosci#${news.id}`}
                  className="text-purple-300 font-medium hover:text-purple-200 transition-colors inline-flex items-center text-sm sm:text-base"
                  style={{ color: "#D8B4FE" }}
                >
                  Czytaj więcej
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {recentNews.length < 3 && (
            <div className="sm:col-span-1 md:col-span-2 bg-zinc-900 rounded-lg shadow-md overflow-hidden flex items-center justify-center p-6 sm:p-8" style={{ backgroundColor: "#18181B" }}>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Więcej aktualności wkrótce</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6" style={{ color: "#D1D5DB" }}>
                  Śledź nasze aktualności, aby być na bieżąco z wydarzeniami i promocjami w Entropia Barbershop.
                </p>
                <Link
                  href="/aktualnosci"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-purple hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  style={{ backgroundColor: "#5E1A64", color: "#FFFFFF" }}
                >
                  Zobacz wszystkie aktualności
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 