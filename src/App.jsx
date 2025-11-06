import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import Footer from './components/Footer'
import Home from './Pages/Home'


function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar />
    <HeroSection />
    <Routes>
    <Route path='/' element={ <Home />} />
    
      


    </Routes>
    
    <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App
