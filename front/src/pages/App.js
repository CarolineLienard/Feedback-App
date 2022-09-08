import Header from '../components/Header'
import Category from '../components/Category'
import Roadmap from '../components/Roadmap'
import NavBar from '../components/NavBar'
import Feedbacks from '../components/Feedbacks'
import '../sass/main.scss'

import { getFeedback, getFilterCategory } from '../API/feedback'
import { useEffect, useState, useContext } from 'react'
import { FilterContext } from '../context'

function App() {
  const [feedbacks, setFeedbacks] = useState([])
  const {feedbackFilter} = useContext(FilterContext)
  const {categoryFilter} = useContext(FilterContext)

  useEffect(() => {
    getFeedback().then((items) => {
      let arrayList = []
      if (feedbackFilter === "mostVotes") {
        arrayList = items.sort((a, b) => b.likes - a.likes)
        setFeedbacks(arrayList)
      }else if(feedbackFilter === "leastVotes"){
        arrayList = items.sort((a, b) => a.likes - b.likes)
        setFeedbacks(arrayList)
      }else if(feedbackFilter === "mostComments"){
        arrayList = items.sort((a, b) => b.comments - a.comments)
        setFeedbacks(arrayList)
      }else if(feedbackFilter === "leastComments"){
        arrayList = items.sort((a, b) => a.comments - b.comments)
        setFeedbacks(arrayList)
      }
    })
  }, [feedbackFilter])

  useEffect(() => {
    if (categoryFilter === "All") {
      getFeedback().then((items) => {
        setFeedbacks(items) 
      }) 
    } else {
      getFilterCategory(categoryFilter).then((items) => {
      setFeedbacks(items)
      })
    }  
  }, [categoryFilter])

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