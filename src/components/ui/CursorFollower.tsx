"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeText, setActiveText] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const follower = followerRef.current;
    const ring = ringRef.current;
    if (!follower || !ring) return;

    // Movement with different durations for "Elastic" feel
    const xTo = gsap.quickTo(follower, "x", { duration: 0.1, ease: "none" });
    const yTo = gsap.quickTo(follower, "y", { duration: 0.1, ease: "none" });
    
    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);

      // Simple detection for Interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .track-card-trigger');
      const isPlayable = target.closest('.play-trigger');
      
      if (isPlayable) {
        setIsHovering(true);
        setActiveText("PLAY");
      } else if (isInteractive) {
        setIsHovering(true);
        setActiveText("");
      } else {
        setIsHovering(false);
        setActiveText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 hidden lg:block overflow-hidden">
      {/* Center Dot */}
      <div 
        ref={followerRef}
        className="absolute top-0 left-0 w-1.5 h-1.5 -ml-0.75 -mt-0.75 rounded-full bg-accent"
      />
      
      {/* Outer Ring */}
      <div 
        ref={ringRef}
        className={cn(
          "absolute top-0 left-0 -ml-6 -mt-6 rounded-full border border-accent/30 transition-all duration-300 ease-out flex items-center justify-center",
          isHovering ? "w-12 h-12 bg-accent/10 border-accent/50" : "w-12 h-12 bg-transparent"
        )}
      >
        <span className={cn(
          "text-[8px] font-bold tracking-tighter text-accent transition-opacity duration-300",
          activeText ? "opacity-100" : "opacity-0"
        )}>
          {activeText}
        </span>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
