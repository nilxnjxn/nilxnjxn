import { Metadata } from "next";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";
import { ArrowLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const metadata: Metadata = {
  title: "Privacy Policy | NILXNJXN",
  description: "How we handle your data at NILXNJXN. Transparency, security, and artist-first privacy.",
};

export default function PrivacyPage() {
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
            Privacy
          </h1>
          <p className="text-muted-foreground font-functional text-sm tracking-[0.4em] uppercase font-light">
            Effective March 2026
          </p>
        </header>

        <div className="grid gap-12 text-white/70 font-functional leading-relaxed">
          <section className="space-y-6 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
            <h2 className="text-white text-xl uppercase tracking-widest font-bold">01. Collective Data</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>We only collect what is necessary to deliver the sound. This includes:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                <li><span className="text-white">Order Information:</span> Email, name, and transaction ID for secure download delivery.</li>
                <li><span className="text-white">Technical Identifiers:</span> IP address and browser type for fraud prevention and edge delivery optimization.</li>
                <li><span className="text-white">Usage Analytics:</span> Anonymized data on how you interact with the waves to improve the experience.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6 p-8 md:p-12">
            <h2 className="text-white text-xl uppercase tracking-widest font-bold">02. Handling & Security</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>Your data is never for sale. It resides at the edge of the network, protected by industry-standard encryption.</p>
              <p>Payments are handled exclusively via <span className="text-accent">Razorpay</span>. We never store or see your credit card or sensitive financial details. Communications are delivered via <span className="text-accent">Resend</span> under strict authentication protocols.</p>
            </div>
          </section>

          <section className="space-y-6 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
            <h2 className="text-white text-xl uppercase tracking-widest font-bold">03. Global Rights (GDPR/CCPA)</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>Wherever you are in the world, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                <li>Access all personal data we hold about you.</li>
                <li>Request the complete erasure of your digital footprint from our servers.</li>
                <li>Object to any processing based on legitimate interests.</li>
              </ul>
              <p className="pt-4 italic text-white/40">To exercise these rights, contact the source: hello@nilxnjxn.com</p>
            </div>
          </section>
        </div>

        <footer className="pt-12 border-t border-white/5 text-center">
          <p className="text-muted-foreground font-functional text-[10px] uppercase tracking-widest">
            NILXNJXN — Independent Digital Infrastructure
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
