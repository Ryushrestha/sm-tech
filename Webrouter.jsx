import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './src/Home'
import Product from './src/Product'
import Jewellery from './src/Jewellery'
import Cart from './src/Cart'
import Login from './src/Login'
import Electronics from './src/Electronics'

const Webrouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/electronics' element={<Electronics/>}/>
            <Route path='/jewelery' element={<Jewellery/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<Login/>}/>

        </Routes>
    </Router>
  )
}

export default Webrouter