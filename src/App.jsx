import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import PartnerPage from './pages/PartnerPage'
import Footer from './components/Footer'
import Home from './pages/Home'
import MissionImpactSection from './pages/MissionSection'



function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar />
    
    
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/partner' element={ <PartnerPage />} />
    <Route path='/MissionImpact' element={ <MissionImpactSection />} />
    </Routes>
    
    <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App
