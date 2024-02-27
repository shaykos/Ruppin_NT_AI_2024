import { useState } from "react"

export default function NotesForm({ addNote }) {

  const [note, setNote] = useState("");

  function submitForm(event) {
    event.preventDefault();
    addNote(note);
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>write your note</legend>
          <textarea value={note} onChange={(event) => setNote(event.target.value)} />
          <br />
          <button type="submit">Add</button>
        </fieldset>
      </form>
    </>
  )

}