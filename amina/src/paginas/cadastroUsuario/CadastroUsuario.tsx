import React from 'react';
import './CadastroUsuario.css';

export default function CadastroUsuario() {
    return (
        <>
            <main className='bgCadastro'>
                <div className='container'>
                    <div className="containerMenor">
                        <img src="https://i.imgur.com/zboX1XL.png" alt="" id='imgcu'/>
                        <form>
                            <section>
                                <div className='input-campo'>
                                    <label htmlFor="">Nome:</label>
                                    <input type="text" placeholder='Digite seu Nome' name='nome' required />
                                    <div className='underline'></div>
                                </div>
                                <div className="input-campo">
                                    <label htmlFor="">E-mail:</label>
                                    <input type="email" placeholder='Digite seu E-mail' name='email' required />
                                    <div className='underline'></div>
                                </div>
                                <div className="input-campo">
                                    <label htmlFor="">Senha:</label>
                                    <input type="password" placeholder='Digite sua Senha' name='senha' required />
                                    <div className='underline'></div>
                                </div>
                                <div className="input-campo">
                                    <label htmlFor="">Data de Nascimento:</label>
                                    <input type="date" />
                                </div>
                            </section>
                            <section className='box1'>
                                <form action="">
                                <label htmlFor="">Gênero:</label>
                                    <div id='box2'>
                                        <input type="radio" name='genero' value='Masculino' />
                                        <label className='opGenero'>Masculino</label>
                                        <input type="radio" name='genero' value='Feminino' />
                                        <label className='opGenero'>Feminino</label>
                                        <input type="radio" name='genero' value='Prefiro não declarar' />
                                        <label className='opGenero'>Prefiro não declarar</label>
                                    </div>
                                </form>
                            </section>
                            <button className='botao' type='button'>Registrar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}


