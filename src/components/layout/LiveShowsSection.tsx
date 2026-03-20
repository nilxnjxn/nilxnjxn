'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/ui/Magnetic';
import { ArrowUpRight01Icon, Ticket02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

gsap.registerPlugin(ScrollTrigger);

interface LiveShow {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  status: 'upcoming' | 'past';
  bookingUrl?: string;
  gradient: string;
  soldOut?: boolean;
}

const liveShows: LiveShow[] = [
  {
    id: 'show_1',
    title: 'SHADES TOUR', // Simplified titles for impact
    venue: 'ITA Centre for Performing Arts',
    city: 'Guwahati',
    date: '2026-05-15',
    time: '7:00 PM IST',
    status: 'upcoming',
    bookingUrl: 'https://in.bookmyshow.com',
    gradient: 'from-cyan-900/40 via-transparent to-emerald-900/20',
  },
  {
    id: 'show_2',
    title: 'NILXNJXN LIVE',
    venue: 'The Piano Man Jazz Club',
    city: 'Delhi',
    date: '2026-06-22',
    time: '8:30 PM IST',
    status: 'upcoming',
    bookingUrl: 'https://in.bookmyshow.com',
    gradient: 'from-violet-900/40 via-transparent to-cyan-900/20',
  },
  {
    id: 'show_3',
    title: 'FRESHWAVE FEST',
    venue: 'Shilpgram Open Arena',
    city: 'Jorhat',
    date: '2026-01-12',
    time: '6:00 PM IST',
    status: 'past',
    gradient: 'from-orange-900/30 via-transparent to-rose-900/20',
    soldOut: true,
  },
  {
    id: 'show_4',
    title: 'UNDERGROUND',
    venue: 'The Blue Frog Basement',
    city: 'Mumbai',
    date: '2025-11-28',
    time: '9:00 PM IST',
    status: 'past',
    gradient: 'from-amber-900/30 via-transparent to-purple-900/20',
    soldOut: true,
  },
];

function formatShowDate(dateStr: string) {
  const date = new Date(dateStr);
  const month = date.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase();
  const day = date.toLocaleDateString('en-IN', { day: '2-digit' });
  const year = date.toLocaleDateString('en-IN', { year: 'numeric' });
  return { month, day, year };
}

type TabFilter = 'upcoming' | 'past';

export function LiveShowsSection() {
  const [activeTab, setActiveTab] = useState<TabFilter>('upcoming');
  const [hoveredShow, setHoveredShow] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredShows = liveShows.filter((s) => s.status === activeTab);
  const activeGradient = hoveredShow
    ? liveShows.find((s) => s.id === hoveredShow)?.gradient
    : null;

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.live-title', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen border-y border-white/5 bg-[#040404] py-32 transition-colors duration-1000"
    >
      {/* Interactive Background Reveal */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          {activeGradient && (
            <motion.div
              key={activeGradient}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={cn('absolute inset-0 bg-linear-to-br', activeGradient)}
            />
          )}
        </AnimatePresence>
        {/* Global Grain Overlay to blend gradients organically */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: 'url("/noise.png")' }}
        />
        {/* Fallback subtle glow */}
        <div className="bg-accent/5 absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-opacity duration-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 space-y-24">
        {/* Section Header */}
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="live-title text-accent font-functional text-[10px] font-bold tracking-[0.5em] uppercase">
              Live Experience
            </span>
            <h2 className="live-title font-expressive text-5xl tracking-normal text-white md:text-8xl">
              Live Shows
            </h2>
          </div>

          {/* Tab Toggle */}
          <div className="live-title flex items-center gap-2">
            {(['upcoming', 'past'] as const).map((tab) => (
              <Magnetic key={tab} strength={0.15}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'font-functional rounded-full border px-8 py-3 text-[9px] font-bold tracking-[0.3em] uppercase transition-all duration-500',
                    activeTab === tab
                      ? 'border-white bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.15)]'
                      : 'border-white/10 bg-white/5 text-white/40 hover:border-white/30 hover:text-white active:scale-95',
                  )}
                >
                  {tab}
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Shows List (Interactive Rows) */}
        <div className="w-full">
          {/* List Header */}
          <div className="hidden grid-cols-12 border-b border-white/20 pb-4 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase md:grid">
            <div className="col-span-2">Date</div>
            <div className="col-span-5">Event</div>
            <div className="col-span-3">Venue</div>
            <div className="col-span-2 text-right">Access</div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex flex-col"
            >
              {filteredShows.length > 0 ? (
                filteredShows.map((show, i) => {
                  const dateInfo = formatShowDate(show.date);
                  const isUpcoming = show.status === 'upcoming';

                  return (
                    <motion.div
                      key={show.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredShow(show.id)}
                      onMouseLeave={() => setHoveredShow(null)}
                      className={cn(
                        'group flex flex-col gap-6 border-b border-white/10 py-8 transition-colors duration-500 hover:border-white/30 md:grid md:grid-cols-12 md:items-center md:gap-0 md:py-12',
                        !isUpcoming && 'opacity-60 hover:opacity-100'
                      )}
                    >
                      {/* Mobile Row Layout */}
                      <div className="flex w-full items-start justify-between md:hidden">
                        <div className="space-y-1">
                          <p className="font-functional text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                            {dateInfo.month} {dateInfo.day}, {dateInfo.year}
                          </p>
                          <h3 className="font-expressive text-3xl text-white transition-all duration-500 group-hover:text-white/90">
                            {show.title}
                          </h3>
                        </div>
                        {isUpcoming && (
                          <div className="mt-1 h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                        )}
                      </div>
                      
                      {/* Mobile Mobile Details & CTA */}
                      <div className="flex w-full items-center justify-between md:hidden">
                         <div className="space-y-1">
                          <p className="font-functional text-sm text-white/70">{show.venue}</p>
                          <p className="font-functional text-[10px] tracking-[0.2em] text-white/30 uppercase">{show.city}</p>
                        </div>
                        {isUpcoming && show.bookingUrl ? (
                          <a
                            href={show.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all active:scale-95"
                          >
                             <HugeiconsIcon icon={Ticket02Icon} size={20} />
                          </a>
                        ) : (
                          <span className="font-functional text-[10px] tracking-widest text-white/20 uppercase">{show.soldOut ? 'Sold Out' : 'Ended'}</span>
                        )}
                      </div>


                      {/* Desktop Row Layout */}
                      {/* Date */}
                      <div className="hidden md:col-span-2 md:block">
                        <div className="flex flex-col transition-transform duration-500 group-hover:translate-x-2">
                           <span className="font-functional text-xl font-light text-white">{dateInfo.day}</span>
                           <span className="font-functional text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                             {dateInfo.month} {dateInfo.year}
                           </span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="hidden md:col-span-5 md:block">
                        <h3 className="font-expressive text-5xl text-white/80 transition-all duration-700 group-hover:translate-x-4 group-hover:text-white lg:text-6xl">
                          {show.title}
                        </h3>
                      </div>

                      {/* Venue */}
                      <div className="hidden md:col-span-3 md:block">
                        <div className="flex flex-col transition-transform duration-500 group-hover:-translate-x-2">
                           <span className="font-functional text-sm text-white/60 group-hover:text-white">{show.venue}</span>
                           <span className="font-functional text-[10px] tracking-[0.2em] text-white/30 uppercase">
                             {show.city}
                           </span>
                        </div>
                      </div>

                      {/* CTA / Status */}
                      <div className="hidden text-right md:col-span-2 md:block">
                        {isUpcoming && show.bookingUrl ? (
                           <div className="flex justify-end">
                              <Magnetic strength={0.2}>
                                <a
                                  href={show.bookingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/btn relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-transparent text-white transition-all hover:w-auto hover:bg-white hover:px-8 hover:text-black"
                                >
                                  <div className="absolute transition-all duration-300 group-hover/btn:opacity-0 group-hover/btn:scale-50">
                                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={24} />
                                  </div>
                                  <span className="font-functional absolute translate-y-8 text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 transition-all duration-300 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
                                    Tickets
                                  </span>
                                </a>
                              </Magnetic>
                           </div>
                        ) : (
                          <span className="font-functional text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase transition-colors group-hover:text-white/40">
                             {show.soldOut ? 'Sold Out' : 'Ended'}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="py-32 text-center opacity-50">
                  <h3 className="font-expressive text-6xl text-white/20 select-none md:text-8xl">
                    {activeTab === 'upcoming' ? 'Transmission Wait' : 'No Archives'}
                  </h3>
                  <p className="text-accent font-functional mt-6 text-[10px] tracking-[0.5em] uppercase">
                    {activeTab === 'upcoming' ? 'Dates unannounced' : 'Nothing recorded yet'}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
