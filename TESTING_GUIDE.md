# 🧪 Quick Testing Guide

## 🎮 Level 1: Time Dilation Simulator

### Interactive Elements to Test

#### 1. Speed Slider Test
```
Action: Drag slider from 0 to 99%
Expected:
✓ Rocket moves horizontally across track
✓ Speed percentage displayed in info box
✓ Status label changes: "Berhenti" → "Santai" → "Cepat" → "Super Cepat!"
✓ Contraction percentage increases (inverse to Lorentz)
✓ Lorentz factor (γ) decreases smoothly
✓ Flame appears at 40%+
✓ Smoke appears at 60%+
✓ Info cards glow increases
Time: < 100ms response time
```

#### 2. Duration Input Test
```
Action: Enter different values (1, 10, 50, 100)
Expected:
✓ Time Roket value updates
✓ Difference calculation accurate
✓ If difference > 0, Insight box appears
✓ Animation on number change (scale effect)
Formula check: Time Roket = Time Bumi × γ
```

#### 3. Mouse Tracking Test
```
Action: Move mouse over rocket visualizer area
Expected:
✓ Rocket tilts up when mouse moves up
✓ Rocket tilts down when mouse moves down
✓ Rocket rotates when mouse moves left/right
✓ Hint text appears on hover: "Gerakkan mouse ke atas/bawah..."
✓ Smooth parallax animation
✓ No jank or stuttering
```

#### 4. Flame Animation Test
```
At 0-40%: No flame ✓
At 40-60%: Faint flame (🔥) ✓
At 60-99%: Bright flame (🔥🔥) ✓
Properties:
- Opacity increases smoothly
- Scale animation smooth
- No flash or pop-in
```

#### 5. Smoke Particles Test
```
At 0-60%: No smoke ✓
At 60%+: Three smoke trails (💨💨💨) ✓
Properties:
- Rise animation smooth
- Fade out effect
- Staggered timing (organic look)
- Auto-loop continuously
```

#### 6. Info Dashboard Test
```
All 4 cards should update:
1. Speed: 0-99% (matches slider)
2. Contraction: 0-90% (based on γ)
3. Lorentz γ: 0.141-1.0 (physics formula)
4. Status: Diam/Siap/Terbang/Ekstrim (speed ranges)

Animation:
- Cards scale on value change
- Color codes maintained
- Text alignment proper
```

#### 7. Prediction Toggle Test
```
Action: Click "Lihat Prediksi Umur" button
Expected:
✓ Prediction boxes expand smoothly
✓ Shows age difference if time > 0
✓ Button text changes to "Sembunyikan"
✓ Click again to collapse
✓ Animation is fluid (AnimatePresence)
```

#### 8. Insight Box Test
```
Trigger: When time difference > 0 (any speed > 0 + duration > 0)
Expected:
✓ Box appears with smooth animation (opacity + slide)
✓ Content explains concept clearly
✓ Uses emoji (💡) for visual interest
✓ Numbers are highlighted (colored text)
✓ Box has left border accent (indigo)
```

### Responsive Design Test (Level 1)

#### Mobile (< 640px)
```
□ All elements stack vertically
□ Text is readable (no overflow)
□ Buttons are tap-friendly (min 44px)
□ Slider is functional
□ Input field is accessible
□ Info cards stack in 1 column
□ Rocket visualizer responsive height
```

#### Tablet (640-1024px)
```
□ Grid layouts work (2 columns)
□ Spacing is balanced
□ Title is still readable
□ All interactive elements accessible
□ Smooth transitions between content
```

#### Desktop (> 1024px)
```
□ Max-width constraint (max-w-4xl) applied
□ Centered on page
□ Grid layouts optimal (3-4 columns)
□ Hover effects work (cards lift on hover)
□ Spacing generous
```

---

## 🛰️ Level 2: Orbital Mechanics Simulator

### Iframe Loading Test
```
Action: Navigate to /orbit-simulation
Expected:
✓ Loading spinner appears (Loader2 icon rotating)
✓ Message: "Memuat simulasi orbit..."
✓ Takes 3-5 seconds (depends on network)
✓ Spinner disappears when iframe loads
Time: Measure time to interactive
```

