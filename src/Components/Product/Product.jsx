import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {img,seller,name,price,stock,ratings} = props.product;
    return (
        <div className="productCard">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="productDetails">
                <h4>{name}</h4>
                <div className="detailsContainer">
                    <div className="detailsLeft">
                        <p>By : {seller}</p>
                        <p> $ {price}</p>
                        <p> Only {stock} stock left - order soon</p>
                        <button onClick={() => props.handleAddProduct(props.product)}>Add to Cart</button>
                    </div>
                    <div className="detailsRight">
                        <p>Rating : {ratings}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;