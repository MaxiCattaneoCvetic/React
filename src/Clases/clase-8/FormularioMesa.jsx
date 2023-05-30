import { useState } from "react";
import styles from "../clase-8/formularioMesa.module.css"

function FormularioMesa(){

    const [number,setNumber] = useState('')
    const [showNumber,setShowNumber] = useState('')
    const [error,setError] = useState('')
    const[name,setName] = useState('')
    const [valores, setValores] = useState({
        name: "",
        number:""

    })


    
    //SET NUMBER FUNCTION
    function handleChange(e){
        setNumber(e.target.value)

    }

    //SUBMIT FUNCTION 
    function handleSubmit(e){
        e.preventDefault();
        dateValidate()
        
    }

    //RESET 
    function handleReset(e){
        e.preventDefault('')
        setNumber('')
        setShowNumber('')
        setError('')
        setName('')
        
    }

    function handleName(e){
        setName(e.target.value);
    }

    function dateValidate(){
        if(!number ){
            setError("You must select your favorite number")
            console.error("You must select your favorite number")
        }else if(number < 0 ){
            setError("Your number must be greater than 0.")
            console.error("Your number must be greater than 0.")
        }else if(name.length === 0 ){
            setError("The name can't be empty")
        }
        else{
            setShowNumber(number)
            setValores([...valores, { name, number}])
            console.log("Hiciste sub");
            setNumber('')
            setError()
            
        }

    }


    return(
        <>
        <div className={styles.formulario}>
        <h2>Mesas de trabajo</h2>
        <form >
            <label htmlFor="numeroFavorito">Favorite number:
                <input type="text" 
                id="numeroFavorito" 
                placeholder="Choice your favorite number"
                value= {number}
                onChange={handleChange}
                
                />
            </label><br />
            <label htmlFor="name">Insert Your Name:
                <input type="text" 
                id="name" 
                placeholder="Name"
                value= {name}
                onChange={handleName}
                />
            </label><br />
            <button type="submit" onClick={handleSubmit}>Send</button>
            <button onClick={handleReset}>Reset</button>
        </form>
        <p>Tu numero favorito es: {showNumber? showNumber: undefined}</p>
        <p className={styles.error}>{error? "ERROR: " + error: undefined}</p>
        </div>
    
    <ul>
            {valores.map((valor,index) => (
            <li key={index}>
                <p>Nombre: {valor.nombre}</p>
                <p>Número favorito: {valor.numero}</p>
            </li>
            ))}
    </ul>

        </>
    )



}

export default FormularioMesa 