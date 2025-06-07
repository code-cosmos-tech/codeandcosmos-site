import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';
import { Craftmen } from './pages/Craftmen';
import {BrowserRouter, Routes, Route} from 'react-router'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/craftmen' element={<Craftmen/>} />
          <Route path='*' element={<Error/>} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
