import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getOwnedComment } from '../API/feedback_comments'

import LikeButton from './LikeButton'

import iconCircle from '../assets/icons/circle/icon-li.svg'
import circlePurple from '../assets/icons/circle/circle-purple.svg'
import circleBlue from '../assets/icons/circle/circle-blue.svg'
import commentIcon from "../assets/icons/others/icon-comments.svg"


function StatusFeedback({feedback, refreshPost}) {
    const [comments, setComments] = useState([])
    const isPlanned = feedback.status === "Planned"
    const isProgress = feedback.status === "In Progress"

    useEffect(() => {
        getOwnedComment(feedback.id).then(res => {
          setComments(res)
        })
      }, [feedback])

  return (
    <div style={{borderTopColor: isPlanned ? "#F49F85" : isProgress ? "#AD1FEA" : "#62BCFA" }} className='statusFeedback flex flex-col gap-0-8'>
        <div className='flex gap-0-5'>
            <img src={ isPlanned ? iconCircle : isProgress ? circlePurple : circleBlue } alt="" />
            <p>{feedback.status}</p>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-0-5'>
                    <Link to={`/feedbackDetails/${feedback.id}`} key={feedback.id}>
                        <h3>{feedback.title}</h3>
                    </Link>
                    <p>{feedback.body}</p>
                </div>
                <p className="filter">{feedback.category}</p>
            </div>

            <div className='flex align-center between'>

                <LikeButton isRow={true} refreshPost={refreshPost} feedback={feedback}/>

                <div className="feedback__comment flex align-center gap-0-8">
                    <div>
                        <img src={commentIcon} alt=""/>
                    </div>
                    <span className={comments.length === 0 ? 'comment-off' : null } >{comments.length === 0 ? '0' : comments.length}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatusFeedback