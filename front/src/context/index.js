import { createContext, useState } from "react"

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [feedbackFilter, setFeedbackFilter] = useState('mostUpvotes')
    const handleFeedbackFilter = (feedbackFilter) => {
        setFeedbackFilter(feedbackFilter)
    }
    return(
        <FilterContext.Provider value={{feedbackFilter, handleFeedbackFilter}}>
            {children}
        </FilterContext.Provider>
    )
}