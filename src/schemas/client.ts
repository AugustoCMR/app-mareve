import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  cpf: z.string().min(11, "CPF deve ter 11 caracters").max(11, "CPF deve ter 11 caracteres").optional(),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.email("Email inválido").optional(),
  address: z.string().optional(),
});