import { Outlet, Route, Routes, useNavigate, matchPath } from "react-router-dom";
import App from "../App";
import { useMemo, useState } from "react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Client } from "@/pages/Client";
import { Calendar, LogOut, User } from "lucide-react";
import { SidebarItem } from "@/components/SidebarItem";
import UserDropdown from "@/components/UserDropdown";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/client" element={<Client />} />
        {/* <Route path="/project/:id_projeto/sprint/:id_sprint/task" element={<Task />} />
        <Route path="/tasks" element={<AllTasks />} /> */}
        <Route path="*" element={<>404 not found</>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes

const actionsConfig = [
  // {
  //   path: '/',
  //   label: 'Novo Projeto',
  //   Component: FormProject
  // },
  {
    path: '/client',
    Component: Client
  },
  // {
  //   path: '/project/:id_projeto/sprint/:id_sprint/task',
  //   label: 'Nova Tarefa',
  //   Component: FormTask
  // },
  // {
  //   path: '/tasks',
  //   label: 'Nova Tarefa',
  //   Component: FormTask
  // },
];

function Layout() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const router = useNavigate();

  // const activeAction = useMemo(() => {
  //   return actionsConfig.find(config =>
  //     matchPath({ path: config.path, end: true }, location.pathname)
  //   );
  // }, [location.pathname]);

  return (
    <div className="bg-zinc-50 w-screen h-screen flex flex-col overflow-hidden">
      <header className="shrink-0 border-b shadow border-zinc-200">
        <nav className="flex gap-2 justify-between items-center h-14 p-5">
          <img onClick={() => router("/")} src="../../img/mareve.png" alt="Logo mareve" className="h-40 w-auto object-contain cursor-pointer" />
          <UserDropdown/>
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <SidebarMenu className="bg-[#33383c] w-64 p-4 flex flex-col gap-2 h-full space-y-4">
          <div className="flex justify-center items-center">
            <img src="../../img/mareve.png" alt="Logo mareve"
              className="object-contain" />
          </div>
          <div className="flex flex-col gap-2 justify-around space-y-4">
            <SidebarItem onClick={() => router('client/')}>
              <User />Clientes
            </SidebarItem>
            <SidebarItem onClick={() => router('client/')}>
              <Calendar />Agenda
            </SidebarItem>
          </div>
          <SidebarItem onClick={() => router('client/')}>
            <LogOut />Sair
          </SidebarItem>
        </SidebarMenu>
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}