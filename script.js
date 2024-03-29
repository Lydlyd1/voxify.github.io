document.addEventListener("DOMContentLoaded", function () {
    const dictionary = {
        "hello": "halo",
    "world": "dunia",
    "apple": "apel",
    "orange": "jeruk",
    "cat": "kucing",
    "dog": "anjing",
    "computer": "komputer",
    "internet": "internet",
    "book": "buku",
    "school": "sekolah",
    "friend": "teman",
    "family": "keluarga",
    "happy": "bahagia",
    "sad": "sedih",
    "beautiful": "cantik",
    "strong": "kuat",
    "weekend": "akhir pekan",
    "music": "musik",
    "movie": "film",
    "rain": "hujan",
    "sun": "matahari",
    "moon": "bulan",
    "star": "bintang",
    "mountain": "gunung",
    "beach": "pantai",
    "flower": "bunga",
    "color": "warna",
    "green": "hijau",
    "red": "merah",
    "blue": "biru",
    "yellow": "kuning",
    "black": "hitam",
    "white": "putih",
    "love": "cinta",
    "friendship": "persahabatan",
    "success": "keberhasilan",
    "failure": "kegagalan",
    "peace": "kedamaian",
    "war": "perang",
    "freedom": "kebebasan",
    "technology": "teknologi",
    "future": "masa depan",
    "health": "kesehatan",
    "food": "makanan",
    "travel": "perjalanan",
    "nature": "alam",
    "environment": "lingkungan",
    "climate": "iklim",
    "history": "sejarah",
    "culture": "budaya",
    "art": "seni",
    "language": "bahasa",
    "education": "pendidikan",
    "knowledge": "pengetahuan",
    "wisdom": "kebijaksanaan",
    "challenge": "tantangan",
    "opportunity": "kesempatan",
    "dream": "mimpi",
    "achievement": "prestasi",
    "celebration": "perayaan",
    "holiday": "liburan",
    "tradition": "tradisi",
    "innovation": "inovasi",
    "creativity": "kreativitas",
    "inspiration": "inspirasi",
    "motivation": "motivasi",
    "happiness": "kebahagiaan",
    "gratitude": "rasa syukur",
    "forgiveness": "pengampunan",
    "compassion": "kasih sayang",
    "kindness": "kebaikan",
    "respect": "penghormatan",
    "tolerance": "toleransi",
    "communication": "komunikasi",
    "collaboration": "kolaborasi",
    "leadership": "kepemimpinan",
    "teamwork": "kerja sama",
    "perseverance": "ketekunan",
    "patience": "kesabaran",
    "ambition": "ambisi",
    "dedication": "dedikasi",
    "discipline": "disiplin",
    "balance": "keseimbangan",
    "simplicity": "kesederhanaan",
    "grit": "semangat pantang menyerah",
    "curiosity": "rasa ingin tahu",
    "adventure": "petualangan",
    "reflection": "refleksi",
    "self-improvement": "pengembangan diri",
    "community": "komunitas",
    "global": "global",
    "local": "lokal",
    "innovator": "inovator",
    "exploration": "eksplorasi",
    "discovery": "penemuan",
    "change": "perubahan",
    "adaptation": "adaptasi",
    "evolution": "evolusi",
    "revolution": "revolusi",
    "progress": "kemajuan",
    "sustainability": "keberlanjutan",
    "renewable": "terbarukan",
    "energy": "energi",
    "efficiency": "efisiensi",
    "equality": "kesetaraan",
    "justice": "keadilan",
    "humanity": "kemanusiaan",
    "diversity": "keberagaman",
    "inclusion": "inklusivitas",
    "empowerment": "pemberdayaan",
    "resilience": "ketangguhan",
    "hope": "harapan",
    "faith": "iman",
    "spirituality": "spiritualitas",
    "mindfulness": "kesadaran diri",
    "meditation": "meditasi",
    "yoga": "yoga",
    "sports": "olahraga",
    "exercise": "latihan",
    "wellness": "kesejahteraan",
    "positive": "positif",
    "negative": "negatif",
    "balance": "keseimbangan",
    "harmony": "keselarasan",
    "beauty": "kecantikan",
    "ugliness": "keburukan",
    "humor": "humor",
    "laughter": "tawa",
    "tears": "air mata",
    "emotion": "emosi",
    "intelligence": "kecerdasan",
    "wisdom": "kebijaksanaan",
    "knowledge": "pengetahuan",
    "learning": "pembelajaran",
    "growth": "pertumbuhan",
    "development": "pengembangan",
    "curriculum": "kurikulum",
    "assessment": "penilaian",
    "creativity": "kreativitas",
    "critical thinking": "pemikiran kritis",
    "problem solving": "pemecahan masalah",
    "communication skills": "keterampilan komunikasi",
    "collaboration": "kolaborasi",
    "innovation": "inovasi",
    "technology": "teknologi",
    "science": "ilmu pengetahuan",
    "mathematics": "matematika",
    "language arts": "bahasa",
    "social studies": "studi sosial",
    "physical education": "pendidikan jasmani",
    "arts education": "pendidikan seni",
    "music education": "pendidikan musik",
    "global citizenship": "kewarganegaraan global",
    "environmental education": "pendidikan lingkungan",
    "character education": "pendidikan karakter",
    "digital literacy": "literasi digital",
    "lifelong learning": "pembelajaran sepanjang hayat",
    "online learning": "pembelajaran online",
    "virtual reality": "realitas virtual",
    "artificial intelligence": "kecerdasan buatan",
    "augmented reality": "realitas tertambah",
    "coding": "pemrograman",
    "robotics": "robotika",
    "STEM education": "pendidikan STEM",
    "STEAM education": "pendidikan STEAM",
    "education reform": "reformasi pendidikan",
    "teacher": "guru",
    "student": "siswa",
    "parent": "orang tua",
    "school administrator": "administrator sekolah",
    "education advocate": "advokat pendidikan",
    "education policy": "kebijakan pendidikan",
    "learning environment": "lingkungan belajar",
    "classroom": "kelas",
    "teaching methods": "metode pengajaran",
    "assessment": "penilaian",
    "curriculum development": "pengembangan kurikulum",
    "educational technology": "teknologi pendidikan",
    "learning outcomes": "hasil belajar",
    "academic achievement": "prestasi akademis",
    "extracurricular activities": "kegiatan ekstrakurikuler",
    "school community": "komunitas sekolah",
    "parental involvement": "keterlibatan orang tua",
    "student engagement": "keterlibatan siswa",
    "learning resources": "sumber belajar",
    "educational equity": "kesetaraan pendidikan",
    "inclusive education": "pendidikan inklusif",
    "special education": "pendidikan khusus",
    "gifted education": "pendidikan berbakat",
    "distance learning": "pembelajaran jarak jauh",
    "classroom management": "manajemen kelas",
    "teacher professional development": "pengembangan profesional guru",
    "education technology trends": "tren teknologi pendidikan",
    "21st-century skills": "keterampilan abad ke-21",
    "global education": "pendidikan global",
    "cross-cultural understanding": "pemahaman lintas budaya",
    "language learning": "pembelajaran bahasa",
    "study abroad": "belajar di luar negeri",
    "cultural exchange": "pertukaran budaya",
    "academic research": "penelitian akademis",
    "scientific discovery": "penemuan ilmiah",
    "scholarship": "beasiswa",
    "intellectual property": "hak kekayaan intelektual",
    "peer-reviewed journals": "jurnal berpeer-review",
    "research funding": "pendanaan penelitian",
    "scientific method": "metode ilmiah",
    "experimental design": "desain eksperimental",
    "data analysis": "analisis data",
    "research ethics": "etika penelitian",
    "scientific community": "komunitas ilmiah",
    "academic conferences": "konferensi akademis",
    "scientific communication": "komunikasi ilmiah",
    "research collaboration": "kolaborasi penelitian",
    "publications": "publikasi",
    "thesis": "tesis",
    "dissertation": "disertasi",
    "peer review": "review oleh rekan sejawat",
    "academic achievement": "prestasi akademis",
    "graduation": "wisuda",
    "degree": "gelar",
    "diploma": "diploma",
    "postgraduate education": "pendidikan pascasarjana",
    "doctoral program": "program doktor",
    "research university": "universitas riset",
    "liberal arts college": "sekolah seni liberal",
    "community college": "perguruan tinggi komunitas",
    "vocational education": "pendidikan vokasional",
    "trade school": "sekolah kejuruan",
    "professional development": "pengembangan profesional",
    "continuing education": "pendidikan berkelanjutan",
    "adult education": "pendidikan dewasa",
    "e-learning": "pembelajaran elektronik",
    "blended learning": "pembelajaran bercampur",
    "MOOCs": "Kursus Online Terbuka dan Masif (MOOC)",
    "educational leadership": "kepemimpinan pendidikan",
    "school management": "manajemen sekolah",
    "educational governance": "tata kelola pendidikan",
    "policy implementation": "implementasi kebijakan",
    "school funding": "pendanaan sekolah",
    "education budget": "anggaran pendidikan",
    "public education": "pendidikan publik",
    "private education": "pendidikan swasta",
    "charter schools": "sekolah berbasis kontrak",
    "homeschooling": "pembelajaran di rumah",
    "standardized testing": "pengujian berstandar",
    "education reform": "reformasi pendidikan",
    "teacher unions": "serikat guru",
    "school vouchers": "voucher sekolah",
    "educational inequality": "ketidaksetaraan pendidikan",
    "dropout rate": "tingkat putus sekolah",
    "literacy rate": "tingkat melek huruf",
    "numeracy skills": "keterampilan berhitung",
    "digital literacy": "literasi digital",
    "achievement gap": "kesenjangan prestasi",
    "STEM gender gap": "kesenjangan gender di STEM",
    "inclusive education": "pendidikan inklusif",
    "special education": "pendidikan khusus",
    "gifted education": "pendidikan berbakat",
    "teacher shortages": "kekurangan guru",
    "class size": "ukuran kelas",
    "school infrastructure": "infrastruktur sekolah",
    "school safety": "keselamatan sekolah",
    "bullying": "pembulian",
    "mental health": "kesehatan mental",
    "counseling services": "layanan konseling",
    "school counselors": "konselor sekolah",
    "school discipline": "disiplin sekolah",
    "zero-tolerance policies": "kebijakan nol toleransi",
    "school violence": "kekerasan di sekolah",
    "school shootings": "penembakan di sekolah",
    "cyberbullying": "pembulian daring",
    "parent-teacher conferences": "konferensi orang tua-guru",
    "parental involvement": "keterlibatan orang tua",
    "homework": "pekerjaan rumah",
    "extracurricular activities": "kegiatan ekstrakurikuler"
        // Tambahkan lebih banyak kata sesuai kebutuhan Anda
    };

    function translate() {
        const inputWord = document.getElementById('inputWord').value.toLowerCase();
        const output = document.getElementById('output');

        if (dictionary[inputWord]) {
            output.textContent = `Translation: ${dictionary[inputWord]}`;
        } else {
            output.textContent = 'Word not found in the dictionary';
        }
    }

    // Tambahkan event listener untuk tombol Translate
    const translateButton = document.querySelector('button');
    translateButton.addEventListener('click', translate);
});
