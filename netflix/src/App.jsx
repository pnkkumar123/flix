import { Route, Routes } from "react-router-dom"
import Netflix from "./Netflix"
import Navbar from "./components/Navbar"
import './App.css'


function App() {
  
  return (
    <>
    <Navbar/>
    
     <Routes>
      <Route path="/" element={<Netflix/>} />

     </Routes>
    </>
  )
}

export default App
