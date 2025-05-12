import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="timeline-container">
      <div className="navbar">
        <ul className="navbar-list">
          <li>Switch</li>
          <li>About</li>
          <li>Selection</li>
          <li>Timeline</li>
          <li>
            <i className="fa-solid fa-envelope"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;