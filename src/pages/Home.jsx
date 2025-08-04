 
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    return(
    <div className="home">
            <h1>Fairy Maker✨</h1>
            <h3>Welcome to the Fairy Maker! Create your own custom team of Pixie Hollow Fairies!</h3>
            <Link to="/view-fairies"><button className="pixie-button"> 🌸 View Fairies  </button></Link>
            <Link to="/create-fairy"><button className="pixie-button"> 🧚 Create Fairy </button></Link>
        </div>
    )
}

export default Home;