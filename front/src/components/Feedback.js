import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { updateFeedback } from '../API/feedback'

import commentIcon from "../assets/icons/others/icon-comments.svg"
import chevronLikeActive from "../assets/icons/arrow/chevron-white.svg"
import chevronLike from '../assets/icons/arrow/icon-arrow-up.svg'

function Feedback({feedback, refreshPost}) {

    const [likeButton, setLikeButton] = useState(false)
    const [likes, setLikes] = useState('')

    function updateLikes (e) {
        e.preventDefault()
        setLikeButton(true)
        if (!likeButton) {
            const data = {
                likes : feedback.likes+1
            }
            updateFeedback(feedback.id, data).then(()=> refreshPost())
        }
    }

    return (

        <Link to={`/feedbackDetails/${feedback.id}`} key={feedback.id}>
            <div key={feedback.id} className="feedback container flex align-center between">
                        
                <div className="feedback__title flex">
                    <button onClick={updateLikes} className={`small-container flex flex-col align-center ${likeButton && 'like-button-active'}`}>
                        <div>
                            <img src={ likeButton ? chevronLikeActive : chevronLike } alt="" />
                        </div>
                        <span>{feedback.likes}</span>
                    </button>

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