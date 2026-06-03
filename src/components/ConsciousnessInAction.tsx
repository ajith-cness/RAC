import { motion } from 'motion/react';
import { ArrowUpRight, Heart, Users, Globe, Building } from 'lucide-react';

export function ConsciousnessInAction() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full" id="action">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-dark tracking-tight leading-none mb-4">Consciousness<br/>In Action</h2>
        </div>
        <a href="#pledge" className="flex items-center gap-3 border border-brand-dark rounded-full px-6 py-3 font-sans text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-brand-dark hover:text-white transition-colors duration-300 cursor-pointer">
          Share Your Act <span className="bg-brand-dark text-white rounded-full p-1.5"><ArrowUpRight size={14}/></span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
        {/* Column 1: Tall Card */}
        <motion.div 
           whileHover={{ y: -5 }}
           className="lg:col-span-4 rounded-[40px] bg-brand-dark text-white overflow-hidden relative group shadow-lg min-h-[400px]"
        >
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="People" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-in-out mix-blend-luminosity" />
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-dark/60 to-transparent"></div>
          
          <div className="relative h-full flex flex-col p-10 z-10 justify-between">
            <div className="flex justify-between items-start">
              <div>
                 <p className="font-sans text-xs tracking-widest uppercase font-bold mb-2">Explore Acts</p>
                 <p className="font-sans text-sm opacity-60">For People</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                <Heart size={16} />
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="font-serif text-4xl mb-4">Individual Care</h3>
              <ul className="font-sans text-sm opacity-80 border-t border-white/20 pt-6 space-y-3 font-light">
                <li>✦ Checking in on someone struggling.</li>
                <li>✦ Listening without interrupting.</li>
                <li>✦ Offering encouragement.</li>
                <li>✦ Choosing understanding over judgment.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Text + Wide Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="px-4 py-4 mt-6">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-accent font-bold mb-4">Global Initiative</p>
            <p className="font-serif italic text-[28px] text-brand-dark/90 leading-snug">
               Our collection of modern, timeless, and smart actions is designed to add warmth, comfort, and beauty to your home and grand living communities.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex-1 rounded-[40px] overflow-hidden relative group bg-brand-bg shadow-lg min-h-[300px]"
          >
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" alt="Community" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
              <div>
                 <h3 className="font-serif text-3xl text-white mb-2">For Communities</h3>
                 <p className="font-sans text-sm text-white/80 font-light">Building bridges and leading local initiatives.</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors cursor-pointer">
                 <Users size={20} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column 3: Stacked Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex-1 rounded-[40px] overflow-hidden relative group bg-brand-dark shadow-lg min-h-[250px]"
          >
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Organization" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-in-out mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-dark/40 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
              <div>
                 <h3 className="font-serif text-2xl text-white mb-2">Organizations</h3>
                 <p className="font-sans text-xs text-white/70 font-light">Leading with integrity</p>
              </div>
              <div className="w-10 h-10 rounded-[14px] bg-white flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors cursor-pointer">
                 <Building size={16} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
             whileHover={{ y: -5 }}
             className="flex-1 rounded-[40px] overflow-hidden relative group bg-brand-dark shadow-lg min-h-[250px]"
          >
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Planet" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
             <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-dark/40 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
              <div>
                 <h3 className="font-serif text-2xl text-white mb-2">The Planet</h3>
                 <p className="font-sans text-xs text-white/70 font-light">Protecting resources</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(201,151,46,0.5)] shrink-0 cursor-pointer group-hover:bg-white group-hover:text-brand-accent transition-colors">
                 <Globe size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
