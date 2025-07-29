import { useState } from 'react'
import { Link } from "react-router-dom"
import './Card.css'


function Card(props) {

  return (
    <div className="Card">
      <h2 className="name">{props.name}</h2>
      <h3 className="talent">Talent: {props.talent}</h3>
      <h3 className="power">Power Level: {props.power_level}</h3>
       <Link to={`/edit/${props.id}`}className="edit-button">Edit</Link>
      
    </div>
  )
}

export default Card
