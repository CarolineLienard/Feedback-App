import React from "react" 
import { Link } from 'react-router-dom'
import Feedback from "./Feedback"

function Feedbacks ({feedbacks, refreshPost}) {
    return (
        <div className="feedbacks flex flex-col">
            {feedbacks.map((feedback)=> {
                return ( 
                    <Link to={`/feedbackDetails/${feedback.id}`} key={feedback.id}>
                        <Feedback refreshPost={refreshPost} feedback={feedback}/>
                    </Link>
                )
            })}
        </div>
    )}

export default Feedbacks