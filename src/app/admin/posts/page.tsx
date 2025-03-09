"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminNav from '../components/AdminNav';

// Define the post type
interface Post {
  id: string;
  title: string;
  date: string;
  type: 'facebook-iframe' | 'instagram-iframe' | 'custom';
  iframeCode?: string;
  content?: React.ReactNode;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll load from localStorage
    const savedPosts = localStorage.getItem('entropia_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
    setLoading(false);
  }, []);

  const handleDeletePost = (id: string) => {
    if (window.confirm('Czy na pewno chcesz usunąć ten post?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem('entropia_posts', JSON.stringify(updatedPosts));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Zarządzanie Postami
            </h1>
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Dodaj Nowy Post
            </Link>
          </div>
        </div>
      </header>
      
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              {loading ? (
                <div className="p-6 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
                  <p className="mt-4 text-gray-500">Ładowanie postów...</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-gray-500">Brak postów. Dodaj pierwszy post!</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <li key={post.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-purple-600 truncate">
                              {post.title}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {post.type === 'facebook-iframe' ? 'Facebook Iframe' : post.type === 'instagram-iframe' ? 'Instagram Iframe' : 'Własny'}
                              </p>
                            </div>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="text-sm text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {post.type === 'custom' ? (
                                <span className="truncate">Post własny</span>
                              ) : post.type === 'facebook-iframe' ? (
                                <span className="truncate">Osadzony post Facebook (iframe)</span>
                              ) : post.type === 'instagram-iframe' ? (
                                <span className="truncate">Osadzony post Instagram (iframe)</span>
                              ) : (
                                <span className="truncate">Post własny</span>
                              )}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <Link
                              href={`/admin/posts/edit/${post.id}`}
                              className="text-purple-600 hover:text-purple-900 mr-4"
                            >
                              Edytuj
                            </Link>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Usuń
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 