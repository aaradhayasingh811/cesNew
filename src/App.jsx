
import './App.css'
import Header from './component/Header'
import { Landing } from './component/Landing'
import About from './component/About'
import Faculty from './component/Faculty'
import Event from './component/Event'
import Footer from './component/Footer'
import Faqs from './component/Faqs'
import Contact from './component/Contact'

function App() {

  return (
    <>
    <Header/>
    <Landing/>
    <About/>
    <Faculty/>
    <Event/>
    {/* faqs */}
    <Faqs/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
