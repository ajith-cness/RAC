import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Paperclip, Send, Loader2, X } from 'lucide-react';

export function FooterCTA() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.preventDefault();
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add some FormSubmit specific configurations
    formData.append('_captcha', 'false');
    formData.append('_subject', 'New Conscious Act Submitted');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ajith@cness.co', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Your conscious act is received. Thank you!');
        form.reset();
        setAttachedFile(null);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <footer className="py-24 md:py-32 px-6 border-t border-brand-text/10 bg-brand-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[50px] md:text-[70px] lg:text-[90px] leading-[0.85] font-sans font-black tracking-tighter text-brand-text uppercase mb-12">
            WHAT WILL <br/>
            YOUR ACT BE<br/>
            <span className="text-brand-accent italic font-serif font-light lowercase">today?</span>
          </h2>
          
          <div className="font-serif italic text-lg md:text-xl text-brand-text opacity-70 space-y-4 mb-20">
            <p>The future is not waiting to be built.</p>
            <p className="text-brand-text font-bold opacity-100">It is being built right now.</p>
            <p className="text-2xl text-brand-text opacity-90">In classrooms. In homes. In workplaces. In communities.</p>
            <p>In quiet moments that may never make headlines.</p>
            <p>But change lives nonetheless.</p>
            <div className="pt-8 text-brand-text opacity-100">
              <p className="font-sans text-sm font-bold tracking-[0.2em] uppercase">The next Random Act of Consciousness begins with a choice.</p>
              <p className="font-serif italic text-3xl mt-4 text-brand-accent">Your choice.</p>
            </div>
          </div>

          <div id="pledge" className="w-full max-w-xl mx-auto mb-20 mt-8 relative scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-brand-blue/10 rounded-[2rem] blur-2xl -z-10"></div>
            <div className="bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
              
              <h3 className="font-serif text-3xl text-brand-dark mb-2 text-center relative z-10">Consciousness Made Visible</h3>
              <p className="font-sans text-xs text-brand-dark/60 text-center mb-8 tracking-wide font-medium relative z-10">Share your act with the world.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {message && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/70 px-1">Name</label>
                    <input type="text" name="name" required disabled={status === 'submitting'} className="w-full bg-white/40 border border-white/60 focus:border-brand-accent/60 outline-none rounded-xl px-4 py-3 text-sm text-brand-dark transition-all placeholder:text-brand-dark/30 shadow-inner disabled:opacity-50" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/70 px-1">Email</label>
                    <input type="email" name="email" required disabled={status === 'submitting'} className="w-full bg-white/40 border border-white/60 focus:border-brand-accent/60 outline-none rounded-xl px-4 py-3 text-sm text-brand-dark transition-all placeholder:text-brand-dark/30 shadow-inner disabled:opacity-50" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/70 px-1">Country</label>
                  <input type="text" name="country" required disabled={status === 'submitting'} className="w-full bg-white/40 border border-white/60 focus:border-brand-accent/60 outline-none rounded-xl px-4 py-3 text-sm text-brand-dark transition-all placeholder:text-brand-dark/30 shadow-inner disabled:opacity-50" placeholder="Where are you from?" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/70 px-1">Your Conscious Act</label>
                  <textarea name="conscious_act" required disabled={status === 'submitting'} rows={3} className="w-full bg-white/40 border border-white/60 focus:border-brand-accent/60 outline-none rounded-xl px-4 py-3 text-sm text-brand-dark transition-all placeholder:text-brand-dark/30 resize-none shadow-inner disabled:opacity-50" placeholder="Tell us what you did..."></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-dark/5">
                  <div className="w-full sm:w-auto">
                    <label className={`flex items-center gap-2 cursor-pointer text-brand-dark/70 hover:text-brand-accent transition-colors w-full sm:w-auto ${status === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center border border-white/60 shadow-sm transition-all hover:bg-white/80 shrink-0">
                        <Paperclip size={18} />
                      </div>
                      <span className="text-xs font-semibold tracking-wide">Attach File</span>
                      <input type="file" name="attachment" ref={fileInputRef} onChange={handleFileChange} className="hidden" disabled={status === 'submitting'} />
                    </label>

                    {attachedFile && (
                      <div className="flex items-center justify-between gap-2 bg-white/60 border border-brand-dark/10 shadow-sm px-3 py-1.5 rounded-lg mt-3 w-full animate-in fade-in slide-in-from-top-2 duration-300">
                         <span className="text-xs text-brand-dark/80 font-medium truncate flex-1">{attachedFile.name}</span>
                         <button type="button" onClick={handleRemoveFile} className="text-brand-dark/60 hover:text-red-500 transition-colors hover:bg-white rounded p-1 shrink-0">
                            <X size={14} />
                         </button>
                      </div>
                    )}
                  </div>
                  
                  <button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto bg-brand-dark text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 shadow-lg group disabled:opacity-70 disabled:cursor-not-allowed h-fit mt-auto shrink-0">
                    {status === 'submitting' ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 size={14} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Share Act</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] font-bold font-sans tracking-[0.2em] uppercase mb-16 border-t border-brand-text/10 pt-12">
            <a href="#pledge" className="text-brand-text hover:text-brand-accent transition-colors">Take The Pledge</a>
            <a href="#share" className="text-brand-text hover:text-brand-accent transition-colors">Share Your Act</a>
            <a href="#share" className="text-brand-text hover:text-brand-accent transition-colors">Join The Movement</a>
          </div>

          <p className="text-[10px] font-sans text-brand-text opacity-40 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Random Acts of Consciousness. One Shared Future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

