"use client";

import { motion } from "framer-motion";

const companies = [
  "HappyFresh", "Allianz", "Halodoc", "Gojek", "BSI", "Danone"
];

export function LogosSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-secondary/50 text-primary text-[10px] font-bold mb-6 tracking-widest uppercase">
          Trusted Partners
        </span>
        <h3 className="text-xl md:text-2xl font-heading font-semibold mb-12 text-foreground/90">
          Trusted by personal, company, and<br className="hidden md:block" /> education institution
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-lg md:text-xl font-bold text-foreground/50 hover:text-primary transition-colors"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
