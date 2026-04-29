"use client";

import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDictionary } from "@/lib/demo-params";
import { motion } from "framer-motion";

interface HeroSectionProps {
  field: string;
}

export function HeroSection({ field }: HeroSectionProps) {
  const content = getDictionary(field);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Assets/hero-bg.webp"
          alt="Studio di Fisioterapia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/60 md:bg-background/40" />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
            {content.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-foreground/90 font-medium mb-10 max-w-2xl leading-relaxed">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <SmartLink
              href="/contatti"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-primary/95"
            >
              Prenota un consulto
            </SmartLink>
            <SmartLink
              href="/chi-sono"
              className="px-8 py-4 rounded-md text-lg font-medium text-foreground hover:text-primary transition-colors hover:bg-secondary/50 backdrop-blur-sm"
            >
              Scopri di più
            </SmartLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
