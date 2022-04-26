import './App.css';
import React from "react"
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Newpost from "./components/newpost/newpost";

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route exact path='/' element={<Homepage />} ><Homepage></Homepage></Route>
    //       <Route path='/login'><Login></Login></Route>
    //       <Route path='/register'><Register></Register></Route>
    //     </Routes>
    //   </Router>
    // </div>

    <div className="App">
     {/*<Register></Register>*/}
        <Newpost></Newpost>
    </div>
  );
}

export default App;
