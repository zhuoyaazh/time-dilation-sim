# 🔗 Panduan Integrasi dengan Simulasi Orbit

Dokumen ini menjelaskan cara menggabungkan project "Petualangan Si Kembar" dengan simulasi orbit gravitasi.

---

## 🎯 Strategi Integrasi (3 Opsi)

### Opsi 1: Iframe Embed (Paling Mudah) ⚡

**Kelebihan:**
- Tidak perlu migrasi kode
- Cepat implementasi (5 menit)
- Masing-masing project tetap independen

**Cara:**
1. Deploy simulasi orbit ke Netlify/Vercel
2. Edit `src/app/orbit-simulation/page.tsx`
3. Tambahkan iframe:

```tsx
<div className="w-full h-[600px] md:h-[800px]">
  <iframe 
    src="https://simulasidilatasiwaktu.netlify.app/"
    className="w-full h-full rounded-xl border-2 border-white/20"
    title="Simulasi Orbit"
  />
</div>
```

**Catatan:** Pastikan simulasi orbit tidak ada `X-Frame-Options` yang block iframe.

---

### Opsi 2: Code Migration (Rekomendasi) 🚀

**Kelebihan:**
- UI konsisten (pakai Tailwind)
- Responsif di mobile
- Full kontrol styling

**Langkah:**

#### 1. Ekstrak Logika Fisika
Dari kode simulasi orbit, copy bagian kalkulasi gravitasi:

```javascript
// Contoh logika yang perlu di-copy
function calculateGravitationalTimeDilation(r, M) {
  const G = 6.67430e-11; // Gravitational constant
  const c = 299792458;   // Speed of light
  
  // Schwarzschild metric
  const rs = (2 * G * M) / (c * c); // Schwarzschild radius
  const timeDilation = Math.sqrt(1 - rs/r);
  
  return timeDilation;
}
```

#### 2. Buat Component Baru
File: `src/components/OrbitCanvas.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function OrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [speed, setSpeed] = useState(0);
  const [mass, setMass] = useState(1e24); // Massa planet
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // TODO: Copy canvas drawing logic dari simulasi orbit
    // ... (render orbit, asteroid, dll)
    
  }, [speed, mass]);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <canvas 
        ref={canvasRef}
        width={800}
        height={600}
        className="w-full h-auto bg-black/50 rounded-xl border border-white/20"
      />
      
      {/* Controls */}
      <div className="mt-4 space-y-4">
        <div>
          <label>Kecepatan Orbit</label>
          <input 
            type="range"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
```

#### 3. Import di Page
File: `src/app/orbit-simulation/page.tsx`

```tsx
import OrbitCanvas from "@/components/OrbitCanvas";

export default function OrbitSimulation() {
  return (
    <main>
      {/* ... header ... */}
      <OrbitCanvas />
    </main>
  );
}
```

---

### Opsi 3: Hybrid (Best of Both Worlds) 🌟

**Konsep:**
- Level 1: Roket (Project ini) → Pengenalan simpel
- Level 2: Orbit (Iframe) → Simulasi kompleks
- Level 3: Lab Mode (Migrasi) → UI cantik + fisika kompleks

**Struktur Routing:**
```
/ → Landing page (pilih level)
/level-1 → Roket Si Kembar (sudah ada)
/level-2 → Iframe simulasi orbit (quick)
/lab → Migrasi canvas orbit + Tailwind (advanced)
```

---

## 🎨 Perbaikan UI untuk Mobile

Jika simulasi orbit punya masalah "kek ga muat" di HP, ini solusinya:

### Problem yang Biasa Terjadi:
```css
/* ❌ BAD: Fixed width */
canvas {
  width: 800px;
  height: 600px;
}

/* ❌ BAD: Text overlay position absolute */
.info {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

### Solusi:
```tsx
/* ✅ GOOD: Responsive canvas */
<canvas 
  ref={canvasRef}
  width={800}
  height={600}
  className="w-full max-w-full h-auto"
  style={{ maxHeight: '70vh' }}
/>

