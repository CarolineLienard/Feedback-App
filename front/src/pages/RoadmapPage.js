import React from 'react'
import { Link } from "react-router-dom"

import StatusFeedback from '../components/StatusFeedback'

import backIcon from '../assets/icon-arrow-left.svg'


function RoadmapPage() {
  return (

    <div className='roadmapPage flex flex-col'>

      <div className='roadmapHeader flex between'>
        <div className='flex flex-col'>
          <div className='flex align-center gap-0-8'>
            <img src={backIcon} alt="" />
            <Link to={'/'}>
              <h4>Go Back</h4>
            </Link>
          </div>
          <h1>Roadpmap</h1>
        </div>
        <Link to={'/addFeedback'}>
          <button className='button-purple'>+ Add Feedback</button>
        </Link>
      </div>

      <div className='roadmapContainer flex'>

        <div className='statusCol flex flex-col'>
          <div>
            <h3>Planned (3)</h3>
            <p>Ideas prioritized for research</p>
          </div>
          <StatusFeedback />
        </div>

        <div className='statusCol flex flex-col'>
          <div>
            <h3>In-Progress (3)</h3>
            <p>Ideas prioritized for research</p>
          </div>
          <StatusFeedback />
        </div>

        <div className='statusCol flex flex-col'>
          <div>
            <h3>Live (3)</h3>
            <p>Ideas prioritized for research</p>
          </div>
          <StatusFeedback />
        </div>

      </div>

    </div>
    
    

  )
}

export default RoadmapPage