import React from "react"
import Navbar from "../../components/estaticos/navbar/Navbar"
import "./TelaDenuncia.css"

export default function TelaDenuncia(){
    return(
        <>
            <Navbar />
            <main id="sobre">
                <div id="container">
                    <img id="ImagemTitulo" src="https://i.imgur.com/zboX1XL.png" alt="" />
                    
                    <div id="btnDenuncias">
                        <button className="denunciaBtn">
                            Denunciar abuso na rede
                        </button>

                        <button className="denunciaBtn">
                            Denunciar abuso fora da rede
                        </button>
                    </div>
                    
                </div>
            </main>
        </>
    )
}