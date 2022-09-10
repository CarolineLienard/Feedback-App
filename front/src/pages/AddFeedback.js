import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { addFeedback } from '../API/feedback'
import { useNavigate } from "react-router-dom"

import CategorySelect from '../components/CategorySelect'

import backIcon from '../assets/icons/arrow/icon-arrow-left.svg'
import newIcon from '../assets/icons/others/icon-new-feedback.svg'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


function AddFeedback() {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)
  let navigate = useNavigate()

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
            > Merci de remplir tous les champs</Alert>
        </Snackbar>
    )
  }

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  function onSubmit(){
    if(title!=="" && body!=="" && category!=="") {
      const data = {
        title: title,
        body: body,
        category: category,
        comments: 2,
        likes: 51, 
        status: "null"
      }
      addFeedback(data).then(()=> navigate('/'))
    } else {
        setOpenSnackBar(true)
    }
  }
    
  return (
    <div className='addFeedback flex flex-col'>
      {handleSnackBar()}
      <div className='flex align-center gap-0-8'>
        <img src={backIcon} alt="" />
        <Link to={'/'}>
          <h4>Go Back</h4>
        </Link>
      </div>

      <div className='container flex flex-col'>

        <div id="newIcon">
          <img src={newIcon} alt="" />
          <h1>Create New Feedback</h1>
        </div>
        
        <div className='inputContainer flex flex-col'>
          <div className='newInput flex flex-col'>
            <div>
              <h4>Feedback Title</h4>
              <p>Add a short, descriptive headline</p>
            </div>
            <input 
              maxLength="25"
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>

          <div className='newInput flex flex-col'>
            
            <div>
              <h4>Category</h4>
              <p>Choose a category for your feedback</p>
            </div>

            <CategorySelect onChange={handleChange} />
          </div>

          <div className='newInput flex flex-col'>
            <div>
              <h4>Feedback Detail</h4>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <textarea
              maxLength={60}
              onChange={(e)=> setBody(e.target.value) }
            />
          </div>
        </div>
       
        <div className='flex gap-1 justify-end'>
          <Link to={'/'}>
            <button className='button-dark'>Cancel</button>
          </Link>  
          <button className='button-purple' onClick={onSubmit}>Add FeedBack</button>
        </div>
      </div>
    </div>
  )
}

export default AddFeedback