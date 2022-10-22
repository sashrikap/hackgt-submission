import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./navstart.css"

const NavStart = () => {

    let navigate = useNavigate();
    var userID = window.location.href.split("/").pop();
    console.log(window.location.href.split("/").pop());

    const routeChangeHome = () =>{
        let path = `/` + userID;
        navigate(path);
    }

    const routeChangeNewPost = () =>{
        let path = `newpost/` + userID;
        navigate(path);
    }

    const routeChangeYourProfile = () =>{
        let path = `profile/` + userID;
        navigate(path);
    }
    
    return (
        <div className="navstart">
            <div className="title">RetroList</div>
            <div className="options">
                <div className="option" onClick={routeChangeHome}>Home</div>
                <div className="option" onClick={routeChangeNewPost}>New Post</div>
                <div className="option" onClick={routeChangeYourProfile}>Your Profile</div>
            </div>
        </div>
    )
}

export default NavStart