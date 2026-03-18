import { Metadata } from "next";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";
import { ArrowLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const metadata: Metadata = {
  title: "Terms of Service | NILXNJXN",
  description: "Digital licensing, usage rights, and the legal framework for NILXNJXN distribution.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 selection:bg-accent selection:text-black">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Back Navigation */}
        <Magnetic strength={0.2}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group"
          >
            <HugeiconsIcon 
              icon={ArrowLeftIcon} 
              size={18} 
              className="group-hover:-translate-x-1 transition-transform" 
            />
            <span className="text-[10px] uppercase tracking-[0.3em] font-functional mt-1">Back</span>
          </Link>
        </Magnetic>

        <header className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-expressive text-white tracking-tighter">
            Terms
          </h1>
          <p className="text-muted-foreground font-functional text-sm tracking-[0.4em] uppercase font-light">
            Digital License v1.0
          </p>
        </header>

        <div className="grid gap-12 text-white/70 font-functional leading-relaxed">
          <section className="space-y-6 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
            <h2 className="text-white text-xl uppercase tracking-widest font-bold">01. Intellectual Property</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>All music, audio files, digital art, logos, and visual assets available on this platform are the exclusive property of <span className="text-white font-bold tracking-wider">NILXNJXN</span>.</p>
              <p>Upon purchase, you are granted a <span className="text-accent underline decoration-accent/30 underline-offset-4">Non-Exclusive Personal Use License</span>. This is not a transfer of ownership.</p>
            </div>
          </section>

          <section className="space-y-6 p-8 md:p-12">
            <h2 className="text-white text-xl uppercase tracking-widest font-bold">02. Usage & Restrictions</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p><span className="text-white font-medium">YOU ARE PERMITTED TO:</span> Listen, enjoy, and keep for personal archival purposes.</p>
              <p className="text-white font-medium">YOU ARE STRICKLY PROHIBITED FROM:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-red-500/50">
                <li>Reselling, redistributing, or leasing any digital file.</li>
                <li>Using the audio for commercial synchronized projects without an additional Commercial Sync License.</li>
                <li>Utilizing any asset for NFT minting or blockchain-based distribution.</li>
                <li>Submitting any audio/visual asset to AI training models or machine learning datasets.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
            <h2 className="text-white text-xl uppercase tracking-widest font-bold">03. Returns & Refunds</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>Due to the irreversible nature of digital downloads, <span className="text-white font-bold">ALL SALES ARE FINAL</span> once a download link has been generated or delivered.</p>
              <p>If you experience technical failure or file corruption, contact us within 48 hours for a replacement link.</p>
            </div>
          </section>
        </div>

        <footer className="pt-12 border-t border-white/5 text-center">
          <p className="text-muted-foreground font-functional text-[10px] uppercase tracking-widest">
            By interacting with this platform, you accept these terms.
          </p>
        </footer>
      </div>

      {/* Narrative Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
        <img src="/noise.png" alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
