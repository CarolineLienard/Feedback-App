import React from 'react'
import bubbleIcon from "../assets/icon-suggestions.svg"
import chevronDown from "../assets/icon-arrow-down.svg"
import plusIcon from "../assets/icon-plus.svg"

function NavBar() {
  return (
    <div className='navBar flex align-center gap-1 between'>
      
      <div className='navBar__suggestion flex'>
        <div className='flex align-center gap-0-8'>
          <img src={bubbleIcon} alt="" />
          <span>6 Suggestions</span>
        </div>
        
        <div className='flex align-center gap-0-5'>
          <p>Sort by: </p>
          <h4>Most Upvote</h4>
          <img src={chevronDown} alt="" />
        </div>
      </div>  

      <button className='flex align-center gap-0-5'>
        <img src={plusIcon} alt="" />
        <h4>Add Feeback</h4>
      </button>     
      
    </div>
  )
}

export default NavBar