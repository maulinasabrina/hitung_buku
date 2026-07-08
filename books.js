/**
 * books.js — Tata Usaha Book Calculator
 * MI Muhammadiyah 1 Pare — Tahun Pelajaran 2026/2027
 *
 * Structure: BOOKS[grade][program] = [ { name, price }, ... ]
 *
 * Rules:
 *  - "inklusi" selalu referensi ke "excellent" (tidak duplikasi)
 *  - "tahfidz" = excellent list masing-masing kelas + Buku Monitoring
 */

const BOOKS = (() => {

  // ══════════════════════════════════════════════
  // KELAS 3
  // ══════════════════════════════════════════════

  const g3e = [
    { name: "Bahasa Indonesia",     price: 136000 },
    { name: "Pendidikan Pancasila", price: 153000 },
    { name: "Matematika",           price: 100000 },
    { name: "Bahasa Arab",          price:  62000 },
    { name: "Fikih",                price:  52000 },
    { name: "IPAS",                 price: 138000 },
    { name: "Akidah Akhlak",        price:  67000 },
    { name: "Al-Quran Hadits",      price:  69000 },
    { name: "SKI",                  price:  74000 },
    { name: "Bahasa Inggris",       price: 128000 },
    { name: "Kemuhammadiyahan",     price:  30900 },
    { name: "Bahasa Jawa",          price:  70000 },
  ];

  const g3l = [
    { name: "Bahasa Indonesia",     price: 136000 },
    { name: "Pendidikan Pancasila", price: 153000 },
    { name: "Matematika",           price: 100000 },
    { name: "Bahasa Arab",          price:  62000 },
    { name: "Fikih",                price:  52000 },
    { name: "IPAS",                 price: 138000 },
    { name: "Akidah Akhlak",        price:  67000 },
    { name: "Al-Quran Hadits",      price:  69000 },
    { name: "SKI",                  price:  74000 },
    { name: "Kemuhammadiyahan",     price:  30900 },
    { name: "Bahasa Jawa",          price:  76000 },
    { name: "Science",              price: 120000 },
    { name: "English",              price: 264000 },
  ];

  // ══════════════════════════════════════════════
  // KELAS 4
  // ══════════════════════════════════════════════

  const g4e = [
    { name: "Bahasa Indonesia",     price: 147000 },
    { name: "Pendidikan Pancasila", price: 143000 },
    { name: "IPAS",                 price: 156000 },
    { name: "Bahasa Arab",          price:  59000 },
    { name: "Fikih",                price:  42000 },
    { name: "Bahasa Inggris",       price: 124000 },
    { name: "Akidah Akhlak",        price:  67000 },
    { name: "Al-Qur'an Hadits",     price:  71000 },
    { name: "SKI",                  price:  72000 },
    { name: "Matematika",           price: 103000 },
    { name: "Kemuhammadiyahan",     price:  32000 },
    { name: "Bahasa Jawa",          price:  70000 },
    { name: "Modul TIK IV",         price:  25000 },
  ];

  const g4t = [
    { name: "Bahasa Indonesia",              price: 147000 },
    { name: "Pendidikan Pancasila",          price: 143000 },
    { name: "IPAS",                          price: 156000 },
    { name: "Fikih",                         price:  42000 },
    { name: "Bahasa Arab",                   price:  59000 },
    { name: "Bahasa Inggris",                price: 124000 },
    { name: "Akidah Akhlak",                 price:  67000 },
    { name: "Al-Qur'an Hadits",              price:  71000 },
    { name: "SKI",                           price:  72000 },
    { name: "Kemuhammadiyahan",              price:  32000 },
    { name: "Bahasa Jawa",                   price:  70000 },
    { name: "Matematika",                    price: 103000 },
    { name: "Buku Monitoring (Wajib Dibeli)", price: 25000 },
    { name: "Modul TIK IV",                  price:  25000 },
  ];

  const g4l = [
    { name: "Bahasa Indonesia",     price: 147000 },
    { name: "Pendidikan Pancasila", price: 143000 },
    { name: "IPAS",                 price: 156000 },
    { name: "Fikih",                price:  42000 },
    { name: "Bahasa Arab",          price:  59000 },
    { name: "Matematika",           price: 103000 },
    { name: "Akidah Akhlak",        price:  67000 },
    { name: "Al-Qur'an Hadits",     price:  71000 },
    { name: "SKI",                  price:  72000 },
    { name: "Science",              price: 120000 },
    { name: "English",              price: 270000 },
    { name: "Kemuhammadiyahan",     price:  32000 },
    { name: "Bahasa Jawa",          price:  70000 },
  ];

  // ══════════════════════════════════════════════
  // KELAS 5
  // ══════════════════════════════════════════════

  const g5e = [
    { name: "Bahasa Indonesia",     price: 133000 },
    { name: "Pendidikan Pancasila", price: 144000 },
    { name: "IPAS",                 price: 138000 },
    { name: "Bahasa Arab",          price:  59000 },
    { name: "Bahasa Inggris",       price: 120000 },
    { name: "Akidah Akhlak",        price:  69000 },
    { name: "Fikih",                price:  69000 },
    { name: "Al-Quran Hadits",      price:  69000 },
    { name: "SKI",                  price:  78000 },
    { name: "Kemuhammadiyahan",     price:  30900 },
    { name: "Bahasa Jawa",          price:  70000 },
    { name: "Matematika",           price: 103000 },
    { name: "Modul TIK",            price:  25000 },
  ];

  const g5t = [
    ...g5e,
    { name: "Buku Monitoring (Wajib Dibeli)", price: 25000 },
  ];

  const g5l = [
    { name: "Bahasa Indonesia",     price: 133000 },
    { name: "Pendidikan Pancasila", price: 144000 },
    { name: "IPAS",                 price: 138000 },
    { name: "Bahasa Arab",          price:  59000 },
    { name: "Akidah Akhlak",        price:  69000 },
    { name: "Fikih",                price:  69000 },
    { name: "Al-Quran Hadits",      price:  69000 },
    { name: "SKI",                  price:  78000 },
    { name: "Kemuhammadiyahan",     price:  30900 },
    { name: "Science",              price: 120000 },
    { name: "English",              price: 270000 },
    { name: "Bahasa Jawa",          price:  70000 },
    { name: "Matematika",           price: 103000 },
  ];

  // ══════════════════════════════════════════════
  // KELAS 6
  // ══════════════════════════════════════════════

  const g6e = [
    { name: "Bahasa Indonesia",     price: 118000 },
    { name: "Pendidikan Pancasila", price: 130000 },
    { name: "IPAS",                 price: 113000 },
    { name: "Bahasa Arab",          price:  62000 },
    { name: "Bahasa Inggris",       price: 118000 },
    { name: "Akidah Akhlak",        price:  71000 },
    { name: "Fikih",                price:  69000 },
    { name: "Al-Quran Hadits",      price:  67000 },
    { name: "SKI",                  price:  76000 },
    { name: "Matematika",           price: 103000 },
    { name: "Bahasa Jawa",          price:  70000 },
    { name: "Modul TIK",            price:  25000 },
  ];

  const g6t = [
    ...g6e,
    { name: "Buku Monitoring (Wajib Dibeli)", price: 25000 },
  ];

  const g6l = [
    { name: "Bahasa Indonesia",     price: 118000 },
    { name: "Pendidikan Pancasila", price: 130000 },
    { name: "IPAS",                 price: 113000 },
    { name: "Bahasa Arab",          price:  62000 },
    { name: "Akidah Akhlak",        price:  71000 },
    { name: "Fikih",                price:  69000 },
    { name: "Al-Quran Hadits",      price:  67000 },
    { name: "SKI",                  price:  76000 },
    { name: "Matematika",           price: 103000 },
    { name: "Bahasa Jawa",          price:  70000 },
    { name: "English",              price: 270000 },
  ];

  // ══════════════════════════════════════════════
  // PUBLIC MAP
  // ══════════════════════════════════════════════
  return {
    3: {
      excellent: g3e,
      tahfidz:   [...g3e, { name: "Buku Monitoring", price: 25000 }],
      lcp:       g3l,
      inklusi:   g3e,
    },
    4: {
      excellent: g4e,
      tahfidz:   g4t,
      lcp:       g4l,
      inklusi:   g4e,
    },
    5: {
      excellent: g5e,
      tahfidz:   g5t,
      lcp:       g5l,
      inklusi:   g5e,
    },
    6: {
      excellent: g6e,
      tahfidz:   g6t,
      lcp:       g6l,
      inklusi:   g6e,
    },
  };

})();
