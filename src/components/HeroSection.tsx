'use client';

import Image from 'next/image';
import { artistsData } from '@/data/artists';

export default function HeroSection() {
  // Calculate dynamic statistics
  const totalArtists = artistsData.length;
  const totalArtworks = artistsData.reduce((sum, artist) => sum + artist.artworks.length, 0);
  
  // Format numbers with threshold logic
  const formatNumber = (num: number): string => {
    if (num >= 500) return '500+';
    if (num >= 200) return '200+';
    if (num >= 100) return '100+';
    if (num >= 50) return '50+';
    if (num >= 20) return '20+';
    if (num >= 15) return '15+';
    if (num >= 10) return '10+';
    if (num >= 5) return '5+';
    return num.toString();
  };

  const formattedArtists = formatNumber(totalArtists);
  const formattedArtworks = formatNumber(totalArtworks);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: 'linear-gradient(to bottom right, #1c1917, #78350f, #7f1d1d)' }}>
      {/* Background with scattered artwork images */}
      <div className="absolute inset-0">
        {/* Top left artwork - Hide on mobile */}
        <div className="hidden md:block absolute top-16 left-8 w-48 h-64 transform -rotate-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop"
            alt="Abstract Art"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(to bottom right, rgba(210, 174, 109, 0.2), transparent)' }}></div>
        </div>

        {/* Top right artwork - Hide on mobile */}
        <div className="hidden md:block absolute top-24 right-12 w-40 h-52 transform rotate-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop"
            alt="Portrait Art"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(to bottom right, rgba(196, 52, 56, 0.2), transparent)' }}></div>
        </div>

        {/* Bottom left artwork - Smaller on mobile */}
        <div className="absolute bottom-20 left-4 md:left-16 w-32 h-24 md:w-52 md:h-40 transform rotate-3 opacity-60 md:opacity-80 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500&h=400&fit=crop"
            alt="Modern Art"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(to bottom right, rgba(210, 174, 109, 0.2), transparent)' }}></div>
        </div>

        {/* Center bottom artwork - Smaller on mobile */}
        <div className="absolute bottom-16 right-4 md:right-1/4 w-28 h-36 md:w-44 md:h-56 transform -rotate-6 opacity-60 md:opacity-80 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
            alt="Contemporary Art"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(to bottom right, rgba(210, 174, 109, 0.2), transparent)' }}></div>
        </div>

        {/* Additional floating artworks - Hide on mobile */}
        <div className="hidden lg:block absolute top-1/3 left-1/4 w-36 h-48 transform rotate-12 opacity-60 hover:opacity-90 transition-opacity duration-300">
          <Image
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=400&fit=crop"
            alt="Gallery Art"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>

        <div className="hidden lg:block absolute bottom-1/3 right-8 w-32 h-40 transform -rotate-3 opacity-60 hover:opacity-90 transition-opacity duration-300">
          <Image
            src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300&h=400&fit=crop"
            alt="Art Collection"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Mobile-only background artwork - Center piece */}
        <div className="block md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-52 rotate-12 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop"
            alt="Background Art"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(to bottom right, rgba(210, 174, 109, 0.3), rgba(196, 52, 56, 0.3))' }}></div>
        </div>

        {/* Subtle overlay gradient - Stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 md:from-stone-900/40 via-transparent to-stone-900/60 md:to-stone-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/40 md:via-amber-950/20 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
            <span className="block mb-4">SENIRUPA</span>
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                backgroundImage: `linear-gradient(to right, #d2ae6d, #eab308, #d2ae6d)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              MAKASSAR
            </span>
          </h1>
          
          {/* Subtitle with typewriter effect */}
          <div className="mt-8">
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wider">
              TEMUKAN KARYA SENI TERBAIK DARI SENIMAN BERBAKAT DI SELURUH INDONESIA
            </p>
            <div 
              className="w-24 h-1 mx-auto mt-4 rounded-full"
              style={{ background: `linear-gradient(to right, #d2ae6d, #eab308)` }}
            ></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection('semua-karya-seni')}
            className="group relative overflow-hidden px-10 py-4 text-white font-bold text-lg rounded-none border-2 border-transparent hover:border-white/30 transform hover:scale-105 transition-all duration-300 inline-block"
            style={{ background: `linear-gradient(to right, #d2ae6d, #c43438)` }}
          >
            <span className="relative z-10">CARI KARYA</span>
            <div 
              className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"
              style={{ background: `linear-gradient(to right, #c43438, #d2ae6d)` }}
            ></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('seniman-berbakat')}
            className="group px-10 py-4 border-2 border-white/50 text-white font-bold text-lg rounded-none hover:bg-white hover:text-stone-900 transform hover:scale-105 transition-all duration-300"
          >
            DAFTAR SENIMAN
          </button>
        </div>

        {/* Featured stats or info */}
        <div className="flex justify-center items-center gap-16 text-center mb-20">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-colors duration-300" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d2ae6d'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>{formattedArtists}</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Artists</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-colors duration-300" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d2ae6d'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>{formattedArtworks}</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Artworks</div>
          </div>
          {/* <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-colors duration-300" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d2ae6d'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>15+</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Years</div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300">
          <span className="text-xs md:text-sm mb-2 uppercase tracking-wider font-medium">Scroll Down</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full opacity-80 animate-pulse" style={{ backgroundColor: '#d2ae6d', animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full opacity-70 animate-pulse" style={{ backgroundColor: '#d2ae6d', animationDelay: '2s' }}></div>
    </section>
  );
}