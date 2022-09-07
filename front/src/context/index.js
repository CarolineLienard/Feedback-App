import { createContext, useState } from "react"

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [feedbackFilter, setFeedbackFilter] = useState('mostVotes')
    const [categoryFilter, setCategoryFilter] = useState('All')

    const handleFeedbackFilter = (nameFilter) => {
        setFeedbackFilter(nameFilter)
    }

    const handleCategoryFilter = (nameCategory) => {
        setCategoryFilter(nameCategory)
    }

    return(
        <FilterContext.Provider value={{feedbackFilter, handleFeedbackFilter, categoryFilter, handleCategoryFilter}}>
            {children}
        </FilterContext.Provider>
    )
}