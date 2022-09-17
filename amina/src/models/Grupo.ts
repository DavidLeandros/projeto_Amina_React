import User from "./User";

interface Grupo{
    id: number;
    titulo: string;
    descricao: string;
    topico: string;
    midia: string;
    usuario?: User| null;
}

export default Grupo;