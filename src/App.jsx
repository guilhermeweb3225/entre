import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projetos from './Pages/Projetos/Projetos'
import Tecnologias from './Pages/Tecnologias/Tecnologias'
import SobreMim from './Pages/SobreMim/Sobre'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/test/'element={<Projetos/>}></Route>
        <Route path='https://guilhermeweb3225.github.io/Tecnologias'element={<Tecnologias/>}></Route>
        <Route path='https://guilhermeweb3225.github.io/test/Sobre'element={<SobreMim/>}></Route>
      </Routes>
    </Router>
  )
}

export default App