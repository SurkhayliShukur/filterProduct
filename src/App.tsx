import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Basket from './pages/Basket'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <div className='text-xxl '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
        <ToastContainer/>
      </div>
    </>
  )
}
export default App
