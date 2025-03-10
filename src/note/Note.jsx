import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({note}){
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(NotesDispatchContext);

    let component;

    function handelChangeText(e){
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            text: e.target.value
        })
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
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            done: e.target.checked
        })
    }

    function handleDelete(){
        dispatch({
            ...note,
            type: 'DELETE_NOTE',
            id: note.id
        })
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handelChangeDone}/>
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )
}