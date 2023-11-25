import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import About from './About/About';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/write' element=''></Route>
          <Route path='/login' element=''></Route>
          <Route path='/register' element=''></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;