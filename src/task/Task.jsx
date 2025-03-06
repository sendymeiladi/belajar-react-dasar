import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
    const [items, setItems] = useImmer([]);

    function handleClick(e){
        e.preventDefault();
        setItems(draft => {
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
            <h1>List Task</h1>
            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}