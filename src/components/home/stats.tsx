"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "People Helped", suffix: "+" },
  { value: "10", label: "Years of Experience", suffix: "" },
  { value: "8500", label: "Therapy Hours", suffix: "+" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-background border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground leading-snug">
            We have vast experience in physiotherapy, Physical Health assistance, and healing a lot of people.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-primary font-heading tracking-tight">
                  {stat.value}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
