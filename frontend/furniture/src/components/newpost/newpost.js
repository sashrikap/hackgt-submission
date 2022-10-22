import React, {useState} from "react"
import "./newpost.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Newpost = () => {
    let navigate = useNavigate();

    const [post, setPost] = useState({
        userID: window.location.href.split("/").pop(),
        title: "",
        category: "",
        imageURL: "",
        location: "",
        description: "",
        price: 0
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
        })
    }

    const submit = () => {
        const { userID, title, category, imageURL, location, description, price } = post
        if (post) {
            console.log(post);
            axios.post("http://localhost:9002/newpost/"+userID, post)
            // should only navigate when the message is successful, wait for backend side
            navigate("/"+userID)
        } else {
            alert("invalid input")
        }
    }

    return (
        <div className="newpost">
            <div className="box">
                <h1>New Post</h1>
            </div>
            <div className="formbox">
            <div className="listText">List a new item:</div>
                <div>
                    <input type="text" name = "title" defaultValue = {post.title} onChange={ handleChange} placeholder="Listing Title"></input>
                </div>
                <div>
                    <input type="text" name = "description" defaultValue = {post.description} onChange={ handleChange} placeholder="Description"></input>
                </div>
                <div>
                    <input type="number" name = "price" defaultValue = {post.price} onChange={ handleChange} placeholder="Price"></input>
                </div>
                <div>
                    <select className="newPostSelect" defaultValue={post.location} onChange={handleChange}>
                        <option value="">Select Location</option>
                        <option value="northside">Northside</option>
                        <option value="southside">Southside</option>
                        <option value="eastside">Eastside</option>
                        <option value="downtown">Downtown</option>
                    </select>
                </div>
                <div>
                    <select className="newPostSelect" defaultValue={post.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="furniture">Furniture</option>
                        <option value="knickknacks">Knickknacks</option>
                        <option value="games">Games</option>
                        <option value="vinyl">Vinyl</option>
                    </select>
                </div>
                <div>
                    <input type="text" name = "imageURL" defaultValue = {post.imageURL} onChange={ handleChange} placeholder="Image URL"></input>
                </div>
                <button className="button-6" onClick = {submit}>Post</button>
            </div>
        </div>
    )
}

export default Newpost