import { supabase } from '../client'
import { useState } from 'react'
import './CreateFairy.css'

const CreateFairy = () => {
    const [fairy, setFairy] = useState({ name: "", power_level: 0, talent: "", description: "" })
    const talents = ["Garden🌸", "Tinker🔨", "Water💧", "Light✨", "Animal🐻", "Frost❄️", "Fast-Flying🌪️"]

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
        <div className="create-form-container">
            <form onSubmit={createFairy} >
                <h3 className="titles">Name</h3>
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <h3 className="titles">Talent</h3>
                <div>
                    {talents.map(talentOption => (
                        <label key={talentOption}>
                        <input
                            type="radio"
                            id="talent"
                            name="talent"
                            value={talentOption}
                            checked={fairy.talent === talentOption}
                            onChange={handleChange} />
                            {talentOption}
                        <br />
                        </label>
                    ))}
                    <br/>
                    </div>
                    
                <h3 className="titles">Power Level</h3>
                <input type="text" id="power_level" name="power_level" onChange={handleChange} /><br />
                <br/>

                <h3 className="titles">Description</h3>
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreateFairy