import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar2 from './components/estaticos/navbar/Navbar2';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='teste' element={<Navbar2/>}></Route>
          <Route path='cadastro' element={<CadastroUsuario/>}></Route>
        </Routes>
     </Router>
    </>
  );
}

export default App;
