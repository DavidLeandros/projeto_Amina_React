import React from "react";
import "./Sobre.css";
import NavbarHome from "../../components/estaticos/navbar/NavbarHome";

export default function Sobre(){
    return(
        <>
        <NavbarHome />
        <main id="sobre">
        <div id="container">
            <img src="https://i.imgur.com/zboX1XL.png" alt="" />
            <h2> Sobre nós</h2>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita enim, tenetur, totam ab error rerum consectetur, nemo mollitia quis voluptate dolorem ullam maxime perspiciatis ex! Fugit, totam similique. Vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eaque cum, adipisci dicta ab minima perspiciatis consequuntur illo excepturi accusamus veritatis exercitationem rem quod, molestias facere quam temporibus dolorem? Debitis!</p>
            </article>
        </div>
        </main>
        </>
    )
}