import { useState } from 'react'
import Notes from '../components/Notes';
import NotesForm from '../components/NotesForm';
import Navbar from '../components/Navbar';

export default function Home() {
  const [notes, setNotes] = useState(["note1", "note2", "note3"]);

  function addNote(note) {
    if (note == "")
      return;
    setNotes([...notes, note]);
    //... -> spread operator --> פורס את כל הנתונים במערך כאיברים בודדים
  }

  return (
    <>
      <Navbar />
      <Notes notes={notes} />
      <NotesForm addNote={addNote} />
    </>
  )
}
