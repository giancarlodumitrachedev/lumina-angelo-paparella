import { getDemoParams } from "@/lib/demo-params";
import { SmartLink } from "@/components/smart-link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Servizi | Lumina Fisioterapista" };

const serviziAree = [
  "Terapia Manuale ed Osteopatia",
  "Riabilitazione Post-Operatoria",
  "Rieducazione Posturale Globale",
  "Terapie Strumentali (Tecar, Laser, Ultrasuoni)",
  "Recupero Traumi Sportivi",
  "Trattamento Cervicalgie e Lombalgie",
  "Massoterapia Decontratturante"
];

const beneficiAree = [
  "Riduzione immediata del dolore acuto e cronico",
  "Recupero completo della mobilità articolare",
  "Prevenzione delle ricadute e degli infortuni",
  "Miglioramento delle performance fisiche",
  "Riattivazione del microcircolo e del trofismo muscolare"
];

export default async function ServiziPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);

  return (
    <div className="py-24 bg-secondary/10 min-h-[calc(100vh-140px)]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Prima Sezione */}
        <div className="text-center mb-16">
          <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Aree di Trattamento
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Offro percorsi di riabilitazione personalizzati utilizzando le più avanzate tecniche manuali e strumentali per il recupero fisico.
          </p>
        </div>

        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 mb-16">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {serviziAree.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Seconda Sezione */}
        <div className="text-center mb-16">
          <h2 className="text-secondary-foreground font-heading text-3xl md:text-4xl font-semibold mb-6">
            I Benefici del Percorso
          </h2>
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 shadow-sm border border-primary/20">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {beneficiAree.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 leading-snug font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <SmartLink
            href="/contatti"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md"
          >
            Prenota la prima seduta
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
