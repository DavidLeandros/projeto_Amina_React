import React from 'react'
import './Navbar.css'

export default function Navbar2() {
  const name = 'Ixoobecanzinho'
  
  return (
    <>
      <nav id="menu">
        
        <section>
          <img src="https://i.imgur.com/IpO34nE.jpg" alt="Logo" />
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
