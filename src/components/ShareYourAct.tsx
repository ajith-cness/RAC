import { motion } from 'motion/react';

export function ShareYourAct() {
  return (
    <section className="w-full" id="share">
      <div className="max-w-xl mx-auto text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] font-bold font-sans tracking-[0.3em] text-brand-accent uppercase mb-8">
            SHARE YOUR ACT
          </h2>
          
          <div className="font-serif text-3xl lg:text-4xl leading-tight text-brand-text space-y-4 mb-10">
            <p>Every conscious act has the power to inspire another.</p>
            <p className="italic text-brand-blue">Share your story.</p>
            <p className="italic text-brand-blue">Celebrate others.</p>
            <p className="italic text-brand-blue">Create a ripple.</p>
          </div>

          <p className="font-serif italic text-lg text-brand-text opacity-70 leading-relaxed mb-10">
            Join a growing global community proving that meaningful change begins with simple acts of awareness, responsibility, and care. 
            Because when consciousness becomes action, action becomes impact.
            <br/><br/>
            <strong className="text-brand-text font-sans font-medium opacity-100">And impact becomes transformation.</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
             <button className="w-full sm:w-auto border border-brand-text px-8 py-4 text-brand-text font-sans font-bold tracking-[0.2em] text-[11px] uppercase hover:bg-brand-text hover:text-brand-bg transition-colors duration-300">
               Share Your Act
             </button>
             <button className="w-full sm:w-auto bg-brand-accent border border-brand-accent px-8 py-4 text-white font-sans font-bold tracking-[0.2em] text-[11px] uppercase hover:bg-brand-accent/90 transition-colors duration-300 shadow-lg shadow-brand-accent/30">
               Join The Movement
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
