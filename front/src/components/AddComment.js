import React, {useState}  from 'react'

import { addFeedbackComment } from '../API/feedback_comments'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


function AddComment({feedbackId}) {

  const [comment, setComment] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)

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
              onChange={(e)=> setComment(e.target.value)}
            />
            <div className='flex align-center between'>
                <p>250 characters left</p>
                <button className='button-purple' onClick={onSubmit}>Post Comment</button>
            </div>
        </div>
    </div>
  )
}

export default AddComment