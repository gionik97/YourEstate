import React, { useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import { Link } from 'react-router-dom';
import './Listing.scss';

export default function Listing({ listingData, handleListingClick }) {


    const { savedListing, setSavedListing, currentUser } = useAuth()
    const [response, setResponse] = useState("")
    const [showLink,setShowLink] = useState(false)

    

    const handleSavedListing = (addedListing) => {

        if (currentUser) {
            let index = savedListing.findIndex(el => el.id === addedListing.id)
            if (index === -1) {
                setSavedListing(oldarray => [...oldarray, addedListing])
                setResponse("Offer was saved on your profile")
                const timer = setTimeout(() => {
                    setResponse("")
                }, 3000)
                return () => clearTimeout(timer)
                
            } else {
                setResponse("This offer was already added to you list")
                const timer = setTimeout(() => {
                    setResponse("")
                }, 3000)
                return () => clearTimeout(timer)
            }
        } else {
            setResponse("Don't have an account?")
            setShowLink(true)
            const timer = setTimeout(() => {
                setResponse("")
                setShowLink(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }


    return (
        <div className="home-result">
            <div className="home-img" style={{ background: `url("${listingData.image}") no-repeat center center`, objectFit: `cover` }}></div>
            <div className="home-details">
                <div className="top-section">
                    <div className="logo">YourEstate</div>
                    <div className="close-btn" onClick={handleListingClick}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="home-info">
                    <span>${listingData.price}</span>
                    <div>{listingData.rooms}bd | {listingData.bathRooms}ba | {listingData.floorSpace}sqft</div>
                </div>
                <div className="offer-button">
                    <button onClick={() => handleSavedListing(listingData)}>Start an offer</button>

                    <p>{response}{showLink && <Link className="register-link" to="register">GO REGISTER</Link>}</p>
                </div>
                <div className="overview">
                    <div className="features">
                        <h3>Feautres</h3>
                        <ul>
                            <li>Type: {listingData.homeType}</li>
                            <li>Year Built: {listingData.yearBuilt}</li>
                            <li>Heating: {listingData.heating}</li>
                            <li>Cooling: {listingData.cooling}</li>
                            <li>Parking: {listingData.parking}</li>
                        </ul>
                    </div>
                    <div className="description">
                        <h3>Overview</h3>
                        <p>{listingData.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
