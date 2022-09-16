import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UsuarioContext } from '../../../context/UsuarioContext'
import './Navbar.css'

export default function Navbar2() {
  const { usuario } = useContext(UsuarioContext)
  const name = usuario.nome

  return (
    <>
      <nav id="menu">
        <section>
          <Link to="/feed">
            <img src="https://i.imgur.com/coHfV2z.png" alt="Logo" />
          </Link>
          <button>Notificações</button>
          <button>Mensagens</button>
        </section>

        <section>
          <img id="avatar" src="https://i.imgur.com/IpO34nE.jpg" alt="Foto" />
          <label>{name}</label>
        </section>
      </nav>
    </>
  )
}
