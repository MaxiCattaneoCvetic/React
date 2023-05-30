import { useState } from "react";

function IncrementOne() {

    const  [count,setCount] = useState(0)
    
    function one(){
        setCount(count + 1 )
    }
    function reset(){
        setCount(count == 0)
    }

    return(
        <div>
        <p>----------Increment one-------------</p>
        <button onClick={one}>Increment one</button>
        <button onClick={reset}>reset</button>
        <p>{count}</p>
        </div>
    )

    

}

export default IncrementOne
