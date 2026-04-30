"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Brain, HeartPulse } from "lucide-react";
const issues = [
  { title: "Recupero Post-Traumatico", description: "Riabilitazione attenta per farti ritrovare la mobilità dopo un infortunio sportivo o lavorativo.", icon: <ShieldAlert className="w-6 h-6" /> },
  { title: "Dolori Articolari e Muscolari", description: "Interventi mirati per risolvere l'infiammazione e i sovraccarichi cronici (cervicalgie, lombalgie).", icon: <Brain className="w-6 h-6" /> },
  { title: "Cura del Corpo Umano", description: "Studio dell'anatomia e della tua struttura per correggere le abitudini errate alla radice.", icon: <HeartPulse className="w-6 h-6" /> }
];
export function IssuesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-secondary-foreground font-heading text-3xl md:text-5xl font-semibold mb-6">Aree di Competenza</h2>
          <p className="text-lg text-foreground/80">Affrontiamo le sfide insieme, costruendo un percorso su misura per te.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((i, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-card p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">{i.icon}</div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">{i.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{i.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}