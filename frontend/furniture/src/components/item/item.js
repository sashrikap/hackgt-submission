import React, {useState} from "react"
import "./item.css"

const Item = ({username, email, decription, price, image, title, category, location}) => {
    
    return (
        <div className="item">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="info">
                <div className="username">
                    <div>Seller:</div>
                    <div style={{marginLeft: 20}}>{username}</div>
                    <div style={{marginLeft: 40}}>Title: </div>
                    <div style={{marginLeft: 20}}>{title}</div>
                </div>
                <div className="description">
                    <div>Description:</div>
                    <div style={{fontSize: 15}}>
                        {decription}
                    </div>
                </div>
                <div className="price">
                    <div>Price:</div>
                    <div style={{marginLeft: 20}}>{"$"+price}</div>
                    <div style={{marginLeft: 40}}>Email:</div>
                    <div style={{marginLeft: 20}}>{email}</div>
                </div>
                <div className="tags">
                    <div>Category:</div>
                    <div style={{marginLeft: 10}}>{category}</div>
                    <div style={{marginLeft: 25}}>Location:</div>
                    <div style={{marginLeft: 10}}>{location}</div>
                </div>
            </div>
        </div>
    )
}

export default Item