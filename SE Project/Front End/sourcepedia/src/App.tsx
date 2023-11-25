import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
// <<<<<<< HEAD
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
// =======
import About from './Pages/About/About';
import Main from './Pages/Main/Main';
import Write from './Pages/Write/Write';
// >>>>>>> 271f53b8a77cb412d2173077590e697370f28335

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/write' element={<Write />}></Route>
{/* <<<<<<< HEAD */}
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/about' element={<About />}></Route>
{/* =======
          <Route path='/login' element=''></Route>
          <Route path='/register' element=''></Route>
          <Route path='/about' element={<About />}></Route> */}
{/* >>>>>>> 271f53b8a77cb412d2173077590e697370f28335 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;