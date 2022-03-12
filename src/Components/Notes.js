import {nanoid} from 'nanoid';
import { useState } from 'react';
import '../Styles/Notes.css';

function Notes () {
    const [note,setNote] = useState([
        {
          id: nanoid(),
          text: "First Note",
          date: "01/01/2001",
        },
        {
            id: nanoid(),
            text: "Second Note",
            date: "02/01/2001",
        },
        {
            id: nanoid(),
            text: "Third Note",
            date: "06/01/2001",
        },
    ]);

    return (
        <div className="list"> 
            {note.map((listvalues) => 
            <div className="note-card">
                <div className="note-text">{listvalues.text}</div>
                <div className="note-date">{listvalues.date}</div>
            </div>)}
        </div>
    );
}

export default Notes;