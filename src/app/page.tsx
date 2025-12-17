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
    <main className="min-h-screen bg-[#2A1617] text-white font-sans overflow-x-hidden">
      
      {/* Subtle background pattern */}
       <div className="fixed inset-0 opacity-15 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle, #FFFB97 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 max-w-5xl mx-auto"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-[#FE7F42]/20 border border-[#FE7F42]/40 rounded-full">
            <span className="text-xs font-semibold text-[#FFFB97] uppercase tracking-wider">Simulasi Interaktif</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-none md:whitespace-nowrap mx-auto">
            Petualangan Si Kembar Angkasa
          </h1>
          
          <p className="text-2xl text-[#FFFB97] mb-4 md:whitespace-nowrap mx-auto">
            Jiejie sama Gege itu kembar identik. Tapi pas Gege naik roket super cepat, ada yang aneh kejadian...
          </p>
          
          <p className="text-lg sm:text-xl text-[#FE7F42] font-semibold mx-auto">
            Geser slider di bawah buat liat keajaiban waktu!
          </p>
        </motion.div>

        {/* VISUAL + CONTROL stacked (tighter spacing) */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-7 items-center mb-12">
          <div className="w-full">
            <RocketVisualizer 
              speed={kecepatan} 
              scaleRoket={scaleRoket}
              faktorLorentz={faktorLorentz}
            />
          </div>

          <div className="w-full">
            <div className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg border border-[#B32C1A]/40 shadow-sm overflow-hidden">
              <div className="bg-[#7A4B47]/50 px-6 sm:px-8 py-7 border-b border-[#B32C1A]/50">
                  <h2 className="text-3xl font-bold text-white">Kontrol Simulasi</h2>
                  <p className="text-lg text-[#FFFB97] mt-2">Atur kecepatan roket sama durasi perjalanan</p>
              </div>

                <div className="p-6 sm:p-8 space-y-10 text-base sm:text-lg">
                {/* KECEPATAN SLIDER */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                        <label className="text-base sm:text-lg font-semibold text-white uppercase tracking-wide">Kecepatan Roket</label>
                        <p className="text-base text-[#FFFB97] mt-2">Sesuaikan kecepatan roket gege</p>
                    </div>
                    <div className="text-right">
                        <div className="text-6xl font-bold text-[#FE7F42]">{kecepatan}</div>
                        <div className="text-base text-[#FFFB97]">% kecepatan cahaya</div>
                    </div>
                  </div>

                  <input 
                    type="range" 
                    min="0" 
                    max="99" 
                    value={kecepatan}
                    onChange={(e) => setKecepatan(Number(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-[#FE7F42]/30 to-[#FFFB97]/30 rounded-full appearance-none cursor-pointer accent-[#FE7F42]"
                  />

                  <div className="flex justify-between text-base text-[#FFFB97] mt-3 font-mono">
                    <span>0%</span>
                    <span>50%</span>
                    <span>99%</span>
                  </div>

                  <div className="mt-5 inline-block px-3 py-1 bg-[#FE7F42]/15 rounded-full border border-[#FE7F42]/40">
                    <span className="text-base font-semibold text-[#FE7F42]">
                      {kecepatan < 10 ? "Berhenti" : kecepatan < 30 ? "Santai" : kecepatan < 70 ? "Cepat" : "Super Cepat!"}
                    </span>
                  </div>

                  {/* Preset speeds with quick facts */}
                  <div className="mt-6 space-y-3">
                    <p className="text-base font-semibold text-white">Preset Kecepatan & Fakta</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[{label:"Santai", value:15, note:"Kereta super cepat? Efek relativitas nyaris nol."}, {label:"Orbit Rendah", value:50, note:"Mirip LEO imajiner, waktu mulai beda tipis."}, {label:"Cepat Banget", value:80, note:"Lorentz factor mulai kerasa, roket memendek."}, {label:"Relativitas Ekstrim", value:95, note:"Waktu di roket jauh lebih lambat."}].map(preset => (
                        <button
                          key={preset.label}
                          onClick={() => {
                            setKecepatan(preset.value);
                          }}
                          className="w-full px-3 py-3 rounded-lg border border-[#FE7F42]/40 bg-[#7A4B47]/40 text-left hover:border-[#FE7F42]/70 transition-colors"
                        >
                          <div className="flex items-center justify-between text-white font-semibold text-base">
                            <span>{preset.label}</span>
                            <span className="text-[#FE7F42]">{preset.value}%</span>
                          </div>
                          <p className="mt-1 text-sm text-[#FFFB97] leading-snug">{preset.note}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DURASI PERJALANAN */}
                <div className="pt-6 border-t border-[#B32C1A]/40">
                  <label className="text-base sm:text-lg font-semibold text-white uppercase tracking-wide">Durasi Perjalanan</label>
                  <p className="text-base text-[#FFFB97] mt-2">Waktu yang dialami di Bumi (tahun)</p>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex-1">
                      <input 
                        type="number"
                        min="1"
                        max="100"
                        value={waktuBumi}
                        onChange={(e) => setWaktuBumi(Number(e.target.value) || 1)}
                        className="w-full px-4 py-3 bg-white/5 border border-[#FE7F42]/30 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#FE7F42] focus:border-transparent"
                      />
                    </div>
                    <span className="text-lg font-semibold text-[#FFFB97]">tahun</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* --- HASIL SIMULASI --- */}
        <div className="w-full max-w-5xl mt-8 sm:mt-10">
          
          {/* Title */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-white">Hasil Simulasi</h2>
            <p className="text-lg text-[#FFFB97] mt-3">Perbedaan waktu antara Jiejie sama Gege</p>
          </div>
          
          {/* Grid Kartu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Kartu BUMI */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 sm:p-8 border-2 border-[#FFFB97]/30 shadow-sm hover:shadow-md hover:border-[#FFFB97]/50 transition-all text-center h-full flex flex-col"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">👧</span>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg">Jiejie (di Bumi)</h3>
                  <p className="text-xs text-gray-400">Tinggal di Bumi</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Waktu yang Berlalu</p>
                  <p className="text-4xl font-bold text-[#FFFB97]">{waktuBumi}</p>
                  <p className="text-sm text-[#FFFB97] mt-1">tahun udah berlalu</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: showPrediction ? 1 : 0, height: showPrediction ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-lg p-4 border border-[#FFFB97]/20 overflow-hidden"
                >
                  <p className="text-xs text-gray-400 mb-2">Kalo Jiejie umur 10 tahun pas Gege pergi:</p>
                  <p className="text-3xl font-bold text-[#FFFB97]">{10 + waktuBumi}</p>
                  <p className="text-sm text-[#FFFB97] mt-1">tahun umur Jiejie sekarang</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Kartu ROKET */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 sm:p-8 border-2 border-[#FE7F42]/40 shadow-sm hover:shadow-md hover:border-[#FE7F42]/60 transition-all text-center h-full flex flex-col"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">👦</span>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg">Gege (di Roket)</h3>
                  <p className="text-xs text-gray-400">Berlayar di luar angkasa</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#FFFB97] uppercase tracking-wide mb-1">Waktu yang Dirasakan</p>
                  <motion.p
                    key={waktuRoket}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-[#FE7F42]"
                  >
                    {waktuRoket.toFixed(2)}
                  </motion.p>
                  <p className="text-sm text-[#FFFB97] mt-1">tahun udah berlalu</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: showPrediction ? 1 : 0, height: showPrediction ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-lg p-4 border border-[#FE7F42]/25 overflow-hidden"
                >
                  <p className="text-xs text-gray-400 mb-2">Kalo Gege umur 10 tahun pas pergi:</p>
                  <p className="text-3xl font-bold text-[#FE7F42]">{(10 + waktuRoket).toFixed(1)}</p>
                  <p className="text-sm text-[#FFFB97] mt-1">tahun umur Gege sekarang</p>
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
              className="px-6 py-3 bg-[#FE7F42] text-white font-semibold rounded-lg hover:bg-[#B32C1A] transition-colors shadow-sm"
            >
              {showPrediction ? "Sembunyikan" : "Lihat"} Prediksi Umur
            </motion.button>
          </div>
          
          {/* Insight Box */}
          {selisihUmur > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#7A4B47]/40 rounded-lg p-6 border-l-4 border-[#FE7F42]"
            >
              <h3 className="font-bold text-white mb-2">💡 Temuan Menarik</h3>
              <p className="text-sm text-[#FFFB97] leading-relaxed">
                Pas Jiejie nambah tua <span className="font-bold text-white">{waktuBumi} tahun</span> di Bumi, 
                Gege cuma nambah tua <span className="font-bold text-[#FE7F42]">{waktuRoket.toFixed(2)} tahun</span> di roket. 
                Artinya, <span className="font-bold text-white">Gege lebih muda {selisihUmur.toFixed(1)} tahun</span> dari Jiejie! 
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
          className="w-full max-w-5xl mt-12 sm:mt-16 pt-10 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-sm text-[#FFFB97] mb-4">Pengen belajar tentang gravitasi juga?</p>
            <motion.a
              href="/orbit-simulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#FE7F42] text-white font-semibold rounded-lg hover:bg-[#B32C1A] transition-colors shadow-md"
            >
              Lanjut ke Level 2: Simulasi Orbit →
            </motion.a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
