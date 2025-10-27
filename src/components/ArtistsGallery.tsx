'use client';

import { useState, useRef, useEffect } from 'react';
import { artistsData, Artist } from '@/data/artists';
import ArtistModal from './ArtistModal';

export default function ArtistsGallery() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleArtistClick = (artist: Artist) => {
    // Jika sedang drag, jangan buka modal
    if (isDragging) return;
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const cardsPerView = 3;
  const maxIndex = Math.max(0, artistsData.length - cardsPerView);
  const totalSlides = maxIndex + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Reset index ketika data berubah
  useEffect(() => {
    setCurrentIndex(0);
  }, [artistsData]);

  // Handle mouse/touch events untuk swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // multiplier untuk sensitivity
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Update currentIndex berdasarkan posisi scroll
    updateCurrentIndexFromScroll();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    updateCurrentIndexFromScroll();
  };

  const updateCurrentIndexFromScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth / cardsPerView;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
    
    // Smooth snap to position
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: newIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Handle wheel event untuk scroll horizontal dengan mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Horizontal scroll - biarkan default behavior
      return;
    }
    
    // Vertical scroll - convert ke horizontal
    e.preventDefault();
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY * 2;
    }
  };

  // Effect untuk sync scroll position dengan currentIndex
  useEffect(() => {
    if (!containerRef.current || isDragging) return;
    
    const container = containerRef.current;
    const cardWidth = container.offsetWidth / cardsPerView;
    container.scrollTo({
      left: currentIndex * cardWidth,
      behavior: 'smooth'
    });
  }, [currentIndex, isDragging]);

  const visibleArtists = artistsData.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section id="seniman-berbakat" className="relative py-16 overflow-hidden bg-white">
      {/* Artistic Background - tetap sama */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-yellow-50/20 to-red-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-bl from-yellow-200/15 to-red-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-tr from-red-200/25 to-amber-200/25 rounded-full blur-lg"></div>
        
        {/* Artistic brush strokes */}
        <div className="absolute top-16 right-1/3 w-64 h-2 bg-gradient-to-r from-amber-300/30 via-yellow-300/30 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-1 bg-gradient-to-r from-yellow-300/25 via-red-300/25 to-transparent rounded-full transform -rotate-6"></div>
        
        {/* Scattered art elements */}
        <div className="absolute top-1/4 left-12 w-16 h-20 border-2 border-amber-200/30 rounded-lg transform rotate-12"></div>
        <div className="absolute top-2/3 right-16 w-12 h-16 border-2 border-yellow-200/30 rounded transform -rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-red-300/40 to-amber-300/40 rounded-full"></div>
        
        {/* Paint palette inspired circles */}
        <div className="absolute top-1/3 left-8 w-6 h-6 bg-amber-300/30 rounded-full"></div>
        <div className="absolute top-1/3 left-16 w-4 h-4 bg-yellow-300/40 rounded-full"></div>
        <div className="absolute top-1/3 left-22 w-5 h-5 bg-red-300/35 rounded-full"></div>
        
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
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5"/>
              <stop offset="50%" stopColor="#EAB308" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-amber-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-red-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Seniman
            <span className="text-transparent bg-clip-text ml-3" style={{ backgroundImage: `linear-gradient(to right, #d2ae6d, #eab308, #c43438)`, WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Berbakat
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temui para seniman luar biasa yang telah mempercayakan karya seni mereka 
            kepada Senirupa Makassar
          </p>
          
          {/* Decorative brush strokes */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="w-12 h-1 rounded-full" style={{ background: `linear-gradient(to right, #d2ae6d, #eab308)` }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: `linear-gradient(to bottom right, #eab308, #c43438)` }}></div>
            <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(to right, #eab308, #c43438)` }}></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200 hover:scale-110"
              aria-label="Previous artists"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200 hover:scale-110"
              aria-label="Next artists"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Artists Grid Container dengan swipe support */}
          <div 
            ref={containerRef}
            className={`relative h-96 overflow-x-auto overflow-y-hidden rounded-2xl ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
            }}
          >
            {/* Hide scrollbar for Chrome/Safari */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex h-full px-4" style={{ width: `${(artistsData.length * 100) / cardsPerView}%` }}>
              {artistsData.map((artist) => (
                <div
                  key={artist.id}
                  className="group relative flex-shrink-0 h-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-105"
                  style={{
                    width: `calc(${100 / artistsData.length}% * ${cardsPerView})`,
                    minWidth: '250px',
                    maxWidth: '300px',
                    backgroundImage: `url(${artist.profileImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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

                  {/* Horizontal artist name for collapsed state */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 flex items-end justify-center pb-4">
                    <span className="text-sm font-semibold tracking-wider text-white text-center px-2 py-1 bg-black/50 backdrop-blur-sm rounded">
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

          {/* Dots Indicator (limit to max 10 dots for readability) */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-6">
              {(() => {
                // If total slides <= 10 show all, otherwise show a sliding window of 10 centered on currentIndex
                const maxDots = 10;
                const dots: number[] = [];
                if (totalSlides <= maxDots) {
                  for (let i = 0; i < totalSlides; i++) dots.push(i);
                } else {
                  const half = Math.floor(maxDots / 2);
                  let start = Math.max(0, currentIndex - half);
                  // ensure the window doesn't overflow the total slides
                  if (start + maxDots > totalSlides) start = totalSlides - maxDots;
                  for (let i = start; i < start + maxDots; i++) dots.push(i);
                }

                return dots.map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-amber-500 to-red-500 w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ));
              })()}
            </div>
          )}

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentIndex + 1} - {Math.min(currentIndex + cardsPerView, artistsData.length)} dari {artistsData.length} seniman
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