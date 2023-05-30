import { useState } from "react"
import style from "./calc.module.css"




function Calculadora (props) {
    const  [count,setCount] = useState("");
    const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor del input


    function aumentar(){
        setCount(inputValue + count)
    }
    function disminuir(){
        setCount(inputValue - count)
    }
    function reset(){
        setCount(count ===" ")
        setInputValue( inputValue == "")
    }
    function showConsole(){
        console.log("Count: " + count , "input: " + inputValue)
    }
    function handleInputChange(event) {
        // Actualiza el estado del valor del input al cambiar
        setInputValue(Number(event.target.value));
        console.log(inputValue);
    }


    




    return(
        <div style={style}>
            <span>:D</span><input type="text" placeholder="Ingrese su valor"  value={inputValue} onChange={handleInputChange} />  

            <h2>Total: {count}</h2>
            <button onClick={aumentar}>Add +</button>
            <button onClick={disminuir}>Subtract -</button>
            <button onClick={reset}>Reset Ce</button>
            <button onClick={showConsole}>Show Total</button>
            <button onClick={showConsole}>Show by console</button>
        </div>

    )


}

export default Calculadora