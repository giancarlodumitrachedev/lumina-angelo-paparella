import { ContactForm } from "@/components/contact-form";
import { getDemoParams } from "@/lib/demo-params";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = { title: "Contatti | Lumina Fisioterapista" };

export default async function ContattiPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  const safeCityUrlString = params.city.toLowerCase().replace(/[^a-z]/g, "");

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Contatti
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Siamo qui per ascoltarti. Compila il modulo sottostante per richiedere 
            maggiori informazioni o per prenotare un primo colloquio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          <div className="order-1 lg:order-2 space-y-12 bg-secondary/10 p-10 rounded-2xl shadow-sm border border-border/50 h-full">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-10">Informazioni dello Studio</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-3.5 rounded-full text-primary mt-1 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-foreground mb-1">Sede</p>
                    <p className="text-foreground/80 text-lg leading-relaxed">{params.address}</p>
                    <p className="text-foreground/80 text-lg">{params.city}, IT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-3.5 rounded-full text-primary mt-1 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-foreground mb-1">Recapito Telefonico</p>
                    <p className="text-foreground/80 text-lg">+39 333 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-3.5 rounded-full text-primary mt-1 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-foreground mb-1">Email Diretta</p>
                    <p className="text-foreground/80 text-lg">prenotazioni@{safeCityUrlString || "studio"}.it</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="bg-primary/10 p-3.5 rounded-full text-primary mt-1 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-foreground mb-1">Orari di Ricevimento</p>
                    <p className="text-foreground/80 text-lg">Lunedì - Venerdì: 09:00 - 19:30</p>
                    <p className="text-foreground/80 text-lg">Sabato: su appuntamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
