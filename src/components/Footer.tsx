'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Seni Rupa Makassar. All rights reserved.
          </div>

          {/* Credits */}
          <div className="text-gray-500 text-xs mt-2 md:mt-0">
            Dibuat dengan ❤️ oleh hacklab
          </div>
        </div>
      </div>
    </footer>
  );
}