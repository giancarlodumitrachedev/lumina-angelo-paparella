"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Video, BookOpen, Users } from "lucide-react";

const servicesList = [
  {
    title: "Online 1 on 1 Consultation",
    desc: "Personalized online therapy sessions from the comfort of your home.",
    icon: Video,
    active: true,
  },
  {
    title: "Supervision",
    desc: "Professional supervision and continuous training for psychologists.",
    icon: Users,
    active: false,
  },
  {
    title: "Psychoeducation",
    desc: "Workshops and materials to better understand Physical Health.",
    icon: BookOpen,
    active: false,
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary text-xs font-bold mb-4 tracking-wider uppercase">
            Physical Health Services
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground leading-tight">
            We have the best physiotherapy services in the country
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-muted">
              <Image 
                src="/Assets/studio-2.webp"
                alt="Therapy Service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full -z-10" />
          </motion.div>

          <div className="flex flex-col gap-6">
            {servicesList.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 rounded-2xl border transition-all ${
                  srv.active 
                  ? "bg-secondary border-primary/20 shadow-md" 
                  : "bg-background border-border/50 hover:border-primary/30"
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${srv.active ? "text-primary-foreground" : "text-foreground"}`}>
                  <span className={srv.active ? "text-primary" : ""}>{srv.title}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
