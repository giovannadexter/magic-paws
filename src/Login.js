import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import logo from "./imgs/logo.png";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed in:", userCredential.user);
                navigate('/'); // Redireciona para a página inicial
            })
            .catch((error) => {
                console.error("Error during sign in:", error.message);
                alert(error.message); // Exibe uma mensagem de erro para o usuário
            });
    };

    const register = () => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User registered:", userCredential.user);
                navigate('/'); // Redireciona para a página inicial após o registro
            })
            .catch((error) => {
                console.error("Error during registration:", error.message);
                alert(error.message); // Exibe uma mensagem de erro para o usuário
            });
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo} 
                    alt="Logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the MAGIC PAWS Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Magic Paws Account</button>
            </div>
        </div>
    );
}

export default Login;
