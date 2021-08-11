import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const getLocalItems = () => {
    let list = localStorage.getItem("SavedListings")
    if(list) {
        return JSON.parse(localStorage.getItem("SavedListings"))
    } else {
        return []
    }
}



export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [savedListing, setSavedListing] = useState(getLocalItems())
    const [showListing, setShowListing] = useState(false)
    const [selectedListing, setSelectedListing] = useState([])
    

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    const handleListingClick = (selectedListing) => {
        if (showListing) {
            setShowListing(!showListing)
            setSelectedListing([])
        }
        else {
            setShowListing(!showListing)
            setSelectedListing(selectedListing)
          }
        }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
            return unsubscribe
    }, [])

    useEffect(() => {
        localStorage.setItem("SavedListings", JSON.stringify(savedListing))
    }, [savedListing])

    

    const value = {
        currentUser,
        savedListing,
        setSavedListing,
        login,
        signup,
        logout,
        showListing,
        handleListingClick,
        selectedListing
    }

    console.log("currentUser", currentUser)
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}