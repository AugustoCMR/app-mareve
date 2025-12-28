import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "./ui/shadcn-io/tabs";
import { AnimalTab } from "./AnimalTab";
import type { Client, ClientWithAnimals } from "@/@types/Client";


interface Props {
  isOpen: boolean,
  onOpenChange: (open: boolean) => void;
  client: ClientWithAnimals
}

export const ClientPainel = ({ isOpen, onOpenChange, client }: Props) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogContent
        className="flex space-y-4 flex-col gap-0
       overflow-y-visible sm:max-w-7xl [&>button:last-child]:top-3.5 p-2"
      >
        <DialogHeader className="contents space-y-0 text-leff">
          <DialogTitle className="px-6 py-4 text-base border-b" >
            Painel do Tutor
          </DialogTitle>
          <DialogDescription className="sr-only">
            Administre o tutor do animal por aqui!
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="client" className="h-[75vh]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client">Tutor</TabsTrigger>
            <TabsTrigger value="animal">Animais</TabsTrigger>
          </TabsList>
          <TabsContents className="mx-1 mb-1 -mt-2 rounded-sm h-full bg-background">
            <TabsContent value="client" className="space-y-6 p-6">
             <h1>Tutor</h1>
            </TabsContent>
            <TabsContent value="animal" className="space-y-6 p-6">
              <AnimalTab animals={client.animals}/>
            </TabsContent>
          </TabsContents>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}