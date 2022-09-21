import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/estaticos/navbar/Navbar"
import "./TelaDenuncia.css"

export default function TelaDenuncia() {
    return (
        <>
            <Navbar />
            <main id="sobre">
                <div id="container">
                    <img id="ImagemTitulo" src="https://i.imgur.com/zboX1XL.png" alt="" />

                    <Link to="">
                        <button className="denunciaBtn">
                            Denunciar abuso na rede
                        </button>
                    </Link>

                    <Link to="">
                        <button className="denunciaBtn">
                            Denunciar abuso fora da rede
                        </button>
                    </Link>


                </div>
            </main>
        </>
    )
}