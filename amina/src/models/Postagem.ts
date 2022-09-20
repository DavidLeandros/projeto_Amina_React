import Grupo from "./Grupo";
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    descricao: string;
    topico: string;
    foto: string;
    usuario?: User| null;
    grupo?: Grupo| null;
}

export default Postagem;