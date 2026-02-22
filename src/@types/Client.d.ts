import type { Animal } from "./Animal";

export interface Client {
  id: number;
  tutor: string;
  detalhe: string;
  status: string;
  email: string;
  cpf: string;
}

export type ClientWithAnimals = Client &  {
  animals: Animal[]
}