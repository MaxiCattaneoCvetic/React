import { useState } from "react";

function IncrementThirteen() {

    const  [countThirteen,setCount] = useState(0)
    
    function increment(){
        setCount(countThirteen + 13 )
    }
    function reset(){
        setCount(countThirteen == 0)
    }

    return(
        <div>
        <p>----------Increment one-------------</p>
        <button onClick={increment}>Increment thirteen</button>
        <button onClick={reset}>reset</button>
        <p>{countThirteen}</p>
        </div>
    )


}

export default IncrementThirteen;

