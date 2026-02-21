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

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const ClientForm = ({ showModal, setShowModal }: Props) => {
  const form = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: "",
      cpf: "",
      phone: "",
      email: "",
      address: "",
    },
  });

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
          <DialogTitle className="">Novo tutor</DialogTitle>
          <DialogDescription>Cadastre um novo tutor</DialogDescription>
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
                    <Input placeholder="Nome completo do tutor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <PatternFormat
                      format="###.###.###-##"
                      mask="_"
                      customInput={Input}
                      placeholder="000.000.000-00"
                      {...rest} 
                      value={value}
                      onValueChange={(values) => {
                        onChange(values.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field: { onChange, value, ...rest} }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <PatternFormat
                      format="(##) ######-####"
                      mask="_"
                      placeholder="(DDD) 00000-0000"
                      customInput={Input}
                      {...rest}
                      onValueChange={(values) => onChange(values.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o email do tutor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input maxLength={255} placeholder="Digite o endereço do tutor" {...field} />
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