import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TextSectionProps {
  title: string;
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function TextSection({ title, children, align = 'left', className = '' }: TextSectionProps) {
  return (
    <section className={`py-24 md:py-32 px-6 max-w-3xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
      >
        <h2 className="text-[10px] font-sans tracking-[0.3em] font-bold text-brand-accent uppercase mb-8 md:mb-12">
          {title}
        </h2>
        <div className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-snug text-brand-text space-y-8">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
