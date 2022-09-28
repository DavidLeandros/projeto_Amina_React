import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaGrupo from '../../components/grupos/listaGrupo/ListaGrupo';
import CadastroPost from '../../components/postagens/cadastroPost/CadastroPost';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';




export default function Grupo(){

  
  const [nameUser, setNameUser] = useLocalStorage('name');

    return(
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
                  <button>Sobre</button>
                  <button>Ajuda</button>
                  <button>Termo e Privacidade</button>
              </footer>

          <main>
            <div id="feedContainer">
                 
            <img className="muralPerfil" src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/07/23/tulipa-flor-roxa-pinteres.jpg" alt="" />
              <section id="postBox"> 

                <label id="saudacao">GRUPO TESTE 1</label> 
                <br />
                  <ul>
                    <li>Tópico:</li>
                  </ul> <br />
                  <h4>Sobre o Grupo</h4> <br />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate ullam amet perferendis pariatur magni cumque, velit dolor ab deleniti consequuntur quae nobis similique itaque, iure adipisci facere laboriosam dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consectetur iure ducimus voluptates error dignissimos ex. Hic et perspiciatis eveniet maiores architecto iure mollitia quae, eligendi ratione dicta repellendus optio?</p>
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