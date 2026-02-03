'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Construction } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm">{'// PROJECTS'}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Under Construction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center py-20 rounded-xl bg-surface border border-white/5"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Construction size={64} className="text-accent mb-6" />
          </motion.div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
            Under Construction
          </h3>
          <p className="text-muted text-center max-w-md">
            Exciting projects coming soon. Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
