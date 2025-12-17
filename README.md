# 🚀 Petualangan Si Kembar Angkasa

**Simulasi Interaktif Dilatasi Waktu untuk Anak-anak**

Aplikasi web edukatif yang menjelaskan konsep **Relativitas Einstein** dengan cara yang fun dan mudah dipahami anak-anak melalui cerita "Paradoks Kembar" (Twin Paradox).

---

## 🌟 Fitur Utama

### Level 1: Dilatasi Waktu (Kecepatan) ✨
- 🎮 **Slider Interaktif**: Atur kecepatan roket dari 0-99% kecepatan cahaya
- ⏱️ **Input Durasi**: Tentukan berapa lama perjalanan (dalam tahun Bumi)
- 🔮 **Prediksi Umur**: Lihat perbedaan umur antara Budi (di Bumi) dan Badu (di Roket)
- 📊 **Visualisasi Real-time**: 
  - Roket memendek saat kecepatan tinggi (Kontraksi Panjang/Length Contraction)
  - Animasi Lottie atau emoji fallback
  - Efek speed lines saat ngebut
- 🎨 **UI Responsif**: Tampil cantik di HP maupun laptop

### Level 2: Orbit & Gravitasi (Coming Soon) 🌍
- Placeholder untuk integrasi simulasi orbit asteroid
- Siap untuk kolaborasi dengan project lain

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: 
  - [Framer Motion](https://www.framer.com/motion/) - Animasi UI
  - [Lottie React](https://lottiefiles.com/) - Animasi roket (opsional)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+ terinstall
- pnpm terinstall (`npm install -g pnpm`)

### Instalasi

1. **Clone/Download project ini**
   ```bash
   cd time-dilation-sim
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **(Opsional) Download animasi Lottie**
   - Kunjungi [LottieFiles](https://lottiefiles.com/search?q=rocket&category=animations)
   - Download file JSON gratis
   - Simpan di `public/animations/rocket.json`
   - Jika tidak ada, aplikasi akan menggunakan emoji 🚀 sebagai fallback

4. **Jalankan development server**
   ```bash
   pnpm dev
   ```

5. **Buka browser**
   - Akses `http://localhost:3000`

---

## 📖 Konsep Fisika

### Dilatasi Waktu (Time Dilation)
Berdasarkan **Relativitas Khusus Einstein**, waktu berjalan lebih lambat untuk objek yang bergerak dengan kecepatan mendekati cahaya.

**Rumus Faktor Lorentz:**
```
γ = 1 / √(1 - v²/c²)
```

Di mana:
- `v` = kecepatan objek
- `c` = kecepatan cahaya
- `γ` (gamma) = faktor perlambatan waktu

**Waktu Roket:**
```
t_roket = t_bumi × √(1 - v²/c²)
```

### Kontraksi Panjang (Length Contraction)
Objek yang bergerak sangat cepat akan terlihat memendek searah geraknya.

**Panjang Roket:**
```
L_roket = L_asli × √(1 - v²/c²)
```

---

## 🎯 Skenario Penggunaan

### Untuk Anak-anak
1. Geser slider kecepatan
2. Lihat roketnya memendek saat ngebut
3. Klik "Lihat Prediksi" untuk tahu umur Budi dan Badu saat bertemu lagi
4. Pelajari bahwa waktu tidak selalu berjalan sama untuk semua orang!

### Untuk Guru/Orang Tua
- Gunakan sebagai media pembelajaran interaktif
- Ajak diskusi: "Kenapa Badu jadi awet muda?"
- Jelaskan bahwa ini bukan khayalan, tapi teori Einstein yang sudah terbukti!

---

## 🤝 Integrasi dengan Project Lain (Skenario 1)

Project ini dirancang untuk bisa digabungkan dengan simulasi orbit yang lebih kompleks:

### Cara Integrasi:
1. **Level 1 (Project Ini)**: Pengenalan konsep dasar dengan storytelling
2. **Level 2 (Project Ghazi)**: Simulasi orbit asteroid dengan gravitasi

### Template Integrasi:
File `src/app/orbit-simulation/page.tsx` sudah disiapkan sebagai placeholder. Kamu bisa:
- Embed iframe dari Netlify deployment
- Migrasi kode JavaScript orbit ke Next.js component
- Styling ulang dengan Tailwind agar responsif

---

## 📱 Responsivitas

Aplikasi ini sudah dioptimasi untuk:
- ✅ Mobile (320px - 768px)
- ✅ Tablet (768px - 1024px)  
- ✅ Desktop (1024px+)

Semua card, slider, dan animasi menyesuaikan ukuran layar.

---

## 🎨 Kustomisasi

### Mengubah Warna Tema
Edit file `src/app/globals.css` atau langsung di component:
```tsx
className="bg-gradient-to-r from-yellow-400 to-orange-500"
```

### Menambah Bahasa
Tinggal ganti semua teks di `src/app/page.tsx` ke bahasa yang diinginkan.

### Mengganti Animasi Roket
Replace file `public/animations/rocket.json` dengan animasi Lottie lain.

---

## 🐛 Troubleshooting

### Error: "Module not found: Can't resolve 'lottie-react'"
```bash
pnpm add lottie-react
```

### Animasi roket tidak muncul
- Pastikan file `public/animations/rocket.json` ada
- Jika tidak ada, aplikasi akan otomatis pakai emoji 🚀

### Slider tidak smooth di mobile
- Pastikan menggunakan browser modern (Chrome/Safari terbaru)

---

## 📝 License

MIT License - Bebas digunakan untuk edukasi dan pembelajaran.

---

## 🙏 Credits

- **Konsep Fisika**: Albert Einstein (Relativitas Khusus, 1905)
- **Inspirasi**: Twin Paradox / Paradoks Kembar
- **UI Framework**: Vercel (Next.js), Tailwind Labs
- **Animasi**: Framer Motion, LottieFiles Community

---

## 📞 Kontak & Kontribusi

Punya ide untuk improve project ini? Silakan:
1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

---

**Made with 💛 for curious young minds who want to understand the universe!**

*"Imajinasi lebih penting daripada pengetahuan." - Albert Einstein*

