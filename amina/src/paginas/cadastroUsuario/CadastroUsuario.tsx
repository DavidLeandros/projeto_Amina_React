import React , {useEffect, useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import NavbarHome from '../../components/estaticos/navbar/NavbarHome';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            email: '',
            nome: '',
            senha: '',
            urlFoto: '',
            tipo: 'NORMAL',
            dataNascimento: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            email: '',
            nome: '',
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

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        console.log(user);

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        //if(confirmarSenha == user.senha){
            cadastroUsuario('/api/Usuarios/cadastrar', user, setUserResult)
            alert('Usuario cadastrado com sucesso')
            navigate("/login")
        {/*}}else{
            alert('Dados inconsistentes. Por favor, verifique as informações do cadastro.')
        }*/}

    }
    
    return (
        <>
        <NavbarHome/>
            <main className='bgCadastro'>
                <div className='container'>
                    <div className="containerMenor">
                        <img src="https://i.imgur.com/zboX1XL.png" alt="" id='imgcu'/>
                        <form onSubmit={onSubmit}>
                            <section>
                                <div className='input-campo'>
                                    <label htmlFor="">Nome</label>
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
                                    <input value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="password" placeholder='Digite sua Senha' name='senha' required />
                                    <div className='underline'></div>
                                </div>
                                {/*<div className="input-campo">
                                    <label htmlFor="">Confirmar Senha:</label>
                                    <input value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} type="password" placeholder='Confirme sua senha' name='confirmarSenha' required />
                                    <div className='underline'></div>
                                </div>*/}
                                <div className="input-campo">
                                    <label htmlFor="">Data de Nascimento:</label>
                                    <input value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="date" name="dataNascimento"/>
                                </div>
                                
                            </section>
                            <button className='botao' type='submit'>Cadastrar</button>
                            <Link to="/">
                            <button className='botao2' type='button'>Voltar</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CadastroUsuario;
