import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Login = () => {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",
        status: false
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const changePage = (msg, id) => {
        if (msg === "Log in succeeded") {
            navigate("/" + id)
        }
    }

    const login = () => {
        const { email, password } = user
        if (email && password) {
            axios.post("http://localhost:9002/login", user)
            .then( res => {
                console.log(res);
                changePage(res.data.message, res.data.user._id);
            })
            // should only navigate when the message is successful, wait for backend side
        } else {
            alert("Invalid input.") 
        }
    }
    
    return (
        <div className="login">
            <div id="signInText">Sign In</div>
            <div id="middleBorder"></div>
            <input type="text" name = "email" value = {user.email} placeholder="Enter your email" onChange={ handleChange}></input>
            <input type="password" name = "password" value = {user.password} placeholder="Enter your password" onChange={ handleChange}></input>
            <div className="button" onClick={ login } >Login</div>
            <div className="bottom-text">
                <div>Don't have an account? Click</div> 
                <div className="here-text" onClick={() => navigate("/register")}> here </div>
                <div>to register!</div>
            </div>
        </div>
    )
}

export default Login