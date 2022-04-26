import React from "react"
import "./newpost.css"

const Newpost = () => {
    return (
        <div className="newpost">
            <div className="topborderbox">Navbar goes here</div>
            <div className="box">
                <h1>New Post</h1>
            </div>
            <div className="box">List a new item</div>
            <div className="box">Photo of listing</div>
            <div className="box">
                <div>
                    <input type="text" name = "listingTitle" placeholder="Listing Title"></input>
                </div>
                <div>
                    <input type="text" name = "listingDesc" placeholder="Listing Description"></input>
                </div>
                <div>
                    <input type="text" name = "price" placeholder="Price"></input>
                </div>
                <div>
                    <input type="text" name = "tags" placeholder="Tags"></input>
                </div>
                <div>
                    <input type="text" name = "delivery" placeholder="Preferred Delivery"></input>
                </div>
                <button>Post</button>
            </div>
        </div>
    )
}

export default Newpost