import React, {useState} from "react"
import "./item.css"

const Item = ({username, email, decription, price, image, title, category}) => {
    
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
                    <div style={{fontSize: 17}}>
                        {decription}
                    </div>
                </div>
                <div className="price">
                    <div>Price:</div>
                    <div style={{marginLeft: 20}}>{"$"+price}</div>
                </div>
                <div className="tags">
                    <div>Tags:</div>
                    <div className="each-tag">
                        <div>Tag1</div>
                        <div>Tag2</div>
                        <div>Tag3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item