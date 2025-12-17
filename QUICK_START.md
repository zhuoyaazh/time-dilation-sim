# 🚀 QUICK START GUIDE

## Projek Sudah Selesai! ✅

Status: **Development Complete**
Lokasi: `C:\Users\Najatunnisa S\time-dilation-sim`
Live URL: http://localhost:3000 (development)

---

## 🎯 Apa yang Sudah Dikerjakan

### ✅ Level 1: Petualangan Si Kembar Angkasa (DONE)
- Interactive slider kecepatan (0-99% kecepatan cahaya)
- Input durasi perjalanan
- Real-time physics calculation (Lorentz factor)
- Visualisasi roket yang memendek (length contraction)
- Dashboard perbandingan waktu Bumi vs Roket
- Prediksi umur dengan animasi
- Responsive design (mobile/tablet/desktop)
- Lottie animation support

### ✅ Level 2: Placeholder & Integrasi (READY)
- Halaman Coming Soon untuk simulasi orbit
- Link navigasi dari Level 1
- Documentation untuk integrasi

### ✅ Documentation (COMPLETE)
- README.md - Project overview
- USER_GUIDE.md - Panduan untuk anak-anak & guru
- DEVELOPER_GUIDE.md - Technical documentation
- INTEGRATION_GUIDE.md - Cara integrasi dengan project lain
- PROJECT_CHECKLIST.md - Feature checklist
- QUICK_START.md - File ini

---

## 🚀 How to Run

### Terminal Commands
```bash
# Development server (already running)
pnpm dev

# Build untuk production
pnpm build

# Start production server
pnpm start

# Check for errors
pnpm lint
```

### Browser
```
http://localhost:3000      # Level 1 (Main Page)
http://localhost:3000/orbit-simulation    # Level 2 (Placeholder)
```

---

## 📁 File Structure

```
src/app/
├── page.tsx              ← MAIN PAGE (Level 1) - 349 lines
├── layout.tsx            ← Root layout
├── globals.css           ← Global styling
└── orbit-simulation/
    └── page.tsx          ← Level 2 placeholder

src/config/
└── constants.ts          ← Centralized configuration & utility functions

public/animations/        ← Folder untuk Lottie JSON (optional)
```

---

## 🎮 How It Works

### Physics
```
User moves slider → Speed updates (0-99%)
                ↓
Calculate Lorentz Factor: γ = √(1 - v²)
                ↓
Calculate Time in Rocket: t_roket = t_bumi × γ
                ↓
Visualize contraction: scaleX = γ (roket memendek)
                ↓
Display results & animate
```

### Example Scenario
- Budi di Bumi menua **10 tahun**
- Badu di roket (90% kecepatan cahaya) menua **~4.35 tahun**
- Badu lebih muda **5.65 tahun**! 🎉

---

## 🧮 Key Physics Formulas (Implemented)

### 1. Lorentz Factor
```typescript
const v = kecepatan / 100;
const faktorLorentz = Math.sqrt(1 - v * v);
```

### 2. Time Dilation
```typescript
const waktuRoket = waktuBumi * faktorLorentz;
```

### 3. Length Contraction
```typescript
const scaleRoket = Math.max(0.1, faktorLorentz);
```

---

## 🎨 UI Components

### Main Page Sections
1. **Header** - Judul dengan gradient
2. **Rocket Visualization** - Motion div dengan scale & translate
3. **Slider Control** - Kecepatan roket (0-99%)
4. **Duration Input** - Tahun perjalanan (1-100)
5. **Result Cards** - Waktu Bumi vs Roket
6. **Prediction Toggle** - Lihat umur prediksi
7. **Story Text** - Dynamic message based on speed
8. **Navigation Button** - Link ke Level 2

