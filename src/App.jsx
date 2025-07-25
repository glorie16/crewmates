import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import CreateFairy from './pages/CreateFairy'
import ViewFairies from './pages/ViewFairies'
import EditFairy from './pages/EditFairy'
import MoreDetails from './pages/MoreDetails'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Sidebar/>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-fairy" element={<CreateFairy />} />
        <Route path="/view-fairies" element={<ViewFairies />} />
        <Route path="/edit/:id" element={<EditFairy />} />
        <Route path="/fairy-details/:id" element={<MoreDetails />}/>
      </Routes>
    </div>
  )
}

export default App
