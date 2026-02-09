import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({ title: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setNotes([...notes, currentNote])
    setCurrentNote({ title: '', desc: '' })
  }
  const handleChange = (e) => {
    setCurrentNote({...currentNote, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to NoteX</h1>
        <h2>Create your Note</h2>

        <form  onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title </label>

            <input value={currentNote.title} onChange={handleChange} type="text" placeholder='Title' name="title" id="title" />
          </div>

          <div>
            <label htmlFor="desc">Discription</label>
            <textarea value={currentNote.desc} onChange={handleChange} name="desc" id="desc" placeholder='Discription'></textarea>
          </div>
          <button type='submit'>Create Note</button>
        </form>
      </main>
      <section>
        <h2>Your Notes</h2>
        {notes && notes.map(note => {
          return <Card key={note.title} title={note.title} desc={note.desc}/>
        })}

      </section>
    </>
  )
}

export default App
