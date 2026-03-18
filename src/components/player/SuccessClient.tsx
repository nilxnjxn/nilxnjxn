"use client";

import { motion } from "framer-motion";
import { SecurityCheckIcon, Download01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";

export function SuccessClient() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Pulsing Success Glow */}
      <div className="fixed inset-0 z-0 bg-radial from-emerald-500/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-lg w-full text-center space-y-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.1)]"
        >
          <HugeiconsIcon icon={SecurityCheckIcon} size={40} className="text-emerald-500" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-expressive text-white tracking-tighter">
            Unlocked
          </h1>
          <p className="text-muted-foreground font-functional text-sm tracking-[0.4em] uppercase">
            Payment Verified. Shade Released.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-3xl space-y-8 shadow-2xl">
          <p className="text-white/60 font-functional text-sm leading-relaxed">
            The high-resolution audio files have been sent to your email. You can also download them directly below using your secure token.
          </p>
          
          <Magnetic strength={0.2}>
            <button className="w-full bg-accent text-black py-5 rounded-full flex items-center justify-center gap-3 font-functional font-bold text-xs uppercase tracking-widest shadow-lg shadow-accent/20 hover:scale-[1.02] transition-all">
              <HugeiconsIcon icon={Download01Icon} size={20} color="currentColor" />
              Download Archive (.ZIP)
            </button>
          </Magnetic>

          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] italic">
            * This link expires in 24 hours for security.
          </p>
        </div>

        <div className="pt-8">
          <Magnetic strength={0.1}>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group"
            >
              <HugeiconsIcon icon={Home01Icon} size={18} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-functional mt-1">Return Home</span>
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* Global Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay">
        <img src="/noise.png" alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
