import { Outlet, Route, Routes, useNavigate, matchPath } from "react-router-dom";
import App from "../App";
import { useMemo, useState } from "react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        {/* <Route path="project/:id_projeto/sprint/" element={<Sprint />} />
        <Route path="/project/:id_projeto/sprint/:id_sprint/task" element={<Task />} />
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
  // {
  //   path: '/project/:id_projeto/sprint', 
  //   label: 'Nova Sprint',
  //   Component: FormSprint
  // },
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
        <SidebarMenu className="bg-zinc-600 w-48 p-4 flex flex-col gap-2 h-full">
          <div>Icone</div>
          <div className="flex flex-col gap-2 justify-between">
            <SidebarMenuItem>Agenda</SidebarMenuItem>
            <SidebarMenuItem>Pacientes</SidebarMenuItem>
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