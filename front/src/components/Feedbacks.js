import React from "react" 
import Feedback from "./Feedback"

import { Link } from "react-router-dom"

function Feedbacks ({feedbacks}) {
    return (
        <div className="flex flex-col gap-1-5">
            {feedbacks.map((feedback)=> {
                return ( 
                    <Link to={`/feedbackDetails/${feedback.id}`} key={feedback.id}>
                        <Feedback feedback={feedback}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default Feedbacks