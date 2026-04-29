"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FDF8F5] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
          {/* Decorative Quote */}
          <Quote className="absolute top-10 left-10 w-24 h-24 text-primary/5 -rotate-12" />

          <div className="flex-1 relative z-10">
            <h3 className="text-2xl md:text-4xl font-heading font-medium text-foreground leading-relaxed mb-10">
              "They managed to get me to share all the problems I was experiencing. They also listened and discussed the problems I was experiencing in great detail without being patronizing or judging."
            </h3>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                S
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Shirline Shevane</p>
                <p className="text-muted-foreground text-sm">Physical Health Patient</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-xl">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 shrink-0">
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/Assets/hero-bg.webp" 
                alt="Patient Review" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
