import { useRef, useState } from "react"

export default function Timer(){
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handelStart(){
        setStart(Date.now());
        setNow(Date.now());

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handelStop(){
        clearInterval(timer.current);
    }

    return(
        <>
            <h1>Timer : {now - start} ms</h1>
            <button onClick={handelStart}>Start</button>
            <button onClick={handelStop}>Stop</button>
        </>
    )
}