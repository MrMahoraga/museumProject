import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './components/explore'
import SignUp from './components/Signup'
import Login from './components/Login'
import contact from './components/contact'
import Home from './components/Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<contact />} />
    </Routes>
    
  </BrowserRouter>
  )
}

export default App