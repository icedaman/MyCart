import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
//import PostsDemo from './utilities/reactQuery/WebDevSimplifiedTutorial/PostsDemo';
import Nav from './components/Nav';
import Search from './components/Search';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=':id' element={<Product id={3} />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;