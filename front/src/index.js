import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import { FilterProvider } from './context'
import App from '../src/pages/App'
import AddFeedback from './pages/AddFeedback'
import '../src/sass/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <FilterProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addFeedback" element={<AddFeedback />} />
      </Routes>
    </FilterProvider>
  </BrowserRouter>
)
