# 👨‍💻 Developer Guide - Tech Stack & Architecture

Dokumentasi teknis untuk developer yang ingin contribute atau extend project ini.

---

## 🏗️ Project Structure

```
time-dilation-sim/
├── src/
│   └── app/
│       ├── page.tsx              # Level 1: Roket Si Kembar (Main Page)
│       ├── orbit-simulation/
│       │   └── page.tsx          # Level 2: Placeholder untuk simulasi orbit
│       ├── layout.tsx            # Root layout
│       └── globals.css           # Global styling
├── public/
│   └── animations/
│       └── rocket.json           # Lottie animation (optional)
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
└── tailwind.config.ts            # Tailwind CSS config
```

---

## 🛠️ Tech Stack Detail

### Frontend Framework
- **Next.js 16** - React framework dengan App Router (file-based routing)
- **React 19** - UI library terbaru
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
  - Pre-configured dengan shadcn/ui compatible
  - Gradient support: `bg-linear-to-r`
  
### Animation & Interaction
- **Framer Motion 12** - Motion graphics library
  - Smooth transitions
  - AnimatePresence untuk enter/exit animations
  - whileHover, whileTap effects

- **Lottie React 2.4** - Vector animation library
  - Load JSON dari `public/animations/`
  - Lightweight alternative ke video

### Icons
- **Lucide React** - SVG icon library
  - 1000+ icons tersedia
  - Type-safe & tree-shakeable

---

## 🧮 Fisika & Logic

### Lorentz Factor (Faktor Lorentz)
```typescript
// Formula: γ = 1 / √(1 - v²)
// Di mana v adalah kecepatan (0-0.99 representing 0-99% of light speed)

const v = kecepatan / 100;  // Convert percentage to decimal
const faktorLorentz = Math.sqrt(1 - v * v);
```

### Dilatasi Waktu
```typescript
// Time Dilation: t_roket = t_bumi × γ
const waktuRoket = waktuBumi * faktorLorentz;
```

**Interpretasi:**
- Jika `γ = 0.5` (pada 87% kecepatan cahaya)
- Maka 10 tahun di Bumi = 5 tahun di roket
- Orang di roket jadi lebih muda 5 tahun!

### Kontraksi Panjang
```typescript
// Length Contraction: L = L₀ × √(1 - v²)
// Visualisasi: scaleX dari roket emoji/Lottie
const scaleRoket = Math.max(0.1, faktorLorentz);
```

---

## 📱 Component Architecture

### Level 1: Main Page (`src/app/page.tsx`)

#### State Management
```typescript
const [kecepatan, setKecepatan] = useState(0);        // 0-99%
const [waktuBumi, setWaktuBumi] = useState(10);       // Jahre
const [showPrediction, setShowPrediction] = useState(false);
const [animationData, setAnimationData] = useState<object | null>(null);
```

#### Key Sections
1. **Header** - Animated title dengan gradient
2. **Rocket Visualization** - Motion div dengan:
   - `scaleX: scaleRoket` (kontraksi panjang)
   - `x: kecepatan * 2` (efek motion)
   - AnimatePresence untuk speed lines
3. **Control Panel** - Slider & input
4. **Result Cards** - Waktu Bumi vs Roket dengan animasi
5. **Story Text** - Dynamic message based on kecepatan
6. **Navigation** - Link ke Level 2

#### Animation Patterns
```typescript
// Slide In
<motion.div 
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
/>

// Scale on Hover
<motion.div 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>

// Key-based Reanimation
<motion.p key={waktuRoket}>
  {waktuRoket.toFixed(2)}
</motion.p>
```

---

## 🎨 Styling Guide

### Color Palette
```
Primary:
- Yellow-400: Accent (#FBBF24)
- Orange-500: Secondary accent (#F97316)

Background:
- Slate-900: Main bg (#0f172a)
- Slate-700: Input bg (#334155)

Semantic:
- Blue-900/40: Bumi card (Earth theme)
- Orange-900/40: Roket card (Fire theme)
- Purple: Special effects, buttons

Gradients:
- bg-linear-to-r from-yellow-400 to-orange-500
- bg-linear-to-r from-blue-600 to-purple-600
```

### Responsive Breakpoints
```
Mobile:  < 768px  (md)
Tablet:  768px    (md) - 1024px
Desktop: > 1024px (lg)

Tailwind uses:
- text-4xl md:text-6xl
- h-48 md:h-64
- grid-cols-1 md:grid-cols-2
```

---

## 🔄 Data Flow

