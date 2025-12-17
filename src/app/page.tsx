"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Rocket, Clock, Users, Sparkles } from "lucide-react";
import RocketVisualizer from "@/components/RocketVisualizer";

// Lazy load Lottie untuk performance
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  // --- STATE (Data yang berubah-ubah) ---
  const [kecepatan, setKecepatan] = useState(0); // 0-99% kec. cahaya
  const [waktuBumi, setWaktuBumi] = useState(10); // Durasi di Bumi (default 10 tahun)
  const [showPrediction, setShowPrediction] = useState(false); // Toggle prediksi
  const [animationData, setAnimationData] = useState<object | null>(null);

  // --- LOAD LOTTIE ANIMATION ---
  useEffect(() => {
    // Fallback jika file rocket.json tidak ada
    fetch("/animations/rocket.json")
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(() => console.log("Lottie file not found, using emoji fallback"));
  }, []);
  
  // --- RUMUS FISIKA ---
  // v = kecepatan / 100 (dijadikan desimal, misal 0.9)
  const v = kecepatan / 100;
  
  // Faktor Lorentz (akar 1 - v^2)
  // Ini angka ajaib yang bikin waktu melambat & benda memendek
  const faktorLorentz = Math.sqrt(1 - v * v);

  // 1. Dilatasi Waktu (Waktu Roket = Waktu Bumi * Faktor)
  const waktuRoket = waktuBumi * faktorLorentz;

  // 2. Kontraksi Panjang (Roket Memendek)
  // Kita visualisasikan roketnya gepeng sesuai faktor lorentz
  // Minimal 0.1 biar roketnya gak ilang beneran
  const scaleRoket = Math.max(0.1, faktorLorentz);
  
  // 3. Selisih Umur (Buat storytelling)
  const selisihUmur = Math.abs(waktuBumi - waktuRoket);

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
      
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full">
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Simulasi Interaktif</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Petualangan Si Kembar Angkasa
          </h1>
          
          <p className="text-lg text-gray-300 mb-2">
            jiejie sama gege itu kembar identik. Tapi pas gege naik roket super cepat, ada yang aneh kejadian...
          </p>
          
          <p className="text-sm text-purple-400 font-medium">
            Geser slider di bawah buat liat keajaiban waktu!
          </p>
        </motion.div>

        {/* --- VISUALISASI ROKET (INTERAKTIF) --- */}
        <div className="w-full max-w-4xl mb-12 sm:mb-16">
          <RocketVisualizer 
            speed={kecepatan} 
            scaleRoket={scaleRoket}
            faktorLorentz={faktorLorentz}
          />
        </div>

        {/* --- CONTROL PANEL --- */}
        <div className="w-full max-w-4xl">
          
          {/* Card Container */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 shadow-sm overflow-hidden">
            
            {/* Header */}
            <div className="bg-purple-500/10 px-6 sm:px-8 py-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Kontrol Simulasi</h2>
              <p className="text-sm text-gray-300 mt-1">Atur kecepatan roket sama durasi perjalanan</p>
            </div>
            
            {/* Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* KECEPATAN SLIDER */}
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <label className="text-sm font-semibold text-white uppercase tracking-wide">Kecepatan Roket</label>
                    <p className="text-xs text-gray-400 mt-1">Sesuaikan kecepatan roket gege</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-purple-400">{kecepatan}</div>
                    <div className="text-xs text-gray-400">% kecepatan cahaya</div>
                  </div>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="99" 
                  value={kecepatan}
                  onChange={(e) => setKecepatan(Number(e.target.value))}
                  className="w-full h-3 bg-purple-500/20 rounded-full appearance-none cursor-pointer accent-purple-500"
                />
                
                <div className="flex justify-between text-xs text-gray-400 mt-3 font-mono">
                  <span>0%</span>
                  <span>50%</span>
                  <span>99%</span>
                </div>
                
                {/* Speed label */}
                <div className="mt-4 inline-block px-3 py-1 bg-purple-500/20 rounded-full border border-purple-400/30">
                  <span className="text-xs font-semibold text-purple-300">
                    {kecepatan < 10 ? "Berhenti" : kecepatan < 30 ? "Santai" : kecepatan < 70 ? "Cepat" : "Super Cepat!"}
                  </span>
                </div>
              </div>
              
              {/* DURASI PERJALANAN */}
              <div className="pt-6 border-t border-white/10">
                <label className="text-sm font-semibold text-white uppercase tracking-wide">Durasi Perjalanan</label>
                <p className="text-xs text-gray-400 mt-1">Waktu yang dialami di Bumi (tahun)</p>
                
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex-1">
                    <input 
                      type="number"
                      min="1"
                      max="100"
                      value={waktuBumi}
                      onChange={(e) => setWaktuBumi(Number(e.target.value) || 1)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-300">tahun</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* --- HASIL SIMULASI --- */}
        <div className="w-full max-w-4xl mt-10 sm:mt-14">
          
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Hasil Simulasi</h2>
            <p className="text-sm text-gray-300 mt-1">Perbedaan waktu antara Budi sama Badu</p>
          </div>
          
          {/* Grid Kartu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Kartu BUMI */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-blue-500/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border-2 border-blue-400/30 shadow-sm hover:shadow-md hover:border-blue-400/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">👧</span>
                <div>
                  <h3 className="font-bold text-white text-lg">jiejie (di Bumi)</h3>
                  <p className="text-xs text-gray-400">Tinggal di Bumi</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Waktu yang Berlalu</p>
                  <p className="text-4xl font-bold text-blue-400">{waktuBumi}</p>
                  <p className="text-sm text-gray-300 mt-1">tahun udah berlalu</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: showPrediction ? 1 : 0, height: showPrediction ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-lg p-4 border border-blue-400/20 overflow-hidden"
                >
                  <p className="text-xs text-gray-400 mb-2">Kalo jiejie umur 10 tahun pas gege pergi:</p>
                  <p className="text-3xl font-bold text-blue-400">{10 + waktuBumi}</p>
                  <p className="text-sm text-gray-300 mt-1">tahun umur jiejie sekarang</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Kartu ROKET */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-orange-500/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border-2 border-orange-400/30 shadow-sm hover:shadow-md hover:border-orange-400/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">👦</span>
                <div>
                  <h3 className="font-bold text-white text-lg">gege (di Roket)</h3>
                  <p className="text-xs text-gray-400">Berlayar di luar angkasa</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Waktu yang Dirasakan</p>
                  <motion.p
                    key={waktuRoket}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-orange-400"
                  >
                    {waktuRoket.toFixed(2)}
                  </motion.p>
                  <p className="text-sm text-gray-300 mt-1">tahun udah berlalu</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: showPrediction ? 1 : 0, height: showPrediction ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-lg p-4 border border-orange-400/20 overflow-hidden"
                >
                  <p className="text-xs text-gray-400 mb-2">Kalo gege umur 10 tahun pas pergi:</p>
                  <p className="text-3xl font-bold text-orange-400">{(10 + waktuRoket).toFixed(1)}</p>
                  <p className="text-sm text-gray-300 mt-1">tahun umur gege sekarang</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Tombol Lihat Prediksi */}
          <div className="flex justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPrediction(!showPrediction)}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
            >
              {showPrediction ? "Sembunyikan" : "Lihat"} Prediksi Umur
            </motion.button>
          </div>
          
          {/* Insight Box */}
          {selisihUmur > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-purple-500/10 rounded-lg p-6 border-l-4 border-purple-500"
            >
              <h3 className="font-bold text-white mb-2">💡 Temuan Menarik</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pas jiejie nambah tua <span className="font-bold text-blue-400">{waktuBumi} tahun</span> di Bumi, 
                gege cuma nambah tua <span className="font-bold text-orange-400">{waktuRoket.toFixed(2)} tahun</span> di roket. 
                Artinya, <span className="font-bold text-purple-400">gege lebih muda {selisihUmur.toFixed(1)} tahun</span> dari jiejie! 
                Ini efek <strong>Dilatasi Waktu</strong> dari teori relativitas Einstein.
              </p>
            </motion.div>
          )}
        </div>
        {/* Footer / Next Level */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-4xl mt-16 sm:mt-20 pt-12 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">Pengen belajar tentang gravitasi juga?</p>
            <motion.a
              href="/orbit-simulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
            >
              Lanjut ke Level 2: Simulasi Orbit →
            </motion.a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
