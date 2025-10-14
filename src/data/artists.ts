export interface Artist {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
  artworks: Artwork[];
  style: string;
  location: string;
  experience: string;
}

export interface Artwork {
  id: string;
  title: string;
  image: string;
  year: number;
  medium: string;
  description: string;
  price?: string;
}

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "Andi Mappasalawang",
    bio: "Seniman lukis kontemporer yang menggabungkan budaya Bugis-Makassar dengan teknik modern. Karya-karyanya seringkali mengangkat tema kehidupan nelayan dan tradisi maritime Sulawesi Selatan.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    style: "Kontemporer Maritime",
    location: "Makassar, Sulawesi Selatan",
    experience: "15 tahun",
    artworks: [
      {
        id: "1a",
        title: "Nelayan di Pantai Losari",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Cat minyak di kanvas",
        description: "Lukisan yang menggambarkan kehidupan nelayan tradisional di pesisir Makassar dengan latar belakang sunset yang memukau."
      },
      {
        id: "1b",
        title: "Perahu Pinisi Modern",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Akrilik di kanvas",
        description: "Interpretasi modern dari kapal tradisional Bugis-Makassar dalam nuansa kontemporer."
      },
      {
        id: "1c",
        title: "Pasar Sentral Abstraks",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Mixed media",
        description: "Representasi abstrak dari kehidupan pasar tradisional Makassar dengan warna-warna vibrant."
      }
    ]
  },
  {
    id: "2",
    name: "Sitti Rahma Dewi",
    bio: "Pelukis muda berbakat yang mengkhususkan diri dalam potret dan lukisan realisme. Terinspirasi oleh keberagaman budaya Nusantara dan keindahan alam Sulawesi.",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    style: "Realisme Potret",
    location: "Makassar, Sulawesi Selatan",
    experience: "8 tahun",
    artworks: [
      {
        id: "2a",
        title: "Gadis Bugis",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Cat minyak di kanvas",
        description: "Potret realistis seorang gadis dengan pakaian adat Bugis yang memukau."
      },
      {
        id: "2b",
        title: "Nenek Penjual Coto",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Akrilik di kanvas",
        description: "Lukisan penuh emosi tentang kehidupan pedagang kaki lima di Makassar."
      },
      {
        id: "2c",
        title: "Tari Pakarena",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Pastel di kertas",
        description: "Gerakan anggun penari tradisional Bugis dalam sapuan warna yang lembut."
      }
    ]
  },
  {
    id: "3",
    name: "Muhammad Fajar Ramadhan",
    bio: "Seniman mural dan street art yang menggabungkan elemen tradisional dengan gaya urban contemporary. Karyanya banyak menghiasi dinding-dinding kota Makassar.",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    style: "Urban Contemporary",
    location: "Makassar, Sulawesi Selatan",
    experience: "12 tahun",
    artworks: [
      {
        id: "3a",
        title: "Urban Pinisi",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Spray paint dan akrilik",
        description: "Mural besar yang memadukan motif kapal Pinisi dengan elemen graffiti modern."
      },
      {
        id: "3b",
        title: "Makassar City Vibes",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Mixed media pada dinding",
        description: "Representasi dinamis kehidupan perkotaan Makassar dalam gaya street art."
      },
      {
        id: "3c",
        title: "Budaya Pop Sulsel",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Digital art print",
        description: "Kolaborasi antara budaya pop modern dengan warisan budaya Sulawesi Selatan."
      }
    ]
  },
  {
    id: "4",
    name: "Nurhayati Saleh",
    bio: "Maestro seni lukis tradisional yang telah berkarya selama puluhan tahun. Mengkhususkan diri pada teknik tradisional dengan tema alam dan spiritualitas.",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    style: "Tradisional Naturalis",
    location: "Makassar, Sulawesi Selatan",
    experience: "25 tahun",
    artworks: [
      {
        id: "4a",
        title: "Sunrise di Pantai Akkarena",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Watercolor di kertas",
        description: "Lukisan alam dengan teknik cat air yang menangkap keindahan fajar di pantai Makassar."
      },
      {
        id: "4b",
        title: "Hutan Bambu Mystis",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Cat minyak di kanvas",
        description: "Suasana mistis hutan bambu dengan permainan cahaya yang memukau."
      },
      {
        id: "4c",
        title: "Meditasi Senja",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Pastel dan charcoal",
        description: "Lukisan spiritual yang menggambarkan kedamaian dalam kontemplasi senja."
      }
    ]
  },
  {
    id: "5",
    name: "Irfan Pratama",
    bio: "Seniman digital dan ilustrator yang mengkhususkan diri dalam karya fantasi dan sci-fi dengan sentuhan budaya lokal. Menggabungkan teknologi digital dengan cerita rakyat Nusantara.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    style: "Digital Fantasy",
    location: "Makassar, Sulawesi Selatan",
    experience: "10 tahun",
    artworks: [
      {
        id: "5a",
        title: "Cyber Pinisi 2077",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Digital illustration",
        description: "Interpretasi futuristik kapal Pinisi dalam setting cyberpunk yang menawan."
      },
      {
        id: "5b",
        title: "La Galigo Chronicles",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Digital painting",
        description: "Visualisasi epik cerita La Galigo dengan gaya fantasi modern."
      },
      {
        id: "5c",
        title: "Raksasa Laut Sulawesi",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "3D digital art",
        description: "Kreatur mitologi laut Sulawesi dalam interpretasi 3D yang spektakuler."
      }
    ]
  },
  {
    id: "6",
    name: "Aminah Kasim",
    bio: "Seniman tekstil dan mixed media yang mengangkat kerajinan tradisional ke level seni kontemporer. Karyanya memadukan tenun tradisional dengan teknik lukis modern.",
    profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    style: "Mixed Media Tekstil",
    location: "Makassar, Sulawesi Selatan",
    experience: "18 tahun",
    artworks: [
      {
        id: "6a",
        title: "Tenun Memories",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Tenun dan cat akrilik",
        description: "Kolaborasi antara teknik tenun tradisional Bugis dengan lukisan kontemporer."
      },
      {
        id: "6b",
        title: "Sarung Modern Art",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Mixed media pada kain",
        description: "Transformasi sarung tradisional menjadi karya seni visual yang menawan."
      },
      {
        id: "6c",
        title: "Batik Fusion",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Batik dan collage",
        description: "Perpaduan teknik batik dengan elemen collage dalam komposisi yang harmonis."
      }
    ]
  }
];