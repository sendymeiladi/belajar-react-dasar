import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
    const [show2, setShow2] = useState(true);

    function handelChange(e){
        setShow2(e.target.checked);
    }

    return(
        <div>
            {show2 ? <Counter key="sendy" name="Sendy" /> : <Counter key="meiladi" name="Meiladi" />}
            <input type="checkbox" checked={show2} onChange={handelChange}/> Tampilkan Counter 2
        </div>
    )
}