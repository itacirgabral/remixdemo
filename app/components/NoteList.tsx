export type NotesType = Array<{ title: string }>

export default function NoteList({ notes }: { notes: NotesType }) {
  return <ul>
    {
      notes.map((el, idx) => <li key={idx}>{el.title}</li>)
    }
  </ul>
}