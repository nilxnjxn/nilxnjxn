"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden selection:bg-accent selection:text-black">
      {/* Background Visual */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/extra/250519DSC_0023.webp" 
          alt="" 
          className="w-full h-full object-cover grayscale opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-48">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Magnetic strength={0.2}>
            <Link 
              href="/" 
              className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors font-functional text-xs uppercase tracking-[0.3em]"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-all">
                <HugeiconsIcon icon={ArrowLeftIcon} size={18} />
              </div>
              <span>Back</span>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Narrative Section */}
        <section className="space-y-24">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-functional text-[10px] uppercase tracking-[0.5em] font-bold"
            >
              The Story Of Nila
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-7xl md:text-[10rem] font-expressive text-white tracking-tighter leading-[0.8]"
            >
              Nilxnjxn
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 font-functional leading-relaxed"
          >
            <div className="space-y-12">
              <div className="space-y-6">
                 <p className="text-2xl text-white/90 font-light leading-snug">
                  "LIVE FREE, BE YOU"
                </p>
                <p className="text-lg text-white/50 font-light">
                  Nilxnjxn aka Nila, is an upcoming Hip-hop Artist from Assam, India. 
                  With his <span className="font-expressive-alt text-3xl text-accent hidden md:inline ml-2">Catchy Hooks & Slick Bars</span>, 
                  he intends to deliver a new wave to the existing rap scene.
                </p>
              </div>
              
              <p className="text-muted-foreground font-light text-base">
                Debut EP <span className="text-white font-medium italic underline decoration-accent/30 underline-offset-8">"SHADES"</span> (Dropping 2026) 
                explores the range of Human Emotion and Behavior, reflected through the seasons. 
                3 SHADES — <span className="text-emerald-400">FRESH</span>; <span className="text-orange-400">AKAD</span>; <span className="text-cyan-400">LATE</span> — have already emerged.
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-6 bg-white/5 backdrop-blur-3xl p-10 md:p-16 rounded-[48px] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                   <HugeiconsIcon icon={ArrowLeftIcon} size={80} className="rotate-180" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">What's Next?</h3>
                <p className="text-lg text-white/80 font-light leading-relaxed relative z-10">
                  "If you fck with the motto, sound or concept—hop in for the journey of your life. We are mapping the shadows together."
                </p>
                <div className="pt-4">
                   <span className="font-expressive text-4xl text-white/20">- Nila</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-16 border-t border-white/5 space-y-8"
          >
            <h2 className="text-3xl font-expressive text-white">Direct Distribution</h2>
            <p className="text-muted-foreground font-functional font-light max-w-2xl">
              This space functions as a direct connection between the artist and the listener. 
              By bypassing traditional streaming models, NILXNJXN ensures that the art remains 
              pure and the connection remains unmediated.
            </p>
            <div className="flex flex-wrap gap-4">
              <Magnetic strength={0.3}>
                <button className="px-8 py-4 bg-white text-black rounded-full font-functional text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                  Support via Store
                </button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link href="/music" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-functional text-xs uppercase tracking-widest hover:bg-white/10 transition-all block">
                  Explore Music
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Global Bottom Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
        <img src="/noise.png" alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
