"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SmartLink } from "@/components/smart-link";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Let's start your consultation for better feeling to start your days
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto">
              Professional therapy sessions and physiotherapy support adapted to your schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SmartLink 
                href="/contatti"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
              >
                Let's start consultation
              </SmartLink>
              <SmartLink 
                href="/servizi"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Our Services
              </SmartLink>
            </div>
          </motion.div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Lumina</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Professional physiotherapy support and Physical Health care.
            </p>
            <div className="text-white/50 text-sm space-y-2">
              <p>📍 10027 Via Roma, Milano, Italia</p>
              <p>✉️ contatti@luminadigital.it</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Patients</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/servizi" className="hover:text-primary transition-colors">Find a Service</Link></li>
              <li><Link href="/chi-sono" className="hover:text-primary transition-colors">Video Consult</Link></li>
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/chi-sono" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/servizi" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/termini" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 LUMINA. All Rights Reserved.</p>
          <p>Powered by <a href="https://www.luminadigital.it" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-white/60">Lumina™</a></p>
        </div>

      </div>
    </footer>
  );
}
