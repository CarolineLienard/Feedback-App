import React from 'react'

function Category() {
  return (
    <div className='category container flex'>
        <button className='filter'>All</button>
        <button className='filter'>UI</button>
        <button className='filter'>UX</button>
        <button className='filter'>Enhancement</button>
        <button className='filter'>Bug</button>
        <button className='filter'>Feature</button>
    </div>
  )
}

export default Category