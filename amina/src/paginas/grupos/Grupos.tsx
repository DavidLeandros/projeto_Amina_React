import { userInfo } from 'os'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Navbar from '../../components/estaticos/navbar/Navbar'
import ListaGrupo from '../../components/grupos/listaGrupo/ListaGrupo'
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem'
import Grupo from '../../models/Grupo'
import { buscaId } from '../../services/Service'
import './Grupos.css'

export default function Grupos() {
  const [grupo, setGrupo] = useState<Grupo>({} as Grupo)
  const { id } = useParams<{ id: string }>()
  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate()

  async function findById(id: string) {
    await buscaId(`/api/Grupos/idGrupo/${id}`, setGrupo, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    if (token == '') {
      alert('Você precisa estar logado!')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="containerFeed">
        <div className="containerConteudo">
          <aside id="perfilContainer">
            <section id="fotoGrupoBox">
              <img src="https://i.imgur.com/769pZ58.png" alt="" />
            </section>
            <section id="menuPerfil">
              <ul>
                <li className="tagPerfil">Perfil</li> <br />
                <li className="tagPerfil">Configurações</li> <br />
                <li className="tagPerfil">Email: </li>
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
              <img
                className="muralPerfil"
                src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/07/23/tulipa-flor-roxa-pinteres.jpg"
                alt=""
              />
              <section id="postBox">
                <label id="saudacao">{grupo?.titulo}</label>
                <br />

                <br />
                <h4>Sobre nós</h4> <br />
                <p>
                  {grupo?.descricao}
                </p>
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
