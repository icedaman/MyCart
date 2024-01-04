import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Footer from './sections/Footer';
import Cart from './pages/Cart';
import { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState([])
  
  return (
    <>
      <Nav cart={cart} setCart={setCart}/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=':category/:id' element={<Product setCart={setCart} cart={cart} />} />
        </Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  )
}

export default App;
