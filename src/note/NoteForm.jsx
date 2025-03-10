import { useState } from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState("");

    function handelChange(e) {
        setText(e.target.value);
    }

    function handelClick() {
        setText("");
        onAddNote(text);
    }

    return (
        <>
            <input placeholder="Add note" value={text} onChange={handelChange}/>
            <button onClick={handelClick}>Add</button>
        </>
    )
}