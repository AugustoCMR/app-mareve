import type { LucideIcon } from "lucide-react"
import type { ReactNode, ComponentProps } from "react"
import { SidebarMenuItem } from "./ui/sidebar"

type Props = {
  children: ReactNode
} & ComponentProps<"li">

export const SidebarItem = (props: Props) => {
  return (
    <SidebarMenuItem className="text-zinc-50 cursor-pointer transition duration-300 ease-in-out transform hover:scale-103 flex gap-2 ml-3" {...props}>{props.children}</SidebarMenuItem>
  )
}