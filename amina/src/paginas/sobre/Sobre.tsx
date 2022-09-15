import React from "react";
import "./Sobre.css";
import NavbarHome from "../../components/estaticos/navbar/NavbarHome";

export default function Sobre(){
    return(
        <>
        <NavbarHome />
        <main id="sobre">
        <div id="container">
            <img id="ImagemTitulo" src="https://i.imgur.com/zboX1XL.png" alt="" />
            <h2> Sobre nós</h2>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita enim, tenetur, totam ab error rerum consectetur, nemo mollitia quis voluptate dolorem ullam maxime perspiciatis ex! Fugit, totam similique. Vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eaque cum, adipisci dicta ab minima perspiciatis consequuntur illo excepturi accusamus veritatis exercitationem rem quod, molestias facere quam temporibus dolorem? Debitis!</p>
            </article>
            <section id='perfil'>
                <div className="perfilBox">
                    <img className="imgPefil "src="https://i.imgur.com/98qCPOx.png" alt="" />
                    <img className="imgPefil "src="https://i.imgur.com/da6i9Eh.png" alt="" />
                    <img className="imgPefil "src="https://i.imgur.com/AZW5kTQ.png" alt="" />
                    <img className="imgPefil "src="https://i.imgur.com/ftYYXVP.png" alt="" />
                </div>
                <br />
                <div className="perfilBox">
                    <img className="imgPefil "src="https://i.imgur.com/z7umNGX.png" alt="" />
                    <img className="imgPefil "src="https://i.imgur.com/xmjPdjs.png" alt="" />
                    <img className="imgPefil "src="https://i.imgur.com/XKZx2tt.png" alt="" />
                    <img className="imgPefil "src="https://i.imgur.com/IVXfgp6.png" alt="" />
                </div>
            </section>
        </div>
        </main>
        </>
    )
}