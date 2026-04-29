import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Chi Sono | Lumina Fisioterapista" };

export default async function ChiSonoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  
  const imageUrl = params.isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Chi Sono
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={imageUrl}
              alt={`Ritratto di ${params.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {params.name} <span className="text-foreground/50 font-normal">| {params.fieldDisplay}</span>
            </h2>
            <p className="mb-4">
              Ho effettuato il mio percorso di laurea tra tirocinio e università in Puglia, dove successivamente ho lavorato e ho fatto un&apos;importante esperienza sul campo.
            </p>
            <p className="mb-4">
              Attualmente esercito nella città di Torino. Ogni giorno coltivo la passione profonda per questo lavoro, guidato da sempre dal mio forte interesse per la cura del corpo umano e la sua anatomia.
            </p>
            <p className="mb-8 font-medium">
              Mi piace creare con i miei pazienti un rapporto empatico, entrare in connessione e imparare ad ascoltarli veramente al fine di poter essere un supporto concreto per la riconquista di un nuovo equilibrio.
            </p>

            <div className="p-6 bg-secondary/5 rounded-xl border border-secondary/10 italic text-primary/80 text-lg mb-8">
              &quot;Prima ascolto la persona che ho davanti, e solo dopo il paziente.&quot;
            </div>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md no-underline"
            >
              Prenota una prima visita
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
