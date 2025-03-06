import { useState } from "react";
export default function TaskForm({setItems}){
     const [item, setItem] = useState("");
    
        function handelChange(e){
            setItem(e.target.value);
        }
    
        function handleClick(e){
            e.preventDefault();
            setItems((draft) => {
                draft.push(item);
            });
            setItem("");
        }
    
        return (
            <div>
                <h1>Create Task</h1>
                <form>
                    <input value={item} onChange={handelChange} />
                    <button onClick={handleClick}>Add</button>
                </form>
            </div>
        )
}