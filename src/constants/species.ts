export const SPECIES = {
  CACHORRO: "Cachorro",
  GATO: "Gato",
  AVE: "Ave",
  OUTROS: "Outros",
} as const;

export type SpeciesType = typeof SPECIES[keyof typeof SPECIES];