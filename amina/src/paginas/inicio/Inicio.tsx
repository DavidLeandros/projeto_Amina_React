import React from 'react';
import NavbarHome from '../../components/estaticos/navbar/NavbarHome';
import './Inicio.css';

export default function Inicio(){
    return ( 
        <> 
        <NavbarHome/> 
        <main id='home'> 
        <div id='img'> 
        <img id="logo" src="https://i.imgur.com/vCzHxoj.png" alt="" />
        <img id="cel" src="https://i.imgur.com/LZ0hSLa.png" alt="" />
        </div>
        </main>
        </>

    )
}



