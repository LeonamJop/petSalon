import styles from './styles.module.css'
import logo from '../../assets/petLogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();


    const loginCorreto = 'leonam';
    const senhaCorreta = '123';


    function handleUserLogin(e: React.ChangeEvent<HTMLInputElement>){
        setUserLogin(e.target.value);
    }

    function handleUserPassword(e: React.ChangeEvent<HTMLInputElement>){
        setUserPassword(e.target.value);
    }

    function handleCredentials(){
        if(userLogin === '' || userPassword === ''){
            alert("Digite um usuário e senha")
        }else if(userLogin !== loginCorreto || userPassword !== senhaCorreta){
            alert("Usuário ou senha incorretos")
        }else {
            navigate('/home')
        }
    }

    return (
        <div className={styles.login}>
            <img src={logo} alt="Logo da pet shop" draggable="false"/>
            <h1>Roana Pet Salon</h1>

            <div className={styles.credentials}>

                <div className={styles.user}>
                    <label htmlFor="user">Login</label>
                    <input
                        id='user'
                        type="text"
                        placeholder='Digite seu usuário'
                        onChange={handleUserLogin}
                    />
                </div>

                <div className={styles.password}>
                    <label htmlFor="password">Senha</label>
                    <input
                        id='password'
                        type="password"
                        placeholder='Digite sua senha'
                        onChange={handleUserPassword}
                    />
                </div>

            </div>
            <button
                className={styles.buttonLogin}
                onClick={handleCredentials}
            >
                Entrar
            </button>
        </div>
    )
}