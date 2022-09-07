import React, { useContext } from 'react'
import { FilterContext } from '../context'
import chevronDown from '../assets/icon-arrow-down.svg'

function FilterDropMenu() {
  
    const selected = document.querySelector('.selected')
    const caret = document.querySelector('.caret')
    const menu = document.querySelector('.menu')
    const options = document.querySelectorAll('.menu li')
    const {handleFeedbackFilter} = useContext(FilterContext)

  
    function handleDropDown () {
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    }  

    function handleSelect (e) {
        const element = e.target
        const name = element.getAttribute("name")
        handleFeedbackFilter(name);
    }

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            handleSelect(e)
            selected.innerText = option.innerText
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
            options.forEach(option => {
                option.classList.remove('active')
            })
            option.classList.add('active')
        })
    })

  return (
  
    <div className="dropdown">
        <div onClick={handleDropDown} className="select flex align-center gap-0-5">
            <p>Sort by : </p>
            <span className='selected'>Most Upvotes</span>
            <div className="caret flex align-center"><img src={chevronDown} alt=""/></div>
        </div>

        <ul className='menu'>
            <li className='active' name="mostVotes">Most Upvotes</li>
            <li name="leastVotes">Least Upvotes</li>
            <li name="mostComments">Most Comments</li>
            <li name="leastComments">Least Comments</li>
        </ul>
    </div>
    
  )
}

export default FilterDropMenu
      