import { Hero } from './components/Hero';
import { TextSection } from './components/TextSection';
import { ConsciousnessInAction } from './components/ConsciousnessInAction';
import { RippleEffect } from './components/RippleEffect';
import { Marquee } from './components/Marquee';
import { FooterCTA } from './components/FooterCTA';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-dark selection:text-brand-bg font-sans">
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        
        <div className="bg-brand-bg relative mt-8">
          
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0 mt-24 px-6 lg:px-12">
            <TextSection title="WHAT IS A RANDOM ACT OF CONSCIOUSNESS?" className="px-0 lg:px-12 py-16 md:py-32 m-0 max-w-none">
              <p>
                A Random Act of Consciousness is a simple action taken with <span className="italic text-brand-accent font-serif tracking-wide ml-1 cursor-default">awareness</span> and <span className="italic text-brand-accent font-serif tracking-wide ml-1 cursor-default">intention</span> that creates a positive impact on another person, a community, or the world around us.
              </p>
              <div className="font-sans text-xl md:text-2xl font-bold tracking-tight space-y-3 py-8 text-brand-blue opacity-90">
                <p>It is not about recognition.</p>
                <p>It is not about reward.</p>
                <p>It is not about being seen.</p>
              </div>
              <p>
                It is about choosing to act from a deeper place of awareness.
              </p>
              <p className="font-serif italic text-2xl md:text-3xl border-l-[3px] border-brand-accent pl-8 my-10 text-brand-text bg-white/50 py-6 pr-6 rounded-r-3xl">
                Because consciousness is not measured by what we know.<br />
                <span className="font-bold not-italic font-sans text-xl inline-block mt-4">It is revealed by what we do.</span>
              </p>
            </TextSection>
            
            <div className="h-[400px] lg:h-[650px] w-full rounded-[40px] overflow-hidden shadow-xl relative order-first lg:order-last">
               <img src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=2000" alt="Meditation and consciousness" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-brand-blue/10 mix-blend-overlay"></div>
               <div className="absolute right-8 top-8 w-24 h-24 rounded-full border border-white/30 backdrop-blur-md flex flex-col justify-center items-center text-white p-2">
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase mt-1">Global</span>
               </div>
            </div>
          </div>

          <ConsciousnessInAction />

          <RippleEffect />
          
          <Marquee />

          <FooterCTA />
        </div>
      </div>
    </div>
  );
}
