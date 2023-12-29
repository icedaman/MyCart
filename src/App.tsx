import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
//import PostsDemo from './utilities/reactQuery/WebDevSimplifiedTutorial/PostsDemo';
import Nav from './components/Nav';
import Search from './components/Search';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Footer from './sections/Footer';

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=':category/:id' element={<Product />} />
          {/* <Route path='search' element={<Search />} /> */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  )
}

export default App;
