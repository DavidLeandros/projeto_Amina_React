import React, { useEffect, useState, ChangeEvent } from "react"
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import { buscaId, httpPut, httpPost } from "../../../services/Service";

function CadastroPost(){
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [ token, setToken ] = useLocalStorage("token")

    const [post, setPost] = useState<Postagem>({
        id: 0,
        titulo: '',
        descricao: '',
        img: ''
    })

    useEffect(() => {
        if(token == ''){
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string){
        buscaId(`/api/Postagens/idPostagem/${id}`, setPost, {
            headers:{
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>){
        setPost({
            ... post,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("postagem " + JSON.stringify(post))

        if(id !== undefined){
            console.log(post)
            httpPut(`/api/Postagens/atualizarPostagem`, post, setPost, {
                headers:{
                    'Authorization': token
                }
            })
            alert("Postagem atualizada com sucesso!")
        }else{
            httpPost(`/api/Postagens/cadastrarPostagem`, post, setPost, {
                headers:{
                    'Authorization': token
                }
            })
            alert("Postagem cadastrada com sucesso!")
        }
        back()
    }

    function back(){
        navigate("/listaposts")
    }
    
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário Postagem</Typography>

                <TextField value={post.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={post.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <TextField value={post.img} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="img" label="img" variant="outlined" name="img" margin="normal" fullWidth />

                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroPost;