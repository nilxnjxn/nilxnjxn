"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { Mail01Icon, InstagramIcon, SpotifyIcon, AppleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function ContactClient() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 relative overflow-hidden">
       {/* Background Glow */}
       <div className="fixed inset-0 z-0 bg-linear-to-b from-background via-black to-background" />
       <div className="fixed -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full z-0" />

       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
             <div className="space-y-4 lg:space-y-6">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-accent text-[8px] md:text-[10px] uppercase font-bold tracking-[0.5em]"
                >
                  Direct Frequency
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-expressive text-white tracking-tighter leading-[0.8]"
                >
                  Connect.
                </motion.h1>
             </div>
             
             <p className="text-lg md:text-xl text-white/40 font-functional font-light italic leading-loose max-w-md mx-auto lg:mx-0">
               "For inquiries, vibrations, or the unknown. Reach out and leave a trace in the shadows."
             </p>

             <div className="space-y-6 md:space-y-8 pt-8 lg:pt-12 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-6">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-accent">
                      <HugeiconsIcon icon={Mail01Icon} size={18} />
                   </div>
                   <div className="space-y-0.5 text-left">
                      <span className="text-[8px] uppercase text-muted-foreground tracking-widest">Email</span>
                      <p className="text-white font-functional text-xs md:text-sm tracking-widest">hello@nilxnjxn.com</p>
                   </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    {[
                      { icon: SpotifyIcon, href: "https://open.spotify.com/artist/5XzmR1SLHQvl8YE5cEyhz4" },
                      { icon: InstagramIcon, href: "https://instagram.com/nilxnjxn" },
                      { icon: AppleIcon, href: "https://music.apple.com/artist/nilxnjxn" }
                    ].map((social, i) => (
                      <Magnetic key={i} strength={0.3}>
                        <Link 
                          href={social.href}
                          target="_blank"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5"
                        >
                          <HugeiconsIcon icon={social.icon} size={18} />
                        </Link>
                      </Magnetic>
                    ))}
                </div>
             </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] md:rounded-[48px] backdrop-blur-3xl space-y-6 md:space-y-8 shadow-2xl">
             <h3 className="text-white font-expressive text-3xl md:text-4xl text-center lg:text-left">Message</h3>
             <form className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold ml-4">Your Identity</label>
                   <input 
                    type="text" 
                    placeholder="NAME / ALIAS"
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-sm font-functional tracking-widest text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all uppercase placeholder:text-white/20"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold ml-4">Digital Address</label>
                   <input 
                    type="email" 
                    placeholder="EMAIL"
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-sm font-functional tracking-widest text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all uppercase placeholder:text-white/20"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold ml-4">The Inquiry</label>
                   <textarea 
                    placeholder="WHAT IS THE FREQUENCY?"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-[32px] p-8 text-sm font-functional tracking-widest text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all uppercase placeholder:text-white/20 resize-none"
                   />
                </div>
                <Magnetic strength={0.2}>
                   <button className="w-full h-16 bg-white text-black rounded-full font-functional font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-accent transition-all shadow-xl">
                     Transmit Signal
                   </button>
                </Magnetic>
             </form>
          </div>
       </div>

       {/* Global Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay">
        <img src="/noise.png" alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
