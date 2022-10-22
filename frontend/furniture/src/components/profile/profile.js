import React, { useEffect, useState } from 'react';
import "./profile.css"
import Item from '../item/item';
import axios from 'axios';

const Profile = () => {
    const userID = window.location.href.split("/").pop();
    const [data, setData] = useState({user:{}, posts:[]});
    const getPostsData = async () => {
        axios.get("http://localhost:9002/user/"+userID)
          .then((data) => {
              setData(data.data);
              console.log(data)})
          .catch((error) => console.log(error))
    };
    getPostsData();
    useEffect(() => {
        console.log("start set data")
        getPostsData();
        console.log(data)
    }, []);
    // async function axiosTest() {
    //     try {
    //       const {data:response} = await axios.get("http://localhost:9002/user/"+userID) //use data destructuring to get data from the promise object
    //       return response
    //     }
  
    //     catch (error) {
    //       console.log(error);
    //     }

    // }
    // const axiosTestResult = axiosTest(); 
    // console.log(axiosTestResult)
    // const getPostsData = async () => {
    //     const user = await axios.get("http://localhost:9002/user/"+userID);
    //     console.log(user.data);
    //     setData(user.data);
    // };
    
    // getPostsData();

    // useEffect(() => {
       
    //     getPostsData();
    // }, []);

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
                    <div className="usernameText">{"Username: " + data.user.name}</div>
                    <div className="usernameText">{"Email: " + data.user.email}</div>
                    {/* <div className="usernameText">Phone #: 123-456-7890</div> */}
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

export default Profile;