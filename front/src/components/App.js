import Header from './Header'
import Category from './Category'
import Roadmap from './Roadmap'
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
    <main>
      <div>
        <Header />
        <Category />
        <Roadmap />
      </div>
      <Feedbacks feedbacks={feedbacks} />
    </main>
  );
}

export default App;
