import React, { useContext } from 'react'
import Navbar from '../../components/estaticos/navbar/Navbar'
import { UsuarioContext } from '../../context/UsuarioContext'
import './Feed.css'

export default function Feed() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          reprehenderit nobis ea debitis cum qui velit autem mollitia odio nemo.
          Officiis ea explicabo illum cupiditate beatae quaerat sapiente, in
          accusamus?
        </h1>
      </main>
    </>
  )
}
