"use client";

import { motion } from "framer-motion";

const textItems = [
  "no sulphates",
  "no parabens",
  "no silicones",
];

export default function WaveTicker() {
  return (
    <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden">
      
      {/* 🔥 INLINE CSS */}
      <style>{`
        .wave1 use { animation: waveMove1 10s linear infinite; }
        .wave2 use { animation: waveMove2 8s linear infinite; }
        .wave3 use { animation: waveMove3 6s linear infinite; }
        .wave4 use { animation: waveMove4 4s linear infinite; }

        @keyframes waveMove1 {
          0% { transform: translateX(85px); }
          100% { transform: translateX(-90px); }
        }
        @keyframes waveMove2 {
          0% { transform: translateX(-90px); }
          100% { transform: translateX(85px); }
        }
        @keyframes waveMove3 {
          0% { transform: translateX(85px); }
          100% { transform: translateX(-90px); }
        }
        @keyframes waveMove4 {
          0% { transform: translateX(-90px); }
          100% { transform: translateX(85px); }
        }
      `}</style>

      {/* 🌊 WAVE BACKGROUND */}
      <svg
        className="w-full h-[100px]"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave"
            d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
          />
        </defs>

        <g className="wave1">
          <use href="#wave" x="50" y="3" fill="#7A3E1D" />
        </g>

        <g className="wave2">
          <use href="#wave" x="50" y="0" fill="#9B6A4E" />
        </g>

        <g className="wave3">
          <use href="#wave" x="50" y="9" fill="#C2A78F" />
        </g>

        <g className="wave4">
          <use href="#wave" x="50" y="6" fill="#F5F1E6" />
        </g>
      </svg>

      {/* 🔥 MOVING TEXT STRIP */}
      {/* <div className="absolute top-[18px] w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {textItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-6"
                >
                  <span className="text-[14px] md:text-[18px] text-[#F5F1E6] tracking-wide">
                    {item}
                  </span>

                  separator square 
                  <div className="w-3 h-3 bg-[#D9F04F]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
}