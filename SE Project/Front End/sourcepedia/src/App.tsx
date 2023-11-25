import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import About from './About/About';
import Main from './Pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/write' element=''></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/about' element=''></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;