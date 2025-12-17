"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function OrbitSimulation() {
  return (
    <main className="min-h-screen bg-[#2A1617] text-white font-sans overflow-x-hidden">
      
      {/* Background stars */}
       <div className="fixed inset-0 opacity-15 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle, #FFFB97 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col relative z-10">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#7A4B47]/60 hover:bg-[#7A4B47]/80 backdrop-blur-sm rounded-lg transition-all border border-[#B32C1A]/40"
          >
            <ArrowLeft size={20} />
            Balik ke Level 1
          </Link>
        </motion.div>

        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-[#FE7F42]/20 border border-[#FE7F42]/40 rounded-full">
            <span className="text-xs font-semibold text-[#FFFB97] uppercase tracking-wider">Level 2: Gravitasi & Orbit</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Gimana Satelit Bisa Melayang?
          </h1>
          
          <p className="text-lg text-[#FFFB97] mb-4">
            Ternyata ada ilmu fisika di balik satelit yang nggak jatuh ke Bumi. Yuk eksplorasi!
          </p>
          
          <p className="text-sm text-[#FE7F42] mb-6">
            Geser slider di bawah buat ngatur ketinggian orbit (km)
          </p>
        </motion.div>

        {/* MAIN CONTENT AREA */}
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-all"
            >
              <h3 className="font-bold mb-2 text-[#FFFB97]">Satelit</h3>
              <p className="text-sm text-[#FFFB97]">Benda yang berputar mengelilingi planet dengan kecepatan tertentu.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-all"
            >
              <h3 className="font-bold mb-2 text-[#FE7F42]">Gravitasi</h3>
              <p className="text-sm text-[#FFFB97]">Gaya tarik yang bikin satelit nggak jatuh atau terbang kabur.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-all"
            >
              <h3 className="font-bold mb-2 text-[#FFFB97]">Orbit</h3>
              <p className="text-sm text-[#FFFB97]">Jalur melingkar yang dilalui satelit saat mengelilingi Bumi.</p>
            </motion.div>
          </div>

          {/* IFRAME CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#7A4B47]/50 backdrop-blur-sm rounded-lg border border-[#B32C1A]/50 overflow-hidden shadow-lg"
          >
            <iframe
              src="https://simulasidilatasiwaktu.netlify.app/"
              title="Simulasi Orbit Satelit"
              className="w-full h-96 md:h-[700px] border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-[#7A4B47]/50 rounded-lg p-6 border-l-4 border-[#FE7F42]"
          >
            <h3 className="font-bold mb-3">Cara Pakainya</h3>
            <ul className="space-y-2 text-sm text-[#FFFB97]">
              <li className="flex gap-3">
                <span className="text-[#FE7F42] font-bold">1.</span>
                <span>Tunggu simulasi muncul dulu (kadang loading sebentar).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FE7F42] font-bold">2.</span>
                <span>Perhatiin gimana satelit bergerak ngelilingin Bumi.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FE7F42] font-bold">3.</span>
                <span>Coba geser slider yang ada buat ubah ketinggian orbit (km).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FE7F42] font-bold">4.</span>
                <span>Bisa fullscreen juga kalau mau pengalaman lebih seru.</span>
              </li>
            </ul>
          </motion.div>

          {/* Concepts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16"
          >
            <div className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-colors">
              <h3 className="font-bold text-white mb-3">Gravitasi Universal</h3>
              <p className="text-sm text-[#FFFB97] leading-relaxed">
                Jadi ceritanya, hukum gravitasi Newton itu bilang kalo gaya tarik itu sebanding sama massa tapi kebalikan dari kuadrat jarak. Makanya satelit bisa tetep di orbit.
              </p>
            </div>

            <div className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-colors">
              <h3 className="font-bold text-white mb-3">Keseimbangan Gaya</h3>
              <p className="text-sm text-[#FFFB97] leading-relaxed">
                Gaya gravitasi yang narik satelit ke Bumi itu seimbang sama gaya sentrifugal dari gerakan satelitnya. Nah dari keseimbangan ini jadilah orbit yang stabil.
              </p>
            </div>

            <div className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-colors">
              <h3 className="font-bold text-white mb-3">Jenis-jenis Orbit</h3>
              <p className="text-sm text-[#FFFB97] leading-relaxed">
                Ada macem-macem jenis orbit: LEO (Low Earth Orbit), MEO, sama GEO (Geostationary). Tiap jenis punya ketinggian sama karakteristik unik sendiri-sendiri.
              </p>
            </div>

            <div className="bg-[#7A4B47]/40 backdrop-blur-sm rounded-lg p-6 border border-[#FE7F42]/30 hover:border-[#FE7F42]/50 transition-colors">
              <h3 className="font-bold text-white mb-3">Ketinggian Orbit</h3>
              <p className="text-sm text-[#FFFB97] leading-relaxed">
                Makin deket satelitnya ke Bumi, makin tinggi kecepatan yang dibutuhin. Kita pakai slider buat ngubah ketinggian orbit (km) dan lihat efeknya ke gerak satelit.
              </p>
            </div>
          </motion.div>
        </div>

        {/* NAVIGATION FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full mt-12 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A4B47]/60 text-white font-semibold rounded-lg hover:bg-[#7A4B47]/80 backdrop-blur-sm transition-colors border border-[#B32C1A]/40"
            >
              <ArrowLeft size={20} />
              Balik ke Level 1
            </Link>
            
            <a 
              href="https://simulasidilatasiwaktu.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FE7F42] text-white font-semibold rounded-lg hover:bg-[#B32C1A] transition-colors"
            >
              Buka Fullscreen
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
