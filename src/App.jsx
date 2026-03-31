import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import NajwaSabrina from './pages/NajwaSabrina';
import DifaOctavia from './pages/DifaOctavia';
import ShabrinaAulia from './pages/ShabrinaAulia';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/NajwaSabrina' element={<NajwaSabrina/>}/>
      <Route path='/DifaOctavia' element={<DifaOctavia/>}/>
      <Route path='/ShabrinaAulia' element={<ShabrinaAulia/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App