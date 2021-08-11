import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import './Listings.scss';


export default function Header() {

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

    return (<header>
      <div className="logo">YourEstate</div>
      <nav>
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
      </nav>
    </header>)
}


