import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import CreateFairy from './pages/CreateFairy'
import ViewFairies from './pages/ViewFairies'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-fairy" element={<CreateFairy />} />
        <Route path="/view-fairies" element={<ViewFairies/>}/>
      </Routes>
    </div>
  )
}

export default App
