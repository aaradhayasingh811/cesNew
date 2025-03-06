
import './App.css'
import Header from './component/Header'
import { Landing } from './component/Landing'
import About from './component/About'
import Faculty from './component/Faculty'
import Event from './component/Event'
import Footer from './component/Footer'
// import DisabledAccordion from './component/DisabledAccordion'
import Faqs from './component/Faqs'
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
    <Footer/>
    </>
  )
}

export default App
