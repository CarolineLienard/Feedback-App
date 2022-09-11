import React, { useContext, useEffect, useState } from 'react'

import chevronDown from '../assets/icons/arrow/chevron-blue.svg'

function CategorySelect({category}) {
    const [selected, setSelected] = useState('')
    const [caret, setCaret] = useState('')
    const [menu, setMenu] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [options, setOptions] = useState('')
    const [categoryName, setCategoryName] = useState('Feature')

    useEffect(() => {
        setSelected(document.querySelector('.selected'))
        setCaret(document.querySelector('.caret'))
        setMenu(document.querySelector('.menu'))
        setOptions(document.querySelectorAll('.menu li'))
        setCategoryInput(document.querySelector('.categorySelector'))
    }, [])

    useEffect(() => {
        if(options!='') {
            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    handleSelect(e)
                    selected.innerText = option.innerText
                    caret.classList.remove('caret-rotate')
                    menu.classList.remove('menu-open')
                    categoryInput.classList.remove('categorySelector-Active')
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
        categoryInput.classList.toggle('categorySelector-Active')

    }  

    function handleSelect (e) {
        const element = e.target
        const name = element.getAttribute("value")
        category(name)
    }

  return (
  
    <div className="dropdown">
        <div onClick={handleDropDown} className="categorySelector select flex align-center between gap-0-5">
            <p className='selected'>{categoryName}</p>
            <div className="caret flex align-center"><img src={chevronDown} alt=""/></div>
        </div>

        <ul className='menu'>
            <li className='active' value={'Feature'}>Feature</li>
            <li value={'UX'}>UX</li>
            <li value={'UI'}>UI</li>
            <li value={'Enhancement'}>Enhancement</li>
            <li value={'Bug'}>Bug</li>
        </ul>
    </div>
    
  )
}

export default CategorySelect