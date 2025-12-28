import type { ClientWithAnimals } from "@/@types/Client";
import { Card, CardItem } from "@/components/card";
import { ClientPainel } from "@/components/ClientPainel";
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import { useMemo, useState } from "react";

export const Client = () => {

  const [showModalClientPainel, setShowModalClientPainel] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientWithAnimals | undefined>(undefined);

  const clientsWithAnimal = useMemo<ClientWithAnimals[]>(() => {
    const c1 = { id: 1, tutor: 'Ana Silva', detalhe: 'Cachorro - Golden', status: 'Agendado' };
    const c2 = { id: 2, tutor: 'Carlos Souza', detalhe: 'Gato - Siamês', status: 'Em Atendimento' };
    const c3 = { id: 3, tutor: 'Beatriz Lima', detalhe: 'Cachorro - Poodle', status: 'Finalizado' };
    const c4 = { id: 4, tutor: 'João Costa', detalhe: 'Gato - Persa', status: 'Agendado' };
    const c5 = { id: 5, tutor: 'Fernanda Alves', detalhe: 'Cachorro - Bulldog', status: 'Cancelado' };
    const c6 = { id: 6, tutor: 'Ricardo Gomes', detalhe: 'Gato - SRD', status: 'Finalizado' };

    return [
      {
        ...c1,
        animals: [{ id: 101, nome: 'Rex', tutor: c1 }],
      },
      {
        ...c2,
        animals: [{ id: 102, nome: 'Mia', tutor: c2 }],
      },
      {
        ...c3,
        animals: [{ id: 103, nome: 'Thor', tutor: c3 }],
      },
      {
        ...c4,
        animals: [{ id: 104, nome: 'Mel', tutor: c4 }],
      },
      {
        ...c5,
        animals: [{ id: 105, nome: 'Bob', tutor: c5 }],
      },
      {
        ...c6,
        animals: [{ id: 106, nome: 'Luna', tutor: c6 }],
      },
    ];
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold mb-3'>Clientes</h1>
      <Card className="grid grid-cols-1 lg:grid-cols-3 m-auto w-full gap-4">
        {
          clientsWithAnimal.map((clientWithAnimal) => (
            <ClientSlot
              clientWithAnimal={clientWithAnimal}
              onOpenChange={setShowModalClientPainel}
              setSelectedClient={setSelectedClient}
            />
          ))
        }
      </Card>
      {
        selectedClient &&
        <ClientPainel
          client={selectedClient}
          isOpen={showModalClientPainel}
          onOpenChange={setShowModalClientPainel}
        />
      }
    </div>

  )
}

interface ClientSlotProps {
  clientWithAnimal: ClientWithAnimals;
  onOpenChange: (open: boolean) => void;
  setSelectedClient: (clientWithAnimal: ClientWithAnimals) => void;
}

export const ClientSlot = ({ clientWithAnimal, onOpenChange, setSelectedClient }: ClientSlotProps) => {

  return (
    <CardItem className="bg-zinc-50 p-6 flex flex-col justify-between items-left gap-3 rounded-lg shadow
     transition duration-300 ease-in-out
       transform hover:bg-zinc-100 hover:scale-103
        border border-zinc-200 h-[250px] h-max-[250px]"
    >
      <p>{clientWithAnimal.tutor}</p>
      <Button
        className="cursor-pointer bg-purple-300 rounded-2xl p-2 hover:scale-103 hover:bg-purple-400"
        onClick={() => {
          onOpenChange(true)
          setSelectedClient(clientWithAnimal)
        }}
      >
        <Folder size={18} />
        Painel do tutor
      </Button>
    </CardItem>
  );
}