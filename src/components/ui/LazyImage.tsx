"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function LazyImage({ src, alt, className, aspectRatio = "aspect-square" }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", aspectRatio, className)}>
      {!isLoaded && !error && (
        <Skeleton className="absolute inset-0 z-10" />
      )}
      
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-1000 ease-out",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-xl"
        )}
        loading="lazy"
      />

      {error && (
        <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-[10px] text-white/20 uppercase tracking-widest font-functional">
          Media Offline
        </div>
      )}
    </div>
  );
}
