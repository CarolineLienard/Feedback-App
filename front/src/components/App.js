import Feedbacks from './Feedbacks'
import '../sass/main.scss'

import axios from "axios"
import { useEffect, useState } from 'react'

const API_URL = "http://localhost:3000/api/v1/feedbacks"

function getFeedback() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    let mounted = true
    getFeedback().then((items) => {
      if (mounted) {
        setFeedbacks(items)
      }
    })
    return () => (mounted=false)
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Feedbacks feedbacks={feedbacks} />
    </div>
  );
}

export default App;
