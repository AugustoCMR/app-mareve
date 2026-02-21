import { z } from "zod";

export const clientSchema = z.object({
  name: z.string("Nome é obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres"),
  cpf: z.string().min(11, "CPF deve ter 11 caracteres").max(11, "CPF deve ter 11 caracteres").optional().or(z.literal("")),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.email("Email inválido").optional().or(z.literal("")),
  address: z.string().max(255, "Endereço não deve ter mais que 255 caracteres").optional().or(z.literal("")),
});