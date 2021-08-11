import React, { useRef, useState } from 'react'
import './Login.scss';
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            setLoading(false)
            await login(emailRef.current.value, passwordRef.current.value)
            console.log("LOGIN", Login())
        } catch {
            setError('Failed to sign in')
        }
        history.push('/')
    }

    return (
        <section className="login">
            <form onSubmit={handleSubmit} className="loginContainer">
                <label>Username</label>
                <input type="email" ref={emailRef} required />
                <p className="errorMsg"></p>
                <label>Password</label>
                <input type="password" ref={passwordRef} required />
                <p className="errorMsg">{error}</p>
                <div className="buttonContainer">
                    <button disabled={loading} type="submit" className="login-btn">Log In</button>
                    <p>Don't have an account? <Link to="register"><span>Sign Up</span></Link></p>
                </div>
            </form>
        </section>
    )
}



// {
//     ...,
//     ...,
//     savedLists: { //object name
//         id1: [ //userID
//             {
//             jeny: {
//                 name: 'jeny',
//                 price: 56

//             },
//             harvey: {
//                 name: 'harvey',
//                 price: 56

//             },
//         }
//     ],
//             id2: {
//             name: 'villa';
//             price: 56

//         }
//     }
// }