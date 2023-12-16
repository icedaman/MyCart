import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import TodosDemo from './utilities/reactQuery/CosdenSolutionsTutorial/TodosDemo';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products' element={<TodosDemo />} />
    </Routes>
  )
}

export default App;