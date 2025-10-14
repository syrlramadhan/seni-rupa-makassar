'use client';

import { useState } from 'react';
import { artistsData, Artist } from '@/data/artists';
import ArtistCard from './ArtistCard';
import ArtistModal from './ArtistModal';

export default function ArtistsGallery() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  return (
    <section id="seniman-berbakat" className="relative py-16 overflow-hidden bg-white">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-bl from-purple-200/15 to-pink-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-tr from-pink-200/25 to-blue-200/25 rounded-full blur-lg"></div>
        
        {/* Artistic brush strokes */}
        <div className="absolute top-16 right-1/3 w-64 h-2 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-1 bg-gradient-to-r from-purple-300/25 via-pink-300/25 to-transparent rounded-full transform -rotate-6"></div>
        
        {/* Scattered art elements */}
        <div className="absolute top-1/4 left-12 w-16 h-20 border-2 border-blue-200/30 rounded-lg transform rotate-12"></div>
        <div className="absolute top-2/3 right-16 w-12 h-16 border-2 border-purple-200/30 rounded transform -rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-pink-300/40 to-purple-300/40 rounded-full"></div>
        
        {/* Paint palette inspired circles */}
        <div className="absolute top-1/3 left-8 w-6 h-6 bg-blue-300/30 rounded-full"></div>
        <div className="absolute top-1/3 left-16 w-4 h-4 bg-purple-300/40 rounded-full"></div>
        <div className="absolute top-1/3 left-22 w-5 h-5 bg-pink-300/35 rounded-full"></div>
        
        {/* Artistic lines */}
        <svg className="absolute top-1/2 right-8 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <path 
            d="M10,30 Q40,10 70,30 T90,50" 
            stroke="url(#gradient1)" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M20,60 Q50,40 80,60 T100,80" 
            stroke="url(#gradient2)" 
            strokeWidth="1.5" 
            fill="none"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5"/>
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Seniman
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ml-3">
              Berbakat
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temui para seniman luar biasa yang telah mempercayakan karya seni mereka 
            kepada Makassar Gallery Art
          </p>
          
          {/* Decorative brush strokes */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Accordion-style artists gallery */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {/* Artists container */}
            <div className="flex h-full overflow-x-auto scrollbar-hide px-4 md:px-0 md:justify-center" style={{ scrollSnapType: 'x mandatory' }}>
              {artistsData.map((artist, index) => (
                <div
                  key={artist.id}
                  className="group relative flex-shrink-0 h-full cursor-pointer transition-all duration-700 ease-in-out hover:flex-grow mr-1 md:mr-0"
                  style={{
                    width: '120px',
                    backgroundImage: `url(${artist.artworks[0]?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    scrollSnapAlign: 'start',
                  }}
                  onClick={() => handleArtistClick(artist)}
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/70"></div>
                  
                  {/* White border frame */}
                  <div className="absolute inset-2 border-2 border-white/80 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Artist info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white overflow-hidden">
                    {/* Expanded state info */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <h3 className="text-lg font-bold mb-1 truncate">{artist.name}</h3>
                      <p className="text-sm text-gray-200 mb-2 truncate">{artist.style}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">{artist.location}</span>
                        <span className="flex-shrink-0">•</span>
                        <span className="flex-shrink-0">{artist.artworks.length} karya</span>
                      </div>
                    </div>
                  </div>

                  {/* Vertical artist name for collapsed state */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold tracking-wider whitespace-nowrap transform -rotate-90">
                      {artist.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Artist Modal */}
      <ArtistModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}