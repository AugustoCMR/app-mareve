import './App.css'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function App() {

  return (
    <div className="space-y-6" data-testid="dashboard-page">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-[Manrope] text-foreground" data-testid="dashboard-welcome">
          Olá, usuário
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </p>
      </div>
    </div>
  );
}

export default App

