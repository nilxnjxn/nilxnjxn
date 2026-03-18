"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";
import { ArrowLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Cinematic Glitch Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 blur-[200px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 text-center space-y-12">
        <div className="space-y-4">
           <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12rem] md:text-[20rem] font-expressive text-white/5 tracking-tighter leading-none select-none"
           >
             404
           </motion.h1>
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
           >
              <h2 className="text-5xl md:text-7xl font-expressive text-white tracking-tighter">
                Void Lost.
              </h2>
              <p className="text-muted-foreground font-functional text-[10px] uppercase tracking-[0.5em] font-light">
                Frequency Not Found
              </p>
           </motion.div>
        </div>

        <div className="pt-12">
           <Magnetic strength={0.3}>
              <Link 
                href="/"
                className="inline-flex items-center gap-4 text-white hover:text-accent transition-colors py-4 px-10 border border-white/20 rounded-full bg-white/5 backdrop-blur-md group"
              >
                 <HugeiconsIcon icon={ArrowLeftIcon} size={18} className="group-hover:-translate-x-2 transition-transform" />
                 <span className="font-functional text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Return to Archive</span>
              </Link>
           </Magnetic>
        </div>
      </div>

      {/* Narrative Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay">
        <img src="/noise.png" alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
