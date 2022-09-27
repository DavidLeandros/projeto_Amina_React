import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaGrupo from '../../components/grupos/listaGrupo/ListaGrupo';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import './PerfilUsuario.css'
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
export default function PerfilUsuario() {
  
  const[nameUser, setNameUser] = useLocalStorage('name');
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="containerFeed">
        <div className="containerConteudo">

        <aside id="perfilContainer">
                <section id="fotoPerfilBox">
                  <img src="https://i.imgur.com/769pZ58.png"  alt="" />
                </section>
              <section id="menuPerfil">
                <ul>
                <li className="tagPerfil">Perfil</li> <br />
                <li className="tagPerfil">Publicações</li> <br />
                <li className="tagPerfil">Configurações</li> <br />
                <Link to="/denuncia">
                  <li className="tagPerfil">Denunciar Abuso</li>
                </Link>
                </ul>
              </section>
            </aside>
            <footer id="footerFeed">
              <Link to="/sobre">
                  <button>Sobre</button>
                  </Link>
                  <button>Ajuda</button>
                  <Link to="/termo">
                  <button>Termo e Privacidade</button>
                  </Link>
              </footer>
          <main>
            <div id="feedContainer">
                 
            <img className="muralPerfil" src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/07/23/tulipa-flor-roxa-pinteres.jpg" alt="" />
              <section id="postBox"> 

                <label id="saudacao">{nameUser}</label> 
                <br />
                  <ul>
                    <li>Email: samira@gmail.com</li>
                    <li>Hobbies: Leitura e caminhadas</li>
                    <li>Idade: 29 anos</li>
                  </ul> <br />
                  <h4>Sobre</h4> <br />
                  <p>
                    Olá Me chamo Samira moro em São paulo a 10 meses e adoraria conhecer mais sobre a cidade e a comunidade feminina aqui. “O início da sabedoria é a admissão da própria ignorância. Todo o meu saber consiste em saber que nada sei.
                  </p>
                  <div className="linha"></div>
              </section>
             
              <section id="postagensBox">
                  <br />
                  <h2 id="tituloPostagem">Minhas Postagens</h2>
                  <ListaPostagem />
              </section>
            </div>
          </main>

          <nav id="grupoContainer">
              <h1>Grupos</h1>  
              <div className="grupoBox">
                <ListaGrupo/>
              </div>
            </nav>
          </div>
        </main>
    </>
  )
}