'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './Skeleton';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function LazyImage({
  src,
  alt,
  className,
  aspectRatio = 'aspect-square',
  priority = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', aspectRatio, className)}>
      {/* Skeleton placeholder behind the image */}
      {!isLoaded && !error && <Skeleton className="absolute inset-0 z-10" />}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 340px"
        className="object-cover"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        priority={priority}
      />

      {error && (
        <div className="font-functional absolute inset-0 flex items-center justify-center bg-white/5 text-[10px] tracking-widest text-white/20 uppercase">
          Media Offline
        </div>
      )}
    </div>
  );
}