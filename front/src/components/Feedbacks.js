import React from "react" 
import Feedback from "./Feedback"

function Feedbacks ({feedbacks, refreshPost}) {
    return (
        <div className="flex flex-col gap-1-5">
            {feedbacks.map((feedback)=> {
                return ( 
                    <Feedback refreshPost={refreshPost} feedback={feedback}/>
                )
            })}
        </div>
    )
}

export default Feedbacks