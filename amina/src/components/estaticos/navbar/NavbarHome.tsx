import React from 'react';
import './NavbarHome.css';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

export default function NavbarHome() {

  const [token, setToken] = useLocalStorage('token');

  return (
    <>
      <nav id="menu">

        <section>
          {/*<Link to="/home">*/}
          <img src="https://i.imgur.com/coHfV2z.png" alt="Logo" />
          {/*</Link>*/}

        </section>

        <section>
          <button>Sobre</button>
          <button>Termos e Privacidade</button>
          {
            token === ''
              ?
              <Link to='/login'>
                <div id="borda"><button id='botaoEntrar'>Entrar</button></div>
              </Link>
              :
              ''
          }
          <button>Ajuda</button>
        </section>

      </nav>
    </>
  );
}