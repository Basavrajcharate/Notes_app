import './App.css'
import Navbar from '../components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <h1>Welcome to NoteX</h1>
        <h2>Create your Note</h2>

        <form action="">
          <div>
            <label htmlFor="title">Title </label>
          
          <input type="text" placeholder='Title' name="title" id="title" />
          </div>

          <div>
            <label htmlFor="desc">Discription</label>
            <textarea name="desc" id="desc" placeholder='Discription'></textarea>
          </div>
          <button type='submit'>Create Note</button>
        </form>
      </main>
      <section>
        <h2>Your Notes</h2>
        
      </section>
    </>
  )
}

export default App
