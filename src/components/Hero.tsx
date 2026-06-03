import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const carouselImages = [
  "https://images.unsplash.com/photo-1593113565694-c89b7365acbe?auto=format&fit=crop&q=80&w=400&h=500",
  "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=400&h=500",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=500",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400&h=500",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=400&h=500",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=500",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400&h=500",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 bg-brand-bg w-full pt-32 pb-16 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="z-20 text-center flex flex-col items-center w-full mt-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-4 gap-12 md:gap-8">
          <div className="w-full md:w-[35%] flex justify-center md:justify-end items-center">
            <img 
              src="https://res.cloudinary.com/dn1fk8h6o/image/upload/v1780495188/rac_logo_pg3fbb.png" 
              alt="Random Acts of Consciousness" 
              className="w-full max-w-[320px] md:max-w-[450px] object-contain drop-shadow-xl" 
            />
          </div>
          
          <div className="w-full md:w-[65%] text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-6xl md:text-[60px] lg:text-[84px] font-sans font-bold tracking-tight text-brand-dark mb-4 leading-[1.05]">
              Random Acts of <br className="hidden md:block"/> Consciousness
            </h1>
            
            <div className="relative mt-4 flex flex-col items-center">
              <p className="font-sans text-sm md:text-lg lg:text-2xl text-brand-dark/80 tracking-wide font-medium leading-relaxed">
                One Earth. One Humanity. One Shared Future.
              </p>
              
              <div className="mt-10 flex justify-center">
                 <a href="#pledge" className="inline-block bg-brand-dark text-white px-10 py-4 rounded-full text-sm font-bold tracking-[0.1em] uppercase hover:bg-brand-accent transition-transform hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(201,151,46,0.3)] duration-300">
                    Take The Pledge
                 </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel / Slider */}
        <div className="w-[100vw] relative mt-16 mb-20 overflow-hidden flex" style={{ width: '100vw', transform: 'translateX(-50%)', left: '50%' }}>
            <div className="flex animate-marquee shrink-0">
              {carouselImages.map((img, i) => (
                <div key={i} className="w-[180px] h-[260px] md:w-[240px] md:h-[340px] lg:w-[260px] lg:h-[360px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 mx-2 md:mx-3 shadow-lg bg-brand-dark/10">
                  <img src={img} alt="Consciousness Action" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee shrink-0" aria-hidden="true">
              {carouselImages.map((img, i) => (
                <div key={i} className="w-[180px] h-[260px] md:w-[240px] md:h-[340px] lg:w-[260px] lg:h-[360px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 mx-2 md:mx-3 shadow-lg bg-brand-dark/10">
                  <img src={img} alt="Consciousness Action" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays for smooth fade out on edges */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>
        </div>



      </motion.div>
    </section>
  );
}
