import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'


function EditFairy() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [fairy, setFairy] = useState({})
    const talents = ["Garden", "Tinker", "Water", "Light", "Animal", "Frost", "Fast-Flying"]

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

    const updateFairy = async (event) => {
        event.preventDefault()

        await supabase
            .from('Fairies')
            .update({
                name: fairy.name,
                power_level: fairy.power_level,
                talent: fairy.talent,
                description: fairy.description
            })
            .eq('id', id)
        
        alert("Fairy updated!");
        navigate("/")
    }
    
    const handleChange = (event) => {
    const {name, value} = event.target
        setFairy( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const deleteFairy = async (event) => {
        event.preventDefault();
        await supabase
            .from('Fairies')
            .delete()
            .eq('id', id)
        
        alert("Fairy deleted.");
        navigate("/")
    }

  return (
  <div>
        <form onSubmit={updateFairy}>
            <label htmlFor="title">Name</label> <br />
            <input type="text" id="name" name="name" value={fairy.name || ""} onChange={handleChange} /><br />
            <br/>

            <label htmlFor="talent">Talent</label><br />
            <div>
                {talents.map(talentOption => (
                    <label key={talentOption}>
                    <input
                        type="radio"
                        id="talent"
                        name="talent"
                        value={talentOption}
                        checked={fairy.talent === talentOption}
                        onChange={handleChange} /><br />
                        {talentOption}
                    <br />
                    </label>
                    ))}
                </div>
                    
            <label htmlFor="talent">Power Level</label><br />
            <input type="text" id="power_level" name="power_level" value={fairy.power_level || ""} onChange={handleChange} /><br />
            <br/>

            <label htmlFor="description">Description</label><br />
            <textarea rows="5" cols="50" id="description" name="description" value={fairy.description || ""} onChange={handleChange}>
            </textarea>
            <br/>
              <input type="submit" value="Submit" />
              
                <button className="deleteButton" onClick={deleteFairy}>Delete Fairy</button>
          </form>
          
    </div>
  )
}

export default EditFairy
