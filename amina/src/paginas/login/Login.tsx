import React, {useState, useEffect, ChangeEvent} from 'react'
import './Login.css'
import Navbar2 from '../../components/estaticos/navbar/Navbar2'
import { Link, useNavigate } from 'react-router-dom'
import UserLogin from '../../models/UserLogin'
import useLocalStorage from 'react-use-localstorage'
import {login} from '../../services/Service';

export default function Home() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const[userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    email: '',
    senha: '',
    token: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ... userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(token != ''){
      navigate("/teste");
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();

    try{
      await login('api/Usuarios/logar', userLogin, setToken)

      {/*alert("Usuario logado com sucesso!");*/}
    }
    catch(error)
    {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <>
      <main className="bgLogin">
        <div className="container">
          <div className="containerMenor">
            <h1>Bem vinda</h1>
            <img src="https://i.imgur.com/zboX1XL.png" alt="" />
            <p>Estamos muito animadas em ter você aqui!</p>

            <form onSubmit={onSubmit}>
              <div className="input-campo">
                <input
                  id='email'
                  type="text"
                  placeholder="Digite seu email"
                  name="email"
                  required
                  value={userLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                />
                <div className="underline"></div>
              </div>

              <div className="input-campo">
                <input
                  id='senha'
                  type="password"
                  placeholder="Digite a senha"
                  name="senha"
                  required
                  value={userLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                />
                <div className="underline"></div>
              </div>
              <button className="botao" type="submit" value="Entrar">
                Entrar
              </button>
              <p id="txt">Não possui conta: Então registre-se agora mesmo! </p>
              <Link to="/cadastro">
                <button className="botao" type="button">
                  Registrar
                </button>
              </Link> 
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
