
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
