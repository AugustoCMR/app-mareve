import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { animalSchema } from '@/schemas/animal';
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from '@/components/ui/select';
import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { NumericFormat } from 'react-number-format';

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const AnimalForm = ({ showModal, setShowModal }: Props) => {
  const form = useForm({
    resolver: zodResolver(animalSchema),
    defaultValues: {
      name: "",
      specie: undefined,
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
                  <FormLabel>Espécie *</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ?? ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Seleciona uma espécie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Seleciona uma espécie</SelectLabel>
                          <SelectItem value="Cachorro">Cachorro</SelectItem>
                          <SelectItem value="Gato">Gato</SelectItem>
                          <SelectItem value="Ave">Ave</SelectItem>
                          <SelectItem value="Outros">Outros </SelectItem>
                        </SelectGroup>
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
                  <FormLabel>Raça</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite a raça" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <NumericFormat
                      {...field}
                      value={value}
                      customInput={Input}
                      placeholder="0.00"
                      decimalScale={2}
                      decimalSeparator="."
                      onValueChange={(values) => {
                        onChange(values.floatValue ?? "");
                      }}
                      allowNegative={false}
                      className="w-full"
                      isAllowed={(values) => {
                        const { floatValue, value: stringValue } = values;

                        if (floatValue === undefined) return true;

                        if (floatValue < 1) {
                          return floatValue <= 0.12;
                        }

                        if (floatValue > 100) {
                          return floatValue <= 100
                        }

                        return Number.isInteger(floatValue);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Peso (kg)</FormLabel>
                  <FormControl>
                    <NumericFormat
                      {...field}
                      value={value}
                      customInput={Input}
                      placeholder="0,00"
                      decimalScale={2}
                      max={50}
                      allowNegative={false}
                      fixedDecimalScale={false}
                      decimalSeparator=","
                      thousandSeparator="."
                      onValueChange={(values) => {
                        onChange(values.floatValue ?? "");
                      }}
                      className="w-full"
                       isAllowed={(values) => {
                       const { floatValue, value: stringValue } = values;

                        if (floatValue === undefined) return true;


                        return floatValue <= 200;
                      }}
                    />
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
                    <Textarea maxLength={500} placeholder="Digite aqui observações sobre o pet" {...field} />
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