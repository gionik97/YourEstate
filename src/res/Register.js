import React, { useRef, useState } from 'react'
import './Login.scss';
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            setLoading(false)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        history.push('/')
    }

    return(
        <section className="login">
            <form onSubmit={handleSubmit} className="loginContainer">
                <label>Username</label>
                <input type="email" ref={emailRef} required />
                <p className="errorMsg"></p>
                <label>Password</label>
                <input type="password" ref={passwordRef} required />
                <p className="errorMsg"></p>
                <label>Password Confirmation</label>
                <input type="password" ref={passwordConfirmRef} required />
                <p className="errorMsg">{error}</p>
                <div className="buttonContainer">
                    <button disabled={loading} type="submit" className="login-btn">Sign Up</button>
                    <p>Already have an account? <Link to="login"><span>Log in</span></Link></p>
                </div>
            </form>
        </section>
    )
}