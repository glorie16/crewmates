import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
import './MoreDetails.css'

function MoreDetails() {
    const {id} = useParams()
    const [fairy, setFairy] = useState({})

    useEffect(() => {
        const fetchFairy = async () => {
            const { data } = await supabase
                .from('Fairies')
                .select()
                .eq('id', id)
                .single();

            setFairy(data);
        }
        fetchFairy();
    },[id])


  return (
  <div className="more-details-container">
          <h2>{fairy.name}</h2>
          <h3>Talent: {fairy.talent}</h3>
          <h3>Power Level: {fairy.power_level}</h3>
          <h3>Description: {fairy.description?.trim() || "No description available."}</h3>
          <Link to={`/edit/${fairy.id}`}>
          <button >Edit Fairy</button>
          </Link>
    </div>
  )
}

export default MoreDetails