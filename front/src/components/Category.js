import React from 'react'
import { useState, useContext } from 'react'
import { FilterContext } from '../context'

function Category() {

  const {handleCategoryFilter} = useContext(FilterContext)
  const [isActive, setIsActive] = useState('')

  function handleCategory (e) {
    handleCategoryFilter(e.target.name)
    setIsActive(e.target.name)
  }
  
  return (
    <div className='category container flex wrap gap-0-8'>
        <button onClick={handleCategory} name="All" className={ isActive === "All" ? "filter-active" : "filter-button" }>All</button>
        <button onClick={handleCategory} name="UI" className={ isActive === "UI" ? "filter-active" : "filter-button" }>UI</button>
        <button onClick={handleCategory} name="UX" className={ isActive === "UX" ? "filter-active" : "filter-button" }>UX</button>
        <button onClick={handleCategory} name="Enhancement" className={ isActive === "Enhancement" ? "filter-active" : "filter-button" }>Enhancement</button>
        <button onClick={handleCategory} name="Bug" className={ isActive === "Bug" ? "filter-active" : "filter-button" }>Bug</button>
        <button onClick={handleCategory} name="Feature" className={ isActive === "Feature" ? "filter-active" : "filter-button" }>Feature</button>
    </div>
  )
}

export default Category