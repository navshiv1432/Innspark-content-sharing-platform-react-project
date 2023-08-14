import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Register from "./components/register"
// import Header from './components/Header';


const App=()=>(
  <BrowserRouter>
  
  
  <Routes>
  
  
 
  
  <Route exact path="" element={<Register />} />
  <Route exact path="/Home" element={<Home />} />

  </Routes>
  </BrowserRouter>
)

export default App