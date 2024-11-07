import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from "./Hello"



function App(props) {

const isLogin = "True"

  return (
    <div>
    <h1>Welcome Guys!</h1>
    <Hello name="Subhan" class="FSD" isLogin={isLogin} />
    </div>
  )
}

export default App
