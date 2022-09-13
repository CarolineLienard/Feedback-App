import React, {useState}  from 'react'

import { addFeedbackComment } from '../API/feedback_comments'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


function AddComment({feedbackId, refreshPost}) {

  const [comment, setComment] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [count, setCount] = useState(0);

  function handleSnackBar(){
    return(
        <Snackbar 
        open={openSnackBar} 
        autoHideDuration={30000} 
        onClose={() => setOpenSnackBar(false)}>
            <Alert 
            variant="filled"
            sx={{ bgcolor: '#373F68'}}
            severity= "info"
            > Veuillez écrire votre commentaire</Alert>
        </Snackbar>
    )
  }
  
  function onSubmit(){
    if(comment !== '') {
      const data = {
        feedback_id: feedbackId, 
        content : comment
      }
      addFeedbackComment(data).then()
    } else {
      setOpenSnackBar(true)
    }
  }

  return (
    <div className='addComment container flex flex-col'>
      {handleSnackBar()}
        <h3>Add Comment</h3>
        <div className='flex flex-col gap-1'>
            <textarea 
              placeholder='Type your comment here' 
              rows={5} 
              maxLength="250"
              onChange={(e)=> {setComment(e.target.value); setCount(e.target.value.length)}}
            />
            <div className='flex align-center between'>
                <p>{250 - count} characters left</p>
                <button className='button-purple' onClick={onSubmit}>Post Comment</button>
            </div>
        </div>
    </div>
  )
}

export default AddComment