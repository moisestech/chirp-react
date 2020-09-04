import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Component
// State
// Lifecycle
// UI

function App () {
  return (
    <h1>Welcome to Chirp!</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)