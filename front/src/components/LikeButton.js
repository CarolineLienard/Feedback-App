import React, { useState } from 'react'

import { updateFeedback } from '../API/feedback'

import chevronLikeActive from "../assets/icons/arrow/chevron-white.svg"
import chevronLike from '../assets/icons/arrow/icon-arrow-up.svg'

function LikeButton({feedback, refreshPost, isRow}) {
  const [likeButton, setLikeButton] = useState(false)

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
    <button onClick={updateLikes} className={ isRow ? `like-button-roadmap ${likeButton && 'like-button-active'}` : `like-button flex flex-col align-center ${likeButton && 'like-button-active'}`}>
      <div className={ isRow ? 'flex' : ''}>
          <img src={ likeButton ? chevronLikeActive : chevronLike } alt="" />
      </div>
      <span>{feedback.likes}</span>
    </button>
  )
}

export default LikeButton