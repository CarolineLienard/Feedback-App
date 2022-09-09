import React from 'react'

import commentIcon from "../assets/icon-comments.svg"
import chevronUp from "../assets/icon-arrow-up.svg"

function Feedback({feedback}) {
    return (
        <div key={feedback.id} className="feedback container flex align-center between">
                    
            <div className="feedback__title flex">
                <div className="small-container flex flex-col align-center">
                    <div>
                        <img src={chevronUp} alt="" />
                    </div>
                    <span>{feedback.likes}</span>
                </div>

                <div className="flex flex-col gap-0-8">
                    <h3>{feedback.title}</h3>
                    <p>{feedback.body}</p>
                    <p className="filter">{feedback.category}</p>
                </div>
            </div>    
            
            <div className="feedback__comment flex align-center gap-0-5">
                <div>
                    <img src={commentIcon} alt=""/>
                </div>
                <span>{feedback.comments}</span>
            </div>
        </div>
    )
}

export default Feedback