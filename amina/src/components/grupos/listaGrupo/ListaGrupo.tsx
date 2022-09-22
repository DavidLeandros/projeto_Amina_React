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
      <div id="cards">
        {grupos.map(grupo => (
          <Box m={2} style={{ borderRadius: '10%', overflow: 'hidden' }} >
            <Card variant="outlined">
              <CardContent id='cardContent'>
                <Typography id='titulo' style={{fontWeight:'bold'}} >{grupo.titulo} </Typography>
                <Typography id='descricao'>{grupo.descricao}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div>
    </>
  )
}
