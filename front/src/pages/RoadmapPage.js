import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { getFeedback } from '../API/feedback'

import StatusFeedback from '../components/StatusFeedback'
import EmptyFeedback from '../components/EmptyFeedback'

import backIcon from '../assets/icons/arrow/icon-back-white.svg'

function RoadmapPage() {
  const [feedbacks, setFeedbacks] = useState([])
  const [planned, setPlanned ] = useState([])
  const [progress, setProgress ] = useState([])
  const [live, setLive ] = useState([])

  const [plannedCol, setPlannedCol] = useState(true)
  const [progressCol, setProgressCol] = useState(false)
  const [liveCol, setLiveCol] = useState(false)


  function handlePlanned () {
    setPlannedCol(true)
    setProgressCol(false)
    setLiveCol(false)
  }

  function handleProgress () {
    setPlannedCol(false)
    setProgressCol(true)
    setLiveCol(false)
  }

  function handleLive () {
    setPlannedCol(false)
    setProgressCol(false)
    setLiveCol(true)
  }

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
      <div className='roadmapContainer flex justify-center'>

        <div className='roadmapMobileMenu flex gap-1'>
          <ul className='mobileMenuContainer'>
            <li onClick={handlePlanned}>
              <span>Planned ({planned.length})</span>
            </li>
            <li onClick={handleProgress}>
              <span>In Progress ({progress.length})</span>
            </li>
            <li onClick={handleLive}>
              <span>Live ({live.length})</span>
            </li>
          </ul>
        </div>

        <div className={ plannedCol ? 'statusCol flex flex-col' : 'planned-col statusCol flex flex-col' }>
          <div>
            <h3>Planned ({planned.length})</h3>
            <p>Ideas prioritized for research</p>
          </div>
          <div className={planned.length === 0 ? 'mobileEmpty' : 'none'}>
              <EmptyFeedback />
          </div>
          {planned.map((feedback)=> {
            return (
              <StatusFeedback refreshPost={handleFeedbacks} feedback={feedback}/>
            )
          })
        }
        </div>

        <div className={ progressCol ? 'statusCol flex flex-col' : 'progress-col statusCol flex flex-col' }>
          <div>
            <h3>In-Progress ({progress.length})</h3>
            <p>Currently being developed</p>
          </div>
          <div className={ progress.length === 0 ? 'mobileEmpty' : 'none'}>
              <EmptyFeedback />
          </div>
          {progress.map((feedback)=> {
            return (
              <StatusFeedback refreshPost={handleFeedbacks} feedback={feedback}/>
            )
          })
        }
        </div>

        <div className={ liveCol ? 'statusCol flex flex-col' : 'live-col statusCol flex flex-col' }>
          <div>
            <h3>Live ({live.length})</h3>
            <p>Released features</p>
          </div>
          <div className={live.length === 0 ? 'mobileEmpty' : 'none'}>
              <EmptyFeedback />
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
              <h4 className='button-back'>Go Back</h4>
            </Link>
          </div>
          <h1>Roadpmap</h1>
        </div>
        <Link to={'/addFeedback'}>
          <button className='button-purple-dark'>+ Add Feedback</button>
        </Link>
      </div>
      {planned.length === 0 && live.length === 0 && progress.length === 0 ? <EmptyFeedback /> : renderContent()}
    </div>
  )
}

export default RoadmapPage