```
User Input (Slider/Input)
    ↓
State Update (setKecepatan, setWaktuBumi)
    ↓
Compute Physics (faktorLorentz, waktuRoket)
    ↓
UI Re-render with Motion
    ↓
Visual Feedback (Animation, Color change)
```

---

## 🚀 Development Workflow

### Adding New Feature

**Example: Add Temperature Display**

1. **State**
   ```typescript
   const [temp, setTemp] = useState(100);
   ```

2. **Calculation**
   ```typescript
   const tempRoket = temp * faktorLorentz; // Whatever formula
   ```

3. **UI**
   ```tsx
   <div className="bg-red-900/40 p-6 rounded-2xl">
     <p className="text-4xl font-black">{tempRoket.toFixed(0)}°K</p>
   </div>
   ```

4. **Test**: Geser slider & lihat hasilnya

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Desktop (1920x1080)
- [ ] Tablet (iPad - 768x1024)
- [ ] Mobile (iPhone 12 - 390x844)
- [ ] Slider smooth di semua ukuran
- [ ] Input number berfungsi
- [ ] Animasi jalan lancar (60fps)
- [ ] Prediksi button toggle works
- [ ] Link ke Level 2 clickable

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support (minor animation lag)
- Safari: ✅ Full support (iOS 14+)
- IE11: ❌ Not supported

---

## 📦 Adding Dependencies

```bash
pnpm add [package-name]
```

### Recommended Packages (if needed)
- `recharts` - Charts/graphs untuk data visualization
- `react-hook-form` - Form handling (jika perlu form kompleks)
- `zustand` - State management (jika state kompleks)
- `clsx` - Conditional classname utility

---

## 🔧 Performance Optimization

### Already Implemented
1. **Dynamic Import for Lottie**
   ```typescript
   const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
   ```
   - Lazy load library (reduce bundle size)
   - SSR disabled karena canvas

2. **CSS-first Animation**
   - Gunakan CSS transforms (cheaper than repaints)
   - Framer Motion handle GPU acceleration otomatis

3. **Minimal State**
   - Hanya 4 state values
   - Computed values langsung, tidak di-state

### Possible Improvements
- [ ] Memoize expensive calculations dengan `useMemo`
- [ ] Add virtual scrolling jika list panjang
- [ ] Service Worker untuk offline support
- [ ] Image optimization dengan Next.js Image component

---

## 🌐 Deployment

### Deployment Platforms
- **Vercel** (Recommended - optimal Next.js support)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify** (Good alternative)
  ```bash
  pnpm build
  # Deploy dist folder
  ```

- **Docker** (Self-hosted)
  ```dockerfile
  FROM node:18-alpine
  WORKDIR /app
  COPY package.json .
  RUN pnpm install
  COPY . .
  RUN pnpm build
  CMD ["pnpm", "start"]
  ```

### Environment Variables
Tidak ada env vars yang diperlukan saat ini. Jika butuh API:
- Buat `.env.local`
- Gunakan `process.env.NEXT_PUBLIC_*` untuk client-side

---

## 🐛 Debugging Tips

### Console Logging Lottie
```typescript
.catch(() => console.log("Lottie failed to load"));
```

### DevTools
1. **React DevTools** - Inspect component state
2. **Framer Motion Debug** - `animate={{ ...animate }} animate="visible"`
3. **Network Tab** - Check `/animations/rocket.json` load

### Common Issues
| Issue | Solution |
|-------|----------|
| Roket tidak memendek | Check `scaleRoket` calculation |
| Animasi patah-patah | Reduce slider range, use `damping: 20` |
| Lottie tidak load | Pastikan file ada di `public/animations/rocket.json` |
| Tailwind class tidak apply | Clear `.next` folder & rebuild |

---

## 📚 Resources

### Learning
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Einstein's Relativity - Stanford](https://plato.stanford.edu/entries/spacetime/)

### Tools
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Official Docs](https://react.dev)
- [Tailwind UI Components](https://tailwindui.com)

---

## 🤝 Contributing

Untuk contribute ke project ini:
1. Fork repository
2. Buat branch baru: `git checkout -b feature/nama-fitur`
3. Commit changes: `git commit -m 'Add feature'`
4. Push: `git push origin feature/nama-fitur`
5. Buat Pull Request

**Code Style:**
- Use Prettier (auto-format)
- Follow TypeScript strict mode
- Comment untuk logic yang kompleks
- Responsive design first (mobile-first)

---

**Happy Coding! 🚀✨**
