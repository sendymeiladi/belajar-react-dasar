import {useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

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

    return (
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm/>
                    <NoteList/>
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    )
}