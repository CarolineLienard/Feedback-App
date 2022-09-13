import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import LikeButton from './LikeButton'
import commentIcon from "../assets/icons/others/icon-comments.svg"


function Feedback({feedback, refreshPost}) {
    return (
        <Link to={`/feedbackDetails/${feedback.id}`} key={feedback.id}>
            <div key={feedback.id} className="feedback container flex align-center between">
                        
                <div className="feedback__title flex">
                
                    <LikeButton refreshPost={refreshPost} feedback={feedback} />

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
        </Link>
        
    )
}

export default Feedback