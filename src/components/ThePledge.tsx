import { motion } from 'motion/react';

const pledgeLines = [
  "I recognize that my actions shape the world around me.",
  "I choose awareness over indifference.",
  "Compassion over judgment.",
  "Responsibility over avoidance.",
  "Unity over division.",
  "I commit to making consciousness visible through my actions.",
  "Through the choices I make.",
  "Through the people I serve.",
  "Through the impact I create.",
  "One act at a time.",
  "One day at a time.",
  "One life at a time."
];

export function ThePledge() {
  return (
    <section className="py-32 px-6 bg-brand-text text-brand-bg relative overflow-hidden" id="pledge">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] font-sans font-bold tracking-[0.3em] text-brand-bg opacity-50 uppercase mb-12">
            THE PLEDGE
          </h2>
          
          <div className="space-y-6 md:space-y-8 font-serif text-2xl md:text-4xl leading-tight md:leading-snug">
            {pledgeLines.map((line, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index > 0 && index < 5 ? "italic text-brand-accent" : "font-serif italic"}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div 
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
             <button className="px-8 py-4 bg-brand-accent text-white font-sans font-bold tracking-[0.2em] text-[11px] uppercase hover:bg-white hover:text-brand-text transition-colors duration-300 shadow-lg">
               Take The Pledge
             </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
