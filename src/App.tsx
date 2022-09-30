import React from "react"
import { Dashboard } from "./Pages"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
      </div>
    </Router>
  )
}

export default App
