import './App.css';
import React from "react"
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavStart from './components/navstart/navstart';

function App() {
  return (
    <Router>
      <div className="App">
        <NavStart></NavStart>
        <div className='circle'>
          <Routes>
            <Route exact path='/' element={< Homepage />} ></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/register' element={< Register />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
