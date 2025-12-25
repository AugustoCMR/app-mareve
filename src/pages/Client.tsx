import { useMemo } from "react";

interface IClient {
  id: number;
  tutor: string;
  pet: string;
  detalhe: string;
  status: string;
}

export const Client = () => {
  const clients = useMemo<IClient[]>(() => [
    { id: 1, tutor: 'Ana Silva', pet: 'Rex', detalhe: 'Cachorro - Golden', status: 'Agendado' },
    { id: 2, tutor: 'Carlos Souza', pet: 'Mia', detalhe: 'Gato - Siamês', status: 'Em Atendimento' },
    { id: 3, tutor: 'Beatriz Lima', pet: 'Thor', detalhe: 'Cachorro - Poodle', status: 'Finalizado' },
    { id: 4, tutor: 'João Costa', pet: 'Mel', detalhe: 'Gato - Persa', status: 'Agendado' },
    { id: 5, tutor: 'Fernanda Alves', pet: 'Bob', detalhe: 'Cachorro - Bulldog', status: 'Cancelado' },
    { id: 6, tutor: 'Ricardo Gomes', pet: 'Luna', detalhe: 'Gato - SRD', status: 'Finalizado' },
  ], []);

  return (
    <div>
      <h1 className='text-3xl font-bold mb-3'>Clientes</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 m-auto w-full gap-4">
        {
          clients.map((client) => (
            <ClientSlot client={client}/>
          ))
        }
      </ul>

    </div>

  )
}

interface ClientSlotProps {
  client: IClient;

}

export const ClientSlot = ({ client }: ClientSlotProps) => {

  return (
    <li className="bg-zinc-50 p-6 flex flex-col justify-between items-left gap-3 rounded-lg shadow transition duration-300 ease-in-out transform hover:bg-zinc-100 hover:scale-103  border border-zinc-200 h-[250px] h-max-[250px]">
      <p>{client.tutor}</p>
    </li>
  );
}