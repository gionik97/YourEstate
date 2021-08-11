import React, { useState, useEffect } from 'react'
import { useAuth } from './contexts/AuthContext'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'
import Footer from './Footer.js'






export default function RealEstate() {
 
  const { showListing } = useAuth()
  const [data, setData] = useState(listingsData)
  const [city, setCity] = useState('All')
  const [homeType, setHomeType] = useState('All')
  const [bedrooms, setBedrooms] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000000)
  const [minFloorSpace, setMinFloorSpace] = useState(0)
  const [maxFloorSpace, setMaxFloorSpace] = useState(600000)
  const [filteredData, setFilterData] = useState(listingsData)
  const [populateFormsData, setPopulateFormsData] = useState('')
  const [sortby, setSortby] = useState('price-dsc')
  const [view, setView] = useState('box')
  const [search, setSearch] = useState('')
  const [changeFilter, setChangeFilter] = useState({
    gym: false, elevator: false, swimmingPool: false, finishedBasement: false
  })

  
  useEffect(() => {
    const listingsData = data.sort((a, b) => {
      return a.price - b.price
    })
    setData(listingsData)
  }, [])

  useEffect(() => {
    filterData()
  }, [changeFilter, bedrooms, city, homeType, sortby, search, minPrice, maxPrice, minFloorSpace, maxFloorSpace])


  const change = (event) => {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    if(event.target.type === 'checkbox'){
      setChangeFilter(({...changeFilter, [name]: value }))
    }
    else if(name === "homeType") {
      setHomeType(value)
    }
    else if(name === "city") {
      setCity(value)
    }
    else if(name === "bedrooms"){ 
      setBedrooms(value)
    }
    else if(name === "search") {
      setSearch(value)
    }
    else if(name === "minPrice") {
      setMinPrice(value)
    }
    else if(name === "maxPrice") {
      setMaxPrice(value)
    }
    else if(name === "minFloorSpace") {
      setMinFloorSpace(value)
    }
    else if(name === "maxFloorSpace") {
      setMaxFloorSpace(value)
    }
    else {
      setSortby(value)
    }
  }

  const changeView = (viewName) => {
    setView(viewName)
  }

  const filterData = () => {
    var newData = listingsData.filter((item) => {
      return item.price >= minPrice && item.price <= maxPrice && item.floorSpace >= minFloorSpace && item.floorSpace <= maxFloorSpace && item.rooms >= bedrooms
    })
    
    if (city !== "All") {
      newData = newData.filter((item) => {
        return item.city === city
      })
    }
    
    if (homeType !== "All") {
      newData = newData.filter((item) => {
        return item.homeType === homeType
      })
    }
    
    if (sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }
    
    if (sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }
    
    if (search !== '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = search.toLowerCase()
        var n = city.match(searchText)
        if (n != null) {
          return true
        }
      })
    }
    
    if (changeFilter.elevator === true) {
      newData = newData.filter((item) => {
        return item.extras.includes('elevator')
      })
    }
    
    if (changeFilter.swimmingPool === true) {
      newData = newData.filter((item) => {
        return item.extras.includes('pool')
      })
    }
    
    if (changeFilter.gym === true) {
      newData = newData.filter((item) => {
        return item.extras.includes('gym')
      })
    }
    
    if (changeFilter.finishedBasement === true) {
      newData = newData.filter((item) => {
        return item.extras.includes('basement')
      })
    }
    
    setFilterData(newData)
  }


  const populateForms = () => {

    // City
    var cities = data.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    cities = cities.sort()
    // Hometype
    var homeTypes = data.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()
    // Bedrooms
    var bedrooms = data.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    
      setPopulateFormsData({
        cities,
        homeTypes,
        bedrooms
      })
    
  }

    return (<div>
      {
        showListing && <div className="overlay"></div>
      }
      <section id="content-area" >
        <Filter minPrice={minPrice} maxPrice={maxPrice} minFloorSpace={minFloorSpace} maxFloorSpace={maxFloorSpace} changeFilter={changeFilter} change={change} populateFormsData={populateFormsData} populateAction={populateForms} />
        <Listings listingsData={filteredData} change={change} changeView={changeView} view={view} /> 
      </section>
      <Footer />
    </div>)
  
}

