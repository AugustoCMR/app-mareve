import type { Animal } from "./Animal";

export interface Client {
  id: number;
  tutor: string;
  detalhe: string;
  status: string;
}

export type ClientWithAnimals = Client &  {
  animals: Animal[]
}