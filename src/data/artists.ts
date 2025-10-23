export interface Artist {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
  artworks: Artwork[];
  style: string;
  location: string;
  experience: string;
  whatsapp?: string;
}

export interface Artwork {
  id: string;
  title: string;
  image: string;
  year: number;
  medium: string;
  description: string;
  price?: string;
  created_at: string;
}

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "Faizal Syarif",
    bio: "Seniman lukis kontemporer yang menggabungkan budaya Bugis-Makassar dengan teknik modern. Karya-karyanya seringkali mengangkat tema kehidupan nelayan dan tradisi maritime Sulawesi Selatan.",
    whatsapp: "6285341847801",
    profileImage: "/faizal-syarif.jpg",
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
        description: "Lukisan yang menggambarkan kehidupan nelayan tradisional di pesisir Makassar dengan latar belakang sunset yang memukau.",
        created_at: "2024-08-15T10:30:00Z"
      },
      {
        id: "1b",
        title: "Perahu Pinisi Modern",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Akrilik di kanvas",
        description: "Interpretasi modern dari kapal tradisional Bugis-Makassar dalam nuansa kontemporer.",
        created_at: "2024-06-20T14:15:00Z"
      },
      {
        id: "1c",
        title: "Pasar Sentral Abstraks",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Mixed media",
        description: "Representasi abstrak dari kehidupan pasar tradisional Makassar dengan warna-warna vibrant.",
        created_at: "2024-10-01T09:45:00Z"
      }
    ]
  },
  {
    id: "2",
    name: "Denri Demma",
    bio: "Pelukis muda berbakat yang mengkhususkan diri dalam potret dan lukisan realisme. Terinspirasi oleh keberagaman budaya Nusantara dan keindahan alam Sulawesi.",
    profileImage: "/denri-demma.jpg",
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
        description: "Potret realistis seorang gadis dengan pakaian adat Bugis yang memukau.",
        created_at: "2024-09-10T16:20:00Z"
      },
      {
        id: "2b",
        title: "Nenek Penjual Coto",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Akrilik di kanvas",
        description: "Lukisan penuh emosi tentang kehidupan pedagang kaki lima di Makassar.",
        created_at: "2024-05-25T11:30:00Z"
      },
      {
        id: "2c",
        title: "Tari Pakarena",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Pastel di kertas",
        description: "Gerakan anggun penari tradisional Bugis dalam sapuan warna yang lembut.",
        created_at: "2024-07-18T13:45:00Z"
      }
    ]
  },
  {
    id: "3",
    name: "A.H Rimba",
    bio: "Seniman mural dan street art yang menggabungkan elemen tradisional dengan gaya urban contemporary. Karyanya banyak menghiasi dinding-dinding kota Makassar.",
    profileImage: "/a-h-rimba.jpg",
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
        description: "Mural besar yang memadukan motif kapal Pinisi dengan elemen graffiti modern.",
        created_at: "2024-10-10T08:15:00Z"
      },
      {
        id: "3b",
        title: "Makassar City Vibes",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
        year: 2022,
        medium: "Mixed media pada dinding",
        description: "Representasi dinamis kehidupan perkotaan Makassar dalam gaya street art.",
        created_at: "2024-04-12T15:30:00Z"
      },
      {
        id: "3c",
        title: "Budaya Pop Sulsel",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800&fit=crop",
        year: 2023,
        medium: "Digital art print",
        description: "Kolaborasi antara budaya pop modern dengan warisan budaya Sulawesi Selatan.",
        created_at: "2024-08-28T12:00:00Z"
      }
    ]
  }
];