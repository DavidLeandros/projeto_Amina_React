import React from 'react';
import './Login.css'
import Navbar2 from '../../components/estaticos/navbar/Navbar2';

export default function Home() {
  return (
    <>
        <div className='container'>
        <div className="containerMenor">
        <h1>Bem vinda</h1>
        <img src="https://i.imgur.com/zboX1XL.png" alt="" />
        <p>Estamos muito animadas em ter você aqui!</p>
            
                <form>
                  <div className='input-campo'>
                    <input type="text" placeholder='Digite seu login' name='usuario' required />
                    <div className='underline'></div>
                  </div>
                  
                  <div className="input-campo">
                    <input type="password" placeholder='Digite a senha' name='password' required />
                    <div className='underline'></div>
                  </div>

                  <button className='botao'type='submit' value='Entrar'>Entrar</button>
                  <p id="txt">Não possui conta: Então registre-se agora mesmo! </p>
                  <button className='botao'type='button'>Registrar</button>
                </form>
            </div>
        </div>
    </>
  );
}