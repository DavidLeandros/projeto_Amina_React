import React from 'react';
import useLocalStorage from 'react-use-localstorage'
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
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
                  <li className='tagPerfil'>Editar Perfil</li> <br />
                  <li className='tagPerfil'>Configurações</li> <br />
                  <li className='tagPerfil'>Denunciar Abuso</li>
                </ul>
              </section>
            </aside>

          <main>
            <div id="feedContainer">
              <section id="postBox">
                <label id="saudacao">{nameUser}</label> <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate ullam amet perferendis pariatur magni cumque, velit dolor ab deleniti consequuntur quae nobis similique itaque, iure adipisci facere laboriosam dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consectetur iure ducimus voluptates error dignissimos ex. Hic et perspiciatis eveniet maiores architecto iure mollitia quae, eligendi ratione dicta repellendus optio?</p>
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