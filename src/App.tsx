import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
//import PostsDemo from './utilities/reactQuery/WebDevSimplifiedTutorial/PostsDemo';
import Nav from './components/Nav';
import Products from './pages/Products';

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App;