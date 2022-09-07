import Header from '../components/Header'
import Category from '../components/Category'
import Roadmap from '../components/Roadmap'
import NavBar from '../components/NavBar'
import Feedbacks from '../components/Feedbacks'
import '../sass/main.scss'

import { getFeedback } from '../API/feedback'
import { useEffect, useState, useContext } from 'react'
import { FilterContext } from '../context'

function App() {
  const [feedbacks, setFeedbacks] = useState([])
  const {feedbackFilter, handleFeedbackFilter} = useContext(FilterContext)
  console.log(feedbackFilter)

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
        <NavBar suggestCount={feedbacks.length} />
        <Feedbacks feedbacks={feedbacks} />
      </div>
    </main>
  );
}

export default App;