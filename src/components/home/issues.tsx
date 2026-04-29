"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const issues = [
  { id: 1, title: "Anxiety Disorders", img: "/Assets/studio-1.webp" },
  { id: 2, title: "Anger Management", img: "/Assets/studio-2.webp" },
  { id: 3, title: "Social Anxiety", img: "/Assets/studio-3.webp" },
  { id: 4, title: "Depression", img: "/Assets/studio-1.webp" },
  { id: 5, title: "Personal Growth", img: "/Assets/studio-2.webp" },
  { id: 6, title: "Panic Attacks", img: "/Assets/studio-3.webp" },
];

export function IssuesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary text-xs font-bold mb-4 tracking-wider uppercase">
            physiotherapy Issues
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
            physiotherapy issues that<br className="hidden md:block" /> we deal with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {issues.map((issue, idx) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden bg-muted"
            >
              <Image 
                src={issue.img} 
                alt={issue.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 bg-background/95 backdrop-blur px-5 py-2.5 rounded-full shadow-lg">
                  <span className="text-foreground font-semibold text-sm">{issue.title}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button className="px-8 py-3 rounded-full border-2 border-border text-foreground font-semibold hover:bg-secondary hover:text-primary hover:border-secondary transition-colors">
            View All
          </button>
        </motion.div>
      </div>
    </section>
  );
}
