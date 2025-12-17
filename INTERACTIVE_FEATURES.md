# 🎮 Interactive Features Guide

## Level 1: Petualangan Si Kembar Angkasa

### Rocket Visualizer - New Interactive Features

#### 1. **Speed Control Slider**
- **Range**: 0-99% speed of light
- **Real-time Updates**: All visuals update instantly
- **Status Labels**: Shows speed category (Berhenti, Santai, Cepat, Super Cepat!)

#### 2. **Animated Rocket**
- **Basic Animation**: Scales horizontally (scaleX) based on Lorentz contraction
- **Horizontal Movement**: Moves across track as speed increases
- **Glow Effect**: Drop shadow intensity increases with speed

#### 3. **Flame Trail** 🔥
- **Triggers at**: Speed > 40% (Cepat status)
- **Intensity Levels**:
  - 20-60% speed: Faint flame (opacity 0.5)
  - 60%+ speed: Bright flame (opacity 1.0)
- **Animation**: Smooth scale transitions

#### 4. **Smoke Particles** 💨
- **Triggers at**: Speed > 60% (Super Cepat status)
- **Count**: 3 particle trails
- **Animation**: Rise upward with fade effect
- **Timing**: Staggered for organic feel

#### 5. **Star Background** ✨
- **Triggers at**: Speed > 40%
- **Count**: 5 twinkling stars
- **Animation**: Slide from right to left (simulating motion)
- **Effect**: Creates sense of movement

#### 6. **Info Dashboard**
Four real-time metric cards:

| Card | Shows | Color | Updates |
|------|-------|-------|---------|
| Kecepatan | Speed 0-99% | Indigo | Every slider change |
| Kontraksi | Length contraction % | Orange | Calculated from speed |
| Faktor γ | Lorentz factor | Blue | Physics calculation |
| Status | Diam/Siap/Terbang/Ekstrim | Gray | Based on speed ranges |

#### 7. **Mouse Tracking**
- **How**: Move mouse over rocket visualizer
- **Effect**: Rocket tilts and moves with cursor
- **Parallax**: 3D perspective effect
- **Hint**: "Gerakkan mouse ke atas/bawah untuk melihat roket berbelok!" appears on hover

#### 8. **Speed Markers Track**
- Shows percentage milestones: 0%, 25%, 50%, 75%, 99%
- Visual line separators below track
- Helps understand scale at a glance

### Controls Section

#### Duration Input
- **Range**: 1-100 years
- **Default**: 10 years
- **Updates**: Recalculates time dilation instantly
- **Validation**: Won't accept empty or invalid input

#### Results Display
- **Budi's Section**: Shows time on Earth
- **Badu's Section**: Shows time experienced in rocket
- **Time Difference**: Automatically calculated
- **Animation**: Values scale up when updated

#### Prediction Toggle
- **Toggle Button**: "Lihat Prediksi Umur"
- **Shows**: Age difference if starting age is 10
- **Animation**: Smooth expand/collapse with AnimatePresence

#### Insight Box
- **Appears when**: Time difference > 0
- **Content**: Explains the effect in simple language
- **Color**: Indigo background with left border accent
- **Emoji**: 💡 brain icon for learning

---

## Level 2: Simulasi Orbit Satelit

### Iframe Embed Features

#### 1. **Loading State**
- **Spinner**: Animated Loader2 icon
- **Message**: "Memuat simulasi orbit..."
- **Duration**: Until iframe fully loads
- **Prevents**: User confusion during load

#### 2. **Interactive Simulation**
- **Full Control**: Play, pause, speed controls
- **Parameters**: Ability to adjust satellite properties (if supported)
- **Real-time**: Watch orbit animation
- **Interactive**: Click, drag, adjust as desired

#### 3. **Error Handling**
- **Fallback**: If iframe fails to load
- **Message**: User-friendly error notification
- **Action**: "Muat Ulang" button to retry
- **Fallback Link**: "Buka Fullscreen" to try in new tab

#### 4. **Responsive Sizing**
- **Mobile**: 384px height (h-96)
- **Tablet**: Medium height (h-[550px])
- **Desktop**: 700px height (h-[700px])
- **Auto-size**: Maintains aspect ratio

#### 5. **Educational Cards**
Three introduction cards:

| Card | Icon | Concept |
|------|------|---------|
| Satelit | 🛰️ | Objects in orbit around Earth |
| Gravitasi | 🌍 | Gravitational attraction force |
| Orbit | 🔄 | Circular path around central body |

#### 6. **Learning Sections**
Four concept cards explaining:

1. **Gravitasi Universal** 🌐
   - Newton's law of universal gravitation
   - Force ∝ mass / distance²

2. **Keseimbangan Gaya** ⚖️
   - Gravity balanced by centrifugal force
   - Creates stable orbit

3. **Jenis-jenis Orbit** 🔴
   - LEO: Low Earth Orbit (160-2000 km)
   - MEO: Medium Earth Orbit (2000-35786 km)
   - GEO: Geostationary (35786 km)

