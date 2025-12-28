import type { Client } from "./Client";

export interface Animal {
  id: number;
  nome: string;
  tutor: Client;
}