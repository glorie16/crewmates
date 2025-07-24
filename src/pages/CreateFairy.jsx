import { supabase } from '../client'
import { useState } from 'react'

const CreateFairy = () => {
    const [fairy, setFairy] = useState({ name: "", power_level: 0, talent: "", description: "" })
    const talents = ["Garden", "Tinker", "Water", "Light", "Animal", "Frost", "Fast-Flying"]

    const createFairy = async (event) => {
        event.preventDefault();
        await supabase
            .from('Fairies')
            .insert({name: fairy.name, power_level: fairy.power_level, talent: fairy.talent, description: fairy.description})
            .select()
        
        alert("Fairy created!");
        window.location = "/"
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

    return (
        <div>
            <form>
                <label htmlFor="title">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
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
                <input type="text" id="power_level" name="power_level" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createFairy} />
            </form>
        </div>
    )
}

export default CreateFairy