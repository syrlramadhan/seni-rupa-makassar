'use client';

import { useState } from 'react';
import { artistsData } from '@/data/artists';
import Image from 'next/image';
import ArtworkModal from './ArtworkModal';

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
  created_at: string;
}

interface Artist {
  id: string;
  name: string;
  whatsapp?: string;
  profileImage: string;
  bio: string;
  style: string;
  location: string;
  experience: string;
}

interface PopularArtworkProps {
  artist?: Artist | null; // Made optional since it's not used
}

export default function PopularArtworks(_props: PopularArtworkProps) {
  // Compile all artworks from all artists and add popularity scores
  const allArtworks: Artwork[] = artistsData.flatMap((artist, artistIndex) => 
    artist.artworks.map((artwork, artworkIndex) => ({
      ...artwork,
      artistName: artist.name,
      popularity: 95 - (artistIndex * 5) - (artworkIndex * 2) // Fixed popularity score based on index
    }))
  ).sort((a, b) => b.popularity - a.popularity).slice(0, 8); // Get top 8 popular artworks

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtworkClick = (artwork: Artwork) => {
    // Find the artist for this artwork
    const artist = artistsData.find(artist => artist.name === artwork.artistName);
    setSelectedArtwork(artwork);
    setSelectedArtist(artist || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
    setSelectedArtist(null);
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-100/40 to-yellow-100/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-bl from-yellow-100/30 to-red-100/30 rounded-full blur-2xl"></div>
        
        {/* Decorative lines */}
        <div className="absolute top-16 right-1/4 w-64 h-1 bg-gradient-to-r from-amber-200/50 via-yellow-200/50 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-1 bg-gradient-to-r from-yellow-200/40 via-red-200/40 to-transparent rounded-full transform -rotate-6"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karya Seni
            <span className="text-transparent bg-clip-text ml-3" style={{ backgroundImage: `linear-gradient(to right, #d2ae6d, #eab308, #c43438)`, WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Paling Populer
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Temukan karya seni yang paling diminati dan dipercaya oleh para kolektor dan pencinta seni
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-1 rounded-full" style={{ background: `linear-gradient(to right, #d2ae6d, #eab308)` }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: `linear-gradient(to bottom right, #eab308, #c43438)` }}></div>
            <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(to right, #eab308, #c43438)` }}></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 items-center justify-center group"
            style={{ marginLeft: '-24px' }}
            onMouseEnter={(e) => e.currentTarget.querySelector('svg')!.style.color = '#d2ae6d'}
            onMouseLeave={(e) => e.currentTarget.querySelector('svg')!.style.color = '#4b5563'}
          >
            <svg className="w-5 h-5 text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 items-center justify-center group"
            style={{ marginRight: '-24px' }}
            onMouseEnter={(e) => e.currentTarget.querySelector('svg')!.style.color = '#d2ae6d'}
            onMouseLeave={(e) => e.currentTarget.querySelector('svg')!.style.color = '#4b5563'}
          >
            <svg className="w-5 h-5 text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="absolute top-4 left-4 z-10 text-white px-3 py-1 rounded-full text-xs font-bold" style={{ background: `linear-gradient(to right, #d2ae6d, #c43438)` }}>
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
                      <h3 className="font-bold text-xl text-gray-900 mb-1 transition-all duration-300" onMouseEnter={(e) => {
                        e.currentTarget.style.background = `linear-gradient(to right, #d2ae6d, #eab308, #c43438)`;
                        e.currentTarget.style.webkitBackgroundClip = 'text';
                        e.currentTarget.style.backgroundClip = 'text';
                        e.currentTarget.style.color = 'transparent';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = '#111827';
                      }}>
                        {artwork.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">oleh {artwork.artistName}</p>
                      <span className="inline-block px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(210, 174, 109, 0.1)', color: '#92400e' }}>
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

                  {/* WhatsApp Purchase Button */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 pt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const artworkArtist = artistsData.find(a => a.name === artwork.artistName);
                        if (!artworkArtist || !artworkArtist.whatsapp) return;
                        
                        const message = `Halo ${artworkArtist.name}, saya tertarik dengan karya "${artwork.title}" (${artwork.year}). 

Detail karya:
Judul: ${artwork.title}
Medium: ${artwork.medium}
Tahun: ${artwork.year}
${artwork.price ? `Harga: ${artwork.price}` : ''}

Bisakah kita diskusikan lebih lanjut?`;

                        const whatsappUrl = `https://wa.me/${artworkArtist.whatsapp}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                      style={{ background: `linear-gradient(to right, #d2ae6d, #c43438)` }}
                      onMouseEnter={(e) => e.currentTarget.style.background = `linear-gradient(to right, #c49c5a, #a02a2e)`}
                      onMouseLeave={(e) => e.currentTarget.style.background = `linear-gradient(to right, #d2ae6d, #c43438)`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                      </svg>
                      <span>Beli via WhatsApp</span>
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

      {/* ArtworkModal */}
      <ArtworkModal 
        artwork={selectedArtwork}
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}