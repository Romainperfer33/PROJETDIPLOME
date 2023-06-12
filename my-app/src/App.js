import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stages from './pages/Stages'
import Loging from './pages/Loging'
import CreateStage from './pages/CreateStage';
import UpdateStage from './pages/UpdateStage';
import Inscription from './pages/Inscription';
import './App.css';


function App() {
  return (
<div id='test'>
<BrowserRouter>
    <Routes>
      {/* -------------ROUTE UTILISATEUR--------------- */}
      <Route path='/' element={<Home />} />
      <Route path='/stages' element={<Stages />} />
      <Route path="/loging" element={<Loging />} />
      <Route path="/inscription" element={<Inscription />} />
  
      {/* --------------ROUTE ADMIN-------------------- */}
      <Route path="/admin/create-stage" element={<CreateStage />} />
      <Route path="/admin/update-stage/:id" element={<UpdateStage />} />
    </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
