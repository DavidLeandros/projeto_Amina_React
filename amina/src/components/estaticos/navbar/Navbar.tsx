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
        <section id="navbarFeature">
          <Link to="/feed">
            <img src="https://i.imgur.com/coHfV2z.png" alt="Logo" />
          </Link>
          <button>Notificações</button>
          <button>Mensagens</button>
          <Link to="/formularioGrupo"><button>Grupos</button></Link>
        </section>

        <section>
          <Link to='/perfil'><img id="avatar" src="https://i.imgur.com/769pZ58.png" alt="Foto" /></Link>
          <div id="perfilNome">
           <label>{nameUser}</label>
          </div>
          <button  id="sairButton" onClick={goLogout}>Sair</button>
        </section>
      </nav>
    </>
  )
}
