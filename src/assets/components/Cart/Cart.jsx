import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = totalPrice * 0.7;
  const grandTotal = totalPrice + totalShipping + tax;

  //---- second way of sum value inside array of objects----
  /*
  var msgTotal = cart.reduce(function(prev, cur) {
  return prev + cur.price;
}, 0);
*/
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Item:{cart.length}</p>
      <p>Total Price:{totalPrice}</p>
      <p>Total Shipping Charge:${totalShipping}</p>
      <p>Tax:{tax.toFixed(2)}</p>
      <h6>Grand Total:${grandTotal.toFixed(2)} </h6>
    </div>
  );
};

export default Cart;
