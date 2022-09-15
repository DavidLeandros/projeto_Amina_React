import React, { useState, useContext, useEffect, ChangeEvent } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import UserLogin from '../../models/UserLogin'
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service'
import { UsuarioContext } from '../../context/UsuarioContext'

export default function Home() {
  const navigate = useNavigate()
  const { usuario, logarUsuario } = useContext(UsuarioContext)

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    email: '',
    senha: '',
    token: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (usuario && usuario.token) {
      navigate('/feed')
    }
  }, [usuario])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await logarUsuario({
        email: userLogin.email,
        senha: userLogin.senha
      })

      /*alert("Usuario logado com sucesso!");*/
    } catch (error) {
      alert('Dados do usuário inconsistentes. Erro ao logar!')
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
                  id="email"
                  type="text"
                  placeholder="Digite seu email"
                  name="email"
                  required
                  value={userLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                />
                <div className="underline"></div>
              </div>

              <div className="input-campo">
                <input
                  id="senha"
                  type="password"
                  placeholder="Digite a senha"
                  name="senha"
                  required
                  value={userLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
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
