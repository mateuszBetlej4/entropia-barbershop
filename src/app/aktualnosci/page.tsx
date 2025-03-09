"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SocialMediaPost from '../components/SocialMediaPost';

interface Post {
  id: string;
  title: string;
  date: string;
  type: 'facebook-iframe' | 'instagram-iframe' | 'custom';
  iframeCode?: string;
  content?: string;
}

export default function AktualnosciPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('entropia_posts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      // Sort posts by date (newest first)
      parsedPosts.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(parsedPosts);
    }
    setLoading(false);
  }, []);

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ color: "#FFFFFF" }}>
            Aktualności
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
            Najnowsze informacje, wydarzenia i promocje w Entropia Barbershop w Krośnie.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" style={{ borderColor: "#8A3793" }}></div>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <SocialMediaPost
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                type={post.type}
                iframeCode={post.iframeCode}
                content={post.content}
              />
            ))
          ) : (
            <div className="bg-zinc-900 rounded-lg shadow-lg p-8 text-center" style={{ backgroundColor: "#18181B" }}>
              <h2 className="text-2xl font-bold mb-4 text-white">Brak aktualności</h2>
              <p className="text-gray-400 mb-6" style={{ color: "#9CA3AF" }}>
                Obecnie nie ma żadnych aktualności. Sprawdź ponownie wkrótce!
              </p>
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                style={{ backgroundColor: "#5E1A64", color: "#FFFFFF" }}
              >
                Wróć do strony głównej
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 