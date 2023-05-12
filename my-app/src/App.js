import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stages from './pages/Stages'
import Loging from './pages/Loging'
import './App.css'

function App() {
  return (
<div id='test'>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stages' element={<Stages />} />

      <Route path="/loging" element={<Loging />} />
 
    </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
