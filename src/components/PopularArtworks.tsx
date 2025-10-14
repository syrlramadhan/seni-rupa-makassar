'use client';

import { useState } from 'react';
import { artistsData } from '@/data/artists';
import Image from 'next/image';

interface Artwork {
  id: string;
  title: string;
  artistName: string;
  image: string;
  medium: string;
  year: number;
  price?: string;
  description: string;
  popularity: number;
}

export default function PopularArtworks() {
  // Compile all artworks from all artists and add popularity scores
  const allArtworks: Artwork[] = artistsData.flatMap((artist, artistIndex) => 
    artist.artworks.map((artwork, artworkIndex) => ({
      ...artwork,
      artistName: artist.name,
      popularity: 95 - (artistIndex * 5) - (artworkIndex * 2) // Fixed popularity score based on index
    }))
  ).sort((a, b) => b.popularity - a.popularity).slice(0, 8); // Get top 8 popular artworks

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  // Scroll functions
  const scrollLeft = () => {
    const container = document.getElementById('artworks-container');
    if (container) {
      container.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('artworks-container');
    if (container) {
      container.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-bl from-purple-100/30 to-pink-100/30 rounded-full blur-2xl"></div>
        
        {/* Decorative lines */}
        <div className="absolute top-16 right-1/4 w-64 h-1 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-1 bg-gradient-to-r from-purple-200/40 via-pink-200/40 to-transparent rounded-full transform -rotate-6"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karya Seni
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ml-3">
              Paling Populer
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Temukan karya seni yang paling diminati dan dipercaya oleh para kolektor dan pencinta seni
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 items-center justify-center group"
            style={{ marginLeft: '-24px' }}
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 items-center justify-center group"
            style={{ marginRight: '-24px' }}
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards */}
          <div 
            id="artworks-container"
            className="overflow-x-auto scrollbar-hide pb-6" 
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex space-x-6 px-4 md:px-0" style={{ width: 'max-content' }}>
              {allArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  style={{ 
                    width: '320px',
                    scrollSnapAlign: 'start'
                  }}
                  onClick={() => handleArtworkClick(artwork)}
                >
                  {/* Popularity Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    #{index + 1} Popular
                  </div>

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                          {artwork.year}
                        </span>
                        <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                          {artwork.popularity}% populer
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {artwork.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">oleh {artwork.artistName}</p>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 text-xs rounded-full font-medium">
                        {artwork.medium}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {artwork.description}
                    </p>
                    
                    {artwork.price && (
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-lg font-bold text-gray-900">{artwork.price}</span>
                        <div className="flex items-center text-yellow-500">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs">{artwork.popularity}%</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 pt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation hint for mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex items-center space-x-2 text-gray-500 text-sm bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Geser untuk melihat karya lainnya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Modal for artwork detail */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}>
          <div className="relative bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center text-gray-700 hover:bg-black/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-64">
              <Image
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedArtwork.title}</h3>
              <p className="text-gray-600 mb-4">oleh {selectedArtwork.artistName}</p>
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <span>{selectedArtwork.medium}</span>
                <span>•</span>
                <span>{selectedArtwork.year}</span>
                <span>•</span>
                <span>{selectedArtwork.popularity}% populer</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{selectedArtwork.description}</p>
              {selectedArtwork.price && (
                <div className="text-xl font-bold text-gray-900">{selectedArtwork.price}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}