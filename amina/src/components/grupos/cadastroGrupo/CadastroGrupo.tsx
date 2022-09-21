import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText
} from '@material-ui/core'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom'
import { buscaId, httpPost, busca } from '../../../services/Service'
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
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário Grupo
        </Typography>

        <TextField
          value={grupo.titulo}
          id="titulo"
          label="titulo"
          name="titulo"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateGroup(e)}
        />
        <TextField
          value={grupo.descricao}
          id="descricao"
          label="descricao"
          name="descricao"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateGroup(e)}
        />
        <TextField
          value={grupo.topico}
          id="topico"
          label="topico"
          name="topico"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateGroup(e)}
        />
        <TextField
          value={grupo.midia}
          id="midia"
          label="midia"
          name="midia"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateGroup(e)}
        />
      </form>
    </Container>
  )
}

export default CadastroGrupo
