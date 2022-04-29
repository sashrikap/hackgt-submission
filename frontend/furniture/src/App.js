import './App.css';
import React from "react"
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavStart from './components/navstart/navstart';
import Newpost from "./components/newpost/newpost";
import Profile from "./components/profile/profile";

function App() {
  console.log(window.location.href.split("/").pop())
  return (
    <Router>
      <div className="App">
        <NavStart userid={window.location.href.split("/").pop()}></NavStart>
        <div className='circle'>
          <Routes>
            <Route path='/:userID' element={< Homepage />} ></Route>
            <Route exact path='/' element={< Login />}></Route>
            <Route exact path='/register' element={< Register />}></Route>
            <Route path='/newpost/:userID' element={< Newpost />}></Route>
            <Route path='/profile/:userID' element={< Profile />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
