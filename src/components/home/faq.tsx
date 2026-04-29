"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is therapy?",
    a: "Therapy is a process of meeting with a therapist to resolve problematic behaviors, beliefs, feelings, relationship issues, and/or somatic responses."
  },
  {
    q: "How often should I go to therapy?",
    a: "It depends on your individual needs. Usually, sessions are held once a week, but can be more or less frequent."
  },
  {
    q: "How long does a session last?",
    a: "A typical therapy session lasts for 45 to 50 minutes."
  },
  {
    q: "Is everything I say confidential?",
    a: "Yes, confidentiality is a cornerstone of therapy. Exceptions only occur in cases of imminent risk to self or others."
  },
  {
    q: "Do you prescribe medication?",
    a: "As psychologists, we do not prescribe medication. However, we can refer you to a trusted psychiatrist if medication is deemed necessary."
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
            Frequently asked question
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`border-b border-border/50 pb-4 overflow-hidden transition-all duration-300 ${isOpen ? "bg-secondary/20 rounded-xl p-6 border-transparent" : "p-4"}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? 16 : 0 }}
                  className="text-muted-foreground leading-relaxed overflow-hidden"
                >
                  {faq.a}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary hover:text-primary hover:border-secondary transition-colors text-sm">
            For personal answers
          </button>
        </div>
      </div>
    </section>
  );
}
