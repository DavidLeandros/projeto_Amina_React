import React from "react"
import { Container, Typography, TextField, Button } from "@material-ui/core"

function CadastroPost(){
    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário Postagem</Typography>

                <TextField value="" id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value="" id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <TextField value="" id="img" label="img" variant="outlined" name="img" margin="normal" fullWidth />

                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroPost;