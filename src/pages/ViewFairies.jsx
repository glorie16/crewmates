import { supabase } from '../client'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

const ViewFairies = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchFairies = async () => {
            const { data } = await supabase
            .from('Fairies')
            .select()
            .order('created_at', { ascending: false })
            
            setList(data)
        }
        fetchFairies()
    }, [])


    return (
        <div className = "fairies-list">
            {
                list && list.length > 0 ?
                    [...list]
                        .map((fairy, index) =>
            <Card
                key={fairy.id}
                id={fairy.id}
                name={fairy.name}
                talent={fairy.talent}
                power_level={fairy.power_level}
                description={fairy.description}
            />
            ) : <h2>No fairies yet!</h2>
           }
        </div>
    )
}

export default ViewFairies