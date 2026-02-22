import type { Animal } from "@/@types/Animal";
import type { ClientWithAnimals } from "@/@types/Client";
import { AnimalForm } from "@/components/AnimalForm";
import { ClientForm } from "@/components/ClientForm";
import { AlertDialogDelete } from "@/components/AlertDialogDelete";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ChevronDown, ChevronUp, CirclePlus, Frown, PawPrint, Plus, Search, Trash2 } from "lucide-react";
import { Activity, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

export const Client = () => {

  const [showClientForm, setShowClientForm] = useState<boolean>(false);
  const [showAnimalForm, setShowAnimalForm] = useState<boolean>(false);
  const [search, setSearch] = useState('');

  const clientsWithAnimal = useMemo<ClientWithAnimals[]>(() => {
    const c1 = { id: 1, tutor: 'Ana Silva', email: 'Ana@gmail.com', cpf: '1234567123123', detalhe: 'Cachorro - Golden', status: 'Agendado' };
    const c2 = { id: 2, tutor: 'Carlos Souza', email: 'Carlos@gmail.com',  cpf: '1234567123133', detalhe: 'Gato - Siamês', status: 'Em Atendimento' };
    const c3 = { id: 3, tutor: 'Beatriz Lima', email: 'Beatriz@gmail.com',  cpf: '1234567123155', detalhe: 'Cachorro - Poodle', status: 'Finalizado' };
    const c4 = { id: 4, tutor: 'João Costa', email: 'João@gmail.com',  cpf: '1234567123166', detalhe: 'Gato - Persa', status: 'Agendado' };
    const c5 = { id: 5, tutor: 'Fernanda Alves', email: 'Fernanda@gmail.com',  cpf: '1234567123177', detalhe: 'Cachorro - Bulldog', status: 'Cancelado' };
    const c6 = { id: 6, tutor: 'Ricardo Gomes', email: 'Ricardo@gmail.com',  cpf: '1234567123188', detalhe: 'Gato - SRD', status: 'Finalizado' };

    return [
      {
        ...c1,
        animals: [{ id: 101, nome: 'Rex', tutor: c1 }, { id: 1001, nome: 'Thor', tutor: c1 }],
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
        animals: [],
      },
    ];
  }, []);

  const filteredTutors = clientsWithAnimal.filter((t) => {
    const q = search.toLowerCase();
    return t.tutor.toLowerCase().includes(q) || t.email.toLowerCase().includes(q) || t.cpf.includes(q);
  });

  return (
    <div className="bg-zinc-100 min-h-screen space-y-4">
      <div className="flex justify-between">
        <h1 className='font-semibold font-[Manrope] text-2xl'>Tutores & Pets</h1>
        <button
          className="gradient-bg text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity w-fit"
          onClick={() => setShowClientForm(true)}>
          <Plus className="w-4 h-4" /> Novo tutor
        </button>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Buscar por nome, email ou CPF..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>
      <div className="grid grid-cols-1 m-auto w-full gap-2">
        {
          filteredTutors.map((client) => (
            <ClientSlot
              clientWithAnimal={client}
              setShowAnimalForm={setShowAnimalForm}
            />
          ))
        }
      </div>
      <ClientForm setShowModal={setShowClientForm} showModal={showClientForm} />
      <AnimalForm setShowModal={setShowAnimalForm} showModal={showAnimalForm} />
    </div>

  )
}

interface ClientSlotProps {
  clientWithAnimal: ClientWithAnimals;
  setShowAnimalForm: (open: boolean) => void;
}

export const ClientSlot = ({ clientWithAnimal, setShowAnimalForm }: ClientSlotProps) => {

  const [expandButton, setExpandButton] = useState(false);
  const [showAlertDialogClient, setShowAlertDialogClient] = useState(false);

  return (
    <div className="bg-zinc-50 rounded-lg border">
      <div className="flex justify-between items-center cursor-pointer hover:bg-zinc-100 p-3" onClick={() => setExpandButton(!expandButton)}>
        <div className="flex gap-2">
          <Avatar className="flex size-10 overflow-hidden rounded-lg">
            <AvatarImage src="https://github.com/shadcn.pn" />
            <AvatarFallback className="flex items-center justify-center border rounded-lg gradient-bg w-full text-white font-semibold text-sm">
              CN
            </AvatarFallback>
          </Avatar>
          <span className="font-bold text-sm font-[Manrope]">{clientWithAnimal.tutor}</span>
        </div>
        {
          expandButton ? <ChevronUp size={15} /> : <ChevronDown size={15} />

        }

      </div>
      <Activity mode={expandButton ? 'visible' : 'hidden'}>
        <div className="border-t p-3 space-y-4">
          <div className="flex justify-between">
            <p className="flex gap-1 items-center font-semibold"><PawPrint className="text-[#8E7CFF]" size={15} />Pets</p>
            <span
              className="flex gap-1  text-[#8E7CFF] text-sm items-center cursor-pointer hover:underline"
              onClick={() => setShowAnimalForm(true)}
            >
              <CirclePlus size={15} />
              Adicionar pet
            </span>
          </div>
          {
            clientWithAnimal.animals.length > 0 ?
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 ">
                {
                  clientWithAnimal.animals.map((animal) => (
                    <AnimalSlot animal={animal} />
                  ))
                }
              </div> :
              <div className="font-semibold flex justify-center">
                <div className="flex flex-col items-center">
                  <Frown />
                  <span>
                    Sem pets cadastrados para este tutor
                  </span>
                </div>
              </div>
          }
          <div className="flex justify-end">
            <span
              className="flex items-center gap-2 text-sm text-destructive hover:underline cursor-pointer"
              onClick={() => setShowAlertDialogClient(true)}
            ><Trash2 className="cursor-pointer hover:scale-103" size={15} />Excluir tutor</span>
          </div>
        </div>
      </Activity>
      <AlertDialogDelete
        title="Deseja realmente excluir este tutor?"
        description="Após excluir, ainda é possível reveter essa ação caso desejar futuramente"
        icon={<Trash2 className="text-destructive" />}
        setShowModal={setShowAlertDialogClient}
        showModal={showAlertDialogClient}
      />
    </div>
  );
}

interface AnimalSlotProps {
  animal: Animal;
}

export const AnimalSlot = ({ animal }: AnimalSlotProps) => {

  const [showAlertDialogAnimal, setShowAlertDialogAnimal] = useState(false);
  return (
    <div className="bg-zinc-50 rounded-lg border p-3">
      <div className="flex justify-between items-center" onClick={() => setShowAlertDialogAnimal(true)}>
        <span className="flex gap-1 items-center text-sm font-medium text-foreground"><PawPrint className="text-[#6EC3F4]" size={15} />{animal.nome}</span>
        <Trash2 className="cursor-pointer text-red-600 hover:scale-103" size={15} />
      </div>
      <AlertDialogDelete
        title="Deseja realmente excluir este pet?"
        description="Após excluir, ainda é possível reveter essa ação caso desejar futuramente"
        icon={<Trash2 className="text-destructive" />}
        setShowModal={setShowAlertDialogAnimal}
        showModal={showAlertDialogAnimal}
      />
    </div>
  )
}
