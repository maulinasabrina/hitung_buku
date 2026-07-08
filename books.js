/**
 * books.js
 * School Book Data Store — Tata Usaha Book Calculator
 *
 * Structure:
 *   BOOKS[grade][program] = [ { name, price }, ... ]
 *
 * Special rules:
 *   - "inklusi" uses exactly the same reference as "excellent" (no copy)
 *   - Class 3 "tahfidz" = excellent + Buku Monitoring
 *   - Class 4 "tahfidz" = own list (includes Buku Monitoring + Modul TIK IV)
 */

const BOOKS = (() => {

  // ── Grade 3 ──────────────────────────────────────────────

  const grade3Excellent = [
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

  const grade3Tahfidz = [
    ...grade3Excellent,
    { name: "Buku Monitoring",      price:  25000 },
  ];

  const grade3LCP = [
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
    { name: "Bahasa Jawa",          price:  70000 },
    { name: "Science",              price: 120000 },
    { name: "English",              price: 270000 },
  ];

  // ── Grade 4 ──────────────────────────────────────────────

  const grade4Excellent = [
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

  const grade4Tahfidz = [
    { name: "Bahasa Indonesia",             price: 147000 },
    { name: "Pendidikan Pancasila",         price: 143000 },
    { name: "IPAS",                         price: 156000 },
    { name: "Fikih",                        price:  42000 },
    { name: "Bahasa Arab",                  price:  59000 },
    { name: "Bahasa Inggris",               price: 124000 },
    { name: "Akidah Akhlak",                price:  67000 },
    { name: "Al-Qur'an Hadits",             price:  71000 },
    { name: "SKI",                          price:  72000 },
    { name: "Kemuhammadiyahan",             price:  32000 },
    { name: "Bahasa Jawa",                  price:  70000 },
    { name: "Matematika",                   price: 103000 },
    { name: "Buku Monitoring (Wajib Dibeli)", price: 25000 },
    { name: "Modul TIK IV",                 price:  25000 },
  ];

  const grade4LCP = [
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

  // ── Public map ───────────────────────────────────────────
  return {
    3: {
      excellent: grade3Excellent,
      tahfidz:   grade3Tahfidz,
      lcp:       grade3LCP,
      inklusi:   grade3Excellent,   // same reference, no copy
    },
    4: {
      excellent: grade4Excellent,
      tahfidz:   grade4Tahfidz,
      lcp:       grade4LCP,
      inklusi:   grade4Excellent,   // same reference, no copy
    },
  };

})();
