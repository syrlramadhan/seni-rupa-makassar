'use client';

import { useState, useMemo } from 'react';
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
}

export default function AllArtworks() {
  // Compile all artworks from all artists
  const allArtworks: Artwork[] = artistsData.flatMap(artist => 
    artist.artworks.map(artwork => ({
      ...artwork,
      artistName: artist.name,
    }))
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedium, setSelectedMedium] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const itemsPerPage = 12;

  // Get unique mediums for filter
  const uniqueMediums = Array.from(new Set(allArtworks.map(artwork => artwork.medium)));

  // Filter artworks based on search and medium
  const filteredArtworks = useMemo(() => {
    return allArtworks.filter(artwork => {
      const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.artistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMedium = selectedMedium === '' || artwork.medium === selectedMedium;
      return matchesSearch && matchesMedium;
    });
  }, [searchTerm, selectedMedium]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArtworks = filteredArtworks.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleMediumChange = (value: string) => {
    setSelectedMedium(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <section id="semua-karya-seni" className="relative min-h-screen py-16 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-50/40 to-purple-50/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-bl from-purple-50/30 to-pink-50/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Semua 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ml-3">
              Karya Seni
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Jelajahi koleksi lengkap karya seni dari berbagai seniman berbakat di Makassar Gallery Art
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Cari karya seni, seniman, atau deskripsi..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-400 rounded-xl leading-5 bg-white placeholder-gray-700 text-gray-900 font-medium focus:outline-none focus:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Medium Filter */}
            <div className="w-full md:w-64">
              <select
                value={selectedMedium}
                onChange={(e) => handleMediumChange(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-400 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Semua Medium</option>
                {uniqueMediums.map(medium => (
                  <option key={medium} value={medium}>{medium}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-800 font-semibold whitespace-nowrap">
              {filteredArtworks.length} karya ditemukan
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {paginatedArtworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {paginatedArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
                onClick={() => handleArtworkClick(artwork)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                      {artwork.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300 line-clamp-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">oleh {artwork.artistName}</p>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 text-xs rounded-full font-medium mb-3">
                    {artwork.medium}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                    {artwork.description}
                  </p>
                  {artwork.price && (
                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-lg font-bold text-gray-900">{artwork.price}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0012 15c-2.34 0-4.489.901-6.091 2.376L7 16.5s.5-1 2.5-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada karya ditemukan</h3>
            <p className="text-gray-600 mb-4">Coba ubah kata kunci pencarian atau filter medium</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedMedium('');
                setCurrentPage(1);
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 7) {
                pageNumber = i + 1;
              } else if (currentPage <= 4) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 3) {
                pageNumber = totalPages - 6 + i;
              } else {
                pageNumber = currentPage - 3 + i;
              }

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === pageNumber
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Modal for artwork detail */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}>
          <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-80">
              <Image
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedArtwork.title}</h3>
              <p className="text-gray-600 mb-4 text-lg">oleh {selectedArtwork.artistName}</p>
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full font-medium">
                  {selectedArtwork.medium}
                </span>
                <span>{selectedArtwork.year}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{selectedArtwork.description}</p>
              {selectedArtwork.price && (
                <div className="text-2xl font-bold text-gray-900 mb-4">{selectedArtwork.price}</div>
              )}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Hubungi untuk Pembelian
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}