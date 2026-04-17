'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// Paths from demo/index.js
const paths = {
  step1: {
    unfilled: 'M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z',
    inBetween: 'M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z',
    filled: 'M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z',
  },
  step2: {
    filled: 'M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z',
    inBetween: 'M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z',
    unfilled: 'M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z',
  },
};

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Wavy SVG Overlay */}
        <svg
          className="pointer-events-none fixed inset-0 z-99999 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            className="fill-black"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                d: paths.step2.filled,
              },
              animate: {
                d: [paths.step2.filled, paths.step2.inBetween, paths.step2.unfilled],
                transition: {
                  duration: 0.8,
                  times: [0, 0.2, 1],
                  ease: ['circIn', 'easeOut'],
                },
              },
              exit: {
                d: [paths.step1.unfilled, paths.step1.inBetween, paths.step1.filled],
                transition: {
                  duration: 0.6,
                  times: [0, 0.7, 1],
                  ease: ['easeIn', 'circOut'],
                },
              },
            }}
          />
        </svg>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0.8, // Wait for SVG to clear half the screen
              ease: 'easeOut',
            },
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.4,
              ease: 'easeIn',
            },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
