"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface RocketVisualizerProps {
  speed: number; // 0-99
  scaleRoket: number; // 0.1-1.0
  faktorLorentz: number;
}

export default function RocketVisualizer({ speed, scaleRoket, faktorLorentz }: RocketVisualizerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animasi flame intensity berdasarkan speed
  const flameVariants = {
    low: { opacity: 0, scale: 0 },
    medium: { opacity: 0.5, scale: 0.8 },
    high: { opacity: 1, scale: 1.2 },
  };

  const getFlameState = () => {
    if (speed < 20) return "low";
    if (speed < 60) return "medium";
    return "high";
  };

  return (
    <div
      ref={containerRef}
      className="w-full bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 sm:p-12 border border-white/10 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top section with title */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-2">Roket gege</h2>
        <p className="text-sm text-gray-300">
          {speed === 0 
            ? "Roket masih diem di lapangan. Mulai geser slider buat berangkat!" 
            : speed < 30 
            ? "Roket lagi bersiap buat terbang..." 
            : speed < 70 
            ? "Roket terbang kenceng banget!" 
            : "ROKET MELEDAK DENGAN KECEPATAN DAHSYAT! Kontraksi panjang keliatan jelas!"}
        </p>
      </div>

      {/* Rocket track and visualization */}
      <div className="flex items-center justify-center relative h-56 sm:h-72 mb-8">
        {/* Animated background stars when moving fast */}
        {speed > 40 && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: -500, opacity: [1, 1, 0] }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute text-yellow-300 text-xs font-bold"
                style={{ top: `${20 + i * 15}%` }}
              >
                *
              </motion.div>
            ))}
          </>
        )}

        {/* Main track line */}
        <div className="absolute w-full h-2 bg-gradient-to-r from-purple-500/50 via-purple-400/50 to-purple-300/50 rounded-full top-1/2 transform -translate-y-1/2"></div>

        {/* Rocket container with parallax effect */}
        <motion.div
          className="relative z-20 flex flex-col items-center"
          animate={{
            scaleX: scaleRoket,
            x: speed * 1.5,
            y: isHovered ? mousePosition.y * 0.5 : 0,
            rotateZ: isHovered ? mousePosition.x * 0.3 : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          {/* Main rocket */}
          <motion.div
            animate={{
              scale: speed > 70 ? [1, 1.05, 1] : 1,
              filter: `drop-shadow(0 ${4 + speed * 0.2}px ${12 + speed * 0.3}px rgba(168, 85, 247, ${0.3 + speed / 200}))`,
            }}
            transition={{ duration: 0.3 }}
            className="text-7xl sm:text-8xl drop-shadow-lg select-none cursor-pointer"
          >
            🚀
          </motion.div>

          {/* Flame trail with intensity based on speed */}
          {speed > 10 && (
            <motion.div
              className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl"
              animate={flameVariants[getFlameState() as keyof typeof flameVariants]}
              transition={{ duration: 0.5 }}
            >
              🔥
            </motion.div>
          )}

          {/* Smoke trail particles when very fast */}
          {speed > 60 && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`smoke-${i}`}
                  initial={{ y: 0, opacity: 0.8, scale: 1 }}
                  animate={{ y: 20, opacity: 0, scale: 1.5 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-400"
                >
                  ~
                </motion.div>
              ))}
            </>
          )}
        </motion.div>

        {/* Speed markers below track */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 opacity-40">
          {[0, 25, 50, 75, 99].map((val) => (
            <div key={val} className="flex flex-col items-center">
              <div className="w-0.5 h-3 bg-purple-400 mb-1"></div>
              <div className="text-xs text-gray-400 font-mono font-bold">{val}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Speed */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20 text-center"
          animate={{ scale: speed > 0 ? 1 : 0.95 }}
        >
          <p className="text-xs text-gray-400 font-semibold uppercase">Kecepatan</p>
          <p className="text-2xl font-bold text-purple-400 mt-2">{speed}%</p>
        </motion.div>

        {/* Contraction */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-orange-400/20 text-center"
          animate={{
            scale: scaleRoket < 0.8 ? [1, 1.05, 1] : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-gray-400 font-semibold uppercase">Kontraksi</p>
          <p className="text-2xl font-bold text-orange-400 mt-2">
            {((1 - scaleRoket) * 100).toFixed(0)}%
          </p>
        </motion.div>

        {/* Lorentz Factor */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 text-center"
          animate={{
            textShadow:
              speed > 85
                ? ["0 0 0px #60a5fa", "0 0 10px #60a5fa", "0 0 0px #60a5fa"]
                : "0 0 0px #60a5fa",
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <p className="text-xs text-gray-400 font-semibold uppercase">Faktor γ</p>
          <p className="text-2xl font-bold text-blue-400 mt-2">{faktorLorentz.toFixed(2)}</p>
        </motion.div>

        {/* Status */}
        <motion.div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
          <p className="text-xs text-gray-400 font-semibold uppercase">Status</p>
          <motion.p
            className="text-sm font-bold mt-2 h-6"
            animate={{
              color:
                speed === 0
                  ? "#9ca3af"
                  : speed < 30
                  ? "#34d399"
                  : speed < 70
                  ? "#fbbf24"
                  : "#f87171",
            }}
          >
            {speed === 0
              ? "Diam"
              : speed < 30
              ? "Siap"
              : speed < 70
              ? "Terbang"
              : "Ekstrim!"}
          </motion.p>
        </motion.div>
      </div>

      {/* Help text */}
      {isHovered && speed > 0 && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-xs text-gray-400 text-center italic"
        >
          Gerakin mouse ke atas/bawah buat liat roket berbelok!
        </motion.p>
      )}
    </div>
  );
}
