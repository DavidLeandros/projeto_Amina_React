import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import './Navbar.css'

export default function Navbar2() {
  const [nameUser, setNameUser] = useLocalStorage('name')

  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate()

  function goLogout() {
    setToken('')
    setNameUser('')
    alert('Usuário deslogado')
    navigate('/')
  }
  return (
    <>
      <nav id="menu">
        <section>
          <Link to="/feed">
            <img src="https://i.imgur.com/coHfV2z.png" alt="Logo" />
          </Link>
          <button>Notificações</button>
          <button>Mensagens</button>
          <Link to="/formularioGrupo">Grupos</Link>
        </section>

        <section>
          <img id="avatar" src="https://i.imgur.com/IpO34nE.jpg" alt="Foto" />
          <label>{nameUser}</label>
          <button onClick={goLogout}>Sair</button>
        </section>
      </nav>
    </>
  )
}
