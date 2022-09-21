import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import './ListaPostagem.css'
import { Box, CardActionArea } from '@mui/material'
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Service'

export default function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token')

  let navigate = useNavigate()

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado!')
      navigate('/login')
    }
  }, [token])

  async function getPost() {
    await busca('/api/Postagens/todasPostagens', setPosts, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
      {/*
                posts.map(post => (
                    <Box m={0.2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagem
                                </Typography>
                                <Typography variant="h4" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="h6" component="p">
                                    {post.descricao}
                                </Typography>
                                <Typography variant="h6" component="p">
                                    {post.foto}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size="small" color="primary">
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size="small" color="secondary">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
                */}
      <div id="listaPostagem">
        {posts.length > 0 &&
          posts.map(post => (
            <Box m="0.7em">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.imgur.com/n4v1WoJ.png"
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      "{post.titulo}
                    </Typography>
                    <Typography variant="body2">{post.descricao}</Typography>
                    <Typography variant="body2"></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
      </div>
    </>
  )
}
