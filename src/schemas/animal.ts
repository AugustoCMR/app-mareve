import { SPECIES } from "@/constants/species";
import { z } from "zod";

export const animalSchema = z.object({
  name: z
    .string("Nome é obrigatório")
    .min(2, "O nome deve ter pelo menos 2 caracteres"),
  specie: z.enum(SPECIES, {
    error: "Selecione uma espécie válida",
  }),
  breed: z.string().min(10, "Raça é obrigatório").or(z.literal("")),
  age: z.number("Idade inválida").min(0.1, "Idade deve ser maior que zero").max(100, "Idade não pode ser maior que 100").positive("Idade inválida").or(z.literal("")),
  weight: z.number("Peso inválido").min(0.1, "Peso deve ser maior que zero").max(200, "Peso não pode ser maior que 200").positive("Peso inválido").optional().or(z.literal("")),
  observation: z.string().max(500, "Observação deve conter no máximo 500 caracteres").optional().or(z.literal(""))
});
