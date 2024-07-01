import './App.css'
import NavBar from './layouts/NavBar'
import Hero from './layouts/Hero'
import Footer from './layouts/Footer'
import Main from './layouts/Main'

function App() {
  return (
    <div className="App">
      <div className='headerFlexCol'>
        <NavBar />
        <Hero />
      </div>
        <Main />
        <Footer />
    </div>
  )
}

export default App