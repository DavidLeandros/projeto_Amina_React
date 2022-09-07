import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar2 from './components/estaticos/navbar/Navbar2';
import './App.css';
import Login from './paginas/login/Login';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='teste' element={<Navbar2/>}></Route>
        </Routes>
     </Router>
    </>
  );
}

export default App;
