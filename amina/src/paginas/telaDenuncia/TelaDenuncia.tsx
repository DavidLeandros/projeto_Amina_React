import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/estaticos/navbar/Navbar"
import "./TelaDenuncia.css"

export default function TelaDenuncia() {
    return (
        <>
            <Navbar />
            <main id="denuncia">
                <div id="container1">
                    <img id="ImagemTitulo" src="https://i.imgur.com/zboX1XL.png" alt="" />

                    <Link to="/formdenuncia">
                        <button className="denunciaBtn">
                            Denunciar abuso na rede
                        </button>
                    </Link>

                    <button className="denunciaBtn">
                        <a href="https://ligue180@www.gov.br/mdh/pt-br" target="_blank">
                            Denunciar abuso fora da rede
                        </a>
                    </button>


                </div>
            </main>
        </>
    )
}