### Color Scheme
- Primary: **Yellow** (#FBBF24) - Accent
- Secondary: **Orange** (#F97316) - Fire theme
- Bumi Card: **Blue-900** (#1e3a8a) - Earth theme
- Roket Card: **Orange-900** (#7c2d12) - Fire theme
- Background: **Slate-900** (#0f172a) - Dark

---

## 🔧 Technology Stack

| Component | Library | Version |
|-----------|---------|---------|
| Framework | Next.js | 16.0.10 |
| UI Library | React | 19.2.1 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.23.26 |
| Lottie | lottie-react | 2.4.1 |
| Icons | Lucide React | 0.561.0 |
| Package Manager | pnpm | - |

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Mobile:  < 768px   (default)
Tablet:  768px - 1024px (md:)
Desktop: > 1024px (lg:)
```

Example:
```tsx
className="text-4xl md:text-6xl"  // 4xl on mobile, 6xl on tablet+
className="grid-cols-1 md:grid-cols-2"  // 1 col on mobile, 2 on tablet+
```

---

## 🎯 Next Steps / Roadmap

### Phase 1 (✅ DONE)
- Roket Si Kembar Level 1
- Documentation lengkap

### Phase 2 (TODO)
- Integrasi dengan simulasi orbit (collab Ghazi)
- Styling Level 2 dengan Tailwind
- Mobile responsiveness untuk Level 2

### Phase 3 (TODO)
- Gravitational time dilation formula
- Canvas visualization
- Interactive quizzes

### Phase 4 (TODO)
- User accounts & progress tracking
- Leaderboard
- Achievement badges
- i18n (multiple languages)

---

## 🐛 Troubleshooting

### Development Server Issues

**Q: Port 3000 sudah dipakai?**
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or run di port lain
pnpm dev -- -p 3001
```

**Q: Roket tidak memendek?**
- Check kecepatan slider sudah di atas 10%
- Check browser console untuk errors
- Restart development server

**Q: Lottie animation tidak muncul?**
- File `public/animations/rocket.json` belum ada (normal, pakai emoji fallback)
- Download dari [LottieFiles](https://lottiefiles.com/) jika mau
- Emoji 🚀 juga sudah bagus untuk MVP

### Build Issues

**Q: `pnpm build` error?**
```bash
# Clean cache & rebuild
rm -r .next
pnpm install
pnpm build
```

**Q: TypeScript error setelah edit?**
```bash
# Restart dev server
# Ctrl+C in terminal, then:
pnpm dev
```

---

## 🌐 Deployment Options

### 1. **Vercel** (Recommended - Free for hobby projects)
```bash
npm install -g vercel
vercel login
vercel deploy
```
**Pros:** Optimized for Next.js, free tier generous
**Cons:** Limited to 100 deployments/day on free tier

### 2. **Netlify** (Good alternative)
```bash
pnpm build
# Upload the 'out' folder to Netlify
```

### 3. **Self-hosted** (VPS/Server)
```bash
pnpm build
pnpm start
# Atau pakai PM2 untuk production
npm install -g pm2
pm2 start "pnpm start"
```

---

## 📚 Learning Resources

### Physics
- [Einstein's Relativity - Stanford Encyclopedia](https://plato.stanford.edu/entries/spacetime/)
- [Twin Paradox - Wikipedia](https://en.wikipedia.org/wiki/Twin_paradox)
- [Time Dilation - PBS Space Time (YouTube)](https://www.youtube.com/watch?v=vNaEBbFbvcY)

### Web Development
- [Next.js Official Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Official](https://react.dev)

### Tools
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 🤝 Contributing / Collaboration

### Dengan Ghazi (Simulasi Orbit)
1. Share `INTEGRATION_GUIDE.md` untuk options integrasi
2. Decide: Iframe embed vs Code migration vs Hybrid
3. Setup Level 2 implementation
4. Test responsiveness
5. Merge changes

### General Contributors
1. Fork repository (jika open source)
2. Create feature branch
3. Follow code style (TypeScript, Tailwind, Framer Motion)
4. Add comments untuk logic kompleks
5. Test di mobile & desktop
6. Create Pull Request

---

## 📞 Contact & Support

### Files to Reference
- **README.md** - Full project overview
- **USER_GUIDE.md** - For end-users & teachers
- **DEVELOPER_GUIDE.md** - For developers
- **INTEGRATION_GUIDE.md** - For collaboration
- **PROJECT_CHECKLIST.md** - Features implemented

### Questions?
- Check documentation first
- Run local development server
- Inspect browser DevTools
- Check console for error messages

---

## ✨ Fun Facts

- **Roket emoji** scales with Framer Motion (no JS library needed for physics)
- **Tailwind CSS 4** allows using `bg-linear-to-r` instead of `bg-gradient-to-r`
- **Lorentz factor** was discovered in the 1890s (before Einstein!)
- **Time dilation** has been measured in real-world experiments (satellite clocks, particle accelerators)
- **Speed of light** is constant in all reference frames (wild!)

---

## 🎉 You're All Set!

```bash
# Start exploring:
pnpm dev

# Then open:
http://localhost:3000
```

**Have fun with physics! 🚀✨**

---

*Last Updated: December 17, 2025*
*Version: 1.0.0 (MVP)*
*Status: ✅ Production Ready*
