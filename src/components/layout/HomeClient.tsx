"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Track } from "@/lib/data";
import { useAudioStore } from "@/store/audioStore";
import { HeroPlayer } from "@/components/player/HeroPlayer";
import { TrackCard } from "@/components/player/TrackCard";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface HomeClientProps {
  tracks: Track[];
}

export function HomeClient({ tracks }: HomeClientProps) {
  const { currentTrack, setTrack } = useAudioStore();
  const [hasInteracted, setHasInteracted] = useState(false);
  const narrativeRef = useRef<HTMLDivElement>(null);

  // Use AKAD track for Hero, others for Latest Releases
  const featuredTrack = tracks.find(t => t.title.toUpperCase() === "AKAD") || tracks[0];
  const otherTracks = tracks.filter(t => t.id !== featuredTrack.id);

  useEffect(() => {
    if (!currentTrack && featuredTrack) {
      setTrack(featuredTrack);
    }
  }, [featuredTrack, currentTrack, setTrack]);

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  useLayoutEffect(() => {
    if (!hasInteracted || !narrativeRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic text reveal
      gsap.from(".shade-title", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: narrativeRef.current,
          start: "top 70%",
        }
      });
    }, narrativeRef);

    return () => ctx.revert();
  }, [hasInteracted]);

  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-black bg-background">

      {/* Hero Section */}
      {featuredTrack && <HeroPlayer track={featuredTrack} onPlay={handleInteraction} hasInteracted={hasInteracted} />}
      
      {/* Scrollable Content - Reveal on interaction */}
      <AnimatePresence>
        {hasInteracted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-0"
          >
            {/* SHADES Narrative Section - High Impact */}
            <section 
              ref={narrativeRef}
              className="py-48 px-6 bg-black relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
              </div>

              <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                <div className="space-y-4">
                   <h3 className="shade-title text-accent text-[10px] uppercase font-functional tracking-[0.5em] font-bold">The Concept</h3>
                   <h2 className="shade-title text-6xl md:text-9xl font-expressive text-white tracking-tighter leading-tight drop-shadow-2xl">
                     SHADES <br /> OF BEING.
                   </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-end">
                   <p className="shade-title text-xl md:text-2xl text-white/50 font-functional font-light leading-relaxed max-w-xl italic">
                     "We exist in frequencies. Some are FRESH, full of morning light. Some are AKAD, sharp like the dust of the North-East. Some are LATE, lingering in the blue of the night."
                   </p>
                   <div className="shade-title space-y-8">
                      <div className="h-px w-full bg-white/10" />
                      <p className="text-muted-foreground font-functional text-sm leading-8">
                        The debut EP 'SHADES' is a seasonal mapping of the human psyche. Dropping 2026, it serves as a digital monolith to the journey of Nila — from the valleys of Assam to the global digital frontier.
                      </p>
                      <Magnetic strength={0.2}>
                         <Link 
                          href="/music"
                          className="inline-flex h-16 items-center px-12 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent transition-all shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                         >
                           Explore the Archive
                         </Link>
                      </Magnetic>
                   </div>
                </div>
              </div>
            </section>

            {/* Latest Releases - Horizontal Scroll */}
            {otherTracks.length > 0 && (
              <section className="py-32 px-6 relative z-10 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto space-y-16">
                  <div className="flex items-end justify-between">
                    <div className="space-y-2">
                      <h2 className="text-4xl md:text-5xl font-expressive text-white tracking-tighter">New Frequencies</h2>
                      <p className="text-muted-foreground font-functional text-[10px] uppercase tracking-[0.4em]">Latest available shades</p>
                    </div>
                    <Link href="/music" className="hidden md:block text-accent hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-bold border-b border-accent/20 pb-1">
                      View All
                    </Link>
                  </div>
                  
                  <div className="flex gap-12 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar -mx-6 px-6">
                    {otherTracks.map((track) => (
                      <div key={track.id} className="snap-center">
                        <TrackCard track={track} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Profile Section */}
            <section className="py-48 px-6 relative z-10 bg-background">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div className="relative aspect-4/5 rounded-[40px] overflow-hidden group shadow-2xl border border-white/10">
                   <img 
                    src="/extra/250519DSC_0023.webp" 
                    alt="Artist Profile" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="space-y-12">
                   <div className="space-y-4">
                    <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold">Identity</span>
                    <h2 className="text-6xl md:text-7xl font-expressive tracking-tighter text-white">Behind the <br /> Shadow</h2>
                   </div>
                  <p className="text-xl text-white/40 leading-relaxed font-functional font-light italic">
                    "I intend to deliver a new wave to the existing rap scene. It's not just about bars, it's about the shades we all wear."
                  </p>
                  <Magnetic strength={0.3}>
                    <Link 
                      href="/about" 
                      className="inline-flex h-14 items-center px-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-functional text-[10px] tracking-[0.3em] uppercase font-bold"
                    >
                      Full Disclosure →
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay">
        <img src="/noise.png" alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
