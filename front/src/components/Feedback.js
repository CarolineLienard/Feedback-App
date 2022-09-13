import React, { useEffect, useState } from 'react'

import { getOwnedComment } from '../API/feedback_comments'

import LikeButton from './LikeButton'
import commentIcon from "../assets/icons/others/icon-comments.svg"


function Feedback({feedback, refreshPost}) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getOwnedComment(feedback.id).then(res => {
          setComments(res)
        })
      }, [feedback])

    return (
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
                <span>{comments.length}</span>
            </div>
        </div>
    )
}

export default Feedback