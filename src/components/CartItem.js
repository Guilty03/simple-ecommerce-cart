import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: 
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        {item.quantity}
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;