import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './assets/compontents/QuoteBox'

function App() {


  
  return (
    <>
      <div className="App">
        <QuoteBox />
      </div>
    </>
  )
}

export default App
