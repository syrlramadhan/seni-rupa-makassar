'use client';

import { Artist } from '@/data/artists';
import Image from 'next/image';
import { useEffect } from 'react';

interface ArtistModalProps {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArtistModal({ artist, isOpen, onClose }: ArtistModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !artist) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="relative bg-white p-8 border-b border-gray-100">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 border-2 border-gray-300 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-gray-300 rounded-full transform -translate-x-6 translate-y-6"></div>
            </div>

            <div className="relative flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <Image
                  src={artist.profileImage}
                  alt={artist.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {artist.name}
                  </span>
                </h2>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{artist.location}</span>
                  </span>
                  <span>•</span>
                  <span>{artist.experience} pengalaman</span>
                  <span>•</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full text-sm text-gray-700 border border-gray-200">
                    {artist.style}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {/* Biography */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <div className="w-5 h-5 mr-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                Tentang Seniman
              </h3>
              <p className="text-gray-600 leading-relaxed">{artist.bio}</p>
            </div>

            {/* Artworks */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-5 h-5 mr-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                Karya Seni ({artist.artworks.length} karya)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artist.artworks.map((artwork) => (
                  <div key={artwork.id} className="group bg-white rounded-sm shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <p className="text-sm font-medium">{artwork.year}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-200">
                        {artwork.title}
                      </h4>
                      <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 font-medium">{artwork.medium}</p>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {artwork.description}
                      </p>
                      {artwork.price && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-lg font-bold text-gray-800">{artwork.price}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}