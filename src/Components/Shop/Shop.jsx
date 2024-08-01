import React, { useState } from 'react';
import "./Shop.css"
import fakeData from "../../fakeData/products.json"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart , product];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products">
                {
                    products.map(product => <Product key={product.id} product = {product} handleAddProduct = {handleAddProduct}></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;