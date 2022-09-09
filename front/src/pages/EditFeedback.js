import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"

import { getOneFeedback, updateFeedback, deleteFeedback } from '../API/feedback'

import backIcon from '../assets/icon-arrow-left.svg'
import editIcon from '../assets/icon-edit-feedback.svg'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


function EditFeedback() {

  const [openSnackBar, setOpenSnackBar] = useState(false)
  let navigate = useNavigate()

  const { id } = useParams()
  const [feedback, setFeedback] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  useEffect(() => {
    getOneFeedback(id).then(res => {
        setFeedback(res)
        setTitle(res.title)
        setCategory(res.category)
        setBody(res.body)
    })
  }, [])

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

  function update(){
    if(title!=="" && body!=="" && category!=="") {
      const data = {
        title: title,
        body: body,
        category: category,
        comments: 2,
        likes: 51
      }
      updateFeedback(id, data).then(() => navigate('/'))
    } else {
        setOpenSnackBar(true)
    }
  }

  function handleDelete() {
    deleteFeedback(id).then(() => navigate('/'))
  }
    
  return (
    <div className='addFeedback flex flex-col'>
      {handleSnackBar()}
      <div className='flex align-center gap-0-8'>
        <img src={backIcon} alt="" />
        <Link to={`/feedbackDetails/${id}`}>
          <h4>Go Back</h4>
        </Link>
      </div>

      <div className='container flex flex-col'>

        <div id="newIcon">
          <img src={editIcon} alt="" />
          <h1>Edit Feedback</h1>
        </div>
        
        <div className='inputContainer flex flex-col'>
          <div className='newInput flex flex-col'>
            <div>
              <h4>Feedback Title</h4>
              <p>Add a short, descriptive headline</p>
            </div>
            <TextField 
              variant="standard" 
              InputProps={{disableUnderline: true,}} 
              classes={{root:"newText"}}
              id="outlined-multiline-flexible"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>

          <div className='newInput flex flex-col'>
            
            <div>
              <h4>Category</h4>
              <p>Choose a category for your feedback</p>
            </div>
            
            <Select 
                disableUnderline
                classes={{filled:"newSelect"}}
                variant="filled" 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
              >
                <MenuItem value={'Feature'}>Feature</MenuItem>
                <MenuItem value={'UX'}>UX</MenuItem>
                <MenuItem value={'UI'}>UI</MenuItem>
                <MenuItem value={'Enhancement'}>Enhancement</MenuItem>
                <MenuItem value={'Bug'}>Bug</MenuItem>
            </Select>

          </div>

          <div className='newInput flex flex-col'>
            <div>
              <h4>Feedback Detail</h4>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <TextField 
              variant="standard" 
              InputProps={{disableUnderline: true,}} 
              classes={{root:"newText"}}
              id="outlined-multiline-flexible"
              multiline
              rows={4}
              value={body}
              onChange={(e)=> setBody(e.target.value) }
            />
          </div>
        </div>
       
        <div className='flex gap-1 between'>
            <button className='button-delete' onClick={handleDelete}>Delete</button>
            <div className='flex gap-1'>
                <Link to={'/'}>
                    <button className='button-dark'>Cancel</button>
                </Link>  
                <button className='button-purple' onClick={update}>Edit FeedBack</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditFeedback