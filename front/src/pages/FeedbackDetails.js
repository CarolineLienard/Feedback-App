import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { getOneFeedback, updateFeedback } from '../API/feedback'
import { getOwnedComment } from '../API/feedback_comments'

import Feedback from '../components/Feedback'
import AddComment from '../components/AddComment'
import Comment from '../components/Comment'

import backIcon from '../assets/icons/arrow/icon-arrow-left.svg'

function FeedbackDetails() {
  const { id } = useParams()
  const [feedback, setFeedback] = useState('')
  const [comments, setComments] = useState([])
  

  function update(){
      const data = {
        comments : +1
      }
      updateFeedback(id, data).then()
  }

  function handleFeedback () {
    getOneFeedback(id).then(res => {
      setFeedback(res)
  })
    getOwnedComment(id).then(res => {
      setComments(res)
    })
    update()
  }

  useEffect(() => {
    handleFeedback()
  }, [id])
  
  return (
    <div className='feedbackDetails flex flex-col'>
      <div className='flex between align-center justify-center'>
        <div className='flex align-center gap-0-8'>
            <img src={backIcon} alt="" />
            <Link to={-1}>
              <h4 className='button-back'>Go Back</h4>
            </Link>
        </div>   
        <Link to={`/editFeedback/${id}`}>
          <button className='button-blue'>Edit Feedback</button>
        </Link>
      </div>

      <div className='full'>
        <Feedback feedback={feedback}/>
      </div>

      <div className='container comments-container flex flex-col'>
        <h3>{comments.length} Comments</h3>
        {comments.map((comments, index )=> {
          return ( 
              <Comment key={index} comments={comments} />
          )}
        )}
      </div>
        
        <AddComment refreshPost={handleFeedback} feedbackId={id} />
    </div>
  )
}

export default FeedbackDetails