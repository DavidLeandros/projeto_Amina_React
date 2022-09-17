import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './ListaGrupo.css';
import Grupo from "../../../models/Grupo";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";

export default function ListaGrupo() {
    const [grupos, setGrupos] = useState<Grupo[]>([])
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    async function getGrupos() {
        await busca("/grupo", setGrupos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getGrupos()
    }, [grupos.length])

    return (
        <>
            {
                grupos.map(grupo => (
                ))
            }
        </>
    )
}
