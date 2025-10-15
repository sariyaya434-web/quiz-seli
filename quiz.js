let userName = "";
let questions = [];
let currentQ = 0;
let score = 0;

// Semua soal 20 per mapel (contoh soal menantang)
const subjectsData = {
  tkj: [
    {q:"Dalam jaringan komputer, jelaskan perbedaan Hub dan Switch dan berikan contohnya!", options:["Hub broadcast ke semua, Switch cerdas mengirim ke tujuan","Switch broadcast, Hub cerdas"], answer:0},
    {q:"Subnet mask 255.255.255.192 menampung berapa host maksimal?", options:["62","64","60"], answer:0},
    {q:"Protokol TCP vs UDP, jelaskan perbedaannya secara lengkap!", options:["TCP connection oriented, UDP connectionless","UDP connection oriented, TCP connectionless"], answer:0},
    {q:"Jelaskan fungsi VLAN dan manfaatnya dalam jaringan perusahaan.", options:["Memisahkan jaringan logis, meningkatkan keamanan","Tidak ada manfaat"], answer:0},
    {q:"Apa itu IP statis dan IP dinamis?", options:["IP statis tetap, IP dinamis berubah otomatis","Keduanya sama"], answer:0},
    {q:"Apa kegunaan DNS dalam jaringan?", options:["Mengubah nama domain ke IP","Mengubah IP ke domain"], answer:0},
    {q:"Jelaskan perbedaan IPv4 dan IPv6!", options:["IPv4 32 bit, IPv6 128 bit","IPv4 128 bit, IPv6 32 bit"], answer:0},
    {q:"Apa itu topologi star?", options:["Semua device tersambung ke switch central","Device tersambung acak"], answer:0},
    {q:"Apa itu topologi ring?", options:["Device tersambung membentuk lingkaran","Device tersambung linear"], answer:0},
    {q:"Sebutkan keuntungan jaringan peer-to-peer!", options:["Mudah konfigurasi, murah","Sulit konfigurasi, mahal"], answer:0},
    {q:"Jelaskan fungsi firewall dalam jaringan!", options:["Mengontrol akses dan keamanan","Tidak ada fungsi"], answer:0},
    {q:"Apa itu NAT dalam jaringan?", options:["Mengubah IP privat ke publik","Menyimpan password"], answer:0},
    {q:"Apa kegunaan VPN?", options:["Akses jaringan aman dari jarak jauh","Tidak ada kegunaan"], answer:0},
    {q:"Jelaskan perbedaan HTTP dan HTTPS!", options:["HTTPS terenkripsi, HTTP tidak","HTTP terenkripsi, HTTPS tidak"], answer:0},
    {q:"Apa itu bandwidth dalam jaringan?", options:["Kapasitas data per detik","Kecepatan komputer"], answer:0},
    {q:"Apa itu latency?", options:["Waktu delay transmisi data","Jumlah komputer"], answer:0},
    {q:"Jelaskan perbedaan cloud dan on-premise!", options:["Cloud online, On-premise lokal","Cloud lokal, On-premise online"], answer:0},
    {q:"Apa itu server proxy?", options:["Perantara client dan server","Pengganti client"], answer:0},
    {q:"Sebutkan contoh protokol jaringan!", options:["HTTP, FTP, SMTP","Word, Excel"], answer:0},
    {q:"Apa itu OSI model?", options:["Model referensi jaringan 7 layer","Jenis komputer"], answer:0}
  ],
  indonesia: [
    {q:"Buatlah contoh kalimat majemuk bertingkat dengan subjek panjang!", options:["Saya pergi ke pasar karena ibu menyuruh, sambil membawa tas belanjaan yang berat","Saya tidur"], answer:0},
    {q:"Sebutkan ciri teks prosedur kompleks!", options:["Langkah berurutan, penjelasan lengkap, tujuan jelas","Cerita fiksi"], answer:0},
    {q:"Jelaskan penggunaan kata penghubung 'meskipun' dalam kalimat panjang!", options:["Meskipun hujan deras, saya tetap pergi ke sekolah karena ujian penting","Meskipun saya"], answer:0},
    {q:"Tentukan majas dalam kalimat: 'Angin berbisik di malam hari.'", options:["Personifikasi","Metafora"], answer:0},
    {q:"Buat contoh paragraf deskriptif tentang pemandangan gunung!", options:["Gunung tampak megah dengan kabut tipis yang menyelimuti puncaknya","Gunung tinggi"], answer:0},
    {q:"Jelaskan perbedaan paragraf naratif dan ekspositori!", options:["Naratif cerita, ekspositori menjelaskan informasi","Keduanya sama"], answer:0},
    {q:"Buat contoh teks eksposisi tentang teknologi!", options:["Teknologi berkembang pesat dengan inovasi yang memudahkan manusia dalam berbagai aspek kehidupan","Teknologi bagus"], answer:0},
    {q:"Apa ciri bahasa ilmiah dalam teks?", options:["Menggunakan istilah teknis, fakta akurat","Bahasa sehari-hari"], answer:0},
    {q:"Tulis kalimat efektif dari kalimat panjang berikut: 'Saya pergi ke pasar karena ibu menyuruh saya untuk membeli sayur dan buah karena besok akan ada acara keluarga.'", options:["Saya pergi ke pasar membeli sayur dan buah atas suruhan ibu karena besok ada acara keluarga.","Kalimat lain"], answer:0},
    {q:"Buat kalimat kompleks dengan kata 'selain itu'", options:["Saya belajar matematika, selain itu saya juga belajar bahasa Inggris setiap hari.","Kalimat lain"], answer:0},
    {q:"Tentukan tema teks berikut: 'Kemajuan teknologi mempermudah kehidupan manusia.'", options:["Teknologi","Pendidikan"], answer:0},
    {q:"Buat contoh kalimat pasif!", options:["Buku dibaca oleh Andi setiap malam.","Andi membaca buku"], answer:0},
    {q:"Apa itu konjungsi?", options:["Kata penghubung antar kata atau kalimat","Kata benda"], answer:0},
    {q:"Buat kalimat tanya kompleks!", options:["Apakah kamu akan pergi ke sekolah besok meskipun hujan deras?","Kalimat tanya sederhana"], answer:0},
    {q:"Jelaskan penggunaan tanda baca ':' dalam teks!", options:["Memperkenalkan penjelasan atau daftar","Tidak ada"], answer:0},
    {q:"Buat kalimat imperatif panjang!", options:["Tolong selesaikan tugas ini sebelum jam 5 sore agar tidak tertinggal.","Kalimat pendek"], answer:0},
    {q:"Buat contoh peribahasa dan jelaskan maknanya!", options:["Seperti katak dalam tempurung – artinya berpikiran sempit","Peribahasa lain"], answer:0},
    {q:"Buat contoh kalimat inversi!", options:["Ke sekolah pergi Andi setiap pagi.","Andi pergi ke sekolah"], answer:0},
    {q:"Buat kalimat dengan kata sambung 'sementara itu'", options:["Dia belajar matematika, sementara itu temannya menonton televisi.","Kalimat lain"], answer:0},
    {q:"Buat contoh kalimat kompleks dengan kata 'agar'", options:["Saya belajar rajin agar mendapatkan nilai bagus.","Kalimat lain"], answer:0}
  ],
  math: [
    {q:"Hitung turunan f(x)=2x^3-5x^2+4x-7", options:["6x^2-10x+4","3x^2-5x+4","2x^2-5x+7"], answer:0},
    {q:"Integral ∫(3x^2-2x+1)dx", options:["x^3-x^2+x+C","3x^3-x^2+1","x^3-2x+1"], answer:0},
    {q:"Hitung limit lim x→0 (sin x)/x", options:["1","0","Tidak ada"], answer:0},
    {q:"Persamaan kuadrat x^2-5x+6=0, nilai x?", options:["x=2 atau 3","x=1 atau 6","x= -2 atau -3"], answer:0},
    {q:"Hitung determinan matriks [[1,2],[3,4]]", options:["-2","2","1"], answer:0},
    {q:"Hitung luas lingkaran jari-jari 7 cm", options:["154","49","44"], answer:0},
    {q:"Hitung A = (2+3)^2", options:["25","10","5"], answer:0},
    {q:"Hitung integral ∫ x dx", options:["x^2/2 + C","x+ C","x^2 +C"], answer:0},
    {q:"Hitung turunan f(x)=5x^4", options:["20x^3","10x^3","5x^3"], answer:0},
    {q:"Persamaan garis y=2x+3, tentukan y jika x=4", options:["11","8","7"], answer:0},
    {q:"Hitung 7*8-3", options:["53","56","50"], answer:0},
    {q:"Hitung akar kuadrat 144", options:["12","14","11"], answer:0},
    {q:"Hitung 2^5", options:["32","25","16"], answer:0},
    {q:"Selesaikan persamaan 3x-9=0", options:["x=3","x=6","x=0"], answer:0},
    {q:"Hitung nilai 5!","options":["120","24","100"], answer:0},
    {q:"Hitung FPB 12 dan 18", options:["6","3","12"], answer:0},
    {q:"Hitung KPK 12 dan 18", options:["36","30","12"], answer:0},
    {q:"Hitung 0.25*16", options:["4","5","3"], answer:0},
    {q:"Ubah 0.75 ke pecahan", options:["3/4","1/2","2/3"], answer:0},
    {q:"Selesaikan 2x+3=7", options:["x=2","x=1","x=3"], answer:0}
  ],
  english: [
    {q:"Choose past tense: 'She ____ to the market yesterday.'", options:["went","goes","gone"], answer:0},
    {q:"Synonym of 'beautiful'?", options:["pretty","ugly","bad"], answer:0},
    {q:"Antonym of 'ancient'?", options:["modern","old","ancient"], answer:0},
    {q:"Choose correct: 'I have ____ my homework.'", options:["done","did","do"], answer:0},
    {q:"Select the correct word: 'She is ____ than her sister.'", options:["taller","tall","tallest"], answer:0},
    {q:"Choose correct: 'They ____ going to school.'", options:["are","is","am"], answer:0},
    {q:"Correct spelling?", options:["accommodation","acommodation","accomodation"], answer:0},
    {q:"Past form of 'run'?", options:["ran","run","runned"], answer:0},
    {q:"Synonym of 'happy'?", options:["joyful","sad","angry"], answer:0},
    {q:"Antonym of 'difficult'?", options:["easy","hard","tough"], answer:0},
    {q:"Choose correct article: 'I saw ____ elephant.'", options:["an","a","the"], answer:0},
    {q:"Fill in: 'He ____ a letter yesterday.'", options:["wrote","write","written"], answer:0},
    {q:"Choose correct preposition: 'She is good ____ math.'", options:["at","in","on"], answer:0},
    {q:"Synonym of 'fast'?", options:["quick","slow","late"], answer:0},
    {q:"Antonym of 'rich'?", options:["poor","wealthy","happy"], answer:0},
    {q:"Past tense of 'go'?", options:["went","goed","go"], answer:0},
    {q:"Correct plural: 'Child'", options:["Children","Childs","Childes"], answer:0},
    {q:"Choose correct: 'He ____ to the gym every day.'", options:["goes","go","gone"], answer:0},
    {q:"Antonym of 'strong'?", options:["weak","powerful","hard"], answer:0},
    {q:"Synonym of 'big'?", options:["large","small","tiny"], answer:0}
  ],
  history: [
    {q:"Siapa raja pertama Majapahit?", options:["Raden Wijaya","Hayam Wuruk","Gajah Mada"], answer:0},
    {q:"Apa itu Sumpah Pemuda?", options:["1928","1945","1908"], answer:0},
    {q:"Siapa yang memimpin Perang Diponegoro?", options:["Pangeran Diponegoro","Raden Wijaya","Hayam Wuruk"], answer:0},
    {q:"Kapan Proklamasi Kemerdekaan Indonesia?", options:["17 Agustus 1945","17 Agustus 1946","17 Agustus 1944"], answer:0},
    {q:"Siapa presiden pertama RI?", options:["Soekarno","Suharto","Habibie"], answer:0},
    {q:"Apa itu G30S/PKI?", options:["Gerakan 30 September PKI","Peristiwa kemerdekaan","Gerakan politik lain"], answer:0},
    {q:"Kapan masa penjajahan Belanda di Indonesia berakhir?", options:["1945","1942","1949"], answer:0},
    {q:"Siapa tokoh proklamator kemerdekaan?", options:["Soekarno-Hatta","Suharto","Ahmad Yani"], answer:0},
    {q:"Apa itu VOC?", options:["Perusahaan Belanda untuk monopoli perdagangan","Organisasi kemerdekaan","Perusahaan Jepang"], answer:0},
    {q:"Kapan Jepang menjajah Indonesia?", options:["1942-1945","1945-1949","1939-1942"], answer:0},
    {q:"Siapa pahlawan nasional yang terkenal di Sumatra?", options:["Teuku Umar","Raden Wijaya","Diponegoro"], answer:0},
    {q:"Kapan Raffles datang ke Indonesia?", options:["1811","1900","1800"], answer:0},
    {q:"Siapa tokoh yang menginisiasi Sumpah Pemuda?", options:["Budi Utomo","Soekarno","Diponegoro"], answer:0},
    {q:"Apa itu perjanjian Giyanti?", options:["Pembagian kerajaan Mataram","Perjanjian dagang VOC","Perjanjian Jepang"], answer:0},
    {q:"Siapa yang mendirikan kerajaan Majapahit?", options:["Raden Wijaya","Hayam Wuruk","Gajah Mada"], answer:0},
    {q:"Apa itu Perjanjian Tuntang?", options:["Pembagian wilayah","Perjanjian dagang","Perjanjian damai"], answer:0},
    {q:"Siapa yang memimpin perang Aceh?", options:["Teuku Umar","Raden Wijaya","Hayam Wuruk"], answer:0},
    {q:"Kapan masa penjajahan Portugis di Maluku?", options:["1511-1600","1600-1700","1500-1550"], answer:0},
    {q:"Siapa yang membuat sistem tanam paksa?", options:["Belanda","Jepang","Portugis"], answer:0},
    {q:"Kapan Indonesia menjadi anggota PBB?", options:["1950","1945","1960"], answer:0}
  ],
  pkn: [
    {q:"Pengertian demokrasi menurut UUD 1945?", options:["Kedaulatan di tangan rakyat","Kedaulatan di tangan raja"], answer:0},
    {q:"Sebutkan hak dan kewajiban warga negara!", options:["Hak pendidikan, kewajiban bayar pajak","Hanya hak","Hanya kewajiban"], answer:0},
    {q:"Apa itu Pancasila?", options:["Dasar negara Indonesia","Nama pahlawan"], answer:0},
    {q:"Sebutkan 5 sila Pancasila secara lengkap", options:["Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, Keadilan","Lima elemen lain"], answer:0},
    {q:"Apa arti demokrasi?", options:["Kedaulatan rakyat","Kedaulatan raja"], answer:0},
    {q:"Sebutkan contoh pelanggaran HAM!", options:["Pencurian, diskriminasi","Tidak ada"], answer:0},
    {q:"Apa itu UUD 1945?", options:["Undang-Undang Dasar negara RI","Peraturan sekolah"], answer:0},
    {q:"Sebutkan contoh hak politik warga negara!", options:["Memilih dan dipilih","Tidak ada"], answer:0},
    {q:"Apa itu lembaga legislatif?", options:["DPR dan DPRD","Presiden"], answer:0},
    {q:"Apa itu lembaga eksekutif?", options:["Presiden dan kabinet","DPR"], answer:0},
    {q:"Apa itu lembaga yudikatif?", options:["Mahkamah Agung dan pengadilan","Presiden"], answer:0},
    {q:"Apa itu otonomi daerah?", options:["Kewenangan daerah mengatur sendiri","Tidak ada"], answer:0},
    {q:"Sebutkan contoh hak sosial warga negara!", options:["Mendapat pendidikan dan kesehatan","Tidak ada"], answer:0},
    {q:"Sebutkan contoh kewajiban warga negara!", options:["Membayar pajak, bela negara","Tidak ada"], answer:0},
    {q:"Apa arti kedaulatan rakyat?", options:["Rakyat berkuasa dalam pemerintahan","Raja berkuasa"], answer:0},
    {q:"Apa itu referendum?", options:["Pemungutan suara rakyat","Pemungutan suara raja"], answer:0},
    {q:"Sebutkan contoh nilai Pancasila dalam kehidupan sehari-hari!", options:["Gotong royong, toleransi","Tidak ada"], answer:0},
    {q:"Apa tujuan pendidikan Pancasila?", options:["Membentuk warga negara baik","Tidak ada"], answer:0},
    {q:"Apa itu demokrasi parlementer?", options:["Kekuasaan di DPR","Kekuasaan di presiden"], answer:0},
    {q:"Apa itu demokrasi presidensial?", options:["Kekuasaan presiden","Kekuasaan DPR"], answer:0}
  ]
};

