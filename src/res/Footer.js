import React, { useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import FooterImage from './img/78792.jpg'


export default function Footer() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
      setError("")
      try {
        await logout()
        history.push('/login')
      } catch {
        setError("failed to log out")
      }
    }


    return(
        <footer>
        <section className="footer-image">
            <img src={FooterImage} alt="city-view" />
        </section>
        <div className="top-container">
            <div className="footer-top">
                <div className="footer-nav">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="advertise">
                            <li>Advertise</li>
                        </Link>
                        {currentUser && <Link to="profile"><li>My profile</li></Link>}
                        {/* <Link to="profile"><li>My profile</li></Link> */}
                        <Link to="login">
                            {currentUser ? <li onClick={handleLogout}>Log out</li> : <li>Log in</li>}
                        </Link>
                        <Link to="register">
                            <li className="register-btn">Register</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-text">
                    <p>Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku.</p>
                    <p>Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.</p>
                </div>
            </div>
        </div>
        <div className="bottom-container">
            <div className="footer-bottom">
                <div className="social-icons">
                    <ul>
                        <li>
                            <i className="fab fa-linkedin"></i>
                        </li>
                        <li>
                            <i className="fab fa-facebook-square"></i>
                        </li>
                        <li>
                            <i className="fab fa-twitter-square"></i>
                        </li>
                        <li>
                            <i className="fab fa-instagram"></i>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>     
    </footer>
    )
}


