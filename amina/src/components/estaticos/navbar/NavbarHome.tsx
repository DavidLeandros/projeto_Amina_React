import React from 'react';
import './NavbarHome.css';
import { Link } from 'react-router-dom';
export default function NavbarHome() {
 
    
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
            <Link to='/login'>
                <div id="borda"><button id='botaoEntrar'>Entrar</button></div>
            </Link>
            <button>Ajuda</button>
          </section>
  
        </nav>
      </>
    );
  }