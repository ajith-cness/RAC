export function Marquee() {
  return (
    <div className="bg-brand-dark text-white py-8 md:py-12 overflow-hidden flex whitespace-nowrap border-y border-brand-darker my-12" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
       <div className="animate-marquee flex items-center gap-8 font-serif text-5xl md:text-[80px] italic px-4 text-white/40">
          <span>CONSCIOUSNESS</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span> 
          <span>ACTION</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span> 
          <span>IMPACT</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span> 
          <span>AWARENESS</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span>
          <span>CONSCIOUSNESS</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span> 
          <span>ACTION</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span> 
          <span>IMPACT</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span> 
          <span>AWARENESS</span> 
          <span className="text-brand-accent text-3xl not-italic">✦</span>
       </div>
    </div>
  );
}
