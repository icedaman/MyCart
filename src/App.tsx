import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import PostsDemo from './utilities/reactQuery/WebDevSimplifiedTutorial/PostsDemo';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products' element={<PostsDemo />} />
    </Routes>
  )
}

export default App;