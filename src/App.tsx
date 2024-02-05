import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Product from './pages/Product'
import Detail from './pages/Detail'

function App() {
  return (
    <>
      <div className='text-xxl '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </>
  )
}
export default App
