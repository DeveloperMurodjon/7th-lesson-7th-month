import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<ProductDetails />} path='/product/:id'></Route>
      </Routes>
    </div>
  )
}

export default App