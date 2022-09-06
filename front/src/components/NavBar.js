import React from 'react'
import bubbleIcon from "../assets/icon-suggestions.svg"
import chevronDown from "../assets/icon-arrow-down.svg"
import plusIcon from "../assets/icon-plus.svg"

function NavBar() {
  return (
    <div className='navBar flex align-center between'>
      
      <div className='flex align-center'>
        <img src={bubbleIcon} alt="" />
        <span>6 suggestions</span>
      </div>
       
      <div className='flex align-center'>
        <p>Sort by: </p>
        <span>Most upvote</span>
        <img src={chevronDown} alt="" />
      </div>
        
      <button>
        <img src={plusIcon} alt="" />
        <span>Add Feeback</span>
      </button>
      
    </div>
  )
}

export default NavBar