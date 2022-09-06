import React from "react" 
import commentIcon from "../assets/icon-comments.svg"
import chevronUp from "../assets/icon-arrow-up.svg"

function Feedbacks (props) {
    return (
        <div>
            {props.feedbacks.map((feedback)=> {
                return <div key={feedback.id} className="feedback container flex between">
                    
                    <div className="flex gap-1">
                        <div className="small-container flex flex-col align-center">
                            <div>
                                <img src={chevronUp} alt="" />
                            </div>
                            <span>{feedback.likes}</span>
                        </div>

                        <div>
                            <h3>{feedback.title}</h3>
                            <p>{feedback.body}</p>
                            <p className="filter">{feedback.category}</p>
                        </div>
                    </div>    
                    
                    <div className="flex">
                        <div>
                            <img src={commentIcon} alt=""/>
                        </div>
                        <span>{feedback.comments}</span>
                    </div>

                </div>
            })}
        </div>
    )
}

export default Feedbacks