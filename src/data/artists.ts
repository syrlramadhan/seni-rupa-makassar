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
    bio: "-",
    whatsapp: "",
    profileImage: "/faizal-syarif.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "15 tahun",
    artworks: [
      {
        id: "1a",
        title: "Fontain Now",
        image: "/fontain-now.jpg",
        year: 2025,
        medium: "Akrilik diatas kanvas",
        description: "Fontain Now sebuah refleksi kritis terhadap Seni Rupa Kontemporer Makassar . Menafsir ulang makna karya Fontain(Marcel Duchamp) pada peristiwa seni 1917 Urinoir sebagai penanda lahirnya seni konseptual yang mempertanyakan apa itu seni.",
        created_at: "2025-10-26T22:18:00Z"
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
    artworks: []
  }, 
  {
    id: "3",
    name: "A.H Rimba",
    bio: "Seniman mural dan street art yang menggabungkan elemen tradisional dengan gaya urban contemporary. Karyanya banyak menghiasi dinding-dinding kota Makassar.",
    profileImage: "/rimba.jpg",
    style: "Urban Contemporary",
    location: "Makassar, Sulawesi Selatan",
    experience: "",
    artworks: []
  },
  {
    id: "4",
    name: "Ahmad Anzul",
    bio: "-",
    profileImage: "/ibu-aku-rindu.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "4a",
        title: "Ibu, Aku Rindu",
        image: "/ibu-aku-rindu.jpg",
        year: 2025,
        medium: "-",
        description: "“Ibu, Aku Rindu” pada Pallu Ce'la, Paria Kambu dan Posso. Pada dekapan, belaian dan nesehat.\nIbu, Aku rindu....\nPadamu....\nAl-Fatihah.... ",
        created_at: "2025-10-26T22:29:00Z"
      }
    ]
  },
  {
    id: "5",
    name: "Alif Aflah Yafie",
    bio: "Lahir di Kabupaten Yapen (Serui), 22 Mei 1997, ia sejak kanak-kanak telah menggemari aktivitas menggambar. Kegemarannya itu masih digandengnya hingga melanjutkan studi di pendidikan di Fakultas Seni dan Desain Universitas Negeri Makassar (Kampus Parang Tambung).\n\nSejak tahun 2020, mulai aktif terlibat di dalam praktik kekaryaan seni rupa di Komunitas ARTifact Project. Sejak tahun 2022, kerja berkeseniannya tidak terlepas pada upaya pengulasan dan pengarsipan seni rupa Makassar.",
    profileImage: "/alif-aflah-yafie.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "5a",
        title: "Layar Biru",
        image: "/layar-biru.jpg",
        year: 2020,
        medium: "Akrilik pada Kanvas",
        description: "Karya ini dibuat pada tahun 2020, ketika pembatasan sosial berskala besar sedang diberlakukan atas terjadinya pandemi. Karya ini merupakan respons terhadap batasan-batasan sosial atas sesama manusia yang terasa semakin melebar - begitu juga dengan lingkungannya berada - setelah semua orang bersedia maupun dipaksa menutup dirinya dari dunia luar, dan  hanya dibekali informasi yang disediakan ruang-ruang maya.\n\nKatanya, diri kita adalah akumulasi dari apa yang telah kita konsumsi. Dimasa isolasi, ruang maya menjadi wahana eksplorasi berbagai hal dengan mudah - komunikasi dan konsumsi gaya baru yang melenakan - namun, saat kesempatan bersentuhan langsung semakin terbatasi, keinginan untuk saling mengerti dan memahami semakin diselimuti gelap. Keterasingan dan sepi menjadi lebih akrab pada diri kita, bahkan di dalam keramaian pun. Terbatasnya ruang gerak fisik mengantar kita pada eksplorasi wahana digital tak berkesudahan.\n\nSeolah menjadi kebiasaan atau pelampiasan, kita terus-terusan menjadi penonton dari gelombang pencitraan yang begitu cepat, hingga lupa bila esok sudah hari yang lain, dan detik ini kita masih menjadi seperti kemarin. Kesadaran pada situasi ini, digambarkan pada diri yang terpaku pada layar genggamnya. Di antara rasa takut dan curiga pada ketidaktahuan, ia seumpama laron yang berserah pada arah hidup dari sinar lampu. Melayang, berputar dan menikmati pengulangan sambil berdalih menemukan kebaruan.Pada layar biru yang masih digenggam, kita masih nyaman berdiam diri sambil terpesona pada kemahaluasan dan daya kejutnya. Boleh jadi di sanalah letak benar berada, boleh juga kebenarannya yang justru telah membentuk kita saat ini.",
        created_at: "2025-10-26T23:00:00Z"
      }
    ]
  },
  {
    id: "6",
    name: "All",
    bio: "-",
    profileImage: "/all.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "6a",
        title: "Kekuatan (Kuda)",
        image: "/kekuatan-kuda.jpg",
        year: 2025,
        medium: "Acrylic diatas Kayu",
        description: "Dalam Al-Quran Surah Al-Hidayat, Kuda dijelaskan memiliki peran penting dalam peperangan karena mampu berlari kencang. Kuda juga menjadi salah satu bentuk manfaat dan keajaiban-Nya bagi manusia. Dari kuda kita belajar bagaimana kebesaran Allah SWT menciptakan mahluk dengan kekuatan fisiknya sehingga berguna bagi manusia dalam kehidupan sehari-hari.",
        created_at: "2025-10-26T23:05:00Z"
      }
    ]
  },
  {
    id: "7",
    name: "Asman Djamin",
    bio: "Asman Djasmin, lahir di Makassar pada tanggal 01 Agustus 1967, mulai belajar melukis tahun 1978 di Fort Rotterdam, sempat kuliah jurusan seni murni di Univesitas Negeri Makassar, Alumni Universitas Hasanuddin jurusan Ilmu Komunikasi dan juga menyelesaikan studinya di Universitas yang sama dengan jurusan Perpustakaan dan Informasi, serta alumni PGSD Universitas Negeri Makassar.",
    profileImage: "/asman-djamin.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "20+ tahun",
    artworks: [
      {
        id: "7a",
        title: "Balonku Ada Lima",
        image: "/balonku-ada-lima.jpg",
        year: 2025,
        medium: "Acrylic diatas Kanvas",
        description: "Diantara lima balon, hanya satu yang berhasil mengangkasa, ini adalah metafora tentang harapan dan ketahanan. Kegagalan adalah bagian dari proses, tetapi selalu ada peluang untuk bangkit dan mencapai impian.",
        created_at: "2025-10-26T23:18:00Z"
      }
    ]
  },
  {
    id: "8",
    name: "Abd. Aziz Ahmad",
    bio: "Abd. Azis Ahmad lahir di Paria, Kabupaten Wajo, Sulawesi Selatan, pada 31 Desember 1955. Saat ini, ia adalah seorang dosen di Program Studi Pendidikan Seni Rupa, Fakultas Seni dan Desain Universitas Makassar (UNM). Disana, ia mengajar berbagai mata kuliah, termasuk Seni Lukis, Fotografi, Videografi, Kaligrafi, PengantarPendidikan, Profesi Kependidikan, Psikologi Pendidikan dan Filsafat Ilmu. Sebelum di UNM, ia mengajar kaligrafi dan menggambar di sejumlah institusi, seperti PGA 4 Tahun As’adiyah Atapange, PGA 6 Tahun As’adiyah Pusat Sengkang, Madrasah Aliyah “Annahdlah” Makassar, dan Fakultas Adab UIN Alauddin Makassar. Ia juga sempat menjadi pengajar tamu untuk mata kuliah Tata Warna di Lembaga Kaligrafi Al-Quran (Lemka) Jakarta dari tahun 1993 hingga 1996.",
    profileImage: "/aziz-ahmad.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    whatsapp: "6282196439000",
    experience: "20+ tahun",
    artworks: [
      {
        id: "8a",
        title: "Ayatul Kursi",
        image: "/ayatul-kursi.jpg",
        year: 2025,
        medium: "Acrylic diatas Kanvas",
        description: "-",
        created_at: "2025-10-26T23:28:00Z"
      }
    ]
  },
  {
    id: "9",
    name: "Benny Subiantoro",
    bio: "Benny Subiantoro, lahir di Situbondo (Jatim) 25 Mei 1952.\nAlumni pendidikan terakhir PPs. ISI Yogyakarta (2004).\nPekerjaan prnabakti Dosen FSD UNM Makassar (1979 - 2019).\nAlamat Minasa Upa Blok L No,9 Makassar.",
    profileImage: "/masalembo.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "20+ tahun",
    artworks: [
      {
        id: "9a",
        title: "Masalembo",
        image: "/masalembo.jpg",
        year: 2025,
        medium: "Acrylic diatas Kanvas",
        description: "Purnama membias cahaya di permukaan geliat ombak Selat Makassar, Masalembo, irama garis, blok, barik dan warna menghiasi kearifan local keragaman  Budaya Bugis Makassar Sulawesi Selatan.",
        created_at: "2025-10-26T23:36:00Z"
      }
    ]
  },
  {
    id: "10",
    name: "Burhan Malewa",
    bio: "Lahir 21 April 1956.\nPendidikan Alumni IKIP Makassar.",
    profileImage: "/burhan-malewa.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "20+ tahun",
    artworks: [
      {
        id: "10a",
        title: "Bohong",
        image: "/bohong.jpg",
        year: 2025,
        medium: "Cat minyak diatas Kanvas",
        description: "-",
        created_at: "2025-10-27T08:42:00Z"
      }
    ]
  },
  {
    id: "11",
    name: "Djamaluddin Tawil",
    bio: "Djamaluddin Tawil (1953-2011)\nDjamaluddin Tawil adalah salah satu perupa realis asal Makassar yang perjalanan kreatifnya menandai peta seni rupa Sulawesi Selatan sejak dekade 1970-an.\n\nLahir di Sengkang, 18 November 1953, dan wafat di Makassar, 1 Februari 2011, Djamaluddin dikenal sebagai seniman yang menjadikan hidupnya sebagai persembahan bagi seni — penuh keberanian, kejujuran, dan dedikasi.\n\nSejak muda, ia menunjukkan bakat dan ketertarikan kuat pada seni, namun pilihan itu sempat tidak mendapat restu keluarga. Seusai menamatkan SMA di Makassar, Djamaluddin mengambil keputusan besar: meninggalkan rumah dan tiket bebas tes kuliah kedokteran untuk mengejar panggilan hatinya di dunia seni. Ia berangkat ke Jakarta dengan tekad bulat, tanpa dukungan, hanya berbekal keyakinan bahwa seni adalah jalan hidup yang tak bisa ditinggalkan.\n\nDi Jakarta, ia menempuh pendidikan di Institut Kesenian Jakarta (IKJ) dan aktif di berbagai kegiatan seni rupa, teater, dan menulis. Dunia teater dan sastra memperkaya sensibilitasnya terhadap emosi, narasi, dan manusia — sesuatu yang kelak tampak kuat dalam karya-karyanya yang penuh kehangatan dan refleksi.\n\nSekembalinya ke Makassar, ia menyelesaikan studi di Universitas Negeri Makassar pada tahun 1984, lalu aktif sebagai perupa, penatar, dan pengajar seni rupa  hingga akhir hayatnya. Djamaluddin berperan penting dalam menumbuhkan gairah dan apresiasi seni di kalangan seniman muda Sulawesi Selatan.\n\nKarya-karya awalnya berakar pada aliran realisme, dengan fokus pada keindahan budaya, lanskap alam, dan kehidupan rakyat — tema-tema yang ia lukis dengan emosi yang jujur dan lembut. Namun sejak 2008, arah karyanya  beralih menuju seni lukis kaligrafi Islami, menandai fase spiritual yang lebih dalam dalam perjalanan seninya. Melalui kaligrafi, ia menemukan bahasa baru yang menggabungkan bentuk, warna, dan makna sebagai wujud perenungan spiritual.\n\nSelama hidupnya, Djamaluddin aktif berpameran di berbagai ruang seni di Sulawesi Selatan dan Pulau Jawa. Karya-karyanya telah lama menjadi bagian penting dari  ruang seni Taman Budaya Makassar (kini Gedung Mulo Makassar), tempat yang masih memajang karyanya bahkan belasan tahun setelah kepergiannya. Pada tahun 2025, karyanya kembali dipamerkan di Museum Rotterdam Makassar, sebagai bentuk penghargaan atas perjalanan panjang dan dedikasinya terhadap dunia seni rupa - serta sebagai pengingat bahwa karya sejati tak pernah benar-benar berakhir.",
    profileImage: "/akkarena.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "20+ tahun",
    artworks: [
      {
        id: "11a",
        title: "Akkarena",
        image: "/akkarena.jpg",
        year: 1996,
        medium: "Cat minyak diatas Kanvas",
        description: "Karya akkarena merupakan representasi figurative yang merekam salah satu momen Kebudayaan Bugis-Makassar melalui sosok penari muda. Lukisan ini menampilkan seorang murid seni Djamaluddin Tawil sebagai subjek utama, menghadirkan hubungan personal antara seniman dan objek yang menjadi bagian dari pembelajarannya.\n\nSebagai pelukis yang berakar pada tradisi realism, Djamaluddin menampilkan figure dengan penguasaan proporsi dan cahaya yang kuat, sekaligus mengintegrasikan unsur dramatic yang mencerminkan latar belakangnya di dunia teater. Melalui komposisi frontal dan ekspresi gerak yang tenang namun berisi, karya ini memperlihatkan keseimbangan antara studi anatomi dan penekanan pada karakter budaya.\n\nAkkarena menjadi salah satu contohbagaimana Djamaluddin menggunakan bahasa realisme untuk mendokumentasikan nilai-nilai budaya local tanpa kehilangan  kedalaman emosional. Karya ini juga menandai periode penting dalam perjalanan artistiknya  pada dekade 1990-an, saat ia secara konsisten mengingat tema budaya dan manusia sebagai subjek utama dalam praktik seninya.",
        created_at: "2025-10-27T08:52:00Z"
      }
    ]
  },
  {
    id: "12",
    name: "Erik DM",
    bio: "-",
    profileImage: "/erik-dm.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "12a",
        title: "Pasang dalam Tenun",
        image: "/pasang-dalam-tenun.jpg",
        year: 2025,
        medium: "-",
        description: "Karya ini menggambarkan Sarung Kajang sebagai ruang spiritual dan simbol  kehidupan masyarakat adat Kajang. Melalui elemen-elemen visual simbolis, karya ini menarasikan filosofi kesederhanaan (kamase-masea), kedekatan dengan alam, penghormatan kepada leluhur dan pesan leluhur (pasang rikajang).",
        created_at: "2025-10-27T09:35:00Z"
      }
    ]
  },
  {
    id: "13",
    name: "Fitrawansyah",
    bio: "Lahir 23 Januari 2000 di wilayah dataran tinggi di Dusun Taipajawa,Desa Bontolempangan Kabupaten Gowa.",
    profileImage: "/fitrawansyah.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "13a",
        title: "Layak di Manusiakan",
        image: "/layak-di-manusiakan.jpg",
        year: 2025,
        medium: "Cat minyak diatas kanvas",
        description: "Karya ini saya buat dengan bentuk lukisan dengan objek Perempuan yang mata tertutup dengan kain merah yang melambangkan sebuah kekerasan, juga menambahkan simbol burung gagak yang menandakan kematian, karna sekarang banyaknya isu yang beredar dalam media terkait pelecehan seksual atau Pemerkosaan, dan segala bentuk pemaksaan hubungan seksual yang dapat mengakibatkan kerugian fisik, trauma emosional dan psikologis terhadap korban maka dari itu saya membuat karya ini untuk menjadikan tuntutan bagi mayarakat dan penegak hukum yang ada di Indonesia.",
        created_at: "2025-10-27T09:40:00Z"
      }
    ]
  },
  {
    id: "14",
    name: "Guf Tawakkal",
    bio: "-",
    profileImage: "/benang-takdir.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "14a",
        title: "Benang Takdir",
        image: "/benang-takdir.jpg",
        year: 2023,
        medium: "Cat minyak diatas kanvas",
        description: "Perjuangan  manusia melawan kebutaan spiritual, penderitaan dan pencarian makna dalamkekacauan dunia. Mereka adalah jiwa-jiwa yang berjuang diantara penglihatan dan kebutaan, keyakinan dan keputusasaan.\n\nKain merah symbol benang takdir yang mengikatmereka dalam satu garis nasib melambangkan darah, semangat, sekaligus penderitaan yang diwariskan dari satu generasi ke generasi berikutnya.",
        created_at: "2025-10-27T09:47:00Z"
      }
    ]
  },
  {
    id: "15",
    name: "Haroen PM",
    bio: "-",
    profileImage: "/ragam-hias-nya.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "15a",
        title: "Ragam Hias Nya",
        image: "/ragam-hias-nya.jpg",
        year: 2023,
        medium: "Acrylic Mix media di kanvas",
        description: "Suatu Perwakilan Zat sebagai Simbol yang hamper tidak hadir secara Visual namun ada getaran Bathin yang begitu kuat menggoda.",
        created_at: "2025-10-27T10:01:00Z"
      }
    ]
  },
  {
    id: "16",
    name: "Irwan Nuhung",
    bio: "Lahir di makassar 6 maret 1979.\nPernah menempuh pendidikan di STISI Bandung (Sekolah Tinggi Seni Rupa dan Disain Indonesia) tamat tahun 2006.\nJurusan Disain Produk dan kini kampusnya bernama STISI Telkom.\nPernah mengajar sebagai dosen di Institut Kesenian Makassar tahun 2009 - 2010 di program studi Disain Komunikasi Visual dan menjabat sebagai Ketua Prodi.",
    profileImage: "/irwan-nuhung.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "15 tahun",
    artworks: [
      {
        id: "16a",
        title: "Siluman Parpol",
        image: "/siluman-parpol.jpg",
        year: 2023,
        medium: "Cat minyak diatas kanvas",
        description: "Kaum Rendahan\nJiwamu dan Jiwaku Sama\nPerasaan Yang Kau Milikipun Sama Denganku\nAkan Tetapi Hati dan Matamu\nBerbeda Denganku.\nKerendahanku dan Kerendahanmu Bagaikan Tanah dan Langit\nTernyata......\nKamu Hina di Mata Sesamamu.",
        created_at: "2025-10-27T10:11:00Z"
      }
    ]
  },
  {
    id: "17",
    name: "Ishakim",
    bio: "Ishakim lahir di Ujung Pandang, Belajar melukis serta turut mengisi acara bina gambar di TVRI Ujung Pandang binaan Drs Bachtiar Hafid di Sanggar Benteng  Ujung Pandang sejak 1976.\nPernah kuliah Seni Rupa Murni di IKJ-LPKJ  (angkatan 83).\n\nAktivitas 1983 hingga sekarang.\nSelain melukis, pameran, mengerjakan patung (monumen perjuangan di Bulukumba, Bantaeng, Polmas), pentas teater, film, seni pertunjukan performing art, tari, menulis puisi, cerpen, lomba baca puisi di Taman Bahari Ujung Pandang 1978, lomba puitikalisasi terjemahan Al-Qur'an REMAJA masjid di IMMIM se-Ujung Pandang 1979,  menulis naskah pertunjukan juga aktif di forum forum dialog seni budaya, seminar, workshop, kegiatan upacara tradisi, temu budaya, juri lomba di berbagai cabang seni, pemateri di sanggar sanggar seni dan UKM SENI, bedah buku sastra dan novel.\n\nPengurus, pembina dan anggota lembaga organisasi kesenian; DKM, DKSS, BKKNI, ISRI SELEBASSI, Sanggar seni Tompo Biring bersama alm.  Muin Dg Mile, EL's Tari  bersama DR Nurlina Syahrir, Teater Matahari bersama DR Baetal Muqoddas, Forum Sastra Indonesia Timur (FOSAIT), Teater Kita Makassar TKM) bersama DR. Asia Ramli Prapanca, Laboratorium Tari Nusantara (LATAR NUSA) bersama DR. Halilintar Latif. Bergabung  bersama organisasi Kerukunan Keluarga Keraton dan Lembaga Adat di Sulawesi Selatan Sulawesi Tenggara.\n\nPernah mengajar Privat, mengajar Ekstrakurikuler di berbagai sekolah TK, SD, SMP, SMA /IAIN Alauddin, Perguruan Islam Athirah, Perguruan Nasional (bersama pelukis senior  alm.Ali Walangadi) di Makassar sejak 1993, Pernah mengajar mata kuliah Skenografi Prodi Teater Semester IV di Institut Seni Budaya Indonesia (ISBI) Makassar Sebagai Penata Artistik diberbagai pertunjukan Tari, Teater, Musik, Opening ceremony, melakukan eksplorasi Seni dan Pertunjukan bersama Dr. Halilintar dkk di Benteng Somba Opu sejak 1989.",
    profileImage: "/ishakim.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "20+ tahun",
    artworks: []
  },
  {
    id: "18",
    name: "Iswan Bintang",
    bio: "Iswan Bintang (lahir di Ujung Pandang, 27 Agustus 1994) adalah seniman visual asal Makassar yang menempuh pendidikan di Program Studi Pendidikan Seni Rupa Universitas Muhammadiyah Makassar dan Magister Seni Penciptaan di ISI Yogyakarta.\nIa mengembangkan praktik seni rupa kontemporer yang berakar pada tradisi dan budaya lokal, dengan fokus pada eksplorasi simbolik Badik sebagai representasi identitas, memori kolektif, dan dialog antara tradisi serta modernitas.\nSejak aktif berkarya pada 2013, Iswan telah berpameran di berbagai ajang seni, meraih sejumlah penghargaan seni lukis tingkat lokal dan nasional, serta menjadi juri dan narasumber dalam kegiatan seni dan kebudayaan.\nSaat ini, ia menjabat sebagai Sekretaris Jenderal Lembaga Seni Adat Budaya Sulawesi (LSABS) Parewa Bessi, berperan dalam pelestarian dan pengembangan kebudayaan Sulawesi melalui riset, pameran, dan advokasi budaya.\n\nPengalaman Pameran\n2015\n1. Karena Warna Bisa Bicara”, Mini Hall, Unismuh, Makassar\n2. Monochrome”, Perpustakaan Daerah Sul-Sel, Makassar\n2016\n1. These Days”, Benteng Rotterdam, Makassar\n2017\n1. Retrospeksi”, Unismuh, Makassar\n2018\n1. Fine Art, F8”, Galeri Pantai Losari, Makassar\n2019\n1. Dactyl Exhibition”, Bikin- Bikin Nipah Mall, Makassar\n2. Art Collabs”, Bikin- Bikin Nipah Mall, Makassar\n2020\n1. Behind The Beauty”, Rumah Lukis , Makassar\n2. Ini Bukan Festiva”, Etika Studio, Makassar\n3. Nature and Culture”, Hotel Canggu, Bali\n2021\n1. Move Exhibition”, Kaldi House, Gowa\n2. Rupa Pia” Ruang Budaya Bura' Pia, Sulawesi Barat\n3. Behind The Beauty #2”, Rumah Lukis, Makassar\n4. Revolusi Esok Pagi “Persimpangan”, Mimesis Studio, Makassar\n2022\n1. Refresh “Enam Perupa”, Etika Studio, Makassar\n2. Revolusi Esok Pagi “Republic”, Rumata Art Space, Makassar\n3. HUT Majapahit 729”, Universitas Udayana, Bali\n2023\n1. Sulsel Expo DIY “Ekspresi Laku Rannu”, JNM Block, Yogyakarta\n2. Revolusi Esok Pagi “Marginados”, Atap Hijau, Makassar\n2024\n1. Gelar Budaya KBRI”, Tokyo, Jepang\n2. Roedjakan”, Bale Black Box, Yogyakarta\n3. Transformasiologi”, Sulawesi Barat\n4. Revolusi Esok Pagi “Anomali”, Artmosphere Studio, Makassar\n5. Roedjakan #2”, Galeri Prof. But Muhtar, Yogyakarta\n6. Coretan Dalam Saku”, Cafe Tuwuh, Yogyakarta\n2025\n1. Dekonstruksi Makna Siri', Galeri Prof. But Muchtar PPS ISI, Yogyakarta\n2. Revolusi Esok pagi “Post-Truth”, Institut Kesenian Makassar, Makassar\n3. Pameran Seni Rupa Antar Bangsa, Unismuh Makassar\n4. Pameran Minimize Ext.3, Top Score Labs, Makassar.",
    profileImage: "/iswan-bintang.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "10 tahun",
    artworks: [
      {
        id: "18a",
        title: "Dua Ujung Satu Pusat",
        image: "/dua-ujung-satu-pusat.jpg",
        year: 2025,
        medium: "Akrilik di Atas Kanvas",
        description: "Dua Ujung, Satu Pusat merupakan representasi visual yang mengeksplorasi konflik simbolik antara badik Makassar dan badik Bugis. Kedua bilah badik digambarkan salingberhadapan, menciptakan ketegangan visual yang merefleksikan pertikaian laten antara dua etnis tersebut. Dalam karya ini, badik tidak hanya dipahami sebagai senjata fisik, melainkan symbol identitas, harga diri, dan ekspresi kultural yang berakar pada nilai Siri'.\n\nDi antara kedua badik, divisualisasikan ari-ari bayi yang terhubung oleh dua tali pusar, masing-masing menembus ke dalam tubuh badik. Elemen ini menjadi metafora utama tentang keterhubungan asal-usul budaya Bugis dan Makassar bahwa di balik perbedaan dan konflik, keduanya memiliki sumber kehidupan dan sejarah yang sama. Ari-ari melambangkan pusat kehidupan, sementara tali pusar menandai hubungan biologis dan spiritual yang tak terputus.\n\nSecara konseptual, karya ini merupakan bentuk dekonstruksi terhadap makna Siri' yang selama ini cenderung dimaknai secara rigid dan hierarkis, bahkan sering menjustifikasi kekerasan atas nama kehormatan. Melalui karya ini, Siri' ditafsir ulang sebagai nilai relasional dan etis yang menghubungkan antar individu dan antar kultur melalui kesadaran akan kesamaan asal. Pendekatan ini membuka ruang bagi reinterpretasi badik bukan lagi sebagai symbol ancaman, melainkan sebagai medium refleksi dan pemulihan memori budaya.\n\nDengan demikian, Dua Ujung, Satu Pusat tidak hanya merepresentasikan pertentangan dua budaya, tetapi juga menjadi upaya reflektif untuk mengingatkan tentang akar yang sama dan kemungkinan perdamaian melalui pemaknaan baru terhadap nilai Siri'.",
        created_at: "2025-10-27T10:34:00Z"
      }
    ]
  },
  {
    id: "19",
    name: "Jenry Pasassan",
    bio: "-",
    profileImage: "/benih-semesta.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "10 tahun",
    artworks: [
      {
        id: "19a",
        title: "Benih Semesta",
        image: "/benih-semesta.jpg",
        year: 2025,
        medium: "Mix Media di Atas Kanvas",
        description: "-",
        created_at: "2025-10-27T10:43:00Z"
      }
    ]
  },
  {
    id: "20",
    name: "Komets",
    bio: "Komet adalah imigran dari mars.",
    profileImage: "/balerina.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "10 tahun",
    artworks: [
      {
        id: "20a",
        title: "Balerina",
        image: "/balerina.jpg",
        year: 2025,
        medium: "Ackrilik dan paint marker pada kanvas",
        description: "“Hidup lebih mirip BERGULAT dari pada MENARI karena kita harus tetap BERDIRI tegak menghadapi apapun yang terjadi “MEDITATIONS – Marcus Aurelius.\n\nUngkapan ini mencerminkan pandangan Marcus yang realitis dan kuat mengenai kehidupan. Baginya, hidupbukanlah serangkaian gerakan anggun dan penuh dan penuh harmoni seperti tarian, melainkan pertarungan sengit yang membutuhkan kekuatan mental, ketahanan dan ketegasan dalam menghadapi dan menjalani setiap tantangan dalam hidup.\n\nKarya ini dimaksudkan sebagai metafora, mengajak audens untuk sejenak kembali memikirkan diri kita sendiri dengan tetap menikmati hidup bahagia di antara masalah kehidupan yang ada.",
        created_at: "2025-10-27T10:55:00Z"
      }
    ]
  },
  {
    id: "21",
    name: "Muhammad Fadly Saleh",
    bio: "Lulus dari Universitas Hasanuddin pada tahun 2010 di Program Studi Arsitektur, ia aktif berkarier sebagai arsitek sekaligus menekuni dunia seni rupa sejak bergabung dengan Komunitas Akkareso Art pada tahun 2015. Keterlibatannya dalam komunitas seni terus berkembang dengan bergabung di Artifact Project pada tahun 2020 dan Indonesia Sketcher Makassar pada tahun 2023. Sejak 2017, ia telah berpartisipasi dalam berbagai pameran seni di Makassar dan sekitarnya, termasuk di Fort Rotterdam, Trans Studio Mall, Rumah Jabatan Gubernur Sulawesi Selatan, dan berbagai ruang seni seperti Rumata Art Space serta Galeri Mimesis. Karya-karyanya kerap tampil dalam pameran bertema sosial dan budaya seperti Revolusi Esok Pagi, Behind The Beauty, dan Masagena TraditionArt, baik secara nasional maupun internasional, termasuk pameran virtual lintas negara. Hingga tahun 2025, ia terus konsisten memamerkan karya dalam berbagai ajang, dengan tema-tema yang merefleksikan identitas lokal, perjalanan artistik, serta nilai-nilai kemanusiaan.",
    profileImage: "/muhammad-fadly-saleh.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    whatsapp: "6285242874255",
    experience: "5 tahun",
    artworks: [
      {
        id: "21a",
        title: "Mencabut Kehidupan",
        image: "/mencabut-kehidupan.jpg",
        year: 2023,
        medium: "Akrilik di atas kanvas",
        description: "Bagi para penguasa dan pengusaha, orang-orang kecil hanya seperti rumput liar di pinggir jalan yang dapat mereka cabut dengan mudah.\n\nLukisan ini tentang kehidupan manusia, lingkungan, kebudayaan dan segala hal yang dapat dihancurkan dirusak oleh penguasa dan pengusaha dengan mudahnya tanpa mempedulikan kerusakan yang terjadi atau berapa banyak orang yang menderita.\n\nTentang reklamasi yang merusak alam dan sumber pendapatan masyarakat, tentang hutan hutan adat yang ditebang dan dijadikan perkebunan sawit, pertambangan tanpa memperdulikan kerusakan lingkungan, tentang bangunan-bangunan bersejarah peninggalan kebudayaan yang dihancurkan karena tak sesuai lagi dengan perkembangan jaman, atau tentang penggusuran tanpa solusi pasti yang mengatas namakan pembangunan.\n\nKarena mereka mampu dan mau atau hanya karena hal-hal tersebut merusak pemandangan, para penguasa dan pengusaha dapat menghancurkan apapun yang mereka inginkan. Yang entah mereka sadari atau tidak, mereka telah mencabut kehidupan saat ini dan penghidupan untuk masa depan.",
        created_at: "2025-10-27T11:03:00Z"
      }
    ]
  },
  {
    id: "22",
    name: "Muhammad Suyudi",
    bio: "-",
    profileImage: "/belantara-rumah.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "5 tahun",
    artworks: [
      {
        id: "22a",
        title: "Belantara Rumah",
        image: "/belantara-rumah.jpg",
        year: 2023,
        medium: "Akrilik di atas kanvas",
        description: "-",
        created_at: "2025-10-27T11:09:00Z"
      }
    ]
  },
  {
    id: "23",
    name: "Rasul",
    bio: "Rasul, S.Pd., M.Sn. (lahir di P. Balang Lompo, 31 Desember 1987) adalah seorang seniman dan pendidik asal Makassar yang berdomisili di Jl. Tamangapa Raya No. 104B, Makassar. Ia menyelesaikan pendidikan dasar hingga menengah di P. Balang Lompo dan Liukang Tupabbiring, kemudian meraih gelar Sarjana Pendidikan dari Universitas Negeri Makassar pada tahun 2013 dan Magister Seni dari Institut Seni Indonesia Yogyakarta pada tahun 2019. Sejak masa kuliah, Rasul aktif dalam berbagai kegiatan seni, baik sebagai peserta pameran maupun pembicara seminar. Ia telah berpameran di berbagai ajang seni lokal dan nasional, di antaranya Makassar Biennale, Revolusi Esok Pagi, Art Brevis, dan Move Art, serta pernah menjadi nominasi kategori desain mural tiga dimensi di Galeri Nasional. Selain pameran, ia juga aktif mengikuti berbagai seminar seni dan budaya, seperti Festival Kesenian Indonesia, ICAPAS, Biennale Forum, dan seminar nasional di Universitas Gadjah Mada, ISI Yogyakarta, serta berbagai perguruan tinggi lainnya. Melalui kiprahnya di dunia seni rupa, Rasul terus berkontribusi dalam pengembangan wacana dan praktik seni kontemporer di Indonesia.",
    profileImage: "/rasul.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    whatsapp: "6285397263366",
    experience: "5 tahun",
    artworks: [
      {
        id: "23a",
        title: "Berdoa",
        image: "/berdoa.jpg",
        year: 2018,
        medium: "Cat minyak diatas kanvas",
        description: "Setiap kata adalah doa, dan sejatinya doa adalah sebuah pengharapan. Konsep pemikiran semacam inilah, yang penulis yakini dan pegang untuk menemukan sebuah makna hidup terkait doa dan pengharapan. Pengharapan adalah sebuah keyakinan untuk memberikan semangat hidup dalam menjemput hari depan dengan sebuah keberhasilan. Dalam konteks ini, keberhaslian penulis maknai sebagai proses yang selalu terkait dengan sebuah pengharapan dan doa. Pengharapan dan doa keberhasilan saat melaut bagi penulis adalah sebuah keberhasilan yang sangat besar dalam hidup. Keberhasilan dengan tangkapan yang melimpah ruah tentu merupakan sebuah kebahagiaan.\n\nPemikiran semacam itu, menjadi ingatan yang begitu membekas dalam alam pikiran penulis, tatkala bagaimana seorang ayah melangkahkan kaki menuju rumah dengan hasil tangkapan yang melimpah ruah. Kebahagiaan dan keberhasilan ayah dalam mencari nafkah, penulis yakini sebagai sebuah pengharapan  dan realisasi atas setiap bait doa yang dilantunkan anggota keluarga yang lain. Bagi penulis aktivitas dan ritual berdoa adalah sebuah aktivitas yang menghubungkan semangat kehidupan dengan realitas keberhasilan yang diinginkan. Pemaknaan atas doa, penulis maknai juga sebagai sebuah jalan untuk membantu sang ayah dalam membangun sebuah pengharapan yang besar atas keselamatannya. Bagi penulis keselamatan adalah sebuah anugerah besar yang tak ternilai dan merupakan pengharapan besar bagi setiap insan manusia.",
        created_at: "2025-10-27T11:14:00Z"
      }
    ]
  },
  {
    id: "24",
    name: "Zam Kamil",
    bio: "Zam Kamil (lahir di Soppeng, 5 Agustus 1969) adalah seorang seniman asal Makassar yang menempuh pendidikan Sarjana Seni Rupa di Institut Seni Indonesia Yogyakarta, lulus pada tahun 1990. Ia dikenal aktif dalam dunia seni rupa sejak lama dan telah menggelar sejumlah pameran tunggal, antara lain Terapung di Leang-Leang Art Studio Yogyakarta (1998), Dance of Life di Arya Seni Singapura (2005), dan Aphostrope di CG Artspace Plaza Indonesia Jakarta (2008). Karyanya juga tampil dalam berbagai pameran internasional bergengsi seperti Behind The Myth di Athena, Yunani (2013), Indonesian Art Today di Verona, Italia dan Köln, Jerman, serta partisipasi dalam Singapore Art Fair dan Singapore Auction. Pada tahun 2017, ia menjadi peserta International Artcamp di Kota Tua Khajuraho, India. Kini, Zam Kamil aktif berkarya di Makassar dan terlibat dalam komunitas ARTifact Project, yang berfokus pada forum diskusi, riset, dan penyelenggaraan pameran seni berkala seperti Behind The Beauty dan Revolusi Esok Pagi.",
    profileImage: "/zam-kamil.jpg",
    style: "-",
    location: "Makassar, Sulawesi Selatan",
    experience: "20+ tahun",
    artworks: [
      {
        id: "24a",
        title: "Viva Freedom",
        image: "/viva-freedom.jpg",
        year: 2025,
        medium: "Akrilik diatas kanvas",
        description: "Kemerdekaan  adalah hak setiap orang dan hak segala bangsa.",
        created_at: "2025-10-27T11:25:00Z"
      }
    ]
  },
];