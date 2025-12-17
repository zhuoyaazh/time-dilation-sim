/**
 * Project Configuration & Constants
 * Centralized config untuk mudah di-update
 */

// ===== PHYSICS CONSTANTS =====
export const PHYSICS = {
  // Kecepatan cahaya (m/s)
  SPEED_OF_LIGHT: 299_792_458,
  
  // Kecepatan sebagai fraksi cahaya (untuk slider)
  MIN_VELOCITY: 0,      // 0% kecepatan cahaya
  MAX_VELOCITY: 0.99,   // 99% kecepatan cahaya
  
  // Gravitational constant
  G: 6.67430e-11,
} as const;

// ===== UI CONSTANTS =====
export const UI = {
  // Breakpoints (harus match dengan tailwind.config.ts)
  BREAKPOINTS: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  },
  
  // Duration animasi (ms)
  ANIMATION_DURATION: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  
  // Couleur theme
  COLORS: {
    primary: '#FBBF24',      // yellow-400
    secondary: '#F97316',    // orange-500
    accent: '#8B5CF6',       // purple-500
    background: '#0f172a',   // slate-900
    earth: '#1e3a8a',        // blue-900
    fire: '#7c2d12',         // orange-900
  },
} as const;

// ===== STORY CONSTANTS =====
export const STORY = {
  CHARACTERS: {
    budi: {
      name: 'Budi',
      emoji: '🌍',
      location: 'Bumi',
      color: 'blue',
    },
    badu: {
      name: 'Badu',
      emoji: '🧑‍🚀',
      location: 'Roket',
      color: 'orange',
    },
  },
  
  // Threshold untuk menampilkan different messages
  SPEED_THRESHOLDS: {
    idle: 5,      // 0-5%: Masih parkir
    slow: 30,     // 5-30%: Pelan
    medium: 85,   // 30-85%: Sedang-cepat
    extreme: 99,  // 85-99%: Ekstrem
  },
  
  // Initial age (untuk prediksi)
  INITIAL_AGE: 10,
} as const;

// ===== SIMULATION PARAMETERS =====
export const SIMULATION = {
  // Level 1: Time Dilation (Kecepatan)
  LEVEL_1: {
    title: 'Petualangan Si Kembar Angkasa',
    subtitle: 'Dilatasi Waktu karena Kecepatan',
    defaultSpeed: 0,
    defaultDuration: 10,
    minDuration: 1,
    maxDuration: 100,
  },
  
  // Level 2: Orbit & Gravitasi (future)
  LEVEL_2: {
    title: 'Simulasi Orbit & Gravitasi',
    subtitle: 'Dilatasi Waktu karena Medan Gravitasi',
    comingSoon: true,
  },
} as const;

// ===== API ENDPOINTS (jika diperlukan di masa depan) =====
export const API_ENDPOINTS = {
  // Example:
  // ORBIT_DATA: 'https://api.example.com/orbit',
  // USER_DATA: 'https://api.example.com/user',
} as const;

// ===== FEATURE FLAGS =====
export const FEATURES = {
  ENABLE_LOTTIE_ANIMATION: true,
  ENABLE_SOUND_EFFECTS: false,      // Future enhancement
  ENABLE_OFFLINE_MODE: false,       // Future enhancement
  ENABLE_MULTIPLAYER: false,        // Future enhancement
  ENABLE_LEADERBOARD: false,        // Future enhancement
} as const;

// ===== UTILITY FUNCTIONS =====

/**
 * Hitung Lorentz Factor
 * γ = 1 / √(1 - v²)
 */
export function calculateLorentzFactor(velocityPercent: number): number {
  const v = velocityPercent / 100;
  return Math.sqrt(1 - v * v);
}

/**
 * Hitung waktu di roket (Time Dilation)
 * t_roket = t_bumi × γ
 */
export function calculateTimeInRocket(
  timeBumi: number,
  velocityPercent: number
): number {
  const gamma = calculateLorentzFactor(velocityPercent);
  return timeBumi * gamma;
}

/**
 * Hitung kontraksi panjang (Length Contraction)
 * L = L₀ × √(1 - v²)
 */
export function calculateLengthContraction(velocityPercent: number): number {
  const gamma = calculateLorentzFactor(velocityPercent);
  return Math.max(0.1, gamma); // Min 0.1 agar tidak hilang
}

/**
 * Hitung selisih umur
 */
export function calculateAgeDifference(
  timeBumi: number,
  velocityPercent: number
): number {
  const timeRoket = calculateTimeInRocket(timeBumi, velocityPercent);
  return Math.abs(timeBumi - timeRoket);
}

/**
 * Normalize velocity ke range 0-1
 */
export function normalizeVelocity(percent: number): number {
  return Math.max(0, Math.min(1, percent / 100));
}

/**
 * Format number dengan 2 decimal places
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return num.toFixed(decimals);
}

/**
 * Get message based on speed
 */
export function getSpeedMessage(velocityPercent: number): string {
  if (velocityPercent < STORY.SPEED_THRESHOLDS.idle) {
    return 'Roket masih parkir';
  } else if (velocityPercent < STORY.SPEED_THRESHOLDS.slow) {
    return 'Roket sedang santai';
  } else if (velocityPercent < STORY.SPEED_THRESHOLDS.medium) {
    return 'Roket sedang maju';
  } else if (velocityPercent < STORY.SPEED_THRESHOLDS.extreme) {
    return 'Roket sedang ngebut!';
  } else {
    return 'Roket EXTREM!';
  }
}

export default {
  PHYSICS,
  UI,
  STORY,
  SIMULATION,
  API_ENDPOINTS,
  FEATURES,
  calculateLorentzFactor,
  calculateTimeInRocket,
  calculateLengthContraction,
  calculateAgeDifference,
  normalizeVelocity,
  formatNumber,
  getSpeedMessage,
};
