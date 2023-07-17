import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Testimonial } from './components/Testimonial'
import ScrollProgressBar from './components/ScrollProgressBar'
import { useOutlet } from 'react-router-dom'

function App () {
  const outlet = useOutlet()
  return (
    <>
      {outlet || (
        <div className='App'>
          <NavBar />
          <ScrollProgressBar />
          <Banner />
          <Services />
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
