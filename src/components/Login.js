import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import '../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                history.push('/')
            })
            .catch((err) => alert(err.message))
    }
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={signIn} type='submit' className='login__signInButton' >Sign in</button>
                </form>
                <p>
                    By signing in you agree to Amazon's Conditions of 
                    use & sales.
                </p>
                <button onClick={register} className='login__signUpButton' >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
