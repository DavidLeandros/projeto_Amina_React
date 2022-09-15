import { UsuarioProvider } from './context/UsuarioContext'
import { AppRoutes } from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    // Providencia dados de usuário para todas as rotas
    <UsuarioProvider>
      <AppRoutes />
    </UsuarioProvider>
  )
}

export default App
