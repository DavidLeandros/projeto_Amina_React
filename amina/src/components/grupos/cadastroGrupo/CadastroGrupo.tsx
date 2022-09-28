import React, { ChangeEvent, useEffect, useState } from 'react'
import useLocalStorage from 'react-use-localstorage'
import { Link, useNavigate } from 'react-router-dom'
import { buscaId, httpPost, busca } from '../../../services/Service'
import Navbar from '../../estaticos/navbar/Navbar'
import './CadastroGrupo.css'

// Categoria.
// Listar grupos
// 1. - Identificar o endpoint no back-end que exibe todos os grupos.
// 1.1 - Salvar os dados do back-end no nosso estado e listá-los.

// Criar grupos
// 1. - Temos que ter todos os campos do formulário com um evento de Change (A gente tem que saber ler os dados dos campos).
// 2. - Identificar o endpoint no back-end que vai criar o grupo.
// 3. - Enviar os dados para o back-end.

// Deletar grupos

export interface GroupDTO {
  titulo: string
  descricao: string
  topico: string
  midia: string
  usuario: {
    id: number
  }
}

function CadastroGrupo() {
  let navigate = useNavigate()
  const [token] = useLocalStorage('token')
  const [idUser] = useLocalStorage('id')

  const [grupo, setGrupo] = useState<GroupDTO>({
    descricao: '',
    midia: '',
    titulo: '',
    topico: '',
    usuario: {
      id: parseInt(idUser)
    }
  })

  function updateGroup(e: ChangeEvent<HTMLInputElement>) {
    setGrupo({
      ...grupo,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    await httpPost(`/api/Grupos/cadastrarGrupo`, grupo, setGrupo, {
      headers: {
        Authorization: token
      }
    })

    alert('Grupo cadastrado com sucesso!')

    back()
  }

  function back() {
    navigate('/feed')
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="containerCadastroGrupo">
        <div className="containerConteudo">
          <aside id="perfilContainer">
            <Link to="/perfil">
              <section id="fotoPerfilBox">
                <img src="https://i.imgur.com/769pZ58.png" alt="" />
              </section>
            </Link>
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

          <main id='campo-central'>
            <form onSubmit={onSubmit}>
              <div>
                <h1 style={{ textAlign: 'center' }}>Criar Grupo</h1>
                <br />
              </div>
              <div className="input-campo">
                <input
                  value={grupo.titulo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateGroup(e)
                  }
                  type="text"
                  placeholder="Título"
                  name="titulo"
                  required
                />
              </div>
              <div className="input-campo">
                <input
                  value={grupo.descricao}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateGroup(e)
                  }
                  type="text"
                  placeholder="Descrição"
                  name="descricao"
                  required
                />
              </div>
              <div className="input-campo">
                <input
                  value={grupo.topico}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateGroup(e)
                  }
                  type="text"
                  placeholder="Tópico"
                  name="topico"
                  required
                />
              </div>
              <div className="input-campo">
                <input
                  value={grupo.midia}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateGroup(e)
                  }
                  type="text"
                  placeholder="URL Imagem"
                  name="midia"
                  required
                />
              </div>
              <button className="botao" type="submit">
                Cadastrar
              </button>
              <Link to='/feed'>
                <button className="botaoVoltar" type="button">
                  Voltar
                </button>
              </Link>
            </form>
          </main>
        </div>
      </main>
    </>
  )
}

export default CadastroGrupo

