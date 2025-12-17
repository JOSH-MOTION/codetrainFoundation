import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PartnerPage from './pages/PartnerPage'




function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar />
    
    
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/partner' element={ <PartnerPage />} />
  
    </Routes>
    
    <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App
