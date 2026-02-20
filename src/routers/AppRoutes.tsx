import { Outlet, Route, Routes, useNavigate, NavLink } from "react-router-dom";
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

const navItems = [
  { to: '/client', icon: User, label: 'Tutores & Pets', end: true },

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
    <div className="bg-zinc-50 w-screen h-screen overflow-hidden">
      <header className="flex justify-end items-center border-b shadow h-14">
        <UserDropdown />
      </header>
      <aside className="fixed top-0 left-0 z-50 overflow-hidden border-r shadow bg-zinc-50">
        <div>
          <img onClick={() => router("/")} src="../../img/mareve.png" alt="Logo mareve" className="h-60 w-auto border-b shadow object-contain cursor-pointer hover:scale-101 transiction-all ease-in-out duration-200" />
        </div>
        <nav className="w-6- p-4 flex-1 gap-2 space-y-1 ">
          {navItems.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="text-zinc-500 font-medium text-sm flex gap-2 items-center cursor-pointer p-3 rounded-lg
              hover:text-foreground hover:bg-muted hover:scale-103 transition-all duration-200 ease-in-out" onClick={() => router('client/')}>
              <Icon className="w-5 h-5 shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="border-t">
          <button className="flex gap-2">
            <LogOut /> Sair
          </button>
        </div>
      </aside>
      {/* <main className="overflow-y-auto bg-zinc-100">
        <Outlet />
      </main> */}
    </div>
  )
}