import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { getFeedback } from '../API/feedback'

import StatusFeedback from '../components/StatusFeedback'
import EmptyFeedback from '../components/EmptyFeedback'

import backIcon from '../assets/icons/arrow/icon-arrow-left.svg'

function RoadmapPage() {
  const [feedbacks, setFeedbacks] = useState([])
  const [planned, setPlanned ] = useState([])
  const [progress, setProgress ] = useState([])
  const [live, setLive ] = useState([])

  function handleFeedbacks () {
    getFeedback().then(res => {
    setFeedbacks(res)
    })
  }

  useEffect(() => {
    handleFeedbacks()
  }, [])

  useEffect(() => {
    const arrayPlanned =  feedbacks.filter((el) => el.status === 'Planned')
    const arrayProgress =  feedbacks.filter((el) => el.status === 'In Progress')
    const arrayLive =  feedbacks.filter((el) => el.status === 'Live')
    setPlanned(arrayPlanned)
    setProgress(arrayProgress)
    setLive(arrayLive)
  },[feedbacks]) 
  
  function renderContent() {
    return (
      <div className='roadmapContainer flex'>

        <div className='statusCol flex flex-col'>
          <div>
            <h3>Planned ({planned.length})</h3>
            <p>Ideas prioritized for research</p>
          </div>

          {planned.map((feedback)=> {
            return (
              <StatusFeedback refreshPost={handleFeedbacks} feedback={feedback}/>
            )
          })
        }
        </div>

        <div className='statusCol flex flex-col'>
          <div>
            <h3>In-Progress ({progress.length})</h3>
            <p>Ideas prioritized for research</p>
          </div>
          {progress.map((feedback)=> {
            return (
              <StatusFeedback refreshPost={handleFeedbacks} feedback={feedback}/>
            )
          })
        }
        </div>

        <div className='statusCol flex flex-col'>
          <div>
            <h3>Live ({live.length})</h3>
            <p>Ideas prioritized for research</p>
          </div>
          {live.map((feedback)=> {
            return (
              <StatusFeedback refreshPost={handleFeedbacks} feedback={feedback}/>
            )
          })
        }
        </div>
      </div>
    )
  }

  return (

    <div className='roadmapPage flex flex-col'>

      <div className='roadmapHeader flex between'>
        <div className='flex flex-col gap-0-5'>
          <div className='flex align-center gap-0-8'>
            <img src={backIcon} alt="" />
            <Link to={'/'}>
              <h4>Go Back</h4>
            </Link>
          </div>
          <h1>Roadpmap</h1>
        </div>
        <Link to={'/addFeedback'}>
          <button className='button-purple'>+ Add Feedback</button>
        </Link>
      </div>
      {planned.length === 0 && live.length === 0 && progress.length === 0 ? <EmptyFeedback /> : renderContent()}
    </div>
  )
}

export default RoadmapPage