import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className='text-xxl '>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
export default App