// Tombol Mulai
function submitName(){
    const input = document.getElementById('username').value.trim();
    if(input===""){ alert("Masukkan namamu dulu!"); return; }
    userName = input;
    document.getElementById('name-container').classList.add('hidden');
    document.querySelector('.mapel-selection').classList.remove('hidden');
}

// Mulai quiz
function startQuiz(subject){
    questions = [...subjectsData[subject]];
    currentQ = 0;
    score = 0;
    document.querySelector('.mapel-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('user-display').innerText = "Nama: " + userName;
    showQuestion();
    updateProgress();
}

// Tampilkan soal
function showQuestion(){
    const q = questions[currentQ];
    const correctAnswer = q.answer;
    document.getElementById('question').innerText = `${currentQ+1}. ${q.q}`;
    const optsDiv = document.getElementById('options');
    optsDiv.innerHTML = '';
    
    // Acak jawaban
    let optArray = q.options.map((text,i)=>({text,index:i}));
    optArray.sort(()=>Math.random()-0.5);

    optArray.forEach(o=>{
        const btn = document.createElement('button');
        btn.innerText = o.text;
        btn.onclick = ()=>{
            if(o.index===correctAnswer) score++;
            currentQ++;
            if(currentQ<questions.length){showQuestion(); updateProgress();}
            else showScore();
        };
        optsDiv.appendChild(btn);
    });
}

// Progress bar
function updateProgress(){
    const percent = ((currentQ)/questions.length)*100;
    document.getElementById('progress-bar').style.width = percent + '%';
}

// Skor akhir
function showScore(){
    document.getElementById('quiz-container').classList.add('hidden');
    const sc = document.getElementById('score-container');
    document.getElementById('final-score').innerText = `${userName}, skor kamu: ${score} dari ${questions.length} soal!`;
    sc.classList.remove('hidden');
}

// Pilih mapel baru
function resetQuiz(){
    document.getElementById('score-container').classList.add('hidden');
    document.querySelector('.mapel-selection').classList.remove('hidden');
    document.getElementById('progress-bar').style.width = '0%';
}
