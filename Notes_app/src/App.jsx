import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/login'

function App() {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({ title: '', desc: '' })

  const createNoteId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`
  }

  useEffect(() => {
    document.title = "NoteX App"  
    const localNotes = localStorage.getItem('notes')
    if(localNotes){
      const parsed = JSON.parse(localNotes)
      const normalized = Array.isArray(parsed)
        ? parsed.map((note) => (note?.id ? note : { ...note, id: createNoteId() }))
        : []

      setNotes(normalized)

      const needsMigration = Array.isArray(parsed) && parsed.some((note) => !note?.id)
      if (needsMigration) {
        localStorage.setItem('notes', JSON.stringify(normalized))
      }
    }
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = { id: createNoteId(), ...currentNote }
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    setCurrentNote({ title: '', desc: '' })
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((item) => item.id !== id)
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const handleChange = (e) => {
    setCurrentNote({...currentNote, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <main>
                <h1>Welcome to NoteX</h1>
                <div className='hedding'><h2>Create your Note</h2></div>


                <form onSubmit={handleSubmit}>
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
                <div className='hedding'><h2>Your Notes</h2></div>
                <div className='notes-container'>
                  {notes && notes.map(note => {
                    return <Card deleteNote={() => deleteNote(note.id)} key={note.id} title={note.title} desc={note.desc} />
                  })}
                  {notes.length === 0 && <div className="no-notes"><p className='no-notes'>No Notes Found</p></div>}
                </div>
              </section>

              <div className='footer-spacer'></div>

              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
