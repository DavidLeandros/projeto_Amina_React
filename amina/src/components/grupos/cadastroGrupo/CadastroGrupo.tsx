import React from "react"
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"

function CadastroGrupo(){
    return(
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário Grupo</Typography>

                <TextField value="" id="titulo" label="titulo" name="titulo" variant="outlined"
                margin="normal" fullWidth />
                <TextField value="" id="descricao" label="descricao" name="descricao" variant="outlined"  margin="normal" fullWidth />
                <TextField value="" id="topico" label="topico" name="topico" variant="outlined"  margin="normal" fullWidth />
                <TextField value="" id="midia" label="midia" name="midia" variant="outlined" margin="normal" fullWidth />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Grupo</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper">
                        <MenuItem value="">Titulo Grupo</MenuItem>
                        <MenuItem value="">Descrição Grupo</MenuItem>
                        <MenuItem value="">Topico Grupo</MenuItem>
                        <MenuItem value="">Midia Grupo</MenuItem>
                    </Select>
                    <Button type="submit" variant="contained" color="primary">
                        Cadastrar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroGrupo;