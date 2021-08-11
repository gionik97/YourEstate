import React, { useEffect } from 'react'



  export default function Filter({change, populateAction, populateFormsData, changeFilter, minPrice, maxPrice, minFloorSpace, maxFloorSpace}) {

  useEffect(() => {
    populateAction()
  }, [])


  const cities = () => {
    if(populateFormsData.cities !== undefined) {
        var { cities } = populateFormsData
        return cities.map((item) => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })
    }
  }

  const homeTypes = () => {
    if(populateFormsData.homeTypes !== undefined) {
        var { homeTypes } = populateFormsData
        return homeTypes.map((item) => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })
    }
  }

  const bedrooms = () => {
    if(populateFormsData.bedrooms !== undefined) {
        var { bedrooms } = populateFormsData
        return bedrooms.map((item) => {
            return (
                <option key={item} value={item}>{item}+ BR</option>
            )
        })
    }
  }





    return (<section id="filter">
        <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="city" className="filterLabel">City</label>
        <select name="city" className="filters city" onChange={change}>
            <option value="All">All</option>
            {cities()}
        </select>
        <label htmlFor="homeType" className="filterLabel">Home-Type</label>
        <select name="homeType" className="filters homeType" onChange={change}>
            <option value="All">All Home-Types</option>
            {homeTypes()}
        </select>
        <label htmlFor="bedrooms" className="filterLabel">Bedrooms</label>
        <select name="bedrooms" className="filters bedrooms" onChange={change}>
            {bedrooms()}
        </select>
        <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="minPrice" className="min-price" onChange={change} value={minPrice} />
            <input type="text" name="maxPrice" className="max-price" onChange={change} value={maxPrice} />
        </div>
        <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="minFloorSpace" className="min-floor-space" onChange={change} value={minFloorSpace} />
            <input type="text" name="maxFloorSpace" className="max-floor-space" onChange={change} value={maxFloorSpace} />
        </div>
        <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
                <span>Elevators</span>
                <input name="elevator" value="elevator" type="checkbox" onChange={change} />
            </label>
            <label htmlFor="extras">
                <span>Swimming Pool</span>
                <input name="swimmingPool" value="swimming-pool" type="checkbox" onChange={change} />
            </label>
            <label htmlFor="extras">
                <span>Finished Basement</span>
                <input name="finishedBasement" value="finished-basement" type="checkbox" onChange={change} />
            </label>
            <label htmlFor="extras">
                <span>Gym</span>
                <input defaultChecked={changeFilter.gym} name="gym" value="gym" type="checkbox" onChange={change} />
            </label>
        </div>
        </div>
        </section>)
  


  }
