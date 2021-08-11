import React, { useState } from 'react'
import { useAuth } from './contexts/AuthContext.js'
import Listing from './Listing.js'

var last = 0

export default function Listings({listingsData, change, changeView, view }) {

  const { showListing, handleListingClick, selectedListing } = useAuth()
  const [currentPage, setCurrentPage] = useState(1)
  const [listingsPerPage, setListingsPerPage] = useState(6)
 

  const loopListings = () => {
    
    var indexOfLastListing = currentPage * listingsPerPage
    var indexOfFirstListing = indexOfLastListing - listingsPerPage
    var currentListings = listingsData.slice(indexOfFirstListing, indexOfLastListing)

    if (listingsData === undefined || listingsData.length === 0) {
      return "Sorry your filter did not match any listing"
    }

    return currentListings.map((listing, index) => {

      if (view === 'box') {
        // This is the box view
        return (<div className="col_md_4" key={index}>
          <div className="listing">
            <div className="listing-img" style={{ background: `url("${listing.image}") no-repeat center center` }}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3 col-sm-3">
                  <div className="user-img" style={{ background: `url("${listing.userImage}") no-repeat center center` }}></div>
                </div>
                <div className="col-md-9 col-sm-9">
                  <div className="user-details">
                    <span className="user-name">{listing.userName}</span>
                    <span className="post-date">{listing.postDate}</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space"><i className="far fa-square"></i><span>{listing.floorSpace}&sup2;</span></div>
                    <div className="bedrooms"><i className="fas fa-bed"></i><span>{listing.rooms} bedrooms</span></div>
                  </div>
                  <div className="view-btn" onClick={() => handleListingClick(listing)}>
                    View Listing
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
            </div>
          </div>
        </div>)
      } else {
        // This is the long view
        return (<div className="col_md_12 col_lg_6" key={index}>
          <div className="listing">
            <div className="listing-img" style={{ background: `url("${listing.image}") no-repeat center center` }}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3 col-sm-3">
                  <div className="user-img" style={{ background: `url("${listing.userImage}") no-repeat center center` }}></div>
                </div>
                <div className="col-md-9 col-sm-9">
                  <div className="user-details">
                    <span className="user-name">{listing.userName}</span>
                    <span className="post-date">{listing.postDate}</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space"><i className="far fa-square"></i><span>{listing.floorSpace}&sup2;</span></div>
                    <div className="bedrooms"><i className="fas fa-bed"></i><span>{listing.rooms} bedrooms</span></div>
                  </div>
                  <div className="view-btn" onClick={() => handleListingClick(listing)}>
                    View Listing
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
            </div>
          </div>
        </div>)
      }
    })
  }

  
  const handleClick = (event) => {
    event.preventDefault()
      setCurrentPage(Number(event.target.id))
  }
  
  const handleLastClick = (event) => {
    event.preventDefault()
      setCurrentPage(last)
  }
  
  const handleFirstClick = (event) => {
    event.preventDefault()
      setCurrentPage(1)
  }




    var prev = 0
    var next = 0


    
    var indexOfLastListing = currentPage * listingsPerPage
    var indexOfFirstListing = indexOfLastListing - listingsPerPage
    var currentListings = listingsData.slice(indexOfFirstListing, indexOfLastListing)
   

    prev = currentPage > 0 ? (currentPage - 1) : 0
    last = Math.ceil(listingsData.length / listingsPerPage)
    next = (last === currentPage) ? currentPage : currentPage + 1


    var startPage, endPage;
    if (last <= 5) {
      startPage = 1
      endPage = last
    } else {
      if (currentPage <= 3) {
        startPage = 1
        endPage = 5
      } else if (currentPage + 2 >= last) {
        startPage = last - 4
        endPage = last
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }
    var pageNumbers = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" placeholder="search" onChange={change} />
      </section>

      <section className="sortby-area">
        <div className="results">{listingsData.length} results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select>
          <div className="view">
            <button onClick={changeView.bind(null, "box")}><i className="fa fas fa-th" aria-hidden="true"></i></button>
            <button onClick={changeView.bind(null, "long")}><i className="fa fas fa-list" aria-hidden="true"></i></button>
          </div>
        </div>
      </section>

      <section className="listings-results">
          {view === 'box' 
            ?
              <div className="row-box">
                {loopListings()}
              </div>
            : 
              <div className="row-long">
                {loopListings()}
              </div>
            }
      </section>
      

      {
        showListing && 
          <Listing listingData={selectedListing} handleListingClick={handleListingClick} />
      }
      
      <section className="listing-pagination">
        <ul className="pages">
          {prev === 0 ? <li>First</li> :
            <li onClick={handleFirstClick} id={prev} href={prev}>First</li>
          }
          {prev === 0 ? <li>Prev</li> :
            <li onClick={handleClick} id={prev} href={prev}>prev</li>
          }
          {pageNumbers.map((number, i) => (<li
            className={currentPage === number ? "active" : "inactive"}
            key={i}
            onClick={handleClick} href={number} key={number} id={number}>
            {number}
          </li>)
          )}
          {currentPage === last ? <li>Next</li> :
            <li onClick={handleClick} id={next} href={next}>Next</li>
          }
          {currentPage === last ? <li>Last</li> :
            <li onClick={handleLastClick} id={next} href={next}>Last</li>
          }
        </ul>
      </section>
    </section>)
}


