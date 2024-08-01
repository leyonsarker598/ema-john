import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    let price = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        price = price + product.price;
    }
    let shippingCost = 0;
    if(price > 1000){
        shippingCost = 0;
    }
    else if(price > 500){
        shippingCost = 30;
    }
    else if(price > 0){
        shippingCost = 50;
    }
    const tax = (price * 0.08).toFixed(2);
    const total = price + Number(tax) + shippingCost;
    return (
        <div>
            <h3 style={{textAlign:'center'}}>Order Summary</h3>
            <p>Items Ordered : {cart.length}</p>
            <p>Price : {price}</p>
            <p>Estimated Tax : {tax}</p>
            <p>Shipping Cost : {shippingCost}</p>
            <h4>Order Total : {total}</h4>
            <button>Review your order</button>
        </div>
    );
};

export default Cart;