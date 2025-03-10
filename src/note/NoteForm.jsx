import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatchContext)

    function handelChange(e) {
        setText(e.target.value);
    }

    function handelClick() {
        setText("");
        dispatch({
            type : 'ADD_NOTE',
            text : text
        })
    }

    return (
        <>
            <input placeholder="Add note" value={text} onChange={handelChange}/>
            <button onClick={handelClick}>Add</button>
        </>
    )
}