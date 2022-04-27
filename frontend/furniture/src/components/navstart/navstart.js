import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./navstart.css"

const NavStart = () => {

    let navigate = useNavigate();

    const routeChangeHome = () =>{
        let path = `/`;
        navigate(path);
    }

    const routeChangeNewPost = () =>{
        let path = `newpost`;
        navigate(path);
    }

    const routeChangeYourProfile = () =>{
        let path = `profile`;
        navigate(path);
    }
    
    return (
        <div className="navstart">
            <div className="title">Find your furniture</div>
            <div className="options">
                <div className="option" onClick={routeChangeHome}>Home</div>
                <div className="option" onClick={routeChangeNewPost}>New Post</div>
                <div className="option" onClick={routeChangeYourProfile}>Your Profile</div>
            </div>
        </div>
    )
}

export default NavStart