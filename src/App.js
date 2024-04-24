import './App.css';
import Color from './components/Color.jsx';
import Configurator from './components/Configurator.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path="/configurator" element={<Configurator/>}></Route>
      <Route exact path="/configurator/1" element={<Color/>}></Route>
      <Route exact path="/configurator/2" element={<Color/>}></Route>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
