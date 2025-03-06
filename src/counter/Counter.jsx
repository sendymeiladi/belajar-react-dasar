import { useState } from "react"

export default function Counter({name}){
    const [counter, setContact] = useState(0);

    function handleClick(){
        setContact(counter + 1);
    }
    return(
        <div>
            <h1>
                Counter {name} : {counter}
            </h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}