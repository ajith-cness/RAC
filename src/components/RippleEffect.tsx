import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function RippleEffect() {
  return (
    <section className="bg-white py-32 mt-12 rounded-[48px] border-t border-brand-dark/5 mx-4 md:mx-6 shadow-sm mb-24" id="ripple">
      <div className="max-w-4xl mx-auto text-center px-6 mb-24">
        <h2 className="text-5xl md:text-7xl font-serif text-brand-dark mb-8 tracking-tight">The Ripple Effect</h2>
        <p className="text-xl md:text-2xl font-sans font-light text-brand-dark/70 leading-relaxed max-w-2xl mx-auto">
          Every action creates a ripple. A ripple influences a person, a family, a community, a society. The future is shaped by countless moments of conscious action.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="rounded-[40px] overflow-hidden aspect-[4/5] bg-brand-dark relative shadow-xl"
        >
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200" alt="Ripple in water" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-serif text-4xl text-white mb-2">One Ripple</h3>
            <p className="font-sans text-white/70">At a time</p>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-6 md:pl-8">
           <div className="bg-brand-bg p-8 hover:bg-brand-dark hover:text-white transition-colors duration-500 group rounded-[32px] shadow-sm border border-brand-dark/5 flex gap-6 items-center">
              <div className="hidden sm:block w-24 h-24 rounded-full overflow-hidden bg-brand-dark shrink-0">
                 <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-brand-dark group-hover:text-white mb-2 transition-colors">One Person</h3>
                <p className="font-sans text-sm text-brand-dark/70 group-hover:text-white/70 mb-4 transition-colors">Our collection of actions is designed to add warmth, comfort, and beauty to your community.</p>
              </div>
           </div>

           <div className="bg-brand-bg p-8 hover:bg-brand-dark hover:text-white transition-colors duration-500 group rounded-[32px] shadow-sm border border-brand-dark/5 flex gap-6 items-center">
              <div className="hidden sm:block w-24 h-24 rounded-full overflow-hidden bg-brand-dark shrink-0">
                 <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-brand-dark group-hover:text-white mb-2 transition-colors">One Choice</h3>
                <p className="font-sans text-sm text-brand-dark/70 group-hover:text-white/70 mb-4 transition-colors">The world rarely changes all at once. It changes through countless moments of action.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