### Iframe Functionality Test
```
Expected:
✓ Simulation loads fully
✓ Play button visible
✓ Click play → animation starts
✓ Watch satellite orbit smoothly
✓ Controls responsive to input
✓ Can interact with simulation
```

### Error Handling Test
```
Action: Disable network and reload
Expected:
✓ Error state shows after timeout
✓ Message: "Simulasi Tidak Dapat Dimuat"
✓ "Muat Ulang" button visible
✓ Click retry → retries loading
✓ Graceful degradation
```

### Fullscreen Test
```
Action: Click "Buka Fullscreen" button
Expected:
✓ Opens in new tab
✓ Original tab remains
✓ Simulation runs in fullscreen
✓ Can exit with Esc key
✓ Can return to original tab
```

### Content Cards Test
```
Intro Cards (3):
✓ Satelit card (🛰️) displays correctly
✓ Gravitasi card (🌍) displays correctly
✓ Orbit card (🔄) displays correctly
✓ Hover effects work (y: -4px animation)
✓ Text is readable
```

### Learning Sections Test
```
Four concept cards should display:
✓ Gravitasi Universal 🌐 - Newton's law
✓ Keseimbangan Gaya ⚖️ - Force balance
✓ Jenis-jenis Orbit 🔴 - Types of orbits
✓ Kecepatan Orbit 🚀 - Velocity concepts

Each card:
✓ Has proper title and emoji
✓ Contains explanatory text
✓ Color-coded (blue, orange, purple, indigo)
✓ Responsive layout
```

### Instruction Section Test
```
Expected:
✓ Heading: "📚 Cara Menggunakan Simulasi"
✓ 4 numbered steps visible
✓ Clear, actionable instructions
✓ Proper indigo accent left border
✓ List items properly formatted
```

### Navigation Test
```
Back Button:
✓ Returns to Level 1
✓ Uses ArrowLeft icon
✓ Hover effect works

Fullscreen Link:
✓ Opens in new tab
✓ Uses ExternalLink icon
✓ Proper styling
```

### Responsive Test (Level 2)

#### Mobile (< 640px)
```
□ Iframe height: 384px (h-96)
□ Intro cards stack 1 column
□ Learning cards stack 1 column
□ Navigation buttons stack vertically
□ Text is readable
□ No horizontal overflow
```

#### Tablet (640-1024px)
```
□ Iframe height: auto-sizing
□ Intro cards: 1-2 columns
□ Learning cards: 2 columns
□ Navigation buttons: side-by-side
```

#### Desktop (> 1024px)
```
□ Iframe height: 700px (h-[700px])
□ Intro cards: 3 columns
□ Learning cards: 2x2 grid
□ Full spacing applied
□ Max-width constraint (max-w-5xl)
```

---

## 🔄 Navigation Flow Test

### Level 1 to Level 2
```
Action: Click "Lanjut ke Level 2: Simulasi Orbit →" button
Expected:
✓ Navigate to /orbit-simulation
✓ Smooth page transition
✓ New page loads properly
```

### Level 2 to Level 1
```
Action: Click "Kembali ke Level 1" button
Expected:
✓ Navigate to /
✓ Return to main page
✓ All state preserved in Level 1
```

### Bidirectional Navigation
```
Sequence:
1. Level 1 → Level 2 → Level 1
2. Adjust slider in Level 1
3. Go to Level 2
4. Return to Level 1
Expected:
✓ All state in Level 1 maintained
✓ Slider position remembered
✓ Duration input value remembered
✓ Smooth transitions throughout
```

---

## ⚙️ Physics Calculations Verification

### Test Cases

#### Test 1: Zero Speed
```
Input: Speed = 0%
Expected:
- γ = √(1 - 0²) = 1.0
- Time Roket = Time Bumi × 1.0 = Time Bumi
- Contraction = 0%
- Status = "Berhenti"
Verify: All above match display
```

#### Test 2: Half Speed
```
Input: Speed = 50%, Duration = 10 years
Expected:
- v = 0.5
- γ = √(1 - 0.25) = √0.75 ≈ 0.866
- Time Roket = 10 × 0.866 ≈ 8.66 years
- Contraction = (1 - 0.866) × 100 ≈ 13.4%
Verify: Match calculation
```

