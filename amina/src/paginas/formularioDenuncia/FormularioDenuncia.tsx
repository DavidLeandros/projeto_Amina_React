import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/estaticos/navbar/Navbar"
import "./FormularioDenuncia.css"

export default function FormularioDenuncia() {
    return (
        <>
            <Navbar />
            <main id="fdenuncia">
                <div>
                    <img id="ImagemTitulo" src="https://i.imgur.com/zboX1XL.png" alt="" />
                    <form action="#" method="get">
                        <select className="selectBox">
                            <option value="1">
                                Acho que não estou falando com outra mulher
                            </option>
                            <option value="2">
                                Me senti ofendida pela publicação
                                </option>
                            <option value="3">
                            Me senti ofendida pelo usuario
                            </option>
                        </select>
                        <button className="botaod" type="submit" value="Denunciar">
                            Denunciar
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}