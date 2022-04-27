import React from "react"
import "./profile.css"
import Item from '../item/item';

const Profile = () => {
    return (
        <div className="homepage">
            <div className="left-column">
                <div className="head-decoration">
                    <div id="l1"></div>
                    <div id="l2"></div>
                    <div id="l3"></div>
                    <div id="l4"></div>
                    <div id="l5"></div>
                </div>
                <div id="homeText">Your Profile</div>
                <div className="biobox">
                    <div/>
                    <img className="profilepic" src={require("./download-5 1.png")} alt="empty profile pic"/>
                    <div className="usernameText">dubnation23</div>
                    <div className="emailText">gobears123@berkeley.edu</div>
                    <div className="phoneText">123-456-7890</div>
                </div>
            </div>
            <div className="right-column">
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
        </div>

    )
}

export default Profile;