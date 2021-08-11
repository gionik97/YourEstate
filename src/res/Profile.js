import React from 'react'
import { useAuth } from './contexts/AuthContext'
import './Profile.scss';
import Footer from './Footer.js'

function Profile() {

  const { savedListing, setSavedListing } = useAuth()

  const handleRemoveListing = (id) => {
    const listingCopy = [...savedListing]
    const newList = listingCopy.filter((item) => {
      return item.id !== id
    })
    setSavedListing(newList)
  }

  return (
    <>
    <div className="listing-wrapper">
      <div className="profile-heading">
        <div className="profile-heading-section">
          <h2>My listings</h2>
          <p>saved listings: {savedListing.length}</p>
        </div>
        {
          savedListing.map((listing) => {
            return <div className="col_md_12 col_lg_6" key={listing.id}>
              <div className="offer">
                <div className="offer-img" style={{ background: `url("${listing.image}") no-repeat center center` }}></div>
                <div className="offer-info">
                  <div className="top-info-section">
                    <div className="top-info-section1">
                      <div className="user-img-section">
                        <div className="offer-user-img" style={{ background: `url("${listing.userImage}") no-repeat center center` }}></div>
                        <div className="remove-icon" onClick={() => handleRemoveListing(listing.id)}>
                          <i className="fas fa-times"></i>
                        </div>
                      </div>
                      <div className="user-details">
                        <span className="user-name">{listing.userName}</span>
                        <span className="post-date">{listing.postDate}</span>
                        <div className="info-underline"></div>
                      </div>
                    </div>
                    <div className="offer-details">
                      <div className="floor-space"><i className="far fa-square"></i><span>{listing.floorSpace}&sup2;</span></div>
                      <div className="bedrooms"><i className="fas fa-bed"></i><span>{listing.rooms} bedrooms</span></div>
                    </div>
                  </div>
                  <div className="bottom-info-section">
                    <div className="bottom-info-section-left">
                      <span className="price">${listing.price}</span>
                      <span className="location location-info"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
                      <span className="address location-info">{listing.address}</span>
                    </div>
                    <div className="contact-button">
                      <button>Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Profile
