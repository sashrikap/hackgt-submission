import React from "react"
import "./newpost.css"

const Newpost = () => {
    return (
        <div className="newpost">
            <div className="box">
                <h1>New Post</h1>
            </div>
            <div className="formbox">
            <div className="listText">List a new item:</div>
                <div>
                    <input type="text" name = "listingTitle" placeholder="Listing Title"></input>
                </div>
                <div>
                    <input type="text" name = "listingDesc" placeholder="Description"></input>
                </div>
                <div>
                    <input type="text" name = "price" placeholder="Price"></input>
                </div>
                <div>
                    <input type="text" name = "location" placeholder="Location"></input>
                </div>
                <div>
                    <input type="text" name = "category" placeholder="Type of Furniture"></input>
                </div>
                <div>
                    <input type="text" name = "image" placeholder="Image URL"></input>
                </div>
                <button className="button-6">Post</button>
            </div>
        </div>
    )
}

export default Newpost