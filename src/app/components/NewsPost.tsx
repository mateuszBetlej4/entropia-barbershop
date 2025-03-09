import Image from 'next/image';
import Link from 'next/link';

interface NewsPostProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  content: React.ReactNode;
  facebookEventUrl?: string;
}

export default function NewsPost({
  title,
  date,
  imageSrc,
  imageAlt,
  content,
  facebookEventUrl,
}: NewsPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
      <div className="relative h-[200px] sm:h-[250px] md:h-[400px] w-full">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
        />
      </div>
      
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4 text-sm text-gray-500">
          <span className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </span>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-purple-dark font-playfair">
          {title}
        </h2>
        
        <div className="prose max-w-none prose-sm sm:prose-base">
          {content}
          
          {facebookEventUrl && (
            <div className="mt-6 flex justify-center sm:justify-start">
              <Link 
                href={facebookEventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-purple-dark hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Zobacz wydarzenie na Facebooku
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
} 