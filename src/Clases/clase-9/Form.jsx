import { useState } from "react";


function Form (props) {
    const [food,setFood] = useState("");

    function handleSubmit(e){
        //aca manejamos validaciones
        e.preventDefault()
        props.onPedido(food)
        setFood("")
        
    }


    function handleChange(e){
        //aca parseamos datos 
        setFood(e.target.value)
    }


    return(
        <div>
        <h1>Solicita tu pedido</h1>
        <label htmlFor="food">
            <p>Plato: <input type="text"  value= {food} onChange={handleChange} name="food" id="food"/></p>
        </label>
        <button type="submit" onClick={handleSubmit}>Order</button>
        </div>
    )




}

export default Form;