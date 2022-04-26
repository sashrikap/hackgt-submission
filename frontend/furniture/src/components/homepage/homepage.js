import React from "react"
import "./homepage.css"
import Item from '../item/item';

const Homepage = () => {
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
                <div id="homeText">Home</div>
                <div className="search-bar">
                    <input type="text" name = "email" placeholder="Search by Keyword"></input>
                    <div className="filterText">Filter by:</div>
                    <label class="container">
                        <input type="checkbox"></input>
                        <span class="checkmark"></span>
                        type of furniture
                    </label>
                    <label class="container">
                        <input type="checkbox"></input>
                        <span class="checkmark"></span>
                        price (low-high)
                    </label>
                    <label class="container">
                        <input type="checkbox"></input>
                        <span class="checkmark"></span>
                        price (high-low)
                    </label>
                    <label class="container">
                        <input type="checkbox"></input>
                        <span class="checkmark"></span>
                        location
                    </label>
                </div>
                <div className="newPost">
                    <div>
                        Create New Post
                    </div>
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

export default Homepage