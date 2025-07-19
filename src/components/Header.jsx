import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  return (
    <header className="main-header">
      <div className="header-inner-container">
        <div className="header-content-wrapper">
          <div className="logo-container" onClick={handleNavigateHome}>
            <Leaf className="logo-icon" />
            <div className="logo-text-container">
              <h1 className="nursery-title">Paradise Nursery</h1>
              <p className="nursery-slogan">Where Green Dreams Grow</p>
            </div>
          </div>

          <button className="cart-button-base" onClick={handleNavigateToCart}>
            <ShoppingCart className="cart-icon" />
            <span>Cart</span>
            {totalQuantity > 0 && (
              <span className="cart-quantity-badge">{totalQuantity}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}