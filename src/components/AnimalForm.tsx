import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { clientSchema } from '@/schemas/client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { PatternFormat } from "react-number-format";
import { animalSchema } from '@/schemas/animal';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import { useState } from 'react';
import type { SpeciesType } from '@/constants/species';

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const AnimalForm = ({ showModal, setShowModal }: Props) => {
  const form = useForm({
    resolver: zodResolver(animalSchema),
    defaultValues: {
      name: "",
      specie: "Cachorro",
      breed: "",
      age: "",
      weight: "",
      observation: "",
    },
  });

  const [specie, setSpecie] = useState();

  const onSubmit = async (values: any) => {
    try {
      console.log("Dados validados:", values);

      setShowModal(false);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={showModal} onOpenChange={(open) => {
      setShowModal(open);
      if (!open) form.reset();
    }}>
      <DialogContent className="max-w-7xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="">Novo pet</DialogTitle>
          <DialogDescription>Cadastre um novo pet</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome completo do pet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Select
                      value={specie}
                    // onValueChange={(v) => setSpecie((f) => ({ ...f, species: v as SpeciesType }))}
                    >
                      <SelectTrigger data-testid="pet-species-select"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cao">Cao</SelectItem>
                        <SelectItem value="Gato">Gato</SelectItem>
                        <SelectItem value="Ave">Ave</SelectItem>
                        <SelectItem value="Outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="breed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite a espécie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite a idade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input maxLength={255} placeholder="Digite o peso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
               <FormField
              control={form.control}
              name="observation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observações</FormLabel>
                  <FormControl>
                    <Input maxLength={500} placeholder="Digite aqui observações sobre o pet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                >
                  Cancelar
                </button>
              </DialogClose>
              <button
                type="submit"
                className="gradient-bg text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90"
              >
                Cadastrar
              </button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};