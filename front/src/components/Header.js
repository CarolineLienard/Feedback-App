import React, {useState} from 'react'

import Roadmap from './Roadmap'
import Category from './Category'
import burgerIcon from '../assets/mobile/icon-hamburger.svg'
import closeIcon from '../assets/mobile/icon-close.svg'

function Header({plannedLength, liveLength, progressLength}) {
  const [ mobileMenu, setMobileMenu ] = useState(true)

  function handleMobileMenu () {
    setMobileMenu(!mobileMenu)
  }

  return (
    <div>
      <header className='flex align-center between'>
        <div className='flex flex-col'>
          <h2>Aston Digital</h2>
          <p>Feedback Board</p>
        </div>

        <div className='mobile-menu-container'>
          <img onClick={handleMobileMenu} className='mobile-menu' src={ mobileMenu ? burgerIcon : closeIcon } alt='' />
        </div>
      </header>
      
      <div className={ mobileMenu ? 'none' : 'mobile-menu-content'}>
        <div className='mobile-content'>
          <div className='mobile-div'>
            <Category />
            <Roadmap plannedLength={plannedLength} progressLength={progressLength} liveLength={liveLength} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header