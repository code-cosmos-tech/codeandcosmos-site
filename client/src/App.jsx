import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { Work } from './pages/Work';
import { Careers } from './pages/Careers';
import { Agency } from './pages/Agency';
import { BrowserRouter, Routes, Route } from 'react-router'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { useContact } from './components/ContactProvider';
import './App.css'

function App() {
  const { tab } = useContact();

  return (
    <>
      <div className={tab ? "backdrop" : ""}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/service' element={<Service />} />
            <Route path='/agency' element={<Agency />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='*' element={<Error />} ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <Contact />
    </>
  )
}

export default App
