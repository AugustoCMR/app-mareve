import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { PawPrint } from "lucide-react"

interface Props {
  title: string,
  description: string,
  titleDialogCancel?: string
  titleDialogAction?: string
  icon?: React.ReactNode;
  setShowModal: (open: boolean) => void;
  showModal: boolean;
}

export function AlertDialogDelete({ title, description, titleDialogCancel, titleDialogAction, icon, showModal, setShowModal }: Props) {
  return (
    <AlertDialog open={showModal} onOpenChange={setShowModal}>
      <AlertDialogContent>
        <AlertDialogHeader className="flex">
          <AlertDialogMedia >
            {icon ?? <PawPrint />}
          </AlertDialogMedia>
          <div className="flex flex-col font-[Manrope]">
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription className="">
              {description}
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-xl text-sm font-medium  text-muted-foreground hover:bg-des  tructive/10 hover:text-destructive transition-all duration-200 cursor-pointer font-[Manrope]">
            {titleDialogCancel ?? "Cancelar"}
          </AlertDialogCancel>
          <AlertDialogAction className="gradient-bg hover:opacity-90 transition-opacity font-[Manrope]">{titleDialogAction ?? "Confirmar"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
