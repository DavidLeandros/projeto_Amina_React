import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ListaGrupo.css'
import { Box } from '@mui/material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import Grupo from '../../../models/Grupo'
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Service'

export default function ListaGrupo() {
  const [grupos, setGrupos] = useState<Grupo[]>([])
  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate()

  useEffect(() => {
    if (token == '') {
      alert('Você precisa estar logado!')
      navigate('/login')
    }
  }, [token])

  async function getGrupos() {
    await busca('/api/Grupos/todosGrupos', setGrupos, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getGrupos()
  }, [grupos.length])

  return (
    <>
      {grupos.map(grupo => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Grupo
              </Typography>
              <Typography variant="h4" component="h2">
                Título: {grupo.titulo}
              </Typography>
              <Typography variant="h6" component="p">
                Descricão: {grupo.descricao}
              </Typography>
              <Typography variant="h6" component="p">
                Tópico: {grupo.topico}
              </Typography>
              <Typography variant="h6" component="p">
                Mídia: {grupo.midia}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioGrupo/${grupo.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link
                  to={`/deletarGrupo/${grupo.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      Deletar grupo
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  )
}
