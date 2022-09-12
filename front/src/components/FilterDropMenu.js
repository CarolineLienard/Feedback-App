import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../context'

import chevronDown from '../assets/icons/arrow/icon-arrow-down.svg'

function FilterDropMenu() {
  
    const [selected, setSelected] = useState('')
    const [select, setSelect] = useState('')
    const [caret, setCaret] = useState('')
    const [menu, setMenu] = useState('')
    const [options, setOptions] = useState('')
    const [dropdowns, setDropdowns] = useState('')
    const {handleFeedbackFilter} = useContext(FilterContext)

    useEffect(() => {
        setDropdowns(document.querySelectorAll('.dropdown'))
    }, [])

    useEffect(() => {
        if(dropdowns!=='') {
            dropdowns.forEach( dropdown => {
                setSelect(dropdown.querySelector('.select'))
                setSelected(dropdown.querySelector('.selected'))
                setCaret(dropdown.querySelector('.caret'))
                setMenu(dropdown.querySelector('.menu'))
                setOptions(dropdown.querySelectorAll('.menu li'))
            })
        }
    }, [dropdowns]) 

    useEffect(() => {
        if(options!=='') {
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
        }
    }, [options])

    function handleDropDown () {
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    } 

    function handleSelect (e) {
        const element = e.target
        const name = element.getAttribute("name")
        handleFeedbackFilter(name);
    }

  return (
  
    <div className='filterDrop'>
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
    </div>

    
  )
}

export default FilterDropMenu