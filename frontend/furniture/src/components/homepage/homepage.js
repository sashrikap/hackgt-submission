import React, { useEffect, useState } from 'react';
import "./homepage.css"
import Item from '../item/item';
import axios from 'axios';
import qs from 'qs';

const Homepage = () => {
    var url = window.location.href
    const [data, setData] = useState();
    const [category, setCategory] = useState([]);
    const [location, setLocation] = useState([]);

    const [furniture, setFurniture] = useState(false);
    const [knickknacks, setKnickknacks] = useState(false);
    const [games, setGames] = useState(false);
    const [vinyl, setVinyl] = useState(false);

    const [southside, setSouthside] = useState(false);
    const [northside, setNorthside] = useState(false);
    const [downtown, setDowntown] = useState(false);
    const [eastside, setEastside] = useState(false);

    const [sortlh, setSortlh] = useState(false);
    const [sorthl, setSorthl] = useState(false);

    const getPostsData = () => {
        axios.get("http://localhost:9002/")
          .then((data) => {
              setData(data.data);
              console.log(data)})
          .catch((error) => console.log(error))
    };

    const handleFurnitureClick = () => {
        setFurniture(!furniture);
        if (furniture) {
            setCategory(category.filter(item => item !== "Furniture"));
        } else {
            setCategory(category.concat("Furniture"));
        }
        console.log(category);
    };

    const handleKnickknacksClick = () => {
        setKnickknacks(!knickknacks);
        if (knickknacks) {
            setCategory(category.filter(item => item !== "Knickknacks"));
        } else {
            setCategory(category.concat("Knickknacks"));
        }
        console.log(category);
    };

    const handleGamesClick = () => {
        setGames(!games);
        if (games) {
            setCategory(category.filter(item => item !== "Games"));
        } else {
            setCategory(category.concat("Games"));
        }
        console.log(category);
    };

    const handleVinylClick = () => {
        setVinyl(!vinyl);
        if (vinyl) {
            setCategory(category.filter(item => item !== "Vinyl"));
        } else {
            setCategory(category.concat("Vinyl"));
        }
        console.log(category);
    };

    const handleNorthsideClick = () => {
        setNorthside(!northside);
        if (northside) {
            setLocation(category.filter(item => item !== "Northside"));
        } else {
            setLocation(location.concat("Northside"));
        }
        console.log(location);
    };

    const handleSouthsideClick = () => {
        setSouthside(!southside);
        if (southside) {
            setLocation(category.filter(item => item !== "Southside"));
        } else {
            setLocation(location.concat("Southside"));
        }
        console.log(location);
    };

    const handleEastsideClick = () => {
        setEastside(!eastside);
        if (eastside) {
            setLocation(category.filter(item => item !== "Eastside"));
        } else {
            setLocation(location.concat("Eastside"));
        }
        console.log(location);
    };

    const handleDowntownClick = () => {
        setDowntown(!downtown);
        if (downtown) {
            setLocation(category.filter(item => item !== "Downtown"));
        } else {
            setLocation(location.concat("Downtown"));
        }
        console.log(location);
    };
    
    const handleSortLHClick = () => {
        setSortlh(!sortlh);
        console.log("sort low to high: " + sortlh);
    }

    const handleSortHLClick = () => {
        setSorthl(!sorthl);
        console.log("sort high to low: " + sorthl);
    }

    const filter = () => {
        if (sortlh) {
            lowToHigh();
        }
        if (sorthl) {
            highToLow();
        }
        console.log("in filter");
        const queryData = {
            category : category,
            location : location
        };

        
        axios.get("http://localhost:9002/filter", {
            params: queryData,
            // paramsSerializer: (params) => {
            //     return qs.stringify(params, { arrayFormat: 'repeat' })
            // },
        }).then((data) => {
            setData(data.data);
            console.log(data)})
        .catch((error) => console.log(error))
    };

    const lowToHigh = () => {
        axios.get("http://localhost:9002/sortlh")
          .then((data) => {
              setData(data.data);
              console.log(data)})
          .catch((error) => console.log(error))
    };

    const highToLow = () => {
        axios.get("http://localhost:9002/sorthl")
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
                    <input type="text" name = "email" placeholder="Search by Keyword"></input>
                    {/* <div className="filterText">FILTER</div> */}
                    <div className="category">
                        <div className="title">Category: </div>
                        <div className="row">
                            <label class="container">
                                <input type="checkbox" onChange={handleFurnitureClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Furniture</div>
                            </label>
                            <label class="container">
                                <input type="checkbox" onChange={handleKnickknacksClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Knickknacks</div>
                            </label>
                        </div>
                        <div className="row">
                            <label class="container">
                                <input type="checkbox" onChange={handleGamesClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Games</div>
                            </label>
                            <label class="container">
                            <input type="checkbox" onChange={handleVinylClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Vinyl</div>
                            </label>
                        </div>
                    </div>
                    <div className="category">
                        <div className="title">Price: </div>
                        <div className="row">
                            <label class="container">
                                <input type="checkbox" onChange={handleSortLHClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Low to high</div>
                            </label>
                            <label class="container">
                                <input type="checkbox" onChange={handleSortHLClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">High to low</div>
                            </label>
                        </div>
                    </div>
                    <div className="category">
                        <div className="title">Location: </div>
                        <div className="row">
                            <label class="container">
                                <input type="checkbox" onChange={handleNorthsideClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Northside</div>
                            </label>
                            <label class="container">
                                <input type="checkbox" onChange={handleSouthsideClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Southside</div>
                            </label>
                        </div>
                        <div className="row">
                            <label class="container">
                                <input type="checkbox" onChange={handleDowntownClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Downtown</div>
                            </label>
                            <label class="container">
                                <input type="checkbox" onChange={handleEastsideClick}></input>
                                <span class="checkmark"></span>
                                <div className="name">Eastside</div>
                            </label>
                        </div>
                    </div>
                    <button className="searchbut" onClick={filter}>search</button>
                </div>
            </div>
            <div className="right-column">
                {
                    data?.posts.map(d =>
                        <Item username={d.username} email={d.email} description={d.description} price={d.price} image={d.imageURL} title={d.title} category={d.category} location={d.location}></Item>)
                }
            </div>
        </div>
    )
}

export default Homepage