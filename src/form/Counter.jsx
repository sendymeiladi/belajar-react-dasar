import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);

    console.log("Reander Counter");
    function handleClick(){
        setCounter(counter  + 1);
        console.log(counter);
    }

    return(
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>
            <h1>Counter : {counter}</h1>
        </div>
    )
}