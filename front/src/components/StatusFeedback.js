import React from 'react'

import iconCircle from '../assets/icon-li.svg'
import circlePurple from '../assets/circle-purple.svg'
import circleBlue from '../assets/circle-blue.svg'
import commentIcon from "../assets/icon-comments.svg"
import chevronUp from "../assets/icon-arrow-up.svg"


function StatusFeedback({feedback}) {
    const isPlanned = feedback.status === "Planned"
    const isProgress = feedback.status === "In Progress"

  return (
    <div style={{borderTopColor: isPlanned ? "#F49F85" : isProgress ? "#AD1FEA" : "#62BCFA" }} className='statusFeedback flex flex-col gap-0-8'>
        <div className='flex gap-0-5'>
            <img src={ isPlanned ? iconCircle : isProgress ? circlePurple : circleBlue } alt="" />
            <p>{feedback.status}</p>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='flex flex-col gap-0-5'>
                <h3>{feedback.title}</h3>
                <p>{feedback.body}</p>
                <p className="filter">{feedback.category}</p>
            </div>

            <div className='flex align-center between'>

                <div className="small-container flex align-center">
                    <img src={chevronUp} alt="" />
                    <span>{feedback.likes}</span>
                </div>

                <div className="feedback__comment flex align-center gap-0-5">
                    <div>
                        <img src={commentIcon} alt=""/>
                    </div>
                    <span>{feedback.comments}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatusFeedback