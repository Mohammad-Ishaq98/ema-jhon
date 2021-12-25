import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce( (total,prd) => total + prd.price ,0);
  
  const formatNum = (num) =>{
    const precision = num.toFixed(2);
    return precision;
  }

  const vat = total / 10;

  let shippingCost = 0;
  if(total > 235){
    shippingCost = 0
  }
  else if(total > 115){
    shippingCost = 4.99
  }
  else if(total > 0){
    shippingCost = 12.50
  }

  const grandTotal = total + vat + shippingCost;
  return (
    <div>
      <div className="product-">
        <h3>Items {cart.length}</h3>
        <h6>Total Price :{total}</h6>
        <p><small>VAT {formatNum(vat)} </small></p>
        <p><small>shippingCost {formatNum(shippingCost)} </small></p>
        <h4>Grand Total {formatNum(grandTotal)}</h4>
      </div>
    </div>
  );
};
export default Cart;