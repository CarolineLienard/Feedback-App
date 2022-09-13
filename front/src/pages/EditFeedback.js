import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"

import { getOneFeedback, updateFeedback, deleteFeedback } from '../API/feedback'
import { deleteOwnedComment } from '../API/feedback_comments'

import MenuDrop from '../components/menu-drop/MenuDrop'
import {CATEGORIES, STATUS} from '../components/menu-drop/data'

import backIcon from '../assets/icons/arrow/icon-arrow-left.svg'
import editIcon from '../assets/icons/others/icon-edit-feedback.svg'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


function EditFeedback() {

  const [openSnackBar, setOpenSnackBar] = useState(false)
  let navigate = useNavigate()

  const { id } = useParams()
  const [, setFeedback] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    getOneFeedback(id).then(res => {
        setFeedback(res)
        setTitle(res.title)
        setCategory(res.category)
        setBody(res.body)
        if (res.status === "null") {
          setStatus('Planned')
        } else {
          setStatus(res.status)
        }
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

  const handleCategory = (category) => {
    setCategory(category)
  }

  const handleStatus = (status) => {
    setStatus(status)
  }

  function update(){
    if(title!=="" && body!=="" && category!=="") {
      const data = {
        title: title,
        body: body,
        category: category,
        status: status
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
        <Link to={-1}>
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
            <input
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>

          <div className='newInput flex flex-col'>
            
            <div>
              <h4>Category</h4>
              <p>Choose a category for your feedback</p>
            </div>  

            <MenuDrop handleSelect={handleCategory} options={CATEGORIES} />
          </div>

          <div className='newInput flex flex-col'>
            <div>
              <h4>Update Status</h4>
              <p>Change feedback state</p>
            </div>
            
              <MenuDrop handleSelect={handleStatus} options={STATUS} />
          </div>

          <div className='newInput flex flex-col'>
            <div>
              <h4>Feedback Detail</h4>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <textarea
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