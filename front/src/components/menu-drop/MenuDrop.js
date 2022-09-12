import React, {useState} from 'react'
import Select from './Select'

function MenuDrop({options, handleSelect}) {
    const [menuShow, setMenuShow] = useState(false)
    const [selected, setSelected] = useState(options[0].name)
    const [optionsArray, setOptionsArray] = useState(options)

    function selectOption (e, i) {
        setSelected(e.target.innerText)
        handleSelect(e.target.innerText)
        setMenuShow(!menuShow)
        setOptionsArray(prevState => {
            const newState = prevState.map((obj, index) => {
              if (index === i) {
                return {...obj, isSelect: true};
              }      
              return {...obj, isSelect: false};;
            });
      
            return newState;
          });
    }

    return (
        <div className='dropdown'>
            <Select 
                menuShow={menuShow}
                setMenuShow={setMenuShow}
                selected={selected}
            />
            <ul className={`menu menu-category ${menuShow && 'menu-open'}`}>
                {
                    optionsArray.map((el, i) => {
                        return(
                            <li 
                                key={i} 
                                onClick={(e) => selectOption(e, i)} 
                                className={el.isSelect ? 'active' : null}>{el.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MenuDrop