import React from 'react'
import { Link } from 'react-router-dom'

import illuEmpty from '../assets/illustration/illustration-empty.svg'

function EmptyFeedback() {
  return (
    <div className='emptyFeedback container flex flex-col align-center justify-center'>
        <img src={illuEmpty} alt="" />
        <div className='flex flex-col align-center justify-center'>
            <h1>There is no feedback yet.</h1>
            <p>Got a suggestion? Found a bug that needs to be squashed? 
            We love hearing about new ideas to improve our app.</p>
        </div>
        <Link to='/addFeedback'>
          <button className='button-purple'>+ Add Feedback</button>
        </Link>
    </div>
  )
}

export default EmptyFeedback