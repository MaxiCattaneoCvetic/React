import { useState } from "react";

function Formulario (){

    const [name,setName] = useState('')
    const [edad,setEdad] = useState('')
    const [error,setError] = useState('')
    const [submitedValues,setsubmitedValues] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(!name){
            console.error("Name is required")
            setError("Name is required");
        }else{
            setError()
            setsubmitedValues({
                name,
                edad
            })
            console.log(submitedValues);
            setName('')
            setEdad('')
            
        }
        console.log("form submit");
    }

    function handleChange(e){
        setName(e.target.value)
        console.log(e.target.value);
        
    }
    function handleChangeEdad(e){
        setEdad(e.target.value)
        console.log(e.target.value);

    }
    return(
        <>
    <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input 
                type="text" 
                id="name" 
                placeholder="Name"
                value= {name}
                onChange={handleChange}
            />
            
            <label htmlFor="edad">
                Edad:
            </label>
            <input 
                type="text" 
                id="edad" 
                placeholder="Edad"
                value= {edad}
                min={18}
                max={80}
                onChange={handleChangeEdad}
            />
            <p></p>


            <button type="submit">Send</button>
        </form>
        </>
    )

}



export default Formulario 