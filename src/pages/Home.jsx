 
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return(
    <div className="header">
        <h1>Fairy Maker🧚</h1>
        <Link to="/view-fairies"><button className="headerBtn"> 🌸 View Fairies  </button></Link>
        <Link to="/create-fairy"><button className="headerBtn"> 🧚 Create Fairy </button></Link>
        </div>
    )
}

export default Home;