import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from '@/components/ui/dialog';
import { clientSchema } from '@/schemas/client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

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
      console.log('oi')
      console.error(error);
    }
  };

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="max-w-7xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-[Manrope]">Novo tutor</DialogTitle>
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
                    <Input placeholder="Nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancelar
              </button>
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