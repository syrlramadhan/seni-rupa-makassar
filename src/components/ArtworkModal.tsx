'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface Artwork {
  id: string;
  title: string;
  image: string;
  medium: string;
  year: number;
  price?: string;
  description: string;
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

interface ArtworkModalProps {
  artwork: Artwork | null;
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArtworkModal({ artwork, artist, isOpen, onClose }: ArtworkModalProps) {
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

  if (!isOpen || !artwork || !artist) return null;

  const handleWhatsAppClick = () => {
    if (artist.whatsapp) {
      const message = `Halo ${artist.name}, saya tertarik dengan karya "${artwork.title}" (${artwork.year}). 

Detail karya:
Judul: ${artwork.title}
Medium: ${artwork.medium}
Tahun: ${artwork.year}
${artwork.price ? `Harga: ${artwork.price}` : ''}

Bisakah kita diskusikan lebih lanjut?`;
      
      const whatsappUrl = `https://wa.me/${artist.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-lg"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
          {/* Image Section */}
          <div className="relative lg:w-1/2 h-48 sm:h-64 lg:h-auto">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Image overlay with artwork info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 md:p-6">
              <div className="text-white">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-1 md:mb-2">
                  {artwork.medium}
                </span>
                <div className="text-base md:text-lg font-semibold">{artwork.year}</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 overflow-y-auto">
            <div className="p-4 md:p-8">
              {/* Artwork Title */}
              <div className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  <span 
                    className="text-transparent bg-clip-text"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, #d2ae6d, #c43438)`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }}
                  >
                    {artwork.title}
                  </span>
                </h2>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-sm md:text-lg">oleh</span>
                  <span className="text-sm md:text-lg font-semibold text-gray-900">{artist.name}</span>
                </div>
              </div>

              {/* Artist Info */}
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 md:space-x-4 mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={artist.profileImage}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{artist.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 truncate">{artist.style}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs md:text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="truncate">{artist.location}</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="truncate">{artist.experience} pengalaman</span>
                </div>
              </div>

              {/* Artwork Details */}
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                  <div 
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(to right, #d2ae6d, #c43438)` }}
                  >
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Detail Karya
                </h4>
                <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                  <div>
                    <span className="text-gray-500">Medium:</span>
                    <p className="font-medium text-gray-900 break-words">{artwork.medium}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Tahun:</span>
                    <p className="font-medium text-gray-900">{artwork.year}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Deskripsi</h4>
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm">{artwork.description}</p>
              </div>

              {/* Price & Actions */}
              <div className="border-t border-gray-200 pt-4 md:pt-6">
                {artwork.price && (
                  <div className="mb-4 md:mb-6">
                    <span className="text-gray-500 text-xs md:text-sm">Harga:</span>
                    <div className="text-xl md:text-2xl font-bold text-gray-900">{artwork.price}</div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-2 md:space-y-3">
                  {artist.whatsapp ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm md:text-base"
                      style={{ 
                        background: `linear-gradient(to right, #25D366, #128C7E)`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to right, #128C7E, #25D366)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to right, #25D366, #128C7E)';
                      }}
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                      </svg>
                      <span className="truncate">Beli via WhatsApp</span>
                    </button>
                  ) : (
                    <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 text-xs md:text-sm">Hubungi Senirupa Makassar untuk informasi pembelian</p>
                    </div>
                  )}

                  <button
                    onClick={onClose}
                    className="w-full border-2 text-gray-700 py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-200 hover:text-white text-sm md:text-base"
                    style={{ borderColor: '#d2ae6d' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d2ae6d';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#374151';
                    }}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}