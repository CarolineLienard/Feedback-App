import React from 'react'

function Roadmap() {
  return (
    <div className='roadmap container'>
        <div className='flex align-center between'>
            <h3>Roadmap</h3>
            <span>View</span>
        </div>
        <div>
            <div className='flex align-center between'>
                <li>Planned</li>
                <span>0</span>
            </div>

            <div className='flex align-center between'>
                <li>In-Progress</li>
                <span>0</span>
            </div>

            <div className='flex align-center between'>
                <li>Live</li>
                <span>0</span>
            </div>
            
        </div>
    </div>
  )
}

export default Roadmap