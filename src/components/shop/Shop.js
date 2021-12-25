import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Cart from '../Cart/Cart'
import './shop.scss';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products, setProducts] = useState(first10);
  
  const [cart, setCart] = useState([]);

  const handleProduct = (product) => {
    console.log('Prodcut added', product);
    const newCart =[...cart, product];
    setCart(newCart)
  };
  return (
    <div>
     <div className="product-container">
       <div className="shop-container">
         <ul>
           {/* {
             products.map(product => <li>{product.name}</li>)
           } */}
           {
             products.map(pd => <Product handleProduct={handleProduct} product={pd}></Product>)
           }
         </ul>
       </div>
       <div className="cart-container">
         <Cart cart ={cart}></Cart>
       </div>
     </div>
    </div>
  );
};

export default Shop;