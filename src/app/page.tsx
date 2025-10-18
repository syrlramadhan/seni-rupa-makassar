import HeroSection from '@/components/HeroSection';
import ArtistsGallery from '@/components/ArtistsGallery';
import PopularArtworks from '@/components/PopularArtworks';
import AllArtworks from '@/components/AllArtworks';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ArtistsGallery />
      {/* <PopularArtworks artist={null} /> */}
      <AllArtworks />
    </main>
  );
}
