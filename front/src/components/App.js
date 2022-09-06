import Feedbacks from './Feedbacks'
import Header from './Header'
import '../sass/main.scss'

import { getFeedback } from '../API/feedback'
import { useEffect, useState } from 'react'

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
    <div>
      <Header />
      <Feedbacks feedbacks={feedbacks} />
    </div>
  );
}

export default App;
