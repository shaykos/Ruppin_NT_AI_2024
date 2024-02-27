
export default function Notes({ notes }) {

  if(!notes || notes.length == 0)
    return (
      <>
        <h1>Empty Notes</h1>
      </>
    )

  return (
    <>
      <div className="notes">
        <h1>Notes List ({notes.length})</h1>
        <ul>
          {
            notes.map((note, index) => <li key={index}>{note}</li>)

            // notes.map((note, index) => {
            //   return (<li key={index}>{note}</li>)
            // })
          }
        </ul>
      </div>
    </>
  )
}
