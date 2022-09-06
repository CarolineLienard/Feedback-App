import React from "react" 

function Feedbacks (props) {
    return (
        <div>
            <h1>This feedbacks are from the API</h1>
            {props.feedbacks.map((feedback)=> {
                return <div key={feedback.id}>
                            <h2>{feedback.title}</h2>
                            <p>{feedback.body}</p>
                            <p>{feedback.category}</p>
                            <span>{feedback.likes}</span>
                            <span>{feedback.comments}</span>
                        </div>
            })}
        </div>
    )
}

export default Feedbacks