import { useState } from "react";

export default function Note({note, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false);

    let component;

    function handelChangeText(e){
        const newNote = {...note, text : e.target.value}
        onChange(newNote);
    }

    if(isEditing){
        component = (
            <>
                <input value={note.text} onChange={handelChangeText} />
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>edit</button>
            </>
        )
    }

    function handelChangeDone(e){
        const newNote = {...note, done : e.target.checked}
        onChange(newNote);
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handelChangeDone}/>
            {component}
            <button onClick={()=> onDelete(note)}>Delete</button>
        </label>
    )
}