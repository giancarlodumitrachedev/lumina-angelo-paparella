"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SmartLink } from "@/components/smart-link";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Inizia oggi il tuo percorso verso il benessere
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto">
              Sessioni professionali e supporto personalizzato adattato alle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SmartLink href="/contatti" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25">
                Prenota un consulto
              </SmartLink>
              <SmartLink href="/servizi" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Scopri i servizi
              </SmartLink>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Lumina</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Supporto professionale per la tua salute e il tuo benessere.
            </p>
            <div className="text-white/50 text-sm space-y-2">
              <p>✉️ contatti@luminadigital.it</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Pazienti</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/servizi" className="hover:text-primary transition-colors">Aree di Intervento</Link></li>
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Prenota Appuntamento</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Studio</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/chi-sono" className="hover:text-primary transition-colors">Chi Sono</Link></li>
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Contatti</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Note Legali</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/termini" className="hover:text-primary transition-colors">Termini di Servizio</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 LUMINA. Tutti i diritti riservati.</p>
          <p>Powered by <a href="https://www.luminadigital.it" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-white/60">Lumina™</a></p>
        </div>
      </div>
    </footer>
  );
}
