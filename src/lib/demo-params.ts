export interface DemoParams {
  name: string;
  city: string;
  address: string;
  field: string;
  fieldDisplay: string;
  isFemale: boolean;
  prefix: string;
}

export async function getDemoParams(searchParamsPromise: Promise<{ [key: string]: string | string[] | undefined }> | undefined): Promise<DemoParams> {
  const searchParams = searchParamsPromise ? await searchParamsPromise : {};
  
  // Dati cliente hardcoded direttamente
  const rawName = "Dott. Angelo Paparella";
  const rawCity = "Torino";
  const rawAddress = "Via delle Pervinche 50B, Torino 10151";
  const rawField = "fisioterapista";

  // Rimuovi i trattini dall'URL e rendi la prima lettera maiuscola (es. "terapia-di-coppia" -> "Terapia di coppia")
  const fieldWithoutHyphens = rawField.replace(/-/g, " ");
  const fieldDisplay = fieldWithoutHyphens.charAt(0).toUpperCase() + fieldWithoutHyphens.slice(1);

  // Determina il sesso in base al prefisso
  const lowerName = rawName.toLowerCase();
  const isFemale = lowerName.includes("dott.ssa") || lowerName.includes("dottoressa");
  const prefix = isFemale ? "la Dottoressa" : "il Dottor";

  return {
    name: rawName,
    city: rawCity,
    address: rawAddress,
    field: rawField,
    fieldDisplay,
    isFemale,
    prefix
  };
}

export function getDictionary(field: string) {
  const f = field.toLowerCase();
  
  if (f.includes("fisioterap")) {
    return {
      heroTitle: "Ascolto la persona, curo il corpo.",
      heroSubtitle: "Un supporto terapeutico concreto e umano per il recupero funzionale e la riconquista del tuo equilibrio fisico."
    };
  }

  // Default
  return {
    heroTitle: "Siediti. Parla. Ritrova la serenità.",
    heroSubtitle: "Un supporto dedicato e altamente professionale per superare l'impasse e ritrovare il proprio centro."
  };
}