/* ✅ GOOD: Dashboard bawah layar */
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
  <div className="bg-white/10 p-3 rounded-lg">
    <p className="text-xs text-gray-400">Kecepatan</p>
    <p className="text-lg font-bold">{speed} km/s</p>
  </div>
  {/* Card lainnya */}
</div>
```

---

## 📊 Data Flow antara Level 1 & 2

Jika ingin data dari Level 1 (Roket) diteruskan ke Level 2 (Orbit):

### Pakai URL Params:
```tsx
// Di page.tsx (Level 1)
<Link href={`/orbit-simulation?speed=${kecepatan}&duration=${waktuBumi}`}>
  Lanjut ke Level 2
</Link>

// Di orbit-simulation/page.tsx (Level 2)
"use client";
import { useSearchParams } from "next/navigation";

export default function OrbitSimulation() {
  const params = useSearchParams();
  const initialSpeed = params.get("speed") || "0";
  const duration = params.get("duration") || "10";
  
  // Gunakan sebagai initial state
}
```

---

## 🧪 Testing Checklist

Setelah integrasi, test ini:

- [ ] Level 1 bisa dibuka di HP (< 768px width)
- [ ] Level 2 bisa dibuka di HP
- [ ] Transisi Level 1 → Level 2 smooth
- [ ] Tombol "Kembali" berfungsi
- [ ] Canvas/iframe tidak overflow
- [ ] Text tidak terpotong/numpuk
- [ ] Kontrol slider/button cukup besar untuk jari (min 44px)
- [ ] Loading state ada (jika pakai iframe)

---

## 🚨 Common Issues & Fix

### Issue 1: Iframe tidak load
**Cause:** CORS atau X-Frame-Options  
**Fix:** 
```javascript
// Tambahkan di next.config.ts simulasi orbit
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
      ]
    }
  ];
}
```

### Issue 2: Canvas blur di retina display
**Fix:**
```typescript
const dpr = window.devicePixelRatio || 1;
canvas.width = 800 * dpr;
canvas.height = 600 * dpr;
ctx.scale(dpr, dpr);
```

### Issue 3: Animasi patah-patah di mobile
**Fix:** Gunakan `requestAnimationFrame` bukan `setInterval`

```typescript
function animate() {
  // Update logic
  drawCanvas();
  requestAnimationFrame(animate);
}
```

---

## 📞 Koordinasi dengan Tim

### Checklist untuk Diskusi:
1. **Source Code Access:** Apakah kode simulasi orbit bisa dishare?
2. **API Endpoint:** Ada backend atau pure frontend?
3. **Dependencies:** Library fisika apa yang dipakai? (Matter.js, p5.js, custom?)
4. **Assets:** File gambar/sprite planet/asteroid perlu di-copy?
5. **License:** Open source atau proprietary?

### Template Pesan ke Ghazi:
```
Halo Ghazi! 👋

Gue lagi bikin project edukasi Time Dilation buat anak-anak.
Simulasi orbit lu keren banget logic-nya, tapi butuh bantuan buat:

1. Bikin responsive di mobile
2. Integrasiin ke dalam web gue biar jadi satu ecosystem

Ada 2 opsi:
A. Gue embed pake iframe (gampang)
B. Gue migrasi kode lu ke Next.js + Tailwind (cantik)

Lu prefer yang mana? Kalau B, boleh minta source code-nya?
Nanti kita collab beneran, credit lu tetap ada kok! 🚀

Project gue: [link repo/demo]
```

---

## 🎓 Learning Resources

Untuk memahami fisika di balik simulasi orbit:

- [Orbital Mechanics - Wikipedia](https://en.wikipedia.org/wiki/Orbital_mechanics)
- [Schwarzschild Metric - PBS Space Time](https://www.youtube.com/watch?v=vNaEBbFbvcY)
- [Canvas Tutorial - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Next Steps:**
1. Pilih salah satu opsi (Iframe/Migration/Hybrid)
2. Setup basic structure
3. Test di mobile
4. Refine UI/UX
5. Deploy!

Good luck! 🚀✨
