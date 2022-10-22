import React, {useState} from "react"
import "./item.css"

const Item = ({username, email, description, price, image, title, category, location}) => {
    
    return (
        <div className="item">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="info">
                <div className="username">
                    <div className="label">Title:</div>
                    <div style={{marginLeft: 10}}>{title}</div>
                    <div style={{marginLeft: 40}}>Price: </div>
                    <div style={{marginLeft: 10}}>{"$"+price}</div>
                </div>
                <div className="description">
                    <div className="label">Description:</div>
                    <div style={{fontSize: 15}}>
                        {description}
                    </div>
                </div>
                <div className="price">
                    <div className="label">Seller:</div>
                    <div style={{marginLeft: 10}}>{username}</div>
                    <div style={{marginLeft: 40}}>Email:</div>
                    <div style={{marginLeft: 10}}>{email}</div>
                </div>
                <div className="tags">
                    <div className="label">Category:</div>
                    <div style={{marginLeft: 10}}>{category}</div>
                    <div style={{marginLeft: 25}}>Location:</div>
                    <div style={{marginLeft: 10}}>{location}</div>
                </div>
            </div>
        </div>
    )
}

export default Item