import { useState } from "react";

function IncrementFive() {

    const  [countFive,setCount] = useState(0)
    
    function one(){
        setCount(countFive + 5 )
    }
    function reset(){
        setCount(countFive == 0)
    }

    return(
        <div>
        <p>----------Increment Five-------------</p>
        <button onClick={one}>Increment Five</button>
        <button onClick={reset}>reset</button>
        <p>{countFive}</p>
        </div>
    )


}

export default IncrementFive;
