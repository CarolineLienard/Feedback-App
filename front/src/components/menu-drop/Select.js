import React from 'react'

import menuChevron from '../../assets/icons/arrow/chevron-blue.svg'

function Select({menuShow, setMenuShow, selected}) {
  return (
    <div 
        className={`select-category flex between align-center ${menuShow && 'select-active'}`}
        onClick={() => setMenuShow(!menuShow)}
    >

      <div className='select-arrow flex between align-center'>
        <p className='selected'>
              {selected}
        </p>
        <div className={`caret ${menuShow && 'caret-rotate'}`}>
            <img src={menuChevron} alt='' />
        </div>
      </div>
        
    </div>
  )
}

export default Select