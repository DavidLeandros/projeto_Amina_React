import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from 'react-use-localstorage'
import User from '../models/User'
import { api } from '../services/Service'

// Como faz pra eu resgatar um usuário ao entrar na aplicação
// Usando o token salvo no localStorage.

interface IUsuario extends User {
  token: string
}

interface ILogarUsuarioProps {
  email: string
  senha: string
}

interface IUsuarioContextProps {
  usuario: IUsuario
  logarUsuario: (user: ILogarUsuarioProps) => Promise<void>
}

// Crio um contexto de informações
export const UsuarioContext = createContext({} as IUsuarioContextProps)

interface IUsuarioProviderProps {
  children: React.ReactNode
}

// Crio quem vai providenciar o contexto
export const UsuarioProvider = ({ children }: IUsuarioProviderProps) => {
  const [token, setToken] = useLocalStorage('token')
  const [nameUser, setNameUser] = useLocalStorage('name')

  // Salva as informações do usuário em um estado.
  const [usuario, setUsuario] = useState<IUsuario>({} as IUsuario)

  // Função responsável por fazer o login. E também, salvar o usuário dentro do contexto.
  async function logarUsuario({ email, senha }: ILogarUsuarioProps) {
    try {
      // faz a requisição pro backend das informações do usuário que tentou logar
      const response = await api.post('/api/Usuarios/logar', {
        email,
        senha
      })

      // Salva as informações de usuário vinda do banckend
      setUsuario({
        ...response.data,
        ...response.data.usuario
      })

      setNameUser(response.data.usuario.nome)

      // Salva o token no localStorage
      setToken(response.data.token)
    } catch (e: any) {
      // Caso erro, exiba o erro em um alerta
      alert(e?.message)
    }
  }

  useEffect(() => {
    console.log('token do ultimo usuario cadastrado', token)
    // faz a requisicao pra buscar o user
    // depois salva no estado de usuario
  }, [])

  return (
    <UsuarioContext.Provider
      // Providencio a informação a partir deste value.
      value={{
        usuario,
        logarUsuario
      }}
    >
      {/* São todos os filhos, que podem visualizar os dados */}
      {children}
    </UsuarioContext.Provider>
  )
}
