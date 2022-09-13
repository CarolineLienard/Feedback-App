import React from 'react'

import user from '../assets/illustration/user.jpg'

function Comment({comments}) {
  return (
    <div className='comments flex flex-col gap-1'>
        <div className='flex gap-1-5'>
            <img src={user} alt='handsome man' />
            <div className='flex flex-col gap-1 full'>
                <div>
                    <h4>Elijah Moss</h4>
                    <div className='flex between'>
                        <h6>@hexagon.bestagon</h6>
                        <span className='button-back'>Reply</span>
                    </div>
                </div>
               
                <div className='comment-content'>
                    <p>{comments.content}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment