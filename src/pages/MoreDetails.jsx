import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'


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
  <div>
          <h2>{fairy.name}</h2>
          <h3>Talent: {fairy.talent}</h3>
          <h3>Power Level: {fairy.power_level}</h3>
          <h3>Description: {fairy.description}</h3>
    </div>
  )
}

export default MoreDetails