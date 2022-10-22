import React, {useState} from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        posted: [],
        liked: []
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const changePage = (msg) => {
        if (msg === "Register succeeded") {
            navigate("/")
        } else {
            alert(msg)
        }
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
            .then( res =>  {
                console.log(res);
                changePage(res.data.message);
            })
            // should only navigate when the message is successful, wait for backend side
        } else {
            alert("invalid input") 
        }
    }

    return (
        <div className="register">
            <div style={{fontSize: 55}}>Sign Up</div>
            <div style={{fontSize: 20, marginTop: 20, marginBottom:20}}>To find antiques and knickknacks in this retro marketplace!</div>
            <input type="text" name = "name" value = {user.name} placeholder="Your Name" onChange={ handleChange} ></input>
            <input type="text" name = "email" value = {user.email} placeholder="Your Email" onChange={ handleChange} ></input>
            <input type="password" name = "password" value = {user.password} placeholder="Your Password" onChange={ handleChange } ></input>
            <input type="password" name = "reEnterPassword" value = {user.reEnterPassword} placeholder="Re-enter your Password" onChange={ handleChange } ></input>
            <div className="button" onClick={ register } >Register</div>
        </div>
    )
}

export default Register