import React from 'react'
import { Link } from "react-router-dom"

import FilterDropMenu from './FilterDropMenu'

import bubbleIcon from "../assets/icons/others/icon-suggestions.svg"

function NavBar({suggestCount}) {

  return (
    <div className='navBar flex align-center gap-1 between'>
      
      <div className='navBar__suggestion flex align-center'>
        <div className='flex align-center gap-0-8'>
          <img src={bubbleIcon} alt="" />
          <span>{suggestCount} Suggestions</span>
        </div>

        <div className='flex align-center gap-0-5'>
          <FilterDropMenu />
        </div>
      </div>  

      <Link to={'/addFeedback'}>
        <button className='button-purple-dark flex align-center gap-0-5'>
            <h4>+ Add Feeback</h4>
        </button>     
      </Link>
      
    </div>
  )
}

export default NavBar