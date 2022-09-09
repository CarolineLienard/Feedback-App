import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { FilterProvider } from './context'

import App from '../src/pages/App'
import AddFeedback from './pages/AddFeedback'
import FeedbackDetails from './pages/FeedbackDetails'
import EditFeedback from './pages/EditFeedback'
import '../src/sass/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <FilterProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addFeedback" element={<AddFeedback />} />
        <Route path="/feedbackDetails/:id" element={<FeedbackDetails />}/>
        <Route path="/editFeedback/:id" element={<EditFeedback />}/>
      </Routes>
    </FilterProvider>
  </BrowserRouter>
)
