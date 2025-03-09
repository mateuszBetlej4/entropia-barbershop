"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminNav from '../../../components/AdminNav';

interface Post {
  id: string;
  title: string;
  date: string;
  type: 'facebook-iframe' | 'instagram-iframe' | 'custom';
  iframeCode?: string;
  content?: string;
}

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [postType, setPostType] = useState<'facebook-iframe' | 'instagram-iframe' | 'custom'>('facebook-iframe');
  const [iframeCode, setIframeCode] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Load post data
    const savedPosts = localStorage.getItem('entropia_posts');
    if (savedPosts) {
      const posts: Post[] = JSON.parse(savedPosts);
      const post = posts.find(p => p.id === id);
      
      if (post) {
        setTitle(post.title);
        setDate(post.date);
        setPostType(post.type);
        setIframeCode(post.iframeCode || '');
        setContent(post.content || '');
      } else {
        setNotFound(true);
      }
    } else {
      setNotFound(true);
    }
    
    setLoading(false);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      // Validate form
      if (!title.trim()) {
        throw new Error('Tytuł jest wymagany');
      }

      if ((postType === 'facebook-iframe' || postType === 'instagram-iframe') && !iframeCode.trim()) {
        throw new Error('Kod iframe jest wymagany dla osadzonych postów');
      }

      if (postType === 'custom' && !content.trim()) {
        throw new Error('Treść jest wymagana dla własnych postów');
      }

      // Validate iframe code
      if (postType === 'facebook-iframe' && !iframeCode.includes('<iframe')) {
        throw new Error('Nieprawidłowy kod iframe dla Facebooka');
      }

      if (postType === 'instagram-iframe' && !iframeCode.includes('<blockquote')) {
        throw new Error('Nieprawidłowy kod embed dla Instagrama');
      }

      // Update post
      const savedPosts = localStorage.getItem('entropia_posts');
      if (savedPosts) {
        const posts: Post[] = JSON.parse(savedPosts);
        const updatedPosts = posts.map(post => {
          if (post.id === id) {
            return {
              ...post,
              title,
              date,
              type: postType,
              iframeCode: (postType === 'facebook-iframe' || postType === 'instagram-iframe') ? iframeCode : undefined,
              content: postType === 'custom' ? content : undefined,
            };
          }
          return post;
        });
        
        localStorage.setItem('entropia_posts', JSON.stringify(updatedPosts));
        router.push('/admin/posts');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
      setSaving(false);
    }
  };

  if (notFound) {
    return (
      <div className="min-h-screen bg-gray-100">
        <AdminNav />
        
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Post nie znaleziony
            </h1>
          </div>
        </header>
        
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 text-center">
                <p className="text-gray-500 mb-4">Nie znaleziono posta o podanym ID.</p>
                <button
                  onClick={() => router.push('/admin/posts')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Wróć do listy postów
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <AdminNav />
        
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Edytuj Post
            </h1>
          </div>
        </header>
        
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
                <p className="mt-4 text-gray-500">Ładowanie posta...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Edytuj Post
          </h1>
        </div>
      </header>
      
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                {error && (
                  <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Tytuł
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Tytuł posta"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Data
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Typ posta
                    </label>
                    <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div className="flex items-center">
                        <input
                          id="facebook-iframe"
                          name="postType"
                          type="radio"
                          checked={postType === 'facebook-iframe'}
                          onChange={() => setPostType('facebook-iframe')}
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label htmlFor="facebook-iframe" className="ml-3 block text-sm font-medium text-gray-700">
                          Facebook (iframe)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="instagram-iframe"
                          name="postType"
                          type="radio"
                          checked={postType === 'instagram-iframe'}
                          onChange={() => setPostType('instagram-iframe')}
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label htmlFor="instagram-iframe" className="ml-3 block text-sm font-medium text-gray-700">
                          Instagram (iframe)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="custom"
                          name="postType"
                          type="radio"
                          checked={postType === 'custom'}
                          onChange={() => setPostType('custom')}
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label htmlFor="custom" className="ml-3 block text-sm font-medium text-gray-700">
                          Własny
                        </label>
                      </div>
                    </div>
                  </div>

                  {postType === 'facebook-iframe' && (
                    <div>
                      <label htmlFor="iframeCode" className="block text-sm font-medium text-gray-700">
                        Kod embed Facebook
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="iframeCode"
                          rows={10}
                          value={iframeCode}
                          onChange={(e) => setIframeCode(e.target.value)}
                          className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md font-mono"
                          placeholder="Wklej tutaj kod iframe z Facebooka (&lt;iframe src=&quot;https://www.facebook.com/plugins/post.php?...&quot; ...&gt;)"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Wklej kod iframe wygenerowany przez Facebook. Możesz go uzyskać klikając na trzy kropki na poście, wybierając &quot;Osadź&quot; i kopiując kod iframe. Upewnij się, że kod zawiera tag &lt;iframe&gt;.
                      </p>
                    </div>
                  )}

                  {postType === 'instagram-iframe' && (
                    <div>
                      <label htmlFor="iframeCode" className="block text-sm font-medium text-gray-700">
                        Kod embed Instagram
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="iframeCode"
                          rows={10}
                          value={iframeCode}
                          onChange={(e) => setIframeCode(e.target.value)}
                          className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md font-mono"
                          placeholder="Wklej tutaj kod embed z Instagrama (cały kod z &lt;blockquote&gt; i &lt;script&gt;)"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Wklej pełny kod embed z Instagrama, włącznie z tagami &lt;blockquote&gt; i &lt;script&gt;. Możesz go uzyskać klikając &quot;...&quot; na poście, wybierając &quot;Osadź&quot; i kopiując cały kod.
                      </p>
                    </div>
                  )}

                  {postType === 'custom' && (
                    <div>
                      <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Treść
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="content"
                          rows={5}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Treść posta"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => router.push('/admin/posts')}
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-3"
                    >
                      Anuluj
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      {saving ? 'Zapisywanie...' : 'Zapisz zmiany'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 