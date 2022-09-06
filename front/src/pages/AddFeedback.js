import React from 'react'
import { Link } from "react-router-dom"
import { addFeedback } from '../API/feedback';

import backIcon from '../assets/icon-arrow-left.svg'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function AddFeedback() {
  const [category, setCategory] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');


  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  function onSubmit(){
    const data = {
      title: title,
      body: body,
      category: category,
      comments: 1,
      likes: 65
    }
    addFeedback(data).then(res => {console.log(res)})
  }
  
  return (
    <main>
      
      <div className='flex align-center gap-0-8'>
        <img src={backIcon} alt="" />
        <Link to={'/'}>
          <h4>Go Back</h4>
        </Link>
      </div>

      <div className='container'>
        <h1>Add New Feedback</h1>

        <div>
          <h4>Feedback Title</h4>
          <p>Add a short, descriptive headline</p>
          <input onChange={(e)=> setTitle(e.target.value)}></input>
        </div>

        <div>
          <h4>Category</h4>
          <p>Choose a category for your feedback</p>
          <FormControl fullWidth>
            <Select
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
          </FormControl>
        </div>

        <div>
          <h4>Feedback Detail</h4>
          <p>Include any specific comments on what should be improved, added, etc.</p>
          <input onChange={(e)=> setBody(e.target.value) }></input>
        </div>

        <div className='flex'>
          <button>Cancel</button>
          <button className='button-purple' onClick={onSubmit}>Add FeedBack</button>
        </div>
      </div>
    </main>
  )
}

export default AddFeedback