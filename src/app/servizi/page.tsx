import { getDemoParams } from "@/lib/demo-params";
import { SmartLink } from "@/components/smart-link";

export const metadata = { title: "Servizi | Lumina Fisioterapista" };

export default async function ServiziPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  const mainService = params.fieldDisplay;

  const services = [
    {
      title: mainService,
      description: `Il mio ambito di intervento principale. Offro percorsi clinici mirati per la diagnosi, il supporto e la risoluzione delle problematiche specifiche relative a quest'area, promuovendo il benessere psicofisico.`,
      highlight: true
    },
    {
      title: "Consulenza Psicologica Individuale",
      description: "Uno spazio di ascolto e sostegno per affrontare momenti di crisi, difficoltà decisionali o per intraprendere un percorso di conoscenza di sé e di crescita personale.",
      highlight: false
    },
    {
      title: "Sostegno alla Genitorialità",
      description: "Percorsi rivolti a genitori che affrontano difficoltà nella gestione dei figli, nelle transizioni del ciclo di vita familiare o che desiderano migliorare le proprie competenze educative.",
      highlight: false
    },
    {
      title: "Gestione di Ansia e Stress",
      description: "Interventi specifici per imparare a riconoscere e gestire i sintomi ansiosi, gli attacchi di panico e le situazioni di forte stress legato al lavoro o alle relazioni.",
      highlight: false
    }
  ];

  return (
    <div className="py-24 bg-secondary/10 min-h-[calc(100vh-140px)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Aree di Intervento
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Scopri i principali servizi offerti dallo studio. Ogni percorso è
            personalizzato e concordato insieme al paziente dopo un'attenta fase di valutazione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl shadow-sm border transition-shadow hover:shadow-md flex flex-col justify-center ${
                service.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-background border-border/50"
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-4 ${service.highlight ? "text-primary-foreground" : "text-primary"}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed text-[17px] ${service.highlight ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SmartLink
            href="/contatti"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md"
          >
            Richiedi maggiori informazioni
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
