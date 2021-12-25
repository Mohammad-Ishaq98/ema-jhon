import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.scss'
const Product = (props) => {
  console.log(props);
  const {img, name,seller,stock,price} = props.product;

  return (
    <div className='product'>
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="">
        <h3>{name}</h3>
        <p><small>By:{seller}</small></p> <br />
        <p><small>Only {stock} are avialable now</small></p>
        <p><small>Price {price} </small></p>
        <button onClick={() => props.handleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
      </div>
    </div>
  );
};

export default Product;