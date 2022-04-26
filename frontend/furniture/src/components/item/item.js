import React, {useState} from "react"
import "./item.css"

const Item = () => {
    
    return (
        <div className="item">
            <div className="image">
                <img 
                src="https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                ></img>
            </div>
            <div className="info">
                <div className="username">
                    <div>Seller:</div>
                    <div style={{marginLeft: 20}}>Jack</div>
                </div>
                <div className="description">
                    <div>Description:</div>
                    <div style={{fontSize: 17}}>
                        The description of the item is bala bala bala bala 
                        bala bala bala bala bala bala bala bala bala bala......
                    </div>
                </div>
                <div className="price">
                    <div>Price:</div>
                    <div style={{marginLeft: 20}}>$7</div>
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