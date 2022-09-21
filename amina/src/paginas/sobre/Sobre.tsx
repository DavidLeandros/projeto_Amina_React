import React from "react";
import "./Sobre.css";
import NavbarHome from "../../components/estaticos/navbar/NavbarHome";

export default function Sobre() {
    return (
        <>
            <NavbarHome />
            <main id="sobre">
                <div id="container">
                    <img id="ImagemTitulo" src="https://i.imgur.com/zboX1XL.png" alt="" />
                    <h2> Sobre</h2>
                    <article>
                        <p>Somos a Amina uma rede social exclusiva para mulheres e meninas, um espaço para troca de experiências, busca de conhecimento e proteção, para assim nos fortalecer na caminhada a igualdade, assim como construir juntas um local seguro tanta para denúncias quanto para obter o suporte necessário.<br />


                            Projeto desenvolvido durante o bootcamp da Generetion Brasil pela equipe Amina da turma 2 .NET. Utilizamos a linguagem de programação C# para criação de uma API usando a arquitetura MVC.<br />

                            Usamos o banco de dados relacional MICROSOFT SQL SERVER, para o armazenamento de dados, e do Swagger, para a documentação. A tecnologia JWT para a proteção do nosso usuário e da API e o Postman para os testes de CRUD. Na estruturação e estilização do site, escolhemos utilizar HTML e CSS, empregando também as linguagens de programação JavaScript e TypeScript como complemento e a biblioteca React.<br />
                        </p>
                        <p>
                        <h2> Equipe de Devs</h2>
                            Sabryna D'Angelo, Samira Ixoobecan, Maria Júlia França, Rodrigo Lima, Felipe dos Santos Flor, Jean Franco, Rafael Candeias, David Leandro.</p>
                    </article>
                    <section id='perfil'>
                        <div className="perfilBox">
                            <a href="https://www.linkedin.com/in/sabryna-de-angelo-4b3a93217/"><img className="imgPefil " src="https://i.imgur.com/IVXfgp6.png" alt="Sabryna" /></a>
                            <a href="https://www.linkedin.com/in/samiraixoobecan/"><img className="imgPefil " src="https://i.imgur.com/z7umNGX.png" alt="Samira" /></a>
                            <a href="https://www.linkedin.com/in/maju-franca/"><img className="imgPefil " src="https://i.imgur.com/ftYYXVP.png" alt="Maria Julia" /></a>
                            <a href="https://www.linkedin.com/in/rodrigo-da-silva-lima-933b52214/"><img className="imgPefil " src="https://i.imgur.com/da6i9Eh.png" alt="Rodrigo" /></a>
                        </div>
                        <br />
                        <div className="perfilBox">
                            <a href="https://www.linkedin.com/in/felipeflor/"><img className="imgPefil " src="https://i.imgur.com/AZW5kTQ.png" alt="Felipe" /></a>
                            <a href="https://www.linkedin.com/in/jean-franco-81a496249/"><img className="imgPefil " src="https://i.imgur.com/xmjPdjs.png" alt="Jean" /></a>
                            <a href="https://www.linkedin.com/in/rafael-candeias/"><img className="imgPefil " src="https://i.imgur.com/XKZx2tt.png" alt="Rafael" /></a>
                            <a href="https://www.linkedin.com/in/david-silva-3a62b420a/"><img className="imgPefil " src="https://i.imgur.com/98qCPOx.png" alt="David" /></a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}