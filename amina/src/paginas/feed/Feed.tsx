import React, { useContext } from 'react'
import Navbar from '../../components/estaticos/navbar/Navbar'
import { UsuarioContext } from '../../context/UsuarioContext'
import './Feed.css'

export default function Feed() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="corpo">
          <main className="container">
            <div className="containerConteudo">
              <aside id="perfilContainer">
                <div id="fotoPerfil">
                    <div id="fotoPerfilBox">
                      <img src="https://i.imgur.com/da6i9Eh.png" alt="" />
                      </div>
                </div>
                <section id="menuPerfil">
                    <ul>
                      <li>Editar Perfil</li>
                      <li>Publicações</li>
                      <li>Configurações</li>
                      <li>Sair</li>
                      <li>Denunciar Abuso</li>
                    </ul>
                </section>
              </aside>

              <main>
                <div id="feedContainer">
                      <section id="postBox">
                          <input id="inputPostBox" type="text" />
                      </section>
                      <section id="postagensBox">
                        
                      </section>
                </div>
              </main>
              
                <nav id="grupoContainer">
                    <div className="grupoBox"></div>
                    <div className='grupoBox'></div>
                </nav>
            
              
            </div>
          </main>
      </div>
    </>
  )
}
