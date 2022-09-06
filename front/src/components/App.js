import Header from './Header'
import Category from './Category'
import Roadmap from './Roadmap'
import NavBar from './NavBar'
import Feedbacks from './Feedbacks'
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
    <main className='flex'>
      <div className='headerContainer flex flex-col'>
        <Header />
        <Category />
        <Roadmap />
      </div>

      <div className='feedbackContainer flex flex-col'>
        <NavBar />
        <Feedbacks feedbacks={feedbacks} />
      </div>
    </main>
  );
}

export default App;
