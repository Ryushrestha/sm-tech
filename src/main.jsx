import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Heading/Navbar.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from './context/ProductContextProvider.jsx'
import CartState from './context/CartContext.jsx'
import Footersection from './components/Footer/Footersection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalState>
      <CartState>
        <ChakraProvider>
          <div className='flex flex-col'>
          <Navbar />
          <App />
          <Footersection/>
          </div>
        </ChakraProvider>
      </CartState>
    </GlobalState>
  </React.StrictMode>,
)
