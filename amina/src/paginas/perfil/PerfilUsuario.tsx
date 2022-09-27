import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'
import Navbar from '../../components/estaticos/navbar/Navbar';
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
                  <li className='tagPerfil'>Perfil</li> <br />
                  <li className='tagPerfil'>Configurações</li> <br />
                  <li className='tagPerfil'>Email: </li>
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
                    <li>Hobbies:</li>
                    <li>Idade: 29 anos</li>
                  </ul> <br />
                  <h4>Sobre</h4> <br />
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
            <div className="grupoBox"></div>

            <div className='grupoBox'></div>
          </nav>
        </div>
      </main>
    </>
  )
}