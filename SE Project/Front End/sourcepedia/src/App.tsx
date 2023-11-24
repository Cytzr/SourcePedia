import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element=''></Route>
          <Route path='/write' element=''></Route>
          <Route path='/login' element=''></Route>
          <Route path='/register' element=''></Route>
          <Route path='/about' element=''></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;