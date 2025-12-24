import { Outlet, Route, Routes, useNavigate, matchPath } from "react-router-dom";
import App from "../App";
import { useMemo, useState } from "react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Client } from "@/pages/Client";

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
      <header className="shrink-0 border-b border-zinc-200">
        <nav className="flex gap-2 justify-between items-center h-14 px-4">
          <h1>Icone</h1>
          <h1>Informações usuário</h1>
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <SidebarMenu className="bg-zinc-500 w-64 p-4 flex flex-col gap-2 h-full space-y-4">
          <div className="flex justify-center items-center">
            <img src="../../img/WhatsApp Image 2025-12-24 at 16.50.00.jpeg" alt="" />
          </div>
          <div className="border-b">
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <SidebarMenuItem className="text-zinc-50 cursor-pointer" onClick={() => router('client/')}>Clientes</SidebarMenuItem>
            <SidebarMenuItem className="text-zinc-50">Agenda</SidebarMenuItem>
            <SidebarMenuItem>Atendimentos</SidebarMenuItem>
          </div>
          <SidebarMenuItem>Sair</SidebarMenuItem>
        </SidebarMenu>
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}