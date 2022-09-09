import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar2() {
  const name = 'Ixoobecanzinho'
  
  return (
    <>
      <nav id="menu">
        
        <section>
          {/*<Link to="/home">*/}
            <img src="https://i.imgur.com/coHfV2z.png" alt="Logo" />
            {/*</Link>*/} 
          <button>Notificações</button>
          <button>Mensagens</button>
        </section>

        <section>
          <img id="avatar" src="https://i.imgur.com/IpO34nE.jpg" alt="Foto" />
          <label>{name}</label>
        </section>

      </nav>
    </>
  );
}
