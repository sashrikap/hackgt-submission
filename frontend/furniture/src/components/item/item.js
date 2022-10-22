import React, {useState} from "react"
import "./item.css"

const Item = ({username, email, description, price, image, title, category, location}) => {
    const mailToAddress = "mailto:" + email;
    
    return (
        <div className="item">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="info">
                <div className="itemInfo">
                    <div className="label">Title:</div>
                    <div style={{marginLeft: 10}}>{title}</div>
                    <div style={{marginLeft: 40}} className="label">Price: </div>
                    <div style={{marginLeft: 10}}>{"$"+price}</div>
                </div>
                <div className="description">
                    <div className="label">Description:</div>
                    <div style={{fontSize: 15}}>
                        {description}
                    </div>
                </div>
                <div className="sellerInfo">
                    <div className="label">Seller:</div>
                    <div style={{marginLeft: 10}}>{username}</div>
                </div>
                <div className="sellerInfo">
                    <div className="label">Email:</div>
                    <div style={{ marginLeft: 10 }}><a className="mailto" href={mailToAddress}>{email}</a></div>
                </div>
                <div className="tags">
                    <div className="label">Category:</div>
                    <div style={{marginLeft: 10}}>{category}</div>
                    <div style={{marginLeft: 25}} className="label">Location:</div>
                    <div style={{marginLeft: 10}}>{location}</div>
                </div>
            </div>
        </div>
    )
}

export default Item