// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Budget from './components/Budget'
import PetBrowser from './components/PetBrowser'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Shelter</h1>
        <Budget />
        <PetBrowser />
      </header>
    </div>
  )
}

export default App