4. **Kecepatan Orbit** 🚀
   - Speed inversely related to altitude
   - No engine needed in vacuum
   - Continuous motion

#### 7. **Navigation Options**
- **Back Button**: Returns to Level 1
- **Fullscreen Link**: Opens in new tab for immersive view
- **Keyboard**: Browser escape key to exit fullscreen

#### 8. **Instructions**
Step-by-step guide:
1. Press Play (▶️) to start
2. Watch satellite orbit
3. Adjust parameters (if available)
4. Use fullscreen for better experience

---

## 🎯 Interaction Flow

### Typical User Journey:

```
Level 1 (Time Dilation)
    ↓
    ├─ Adjust Speed Slider (watch rocket compress)
    ├─ Adjust Duration Input (watch time diverge)
    ├─ Move Mouse (parallax effect)
    ├─ Toggle Prediction (see age difference)
    ├─ Read Insight Box (understand concept)
    │
    └─ Click "Lanjut ke Level 2" (continue learning)
        ↓
Level 2 (Orbital Mechanics)
    ├─ Watch intro animation
    ├─ Read concept cards
    ├─ Press Play in iframe
    ├─ Interact with simulation
    ├─ Observe orbital behavior
    │
    └─ Back to Level 1 (review) or Fullscreen (deep dive)
```

---

## 🎨 Visual Feedback Timeline

### As Speed Increases:

**0%** → Rocket static, no flame, no animation
**↓**
**10-40%** → Rocket starts moving, minor glow
**↓**
**40%** → Flame appears! 🔥 Stars start twinkling ✨
**↓**
**60%** → Smoke particles appear! 💨 Flame brightens
**↓**
**70%+** → Rocket shakes, strong glow, intense animation
**↓**
**99%** → Maximum contraction, pulsing Lorentz factor display

---

## 🔧 Customization Tips

### Want to Change Animation Timing?

**File**: `src/components/RocketVisualizer.tsx`

```tsx
// Change flame trigger speed
{speed > 40 && (        // Change 40 to any value
  // ...
)}

// Change smoke trigger speed
{speed > 60 && (        // Change 60 to any value
  // ...
)}

// Adjust star animation
transition={{
  duration: 2 + i * 0.3,  // Change duration
  repeat: Infinity,
}}

// Adjust spring animation
transition={{ 
  type: "spring", 
  stiffness: 100,         // Higher = faster response
  damping: 25             // Higher = less bouncy
}}
```

### Want to Change Colors?

**File**: `src/components/RocketVisualizer.tsx` or `src/app/orbit-simulation/page.tsx`

```tsx
// Change card backgrounds
className="bg-indigo-50 rounded-lg"      // Indigo background
className="bg-orange-50 rounded-lg"      // Orange background
className="border-indigo-200 rounded-lg" // Border color

// Change text colors
className="text-indigo-600"              // Primary text
className="text-gray-900"                // Heading text
```

### Want to Adjust Mouse Tracking Sensitivity?

**File**: `src/components/RocketVisualizer.tsx`

```tsx
const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;  // Adjust 10
const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;   // Adjust 5

// Lower numbers = less sensitive
// Higher numbers = more sensitive
```

---

## 🧪 Testing Scenarios

### Test Case 1: Speed Animation
1. Move slider to 0%
2. Gradually drag to 99%
3. Verify:
   - Rocket compresses smoothly
   - Flame appears at 40%
   - Smoke appears at 60%
   - Status changes appropriately

### Test Case 2: Duration Calculation
1. Set Duration to 10 years
2. Set Speed to 0% → Time should be same
3. Set Speed to 50% → Time should be ~0.5 years
4. Set Speed to 99% → Time should be ~0.14 years

### Test Case 3: Mouse Tracking
1. Hover over rocket area
2. Move mouse up → Rocket should tilt up
3. Move mouse down → Rocket should tilt down
4. Move mouse left/right → Rocket should rotate

### Test Case 4: Mobile Responsiveness
1. Resize browser to mobile (< 640px)
2. Verify all elements stack vertically
3. Check text sizes are readable
4. Ensure buttons are tap-friendly

### Test Case 5: Level 2 Loading
1. Navigate to Level 2
2. Wait for iframe loading spinner
3. Verify iframe loads completely
4. Try clicking fullscreen
5. Return from new tab

---

## 📊 Performance Notes

- **Frame Rate**: Animations target 60fps
- **Animation Load**: Spring animations are GPU-accelerated
- **Iframe Load**: Typically loads within 3-5 seconds
- **Responsive**: No lag on modern browsers

---

## ⚠️ Known Behaviors

1. **Mouse Tracking**: Only works within the rocket visualizer container
2. **Flame Animation**: May appear to stutter on very low-end devices
3. **Iframe Fullscreen**: Some browsers may block if popup blocked
4. **Maximum Contraction**: Roket won't go below 10% scale (visual limit)

---

**Enjoy exploring the physics of time and space! 🚀✨**
