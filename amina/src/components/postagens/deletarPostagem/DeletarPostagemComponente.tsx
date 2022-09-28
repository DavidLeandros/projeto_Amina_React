import React, { useEffect, useState, ChangeEvent } from "react"
import { Box } from '@mui/material'
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { buscaId, deleteId } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import '../deletarPostagem/DeletarPostagem.css'

function DeletarPostagemComponente() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage("token")
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/api/Postagens/idPostagem/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate("/feed")
        deleteId(`/api/Postagens/idPostagem/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert("Postagem deletada com sucesso!")
    }

    function nao() {
        navigate("/feed")
    }

    return (
        <>
            <main className="bgLogin">
                <div className="container">
                    <div className="containerMenor">
                        <h1>Tem certeza que deseja deletar a postagem?</h1>
                        <p>Essa ação não é reversível!</p>
                        
                        <br />
                        <div id="caixaBotaoDeletar">
                            <Button onClick={sim} variant="contained" className="marginLeft" size="large" color="primary" style={{backgroundColor:'#757de8'}}>
                                Sim
                            </Button>

                            <Button onClick={nao} variant="contained" size="large" style={{backgroundColor:'#ff7961'}}> 
                                Não
                            </Button>
                        </div>
                        <div className="underline"></div>
                    </div>
                </div>
            </main>


        </>
    )
}
export default DeletarPostagemComponente;