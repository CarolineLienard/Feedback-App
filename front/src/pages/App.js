import Header from '../components/Header'
import Category from '../components/Category'
import Roadmap from '../components/Roadmap'
import NavBar from '../components/NavBar'
import Feedbacks from '../components/Feedbacks'
import EmptyFeedback from '../components/EmptyFeedback'
import '../sass/main.scss'

import { getFeedback, getFilterCategory } from '../API/feedback'
import { useEffect, useState, useContext } from 'react'
import { FilterContext } from '../context'


function App() {
  const [feedbacks, setFeedbacks] = useState([])

  const {feedbackFilter} = useContext(FilterContext)
  const {categoryFilter} = useContext(FilterContext)

  const [planned, setPlanned ] = useState([])
  const [progress, setProgress ] = useState([])
  const [live, setLive ] = useState([])


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

  useEffect(() => {
    const arrayPlanned =  feedbacks.filter((el) => el.status === 'Planned')
    const arrayProgress =  feedbacks.filter((el) => el.status === 'In Progress')
    const arrayLive =  feedbacks.filter((el) => el.status === 'Live')
    setPlanned(arrayPlanned)
    setProgress(arrayProgress)
    setLive(arrayLive)
  },[feedbacks])

  return (
    <main className='flex'>
      <div className='headerContainer flex flex-col'>
        <Header />
        <Category />
        <Roadmap liveLength={live.length} progressLength={progress.length} plannedLength={planned.length} />
      </div>

      <div className='feedbackContainer flex flex-col'>
        <NavBar suggestCount={feedbacks.length} />
        {
          feedbacks.length === 0 ? <EmptyFeedback /> : <Feedbacks feedbacks={feedbacks} />
        }
      </div>
    </main>
  );
}

export default App;