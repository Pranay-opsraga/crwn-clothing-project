import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './contexts/user.contexts'
import { ProductProvider } from './contexts/product-context.jsx'
import CartProvider from './contexts/cart-context.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>

)
