'use client';

import { Artist } from '@/data/artists';
import Image from 'next/image';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

export default function ArtistCard({ artist, onClick }: ArtistCardProps) {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-80 h-96 bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-xl overflow-hidden border border-amber-200/50 hover:shadow-2xl transition-all duration-500">
        {/* Background artistic pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-300/20 to-orange-400/20"></div>
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-amber-300/30 rounded-full"></div>
          <div className="absolute bottom-8 left-6 w-16 h-16 border-2 border-orange-300/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-amber-400/20 rounded-full"></div>
        </div>

        {/* Artist profile image */}
        <div className="relative z-10 flex flex-col items-center pt-8">
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                <Image
                  src={artist.profileImage}
                  alt={artist.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            {/* Decorative brush stroke */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-80 group-hover:animate-pulse"></div>
          </div>

          {/* Artist info */}
          <div className="text-center px-6 space-y-3">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
              {artist.name}
            </h3>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <span className="px-3 py-1 bg-amber-100 rounded-full text-amber-700 font-medium">
                {artist.style}
              </span>
            </div>

            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {artist.bio}
            </p>

            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{artist.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{artist.experience}</span>
              </span>
            </div>

            {/* Artwork preview */}
            <div className="flex justify-center space-x-2 pt-2">
              {artist.artworks.slice(0, 3).map((artwork, index) => (
                <div key={artwork.id} className="relative w-8 h-8 rounded-lg overflow-hidden border border-amber-200">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              {artist.artworks.length > 3 && (
                <div className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center text-xs text-amber-700 font-medium">
                  +{artist.artworks.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Click indicator */}
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}