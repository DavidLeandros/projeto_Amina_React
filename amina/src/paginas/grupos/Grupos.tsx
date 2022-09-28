import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { userInfo } from 'os'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Navbar from '../../components/estaticos/navbar/Navbar'
import ListaGrupo from '../../components/grupos/listaGrupo/ListaGrupo'
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem'
import Grupo from '../../models/Grupo'
import Postagem from '../../models/Postagem'
import { buscaId } from '../../services/Service'
import './Grupos.css'

export default function idGrupo() {
  const [grupo, setGrupo] = useState<Grupo>({} as Grupo)
  const { id } = useParams<{ id: string }>()
  const [token, setToken] = useLocalStorage('token')
  const [postagens, setPostagens] = useState<Postagem[]>([])
  let navigate = useNavigate()

  async function findById(id: string) {
    await buscaId(`/api/Grupos/idGrupo/${id}`, setGrupo, {
      headers: {
        Authorization: token
      }
    })
  }

  async function findPostagem(id: string) {
    await buscaId(`/api/Postagens/todasPostagensPorGrupo/${id}`, setPostagens, {
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
      findPostagem(id)
    }
  }, [id])

  useEffect(() => {
    findPostagem('id')
  }, [postagens.length])

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
                <p>{grupo?.descricao}</p>
                <div className="linha"></div>
              </section>

              <section id="postagensBox">
                <br />
                <h2 id="tituloPostagem">Minhas Postagens</h2>

                <div id="listaPostagem">
                  {postagens.length > 0 &&
                    postagens.map(postagem => (
                      <Box m="0.7em" key={postagem.id}>
                        <Card>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://i.imgur.com/n4v1WoJ.png"
                              alt=""
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {postagem.titulo}
                              </Typography>
                              <Typography variant="body2">
                                {postagem.descricao}
                              </Typography>
                              <Typography variant="body2"></Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    ))}
                </div>
              </section>
            </div>
          </main>

          <nav id="grupoContainer">
            <h1>Grupos</h1>
            <div className="grupoBox">
              <ListaGrupo />
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
