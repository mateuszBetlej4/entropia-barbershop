"use client";

import { useState, useEffect, useRef } from 'react';

interface SocialMediaPostProps {
  id: string;
  title: string;
  date: string;
  type: 'facebook-iframe' | 'instagram-iframe' | 'custom';
  iframeCode?: string;
  content?: string;
}

export default function SocialMediaPost({
  id,
  title,
  date,
  type,
  iframeCode,
  content,
}: SocialMediaPostProps) {
  const [formattedDate, setFormattedDate] = useState(date);
  const instagramRef = useRef<HTMLDivElement>(null);
  const [embedError, setEmbedError] = useState<string | null>(null);

  useEffect(() => {
    // Format date for display
    try {
      const dateObj = new Date(date);
      setFormattedDate(dateObj.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));
    } catch (error) {
      console.error('Error formatting date:', error);
    }
  }, [date]);

  useEffect(() => {
    // Load Instagram embed script if needed
    if (type === 'instagram-iframe' && iframeCode && instagramRef.current) {
      try {
        setEmbedError(null);
        console.log('Setting up Instagram embed...');
        
        // Check if the script is already in the document
        const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
        
        if (!existingScript) {
          console.log('Instagram script not found, adding it...');
          const script = document.createElement('script');
          script.src = 'https://www.instagram.com/embed.js';
          script.async = true;
          script.defer = true;
          script.onload = () => {
            console.log('Instagram script loaded successfully');
            if (window.instgrm && instagramRef.current) {
              try {
                console.log('Processing Instagram embed...');
                window.instgrm.Embeds.process(instagramRef.current);
              } catch (processError) {
                console.error('Error processing Instagram embed:', processError);
                setEmbedError('Error processing embed: ' + String(processError));
              }
            } else {
              console.warn('Instagram API not available after script load');
              setEmbedError('Instagram API not available');
            }
          };
          script.onerror = (error) => {
            console.error('Error loading Instagram embed script:', error);
            setEmbedError('Failed to load Instagram script');
          };
          document.body.appendChild(script);
        } else if (window.instgrm) {
          console.log('Instagram script already exists, processing embed...');
          try {
            window.instgrm.Embeds.process(instagramRef.current);
          } catch (processError) {
            console.error('Error processing existing Instagram embed:', processError);
            setEmbedError('Error processing embed: ' + String(processError));
          }
        } else {
          console.warn('Instagram script exists but API not available');
          setEmbedError('Instagram API not available');
        }
      } catch (error) {
        console.error('Error setting up Instagram embed:', error);
        setEmbedError('Setup error: ' + String(error));
      }
    }
  }, [type, iframeCode]);

  // Add Facebook embed handling - simplified to just use the iframe directly
  useEffect(() => {
    if (type === 'facebook-iframe' && iframeCode) {
      try {
        setEmbedError(null);
        console.log('Setting up Facebook embed...');
        
        // No need to load the Facebook SDK for iframe embeds
        // Just make sure the iframe is properly rendered
      } catch (error) {
        console.error('Error setting up Facebook embed:', error);
        setEmbedError('Setup error: ' + String(error));
      }
    }
  }, [type, iframeCode]);

  // Sanitize Facebook iframe code
  const sanitizeFacebookIframe = (code: string): string => {
    try {
      // Check if it's already an iframe
      if (code.includes('<iframe')) {
        // Extract the src attribute
        const srcMatch = code.match(/src="([^"]+)"/);
        if (srcMatch && srcMatch[1]) {
          const src = srcMatch[1];
          
          // Create a clean iframe with proper attributes
          return `<iframe 
            src="${src}" 
            width="100%" 
            height="500" 
            style="border:none;overflow:hidden" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>`;
        }
      }
      
      // If it's a div with data-href (Facebook plugin format)
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = code;
      
      const dataHref = tempDiv.querySelector('[data-href]')?.getAttribute('data-href');
      if (dataHref) {
        return `<iframe 
          src="https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(dataHref)}&show_text=true" 
          width="100%" 
          height="500" 
          style="border:none;overflow:hidden" 
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>`;
      }
      
      // Return original if we couldn't sanitize
      return code;
    } catch (error) {
      console.error('Error sanitizing Facebook iframe:', error);
      return code;
    }
  };

  // Extract the HTML content from the iframe code
  const getEmbedContent = () => {
    if (!iframeCode) return '';
    
    try {
      // For Instagram, we want to keep the blockquote and remove the script tag
      if (type === 'instagram-iframe') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = iframeCode;
        
        // Remove any script tags
        const scripts = tempDiv.querySelectorAll('script');
        scripts.forEach(script => script.remove());
        
        return tempDiv.innerHTML;
      }
      
      // For Facebook, sanitize the iframe code
      if (type === 'facebook-iframe') {
        return sanitizeFacebookIframe(iframeCode);
      }
      
      // Default fallback
      return iframeCode;
    } catch (error) {
      console.error('Error processing embed content:', error);
      return iframeCode; // Return original code as fallback
    }
  };

  return (
    <article id={id} className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden mb-10" style={{ backgroundColor: "#18181B" }}>
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4 text-sm text-gray-400">
          <span className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formattedDate}
          </span>
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-900 text-purple-200" style={{ backgroundColor: "#581C60", color: "#E9D5FF" }}>
            {type === 'facebook-iframe' ? 'Facebook' : type === 'instagram-iframe' ? 'Instagram' : 'Post'}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          {title}
        </h2>
        
        <div className="prose prose-invert max-w-none">
          {type === 'facebook-iframe' && iframeCode && (
            <div className="my-6 flex flex-col items-center">
              <div className="w-full flex justify-center overflow-hidden" style={{ maxWidth: '100%' }}>
                <div dangerouslySetInnerHTML={{ __html: getEmbedContent() }} />
              </div>
              {embedError && (
                <div className="mt-2 p-2 bg-red-900/50 text-red-200 rounded text-sm">
                  <p>Wystąpił problem z ładowaniem postu z Facebooka: {embedError}</p>
                  <p className="mt-1">Spróbuj odświeżyć stronę lub sprawdź kod osadzania.</p>
                </div>
              )}
            </div>
          )}
          
          {type === 'instagram-iframe' && iframeCode && (
            <div className="my-6 flex flex-col items-center">
              <div ref={instagramRef} className="w-full flex justify-center" dangerouslySetInnerHTML={{ __html: getEmbedContent() }} />
              {embedError && (
                <div className="mt-2 p-2 bg-red-900/50 text-red-200 rounded text-sm">
                  <p>Wystąpił problem z ładowaniem postu z Instagrama: {embedError}</p>
                  <p className="mt-1">Spróbuj odświeżyć stronę lub sprawdź kod osadzania.</p>
                </div>
              )}
            </div>
          )}
          
          {type === 'custom' && content && (
            <div className="mt-4 text-gray-300">
              {content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
} 