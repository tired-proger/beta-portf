import './App.scss'
import Contacts from './components/Contacts/Contacts'
import Copyright from './components/Copyright/Copyright'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'
import Modal from './components/Modal/Modal'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Statistic from './components/Statistic/Statistic';
import Works from './components/Works/Works'

function App() {

  return (
    <div className="wrapper">
      <Header />
      
      <div className="inner-wrapper">
        <Hero />
        <Statistic />
        <Skills />
        <Services />
        <Works />
        <Contacts />
        <Info />
        <Copyright />
        <Modal />
      </div>

    </div>
  )
}

export default App