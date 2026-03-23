'use client';

import { motion } from 'framer-motion';
import { Rock_Salt } from 'next/font/google';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, LockIcon } from '@hugeicons/core-free-icons';
import { Magnetic } from './Magnetic';
import { cn } from '@/lib/utils';

const rockSalt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
});

interface ComingSoonWallProps {
  onClose?: () => void;
  title?: string;
  season?: 'FRESH' | 'AKAD' | 'LATE';
}

export function ComingSoonWall({ onClose, title = "Digital Shade", season }: ComingSoonWallProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/95 backdrop-blur-2xl"
    >
      {/* Background Glow based on Season */}
      <div
        className={cn(
          "absolute inset-0 opacity-20 blur-[120px]",
          season === 'FRESH' && "bg-emerald-500",
          season === 'AKAD' && "bg-orange-500",
          season === 'LATE' && "bg-cyan-500",
          !season && "bg-white/10"
        )}
      />

      <div className="relative z-10 flex flex-col items-center gap-12 p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5"
        >
          <HugeiconsIcon icon={LockIcon} size={32} className="text-white/40" />
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={cn(rockSalt.className, "text-5xl tracking-normal text-white md:text-7xl")}
          >
            Coming Soon
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-functional mx-auto max-w-md text-[10px] tracking-[0.4em] text-white/30 uppercase md:text-xs"
          >
            The frequency for {title} is currently being calibrated. Check back once the season shifts.
          </motion.p>
        </div>

        {onClose && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Magnetic strength={0.2}>
              <button
                onClick={onClose}
                className="font-functional flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-white hover:text-black"
              >
                <HugeiconsIcon icon={ArrowLeft02Icon} size={16} />
                Return to Archive
              </button>
            </Magnetic>
          </motion.div>
        )}
      </div>

      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")', backgroundSize: '200px' }} />
    </motion.div>
  );
}
