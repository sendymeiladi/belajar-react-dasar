import {useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const intialNotes = [
    {id: id++, text: "Learn HTML", done: false },
    {id: id++, text: "Learn CSS", done: true },
    {id: id++, text: "Learn JavaScript", done: false },
    {id: id++, text: "Learn ReactJS", done: false }
]

function notesReducer(notes, action) {
    if(action.type === 'ADD_NOTE'){
        notes.push({
            id : id++,
            text : action.text,
            done : false
        })
    } else if(action.type === 'CHANGE_NOTE'){
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
    } else if(action.type === 'DELETE_NOTE') {
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer,intialNotes)

    function handelAddNote(text) {
        dispatch({
            type : 'ADD_NOTE',
            text : text
        })
    }

    function handelChangeNote(note){
        dispatch({
            ...note,
            type : 'CHANGE_NOTE'
        })
    }

    function handelDeleteNote(note){
        dispatch({
            type : 'DELETE_NOTE',
            id : note.id
        })
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handelAddNote}/>
            <NoteList notes={notes} onChange={handelChangeNote} onDelete={handelDeleteNote} />
        </div>
    )
}