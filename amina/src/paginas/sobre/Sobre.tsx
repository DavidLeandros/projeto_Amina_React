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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita enim, tenetur, totam ab error rerum consectetur, nemo mollitia quis voluptate dolorem ullam maxime perspiciatis ex! Fugit, totam similique. Vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eaque cum, adipisci dicta ab minima perspiciatis consequuntur illo excepturi accusamus veritatis exercitationem rem quod, molestias facere quam temporibus dolorem? Debitis!</p>
                    </article>
                    <section id='perfil'>
                        <div className="perfilBox">
                            <a href="https://www.linkedin.com/in/david-silva-3a62b420a/"><img className="imgPefil " src="https://i.imgur.com/98qCPOx.png" alt="David" /></a>
                            <a href="https://www.linkedin.com/in/rodrigo-da-silva-lima-933b52214/"><img className="imgPefil " src="https://i.imgur.com/da6i9Eh.png" alt="Rodrigo" /></a>
                            <a href="https://www.linkedin.com/in/felipeflor/"><img className="imgPefil " src="https://i.imgur.com/AZW5kTQ.png" alt="Felipe" /></a>
                            <a href="https://www.linkedin.com/in/maju-franca/"><img className="imgPefil " src="https://i.imgur.com/ftYYXVP.png" alt="Maria Julia" /></a>
                        </div>
                        <br />
                        <div className="perfilBox">
                            <a href="https://www.linkedin.com/in/samiraixoobecan/"><img className="imgPefil " src="https://i.imgur.com/z7umNGX.png" alt="Samira" /></a>
                            <a href="https://www.linkedin.com/in/jean-franco-81a496249/"><img className="imgPefil " src="https://i.imgur.com/xmjPdjs.png" alt="Jean" /></a>
                            <a href="https://www.linkedin.com/in/rafael-candeias/"><img className="imgPefil " src="https://i.imgur.com/XKZx2tt.png" alt="Rafael" /></a>
                            <a href="https://www.linkedin.com/in/sabryna-de-angelo-4b3a93217/"><img className="imgPefil " src="https://i.imgur.com/IVXfgp6.png" alt="Sabryna" /></a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}