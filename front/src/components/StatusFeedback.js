import React from 'react'

import iconCircle from '../assets/icon-li.svg'
import commentIcon from "../assets/icon-comments.svg"
import chevronUp from "../assets/icon-arrow-up.svg"


function StatusFeedback() {
  return (
    <div className='statusFeedback flex flex-col gap-0-8'>
        <div className='flex gap-0-5'>
            <img src={iconCircle} alt="" />
            <p>Planned</p>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='flex flex-col gap-0-5'>
                <h3>More comprehensive reports</h3>
                <p>It would be great to see a more detailed breakdown of solutions.</p>
                <p className="filter">Feature</p>
            </div>

            <div className='flex align-center between'>

                <div className="small-container flex align-center">
                    <img src={chevronUp} alt="" />
                    <span>12</span>
                </div>

                <div className="feedback__comment flex align-center gap-0-5">
                    <div>
                        <img src={commentIcon} alt=""/>
                    </div>
                    <span>1</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatusFeedback