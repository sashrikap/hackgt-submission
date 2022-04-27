import React, { useEffect, useState } from 'react';
import "./homepage.css"
import Item from '../item/item';
import axios from 'axios';

const Homepage = () => {
    var url = window.location.href
    const [data, setData] = useState();
    const getPostsData = () => {
        axios.get("http://localhost:9002/")
          .then((data) => {
              setData(data.data);
              console.log(data)})
          .catch((error) => console.log(error))
    };

    const filter = () => {
        axios.get("http://localhost:9002/filter")
          .then((data) => {
              setData(data.data);
              console.log(data)})
          .catch((error) => console.log(error))
    };

    useEffect(() => {
        getPostsData();
    }, []);
    
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
                    <form action="localhost:9002/filter">
                        <input type="text" name = "email" placeholder="Search by Keyword"></input>
                        {/* <div className="filterText">FILTER</div> */}
                        <div className="category">
                            <div className="title">Furniture: </div>
                            <div className="row">
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Bedroom</div>
                                </label>
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Kitchen</div>
                                </label>
                            </div>
                            <div className="row">
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Living room</div>
                                </label>
                                {/* <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Other</div>
                                </label> */}
                            </div>
                        </div>
                        <div className="category">
                            <div className="title">Price: </div>
                            <div className="row">
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Low to high</div>
                                </label>
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">High to low</div>
                                </label>
                            </div>
                        </div>
                        <div className="category">
                            <div className="title">Location: </div>
                            <div className="row">
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Northside</div>
                                </label>
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Southside</div>
                                </label>
                            </div>
                            <div className="row">
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Downtown</div>
                                </label>
                                <label class="container">
                                    <input type="checkbox"></input>
                                    <span class="checkmark"></span>
                                    <div className="name">Eastside</div>
                                </label>
                            </div>
                        </div>
                        <button className="searchbut">search</button>
                    </form>
                </div>
            </div>
            <div className="right-column">
                {
                    data?.posts.map(d =>
                        <Item username={d.username} email={d.email} decription={d.description} price={d.price} image={d.imageURL}></Item>)
                }
            </div>
        </div>
    )
}

export default Homepage