"use client";

import { useRef, useLayoutEffect } from "react";
import { Track } from "@/lib/data";
import { useAudioStore } from "@/store/audioStore";
import { PlayIcon, PauseIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import { LazyImage } from "@/components/ui/LazyImage";
import Link from "next/link";

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  const { currentTrack, isPlaying, playTrack, togglePlayPause } = useAudioStore();
  const cardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const isCurrent = currentTrack?.id === track.id;
  const isActive = isCurrent && isPlaying;

  useLayoutEffect(() => {
    if (!cardRef.current || !infoRef.current) return;

    const info = infoRef.current;
    
    const ctx = gsap.context(() => {
      // Subtle parallax for info within card
      const xTo = gsap.quickTo(info, "x", { duration: 0.8, ease: "power3.out" });
      const yTo = gsap.quickTo(info, "y", { duration: 0.8, ease: "power3.out" });

      const onMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = cardRef.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const moveX = (e.clientX - centerX) * 0.1;
        const moveY = (e.clientY - centerY) * 0.1;
        xTo(moveX);
        yTo(moveY);
      };

      const onMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      cardRef.current?.addEventListener("mousemove", onMouseMove);
      cardRef.current?.addEventListener("mouseleave", onMouseLeave);
      
      return () => {
        cardRef.current?.removeEventListener("mousemove", onMouseMove);
        cardRef.current?.removeEventListener("mouseleave", onMouseLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCurrent) {
      togglePlayPause();
    } else {
      playTrack(track);
    }
  };

  return (
    <Magnetic strength={0.1}>
      <Link 
        href={`/music/${track.slug}`}
        className="block group relative"
      >
        <div 
          ref={cardRef}
          className="track-card relative w-full max-w-[320px] aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden bg-white/5 border border-white/10 group shadow-2xl transition-all duration-700 hover:shadow-accent/10 play-trigger"
        >
          {/* Performance Optimized Artwork */}
          <LazyImage 
             src={track.coverUrl} 
             alt={track.title} 
             className="transition-transform duration-1000 group-hover:scale-110" 
          />
          
          {/* Hover Overlay: Play State */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
            <button 
              onClick={handlePlayClick}
              className="w-20 h-20 bg-white text-black rounded-full shadow-2xl flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-500 active:scale-90 hover:bg-accent"
            >
              <HugeiconsIcon icon={isActive ? PauseIcon : PlayIcon} size={32} color="currentColor" />
            </button>
          </div>

          {/* Seasonal Badge */}
          <div className="absolute top-6 right-6 z-20">
            <div className={cn(
              "px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold backdrop-blur-xl border border-white/10 shadow-2xl",
              track.season === 'FRESH' && "text-emerald-400 bg-emerald-500/10",
              track.season === 'AKAD' && "text-orange-400 bg-orange-500/10",
              track.season === 'LATE' && "text-cyan-400 bg-cyan-500/10"
            )}>
              {track.season}
            </div>
          </div>

          {/* Content Overlay: Title / Artist */}
          <div 
            ref={infoRef}
            className="absolute bottom-8 left-8 right-8 z-20 space-y-1 pointer-events-none transition-transform duration-700"
          >
            <h3 className="text-white font-functional font-bold text-lg tracking-tight drop-shadow-md truncate">
              {track.title}
            </h3>
            <p className="text-white/40 font-functional text-[10px] uppercase tracking-[0.3em] font-medium truncate">
              {track.artist}
            </p>
          </div>

          {/* Price Floating Tag */}
          <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="bg-black/90 px-3 py-1 rounded-full border border-white/10 text-[9px] font-bold text-accent tracking-widest">
               {track.price}
             </div>
          </div>
        </div>
      </Link>
    </Magnetic>
  );
}
