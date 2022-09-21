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
                <section id="fotoPerfilBox">
                  <img src="https://cdn-icons-png.flaticon.com/512/16/16385.png"  alt="" />
                </section>
              <section id="menuPerfil">
                <ul>
                  <li className='tagPerfil'>Editar Perfil</li> <br />
                  <li className='tagPerfil'>Publicações</li> <br />
                  <li className='tagPerfil'>Configurações</li> <br />
                  <li className='tagPerfil'>Sair</li> <br />
                  <li className='tagPerfil'>Denunciar Abuso</li>
                </ul>
              </section>
            </aside>


            <main>
              <div id="feedContainer">
                <section id="postBox">
                  <label id='saudacao'>{"Olá " + nameUser}</label> <b />
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
                  <br />
                  <h2 id="tituloPostagem">Postagens mais recentes</h2>
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
