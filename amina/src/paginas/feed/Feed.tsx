import React, { useContext } from 'react'
import { Grid, Paper } from '@material-ui/core'
import Navbar from '../../components/estaticos/navbar/Navbar'
import { UsuarioContext } from '../../context/UsuarioContext'
import { Box } from "@mui/material";
import './Feed.css'
import useLocalStorage from 'react-use-localstorage';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import ListaGrupo from '../../components/grupos/listaGrupo/ListaGrupo';
import CadastroPost from '../../components/postagens/cadastroPost/CadastroPost';

export default function Feed() {
  const [nameUser, setNameUser] = useLocalStorage('name');
  const { usuario, logarUsuario } = useContext(UsuarioContext);

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
                  <label>{"Olá " + nameUser}</label> <b />
                  <p>O que você está pensando?</p>
                  <label id='contentForm' htmlFor="formularioPost">
                    <input type="checkbox" name="formularioPost" id="formularioPost" />
                    <div id='inputPostBox'>
                      <div hidden>
                        <CadastroPost />
                      </div>
                    </div>
                  </label>
                </section>
                <section id="postagensBox">
                  <ListaPostagem />
                </section>
              </div>
            </main>


            <nav id="grupoContainer">
              <div className="grupoBox">
                <ListaGrupo/>
              </div>
              <div className='grupoBox'>
              </div>
            </nav>




          </div>
        </main>
      </div>
    </>
  )
}
