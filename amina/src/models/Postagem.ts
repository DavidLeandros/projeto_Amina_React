import Grupo from "./Grupo";
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    descricao: string;
    img: string;
    usuario?: User| null;
    grupo?: Grupo| null;
}

export default Postagem;