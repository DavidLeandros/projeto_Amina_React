import React , {useEffect, useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            email: '',
            nome: '',
            genero: '',
            senha: '',
            urlFoto: '',
            tipo: '',
            dataNascimento: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            email: '',
            nome: '',
            genero: '',
            senha: '',
            urlFoto: '',
            tipo: '',
            dataNascimento: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    
    return (
        <>
            <main className='bgCadastro'>
                <div className='container'>
                    <div className="containerMenor">
                        <img src="https://i.imgur.com/zboX1XL.png" alt="" id='imgcu'/>
                        <form onSubmit={onSubmit}>
                            <section>
                                <div className='input-campo'>
                                    <label htmlFor="">Nome:</label>
                                    <input value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="text" placeholder='Digite seu Nome' name='nome' required />
                                    <div className='underline'></div>
                                </div>
                                <div className="input-campo">
                                    <label htmlFor="">E-mail:</label>
                                    <input  value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="email" placeholder='Digite seu E-mail' name='email' required />
                                    <div className='underline'></div>
                                </div>
                                <div className="input-campo">
                                    <label htmlFor="">Senha:</label>
                                    <input  value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="password" placeholder='Digite sua Senha' name='senha' required />
                                    <div className='underline'></div>
                                </div>
                                <div className="input-campo">
                                    <label htmlFor="">Data de Nascimento:</label>
                                    <input value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="date" />
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
                            <Link to="/">
                            <button className='botao' type='button'>Voltar</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CadastroUsuario;
