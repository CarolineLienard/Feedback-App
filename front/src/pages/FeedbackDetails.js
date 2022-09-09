import React from 'react'
import Feedback from '../components/Feedback';
import backIcon from '../assets/icon-arrow-left.svg'

import { getOneFeedback } from '../API/feedback'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function FeedbackDetails() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState('')
  
  useEffect(() => {
    getOneFeedback(id).then(res => {
        setFeedback(res)
    })
  }, [])

  
  return (
    <div className='feedbackDetails flex flex-col'>
      <div className='flex between align-center justify-center'>
        <div className='flex align-center gap-0-8'>
            <img src={backIcon} alt="" />
            <Link to={'/'}>
              <h4>Go Back</h4>
            </Link>
        </div>   
        <Link to={`/editFeedback/${id}`}>
          <button className='button-blue'>Edit Feedback</button>
        </Link>
      </div>
        <Feedback feedback={feedback}/>
    </div>
  )
}

export default FeedbackDetails