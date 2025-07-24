import { useState } from 'react'
import { Link } from "react-router-dom"


function Card(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="Card">
          <Link to={'edit/' + props.id}></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="talent">{props.talent}</h3>
          <h3 className="power_level">{props.power_level}</h3>
      
    </div>
  )
}

export default Card
