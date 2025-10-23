'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/60 backdrop-blur-lg shadow-md border-b border-amber-100/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative h-10 w-40">
              <Image
                src={scrolled ? "/Tulisan + Logo Maron lanscape.png" : "/Tulisan + Logo Emas lanscape.png"}
                alt="Senirupa Makassar Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Social Media Icons - Desktop only */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/senirupamakassar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full transition-all duration-300 hover:bg-white/10"
              style={{
                color: scrolled ? '#c43438' : '#d2ae6d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
              }}
            >
              <svg className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full transition-all duration-300 hover:bg-white/10"
              style={{
                color: scrolled ? '#c43438' : '#d2ae6d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
              }}
            >
              <svg className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full transition-all duration-300 hover:bg-white/10"
              style={{
                color: scrolled ? '#c43438' : '#d2ae6d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
              }}
            >
              <svg className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full transition-all duration-300 hover:bg-white/10"
            style={{
              color: scrolled ? '#c43438' : '#d2ae6d'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
            }}
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 border-t border-gray-200/20">
            <div className="flex justify-center space-x-6">
              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full transition-all duration-300 hover:bg-white/10"
                style={{
                  color: scrolled ? '#c43438' : '#d2ae6d'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
                }}
              >
                <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full transition-all duration-300 hover:bg-white/10"
                style={{
                  color: scrolled ? '#c43438' : '#d2ae6d'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
                }}
              >
                <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full transition-all duration-300 hover:bg-white/10"
                style={{
                  color: scrolled ? '#c43438' : '#d2ae6d'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? '#a02a2e' : '#c49c5a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#c43438' : '#d2ae6d';
                }}
              >
                <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div 
        className={`h-0.5 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(to right, #d2ae6d, #c43438)`
        }}
      ></div>
    </header>
  );
}