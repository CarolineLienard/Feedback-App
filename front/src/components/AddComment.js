import React from 'react'

function AddComment() {
  return (
    <div className='addComment container flex flex-col'>
        <h3>Add Comment</h3>
        <div className='flex flex-col gap-1'>
            <textarea placeholder='Type your comment here' rows={5}></textarea>
            <div className='flex align-center between'>
                <p>250 characters left</p>
                <button className='button-purple'>Post Comment</button>
            </div>
        </div>
    </div>
  )
}

export default AddComment