#### Test 3: High Speed
```
Input: Speed = 95%, Duration = 10 years
Expected:
- v = 0.95
- γ = √(1 - 0.9025) = √0.0975 ≈ 0.312
- Time Roket = 10 × 0.312 ≈ 3.12 years
- Contraction = (1 - 0.312) × 100 ≈ 68.8%
- Status = "Super Cepat!"
Verify: All match display
```

#### Test 4: Maximum Speed
```
Input: Speed = 99%, Duration = 1 year
Expected:
- v = 0.99
- γ = √(1 - 0.9801) = √0.0199 ≈ 0.141
- Time Roket = 1 × 0.141 ≈ 0.14 years
- Contraction = (1 - 0.141) × 100 ≈ 85.9%
Verify: Extreme values handled correctly
```

---

## 🎨 Design & Theme Test

### Color Consistency
```
Primary Color (Indigo-600):
□ Used in buttons
□ Used in accent borders
□ Used in text highlights
□ Consistent #4f46e5

Semantic Colors:
□ Blue for Bumi/physics
□ Orange for Roket/action
□ Purple for Level 2/gravity
□ Gray for neutral

Background:
□ White page background
□ Subtle indigo dot pattern
□ Proper opacity (opacity-3)
```

### Typography
```
Headings:
□ Size scales properly (3xl → 5xl)
□ Weight is bold (font-bold)
□ Color is gray-900
□ Line height proper (leading-tight)

Body Text:
□ Regular weight
□ Gray-700 color
□ Readable line length (max-w-3xl)
□ Proper contrast ratio

Labels:
□ Uppercase (uppercase)
□ Semibold (font-semibold)
□ Gray-600 color
□ Letter spacing (tracking-wider)
```

### Spacing & Layout
```
Sections:
□ Proper gap between sections
□ Padding consistent (p-6, p-8)
□ Margins balanced
□ Max-width constraints applied

Cards:
□ Border radius rounded-lg (8px)
□ Proper padding inside
□ Gap between cards (gap-4, gap-6)
□ Border color matches theme
```

---

## 🚨 Common Issues to Check

### Animation Issues
```
Issue: Rocket doesn't compress
Solution: Check scaleRoket calculation in main page
Issue: Flame doesn't appear
Solution: Verify speed > 40 condition
Issue: Stuttering animation
Solution: Check GPU acceleration (transform, opacity)
```

### Responsive Issues
```
Issue: Text overflow on mobile
Solution: Check max-width constraints, font sizes
Issue: Buttons not clickable
Solution: Verify min 44px touch target
Issue: Layout breaks on tablet
Solution: Check grid column definitions
```

### Physics Issues
```
Issue: Numbers don't match calculation
Solution: Verify Lorentz formula implementation
Issue: Time difference shows as 0
Solution: Check comparison condition (> 0)
Issue: Contraction shows wrong value
Solution: Verify (1 - scaleRoket) × 100 calculation
```

### Iframe Issues
```
Issue: Iframe doesn't load
Solution: Check URL (simulasidilatasiwaktu.netlify.app)
Issue: Sidebar hidden
Solution: Browser might block, try fullscreen button
Issue: Controls not working
Solution: Check allow permissions on iframe element
```

---

## ✅ Final Verification Checklist

### Before Deployment:
- [ ] All animations smooth (60fps)
- [ ] Physics calculations accurate
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors or warnings
- [ ] TypeScript compiles cleanly
- [ ] All interactive elements tested
- [ ] Loading states appear correctly
- [ ] Error handling works
- [ ] Navigation smooth
- [ ] Educational content accurate
- [ ] Iframe loads successfully
- [ ] Images/icons display properly
- [ ] Color scheme consistent
- [ ] Typography readable
- [ ] Performance acceptable

### After Deployment:
- [ ] Monitor error logs
- [ ] Check analytics
- [ ] Gather user feedback
- [ ] Test on real devices
- [ ] Verify performance metrics
- [ ] Monitor iframe availability

---

**Testing Time Estimate: 15-20 minutes for complete verification**

🎉 **Ready to ship!** 🚀✨
