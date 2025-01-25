import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity} 
          />
        ))
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;